import React from "react";
import { IPageProps } from "../../ContainerBase";
import { FooterService, FooterSiteInfo, FooterSupport } from "../../containers/ItemData";
import "./FooterStyle.scss";

interface IState {
    active: boolean;
    scroll: number;
    interval: any;
}

export class FooterRaw extends React.Component<IPageProps, IState> {
    constructor(props: IPageProps) {
        super(props);
        this.state = {
            active: false,
            scroll: 0,
            interval: "",
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", () => this.setState({ scroll: window.scrollY }));
        const interval = setInterval(() => this.setState({ active: !this.state.active }), 4000);
        this.setState({ interval });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return (
            <footer className="footer">
                <div className="container site-footer">
                    <div className="flex-start footer-service">
                        {FooterService.map((x, k) => (
                            <div key={k} className="flex-center">
                                <i className={x.className}></i>
                                <span>{x.content}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex-start footer-support">
                        <div className="flex-start support">
                            {FooterSupport.map((item, i) => (
                                <dl key={i} style={{ width: `${100 / FooterSupport.length}%` }}>
                                    <dt>{item[0]}</dt>
                                    {item.slice(1).map((x, y) => (
                                        <dd key={y}>{x}</dd>
                                    ))}
                                </dl>
                            ))}
                        </div>
                        <div className="flex-start hotline">
                            <h3>400-100-5678</h3>
                            <p>8:00-18:00（仅收市话费）</p>
                            <div className="flex-center">
                                <i className="icon-chat"></i>
                                <span>&nbsp;人工客服</span>
                            </div>
                            <div className="flex-start">
                                <span>关注小米：</span>
                                <span></span>
                                <span></span>
                                <img src="/assets/banner/wx-img.png" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container flex-start site-info">
                    <div className="container">
                        <p>
                            {FooterSiteInfo.slice(0, FooterSiteInfo.length - 3).map((x, k) => (
                                <span key={k}>
                                    {k !== 0 ? `|` : ""}
                                    &nbsp;
                                    {x}
                                    &nbsp;
                                </span>
                            ))}
                        </p>
                        <p>
                            {FooterSiteInfo.slice(FooterSiteInfo.length - 3).map((x, i) => (
                                <span key={i}>
                                    {i !== 0 ? `|` : ""}
                                    &nbsp;
                                    {x}
                                    &nbsp;
                                </span>
                            ))}
                        </p>
                        <p>
                            © <span>mi.com</span> 京ICP证110507号 <span>京ICP备10046444号</span> <span>京公网安备11010802020134号</span> <span>京网文[2020]0276-042号</span>
                            <br />
                            <span>（京）网械平台备字（2018）第00005号</span> <span>互联网药品信息服务资格证 (京)-非经营性-2014-0090 </span> <span>营业执照 </span>
                            <span>医疗器械质量公告 </span>
                            <br />
                            增值电信业务许可证 网络食品经营备案 京食药网食备202010048 <span>食品经营许可证</span>
                            <br /> 违法和不良信息举报电话：171-5104-4404 <span>知识产权侵权投诉 </span>
                            本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
                        </p>
                        <div>
                            <img src="/assets/banner/truste.png" width="83" />
                            <img src="/assets/banner/v-logo-1.png" />
                            <img src="/assets/banner/v-logo-2.png" />
                            <img src="/assets/banner/v-logo-3.png" />
                            <div>
                                <img src="/assets/banner/v-logo-4.png" width="106" />
                                <img src="/assets/banner/v-logo-5.png" width="106" className={this.state.active ? "active" : ""} />
                            </div>
                        </div>
                    </div>
                    <div className="container slogan"></div>
                </div>
                <div className="nav-right">
                    <div className="flex-center">
                        <i className="icon-phone"></i>
                        <p>手机APP</p>
                    </div>
                    <div className="flex-center">
                        <i className="icon-per"></i>
                        <p>个人中心</p>
                    </div>
                    <div className="flex-center">
                        <i className="icon-tool"></i>
                        <p>售后服务</p>
                    </div>
                    <div className="flex-center">
                        <i className="icon-support"></i>
                        <p>人工客服</p>
                    </div>
                    <div className="flex-center">
                        <i className="icon-shop-car" style={{ fontSize: "3rem" }}></i>
                        <p>购物车</p>
                    </div>
                    <div className={"flex-center " + (this.state.scroll > 500 ? "active" : null)} onClick={() => setTimeout(() => window.scrollTo(0, 0), 50)}>
                        <i className="icon-back"></i>
                        <p>回顶部</p>
                    </div>
                </div>
            </footer>
        );
    }
}
