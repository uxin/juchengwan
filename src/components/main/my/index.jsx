import React, { Fragment } from 'react';  //Fragment 虚拟节点

export default class extends React.Component {
    render() {
        return (
            <Fragment>
                <div>我的组件</div>
            </Fragment>
        )
    }
}