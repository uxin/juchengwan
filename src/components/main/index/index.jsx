import React, { Fragment } from 'react';  //Fragment 虚拟节点
import { InitStyled } from "@/components/main/index/section/styled";
import City from "@/components/main/index/section/city";


class Index extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isCity: true,
        }
    }
    render() {
        // style = { this.state.isCity ? { display: "block" } : { display: "none" } }
        return (
            <Fragment>
                <InitStyled />
                <City/>
            </Fragment>
        )
    }
}
export default Index;