import React from "react";
import { connect, IPageProps } from "../../ContainerBase";
import { BodyRaw } from "./body/Body";
import { FooterRaw } from "../../components/footer/Footer";
import { HeaderRaw } from "./header/Header";

class HomeRaw extends React.Component<IPageProps, any> {
    constructor(props: IPageProps) {
        super(props);
    }

    render() {
        return (
            <>
                <HeaderRaw {...this.props} />
                <BodyRaw {...this.props} />
                <FooterRaw {...this.props} />
            </>
        );
    }
}

export const Home = connect(HomeRaw);
