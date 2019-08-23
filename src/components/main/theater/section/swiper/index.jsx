import React, { PureComponent, Fragment } from 'react';  //Fragment 虚拟节点
import SwiperTheater from "swiper/dist/js/swiper.js";
import "swiper/dist/css/swiper.css";

class Swiper extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Fragment>
                <div className="swiper-container" height={this.props.height}>
                    <div className="swiper-wrapper">
                        {this.props.children}
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        this.swiperInit.bind(this)();
    }
    swiperInit() {
        new SwiperTheater('.swiper-container',{
            slidesPerView: 3, freeMode: true, slidesOffsetAfter: 40,
        });
    }
}
export default Swiper;