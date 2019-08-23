import React, { Fragment } from 'react';  //Fragment 虚拟节点
import Store from "storejs"  //本地存储
import { withRouter } from "react-router-dom";
 class My extends React.Component {
    render() {
        return (
            Store.get("userInfo") ? (
                <Fragment>
                    <div>我的</div>
                </Fragment>
            ) : (
                    <Fragment>
                        <div onClick={() => this.props.history.push("/register")}>立即注册</div>
                    </Fragment>
            )
        )
    }

}
export default withRouter(My)