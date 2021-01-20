import React from "react";
import { IPageProps } from "../../../ContainerBase";
import { BodyLeft, CarouselItem, PhoneList } from "../../ItemData";
import "./BodyStyle.scss";

interface IState {
    startTime: Date;
    endTime: number;
    hour: number;
    min: number;
    second: number;
    countDownInterval: any;
    carouselInterval: any;
    miaoShaIndex: number;
    arrIndex: Array<number>;
}

export class BodyRaw extends React.Component<IPageProps, IState> {
    constructor(props: IPageProps) {
        super(props);
        this.state = {
            startTime: new Date(0, 0, 0, 16, 0, 0),
            endTime: 8,
            hour: 0,
            min: 0,
            second: 0,
            countDownInterval: "",
            carouselInterval: "",
            miaoShaIndex: 0,
            arrIndex: Array.from({ length: BodyLeft.length }, () => 0),
        };
    }

    change = (miaoShaIndex: number) => {
        this.setState({ miaoShaIndex });
    };

    componentDidMount() {
        const countDownInterval = setInterval(() => {
            const date = new Date();
            const startTime = this.state.startTime.getHours() * 60 * 60 + this.state.startTime.getMinutes() * 60;
            const now = date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
            if (now + 24 * 60 * 60 >= this.state.endTime * 60 * 60 + startTime && now <= startTime) {
                this.setState({
                    hour: 0,
                    min: 0,
                    second: 0,
                });
                return;
            }
            const countDownTime = Math.abs(this.state.endTime * 60 * 60 - (now < 12 * 60 * 60 ? now + 24 * 60 * 60 - startTime : Math.abs(startTime - now)));
            this.setState({
                hour: Math.ceil(countDownTime / (60 * 60)),
                min: Math.ceil((countDownTime % (60 * 60)) / 60),
                second: Math.ceil((countDownTime % (60 * 60)) % 60),
            });
        }, 1005);

        const carouselInterval = setInterval(() => {
            this.change(this.state.miaoShaIndex + 4 >= CarouselItem.length ? 0 : this.state.miaoShaIndex + 4);
        }, 7000);

        this.setState({ countDownInterval, carouselInterval });
    }

    componentWillUnmount() {
        clearInterval(this.state.carouselInterval);
        clearInterval(this.state.countDownInterval);
    }

    render() {
        return (
            <div className="body">
                <div className="container">
                    <div className="miaosha">
                        <div className="miaosha-title">
                            <h2>小米秒杀</h2>
                            <div
                                onMouseOver={() => clearInterval(this.state.carouselInterval)}
                                onMouseOut={() => {
                                    const carouselInterval = setInterval(() => {
                                        this.change(this.state.miaoShaIndex + 4 >= CarouselItem.length ? 0 : this.state.miaoShaIndex + 4);
                                    }, 7000);
                                    this.setState({ carouselInterval });
                                }}
                            >
                                <span
                                    className={"icon-next " + (this.state.miaoShaIndex === 0 ? "disable-btn" : "")}
                                    onClick={() => this.change(this.state.miaoShaIndex - 4 < 0 ? this.state.miaoShaIndex : this.state.miaoShaIndex - 4)}
                                ></span>
                                <span
                                    className={"icon-next " + (this.state.miaoShaIndex + 4 >= CarouselItem.length ? "disable-btn" : "")}
                                    onClick={() => this.change(this.state.miaoShaIndex + 4 >= CarouselItem.length ? this.state.miaoShaIndex : this.state.miaoShaIndex + 4)}
                                ></span>
                            </div>
                        </div>
                        <div className="carousel">
                            <div className="count">
                                <h3>
                                    {this.state.startTime.getHours()}
                                    <span>:</span>
                                    {this.state.startTime.getMinutes() < 10 ? "0" + this.state.startTime.getMinutes() : this.state.startTime.getMinutes()}
                                    <span>&nbsp;场</span>
                                </h3>
                                <img src="/assets/data_img.png" alt="小米闪购" />
                                <p>距离结束还有</p>
                                <div className="countdown">
                                    <span>{this.state.hour < 10 ? "0" + this.state.hour : this.state.hour}</span>:
                                    <span>{this.state.min < 10 ? "0" + this.state.min : this.state.min}</span>:
                                    <span>{this.state.second < 10 ? "0" + this.state.second : this.state.second}</span>
                                </div>
                            </div>
                            <div className="flex-start carousel-item" style={{ transform: `translate3d(-${this.state.miaoShaIndex * 15.64 * 16}px,0,0)` }}>
                                {CarouselItem.map((x, k) => (
                                    <div className="item" key={k}>
                                        <img src={x.imgSrc} alt={x.title} width="160" height="160" />
                                        <h3>{x.title}</h3>
                                        {x.note !== undefined ? <p>{x.note}</p> : null}
                                        {x.price !== undefined ? (
                                            <div>
                                                <span className="orange-color">{x.price}&nbsp;</span>
                                                <del>{x.priceSale}</del>
                                            </div>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="banner"></div>
                    </div>
                    <div className="phone">
                        <div className="flex-space-between phone-title">
                            <h2>手机</h2>
                            <div className="flex-center">
                                查看全部<span></span>
                            </div>
                        </div>
                        <div className="flex-start phone-item">
                            <div className="translate big-img"></div>
                            <div className="grid">
                                {PhoneList.map((x, k) => (
                                    <div key={k} className="flex-center translate item">
                                        <img src={x.imgSrc} alt={x.title} width="160" height="160" />
                                        <h3>{x.title}</h3>
                                        <p>{x.note}</p>
                                        <span className="orange-color">{x.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <img style={{ margin: "22px auto" }} src="/assets/phone/banner-2.webp" width="100%" />
                    </div>
                    {BodyLeft.map((x, k) => (
                        <div key={k} className="main">
                            <div className="flex-space-between title">
                                <h2>{x.title}</h2>
                                <div>
                                    {x.items.map((item, i) => (
                                        <span
                                            key={i}
                                            className={this.state.arrIndex[k] === i ? "active-tab" : ""}
                                            onMouseOver={() => this.setState({ arrIndex: [...this.state.arrIndex.slice(0, k), i, ...this.state.arrIndex.slice(k + 1)] })}
                                        >
                                            {item.title}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="grid">
                                {x.items[this.state.arrIndex[k]].items.map((item, j) => (
                                    <div key={j} className="flex-center translate item">
                                        {j !== 0 && j !== 5 ? (
                                            <>
                                                <img src={item.imgSrc} alt={item.title} width="160" height="160" />
                                                <h3 className="overflow-ellipsis">{item.title}</h3>
                                                <p className="overflow-ellipsis">{item.note}</p>
                                                <div>
                                                    <span className="orange-color">{item.price}元&nbsp;</span>
                                                    <del>{item.priceSale !== undefined ? item.priceSale + "元" : null}</del>
                                                </div>
                                            </>
                                        ) : (
                                            <img src={item.imgSrc} width="100%" />
                                        )}
                                    </div>
                                ))}
                                <div className="item-end">
                                    {x.items[this.state.arrIndex[k]].lastItem.map((item, index) => (
                                        <div key={index} className="translate flex-center">
                                            <h3>
                                                {item.title}
                                                <br />
                                                <span className="orange-color">{item.price}&nbsp;元</span>

                                                {item.note !== undefined ? <p>{item.note}</p> : null}
                                            </h3>

                                            {item.imgSrc !== "" ? <img src={item.imgSrc} alt={item.title} width="80" height="80" /> : <i className="icon-next-1"></i>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <img style={{ margin: "22px auto" }} src={x.endImgSrc} width="100%" />
                        </div>
                    ))}
                    <div></div>
                </div>
            </div>
        );
    }
}
