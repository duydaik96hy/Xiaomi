import React from "react";

interface IState {

}

export class App extends React.Component<any, IState> {
    constructor(props: IState){
        super(props);
        this.state ={}
    };

    render(){
        return <div>abc</div>;
    }

}