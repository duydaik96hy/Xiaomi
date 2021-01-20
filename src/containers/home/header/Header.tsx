import React from "react";
import { __connect } from "../../../AppContext";
import { IPageProps } from "../../../ContainerBase";
import "./HeaderStyle.scss";
import { ItemArr, ListItem, NavCategory, NavCategoryItem, Support } from "../../ItemData";

interface IState {
    slide: string;
    index: number;
    carouselIndex: number;
    showCategory: string;
    categoryIndex: number;
    activePointArray: Array<string>;
    activeImgArray: Array<string>;
    interval: any;
}

export class HeaderRaw extends React.Component<IPageProps, IState> {
    constructor(props: IPageProps) {
        super(props);
        this.state = {
            slide: "",
            index: 0,
            showCategory: "",
            carouselIndex: 0,
            categoryIndex: 0,
            activePointArray: ["active-point", ...Array.from("    ")],
            activeImgArray: ["active-img", ...Array.from("    ")],
            interval: "",
        };
    }

    interval = () => {
        const interval = setInterval(() => this.change(this.state.carouselIndex + 1 > 4 ? 0 : this.state.carouselIndex + 1), 2550);
        this.setState({ interval });
    };

    change = (index: number) => {
        let activePointArray = [...this.state.activePointArray];
        let activeImgArray = [...this.state.activeImgArray];
        activePointArray = activePointArray.map((x, k) => {
            if (k === index) {
                return "active-point";
            }
            return "in-active-point";
        });
        activeImgArray = activeImgArray.map((x, k) => {
            if (k === index) {
                return "active-img";
            }
            return "in-active-img";
        });
        this.setState({ carouselIndex: index, activeImgArray, activePointArray });
    };

    componentDidMount() {
        this.interval();
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <header className="header">
                <nav className="nav-top">
                    <div className="nav-top-logo">
                        <div>
                            <div></div>
                        </div>
                    </div>
                    <div className="nav-top-list">
                        <ul>
                            {ItemArr.map((x, k) => (
                                <li onMouseOver={() => this.mouseOver(k)} onMouseOut={() => this.mouseOut()} className="nav-top-list-item" key={k}>
                                    {x}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="nav-top-search"></div>
                </nav>
                <div className={"nav-top-list-children " + this.state.slide} onMouseOver={() => this.mouseOver(this.state.index)} onMouseOut={() => this.mouseOut()}>
                    {this.state.index <= ListItem.length - 1
                        ? ListItem[this.state.index].map((x, k) => (
                              <div key={k} className="nav-top-list-children-item">
                                  <img src={x.imgSrc} alt={x.title} width="160" />
                                  <h5>{x.title}</h5>
                                  {x.price !== undefined ? <p className="orange-color">{x.price}</p> : null}
                              </div>
                          ))
                        : null}
                </div>
                <div className="container banner" onMouseOut={() => this.interval()} onMouseOver={() => this.clearInterval()}>
                    <div className="banner-carousel-point">
                        {Array.from({ length: 5 }).map((x, k) => (
                            <div key={k} className={this.state.activePointArray[k]} onClick={() => this.change(k)}></div>
                        ))}
                    </div>
                    <div className="banner-carousel">
                        {Array.from({ length: 5 }).map((x, k) => (
                            <div key={k} className={"banner-carousel-img " + this.state.activeImgArray[k]}></div>
                        ))}
                    </div>
                    <div className="banner-carousel-btn">
                        <div className="prev-btn" onClick={() => this.change(this.state.carouselIndex - 1 < 0 ? 4 : this.state.carouselIndex - 1)}></div>
                        <div className="next-btn" onClick={() => this.change(this.state.carouselIndex + 1 > 4 ? 0 : this.state.carouselIndex + 1)}></div>
                    </div>
                    <div className="banner-category">
                        <div className="category-list">
                            {NavCategory.map((x, k) => (
                                <div
                                    key={k}
                                    onMouseOver={() => this.setState({ showCategory: "show", categoryIndex: k })}
                                    onMouseOut={() => this.setState({ showCategory: "hide" })}
                                >
                                    <span>{x}</span>
                                    <i className="icon-next"></i>
                                </div>
                            ))}
                        </div>
                        {this.state.categoryIndex < NavCategoryItem.length ? (
                            <div
                                className={"category-item " + this.state.showCategory}
                                onMouseOver={() => this.setState({ showCategory: "show" })}
                                onMouseOut={() => this.setState({ showCategory: "hide" })}
                            >
                                <div>
                                    {NavCategoryItem[this.state.categoryIndex].map((x, k) => (
                                        <div key={k}>
                                            <img src={x.imgSrc} width="40" height="40" />
                                            <span>{x.title}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
                <div className="container flex-start support">
                    <div className="flex-start channel-list">
                        {Support.map((x, k) => (
                            <div key={k}>
                                <img src={x.imgSrc} alt={x.title} width="24" height="24" />
                                <span>{x.title}</span>
                            </div>
                        ))}
                    </div>
                    <div className="promo-list">
                        {Array.from({ length: 3 }).map((x, k) => (
                            <div key={k}></div>
                        ))}
                    </div>
                </div>
            </header>
        );
    }

    private mouseOver = (index: number) => {
        if (index > ListItem.length - 1) {
            this.setState({ slide: "slide-up" });
            return;
        }
        this.setState({ slide: "slide-down", index });
    };

    private mouseOut = () => {
        this.setState({ slide: "slide-up" });
    };

    private clearInterval = () => {
        clearInterval(this.state.interval);
    };
}
