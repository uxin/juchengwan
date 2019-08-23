import React, { PureComponent } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { RecommendDiv } from "@/components/main/index/section/styled";
import { loadIndexRecommendAsync } from "@/components/main/index/actionCreator";
import { PullToRefresh } from 'antd-mobile';  //下拉加载


// 为你推荐
class Recommend extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            height: document.documentElement.clientHeight,
        };
    }
    render() {
        return (
            this.props.recommend.size ? (
                <RecommendDiv>
                    <PullToRefresh
                        damping={70}
                        ref={el => this.ptr = el}
                        direction={'up'}
                        style={{
                            height: this.state.height,
                            overflow: 'auto',
                        }}
                        onRefresh={() => {
                            this.props.pageInit.bind(this, { cityAdd: this.props.currentCity.toJS().Abbreviation, page: ++this.state.page})();
                        }}
                    >
                        {this.props.children}
                        <div className="Recommend_title">
                            <h3 className="Recommend_title_h3">为你推荐</h3>
                        </div>
                        <ul className="Recommend_ul" >
                            {
                                this.props.recommend.map((item, index) => (

                                    <li key={index}>
                                        <div className="Recommend_img">
                                            <img src={item.get("schePic")} alt="" />
                                        </div>
                                        <div className="Recommend_details">
                                            <p className="Recommend_date">
                                                <span>{item.get("show_time")}</span>
                                                <i>{item.get("week")}</i>
                                            </p>
                                            <h3>{item.get("show_name")}</h3>
                                            <p className="Recommend_city">{item.get("c_name")} | {item.get("v_name")}</p>
                                            <p className="Recommend_money">
                                                <span>￥{item.get("low_price")}</span>
                                                <i>起</i>
                                            </p>
                                        </div>
                                    </li>

                                ))
                            }
                        </ul>
                    </PullToRefresh>
                </RecommendDiv>
            ) : null
        )
    }
    componentDidMount() {
        this.props.pageInit.bind(this, { cityAdd: this.props.currentCity.toJS().Abbreviation, page: 1 })();
    }
}

const mapStateToProps = (state) => {
    return {
        currentCity: state.getIn(["indexReducer", "currentCity"]),
        recommend: state.getIn(["indexReducer", "recommend"]),
    }
}
const mapDispatchToProps = (dispatch) => ({
    pageInit(recommend) {
        dispatch(loadIndexRecommendAsync(dispatch, recommend))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);