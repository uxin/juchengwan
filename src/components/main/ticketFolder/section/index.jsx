import React, { Fragment, PureComponent } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { TicketFolderHeader, TicketFolderDiv, TicketSectionCity, Paomo } from "@/components/main/ticketFolder/styled";
import 'font-awesome/css/font-awesome.css';
import Swiper from "@/components/layout/swiper";
import TicketSection from "@/components/main/ticketFolder/section/sectionTxt";
import { loadTicketShowCategoryAsync, loadTicketCitytAsync } from "@/components/main/ticketFolder/actionCreator"

class TicketFolder extends PureComponent {
    constructor() {
        super();
        this.state = {
            isCity: false,
            con: 0,
            num: -1,
            name:"全国",
        }
    }
    render() {
        return (
            this.props.showCategory.size && this.props.ticketCity.size ? (
                <Fragment>
                    <TicketFolderHeader>
                        <i className="fa  fa-angle-left fa-2x" onClick={() => this.props.history.go(-1)}></i>
                        <p>全国</p>
                        <i className="fa   fa-ellipsis-h fa-2x"></i>
                    </TicketFolderHeader>
                    <TicketFolderDiv>
                        <div className="TicketFolder_box">
                            <Swiper id={"TicketFolder_swiper"} swiperConfig={{ slidesPerView: 5, freeMode: true, spaceBetween: 0, slidesOffsetAfter: 100 }}>
                                <div className="swiper-slide">
                                    <span className={`${this.state.con === -1 ? 'borb_cli' : ' '}`} onClick={this.borbCli_allCity.bind(this)}>全国</span>
                                </div>
                                {
                                    this.props.showCategory.map((item, index) => (
                                        <div className="swiper-slide" key={index}>
                                            <span className={`${this.state.con === index ? 'borb_cli' : ' '}`} onClick={this.borbCli.bind(this, index)}>{item.get("name")}</span>
                                        </div>
                                    ))
                                }
                            </Swiper>
                            <div className="TicketFolder_city" onClick={() => {
                                this.setState({ isCity: !this.state.isCity })
                            }}>
                                <span>{this.state.name||"全国"}</span>
                                <i className="fa  fa-map-marker fa-lg"></i>
                            </div>
                        </div>
                        <TicketSection></TicketSection>
                    </TicketFolderDiv>
                    <TicketSectionCity dis={this.state.isCity ? "none" : "block"}>
                        <div className="TicketSectionCity_box">
                            <h3>城市</h3>
                            <div className="TicketSection_city">
                                <ul>
                                    <li className={`${this.state.num === -1 ? 'clbg' : ''}`} onClick={this.reset_btn.bind(this)}>全国</li>
                                    {
                                        this.props.ticketCity.map((item, index) => (
                                            <li key={index} onClick={this.claClick.bind(this, index,item)} className={`${this.state.num === index ? 'clbg' : ''}`}>{item.get("name")}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <div className="TicketSectionCity_btn">
                                <span className="btn TicketSectionCity_btn_r" onClick={this.confirm_btn.bind(this)}>确定</span>
                                <span className="btn TicketSectionCity_btn_l" onClick={this.reset_btn.bind(this)}>重置</span>
                            </div>
                        </div>
                        <Paomo dis={this.state.isCity ? "none" : "block"} onClick={() => {
                            this.setState({ isCity: !this.state.isCity })
                        }}></Paomo>
                    </TicketSectionCity>

                </Fragment>
            ) : null
        )
    }
    componentDidMount() {
        this.props.pageInit.bind(this)();
        this.confirm_btn.bind(this)();
    }
    borbCli(index) {
        this.setState({ con: index })
    }
    borbCli_allCity() {
        this.setState({ con: -1 })
    }
    claClick(index, item) {
        this.setState({ num: index, name:item.get("name"),city_id:item.get("city_id")})
    }
    reset_btn() {
        this.setState({ num: -1 })
    }
    confirm_btn(){
        this.setState({isCity:!this.state.isCity});
    }
}

const mapStateToProps = (state) => {
    return {
        showCategory: state.getIn(["ticketFolderReducer", "showCategory"]),
        ticketCity: state.getIn(["ticketFolderReducer", "ticketCity"]),
    }
}
const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadTicketShowCategoryAsync(dispatch));
        dispatch(loadTicketCitytAsync(dispatch))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TicketFolder));