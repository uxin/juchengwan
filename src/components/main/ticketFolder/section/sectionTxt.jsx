import React, { PureComponent } from 'react';  //Fragment 虚拟节点
import { RecommendDiv } from "@/components/main/index/section/styled";
import { connect } from "react-redux";
import { PullToRefresh } from 'antd-mobile';  //下拉加载
import { loadTicketListAsync } from "@/components/main/ticketFolder/actionCreator"
class TicketSection extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            height: document.documentElement.clientHeight,
        };
    }
    render() {
        return (
            this.props.ticketList.size ? (
                <RecommendDiv m_t={"110px"} padding={"0"}>
                    <PullToRefresh
                        damping={60}
                        ref={el => this.ptr = el}
                        direction={'up'}
                        style={{
                            height: this.state.height,
                            overflow: 'auto',
                        }}
                    >
                        <ul className="Recommend_ul">
                            {
                                this.props.ticketList.map((item, index) => (
                                    <li key={index}>
                                        <div className="Recommend_img">
                                            <img src={item.get("pic")} alt="" />
                                        </div>
                                        <div className="Recommend_details">
                                            <p className="Recommend_date">
                                                <span>{item.get("show_time_top")}</span>
                                                <i>{item.get("show_time_bottom")}</i>
                                            </p>
                                            <h3>{item.get("name")}</h3>
                                            <p className="Recommend_city">{item.get("city_name")} | {item.get("venue_name")}</p>
                                            <p className="Recommend_money">
                                                <span>￥{item.get("min_price")}</span>
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
        this.props.pageInit.bind(this)();
    }
}

const mapStateToProps = (state) => {
    return {
        ticketList: state.getIn(["ticketFolderReducer", "ticketList"]),
    }
}
const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadTicketListAsync(dispatch))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(TicketSection);