import React, { PureComponent, Fragment } from 'react';  //Fragment 虚拟节点
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { IndexHeader, CityDiv } from "@/components/main/index/section/styled";
import 'font-awesome/css/font-awesome.css'
import { loadHotCityDataAsync, loadMoreCityAsync, SET_INDEX_DATA } from "@/components/main/index/actionCreator";
import Banner from "@/components/main/index/section/banner";
import VocalConcert from "@/components/main/index/section/vocalConcert";
import Activity from "@/components/main/index/section/activity";
import Card from "@/components/main/index/section/card";
import HotProgram from "@/components/main/index/section/hotProgram";
import TourProgram from "@/components/main/index/section/tourProgram";
import Recommend from "@/components/main/index/section/recommend";

class City extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isCity: true,
            heightNum: "",
        }
    }
    render() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
        let heightNum = window.scrollY;
        if (this.state.isCity) {
            return (
                <Fragment>
                    <IndexHeader heightNum={this.state.heightNum} ref="bodyBox">
                        <div className="city">
                            <div className="city_box" onClick={() => {
                                this.setState({ isCity: !this.state.isCity })
                            }}>
                                <i className="fa  fa-map-marker fa-2x"></i>
                                <span>{this.props.currentCity.get("name")}</span>
                            </div>
                            <form className="search" action="">
                                <input type="text" placeholder="搜索热门演出" />
                            </form>
                            <div className="login">
                                <img src="https://image.juooo.com/group1/M00/02/65/rAoKmVyvD7iAHJX4AAADmpmoUeI150.png" alt="" />
                            </div>
                        </div>
                    </IndexHeader>
                    <Recommend>
                        <Banner />
                        <VocalConcert/>
                        <Activity />
                        <Card />
                        <HotProgram />
                        <TourProgram />
                    </Recommend>
                    <div style={{ winth: "100%", height: "1.3rem" }}></div>
                </Fragment>

            )
        } else if (this.props.hotCityList.size !== 0 & this.props.moreCityList.size !== 0) {
            return (
                <CityDiv>
                    <header>
                        <i className="fa  fa-angle-left fa-2x" onClick={() => {
                            this.setState({ isCity: !this.state.isCity })
                        }}></i>
                        <h3>城市选择</h3>
                    </header>
                    <div className="kong"></div>
                    <div className="city_list">
                        <p>当前城市</p>
                        <ul>
                            <li>全国</li>
                        </ul>
                    </div>
                    <div className="city_list">
                        <p>定位城市</p>
                        <ul>
                            <li>长沙</li>
                        </ul>
                    </div>
                    <div className="city_list">
                        <p>热门城市</p>
                        <ul>
                            <li>全国</li>
                            {
                                this.props.hotCityList.map((item, index) => (
                                    <li key={index} onClick={this.props.handleCity.bind(this, item)}>{item.get("name")}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="city_body">
                        {
                            this.props.moreCityList.map((item, index) => (
                                <div className="city_sort" key={index}>
                                    <h2 id="h2Hrinth">{item.get("id")}</h2>
                                    <ul>
                                        {
                                            item.get("list").map((itemList, indexList) => (
                                                <li key={indexList} onClick={this.props.handleCity.bind(this, itemList)}>{itemList.get("name")}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className="city_index">
                        <ul>
                            <li>当前</li>
                            <li>定位</li>
                            <li>热门</li>
                            {
                                this.props.moreCityList.map((item, index) => (
                                    <li key={index} onClick={this.scrollsqq.bind(this, index)}>{item.get("id")}</li>
                                ))
                            }
                        </ul>
                    </div>
                </CityDiv>
            )
        }
    }
    componentDidMount() {
        this.props.handleGetHotCityData.bind(this)();
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll (e) {
        // window.scrollY
        //获取滚动条的高度
        if (e.target.URL === "http://localhost:8800/#/index"){
            this.setState({
                heightNum: e.srcElement.scrollingElement.scrollTop
            })
        }
    }
    scrollsqq(index) {
        if (index === 0) {
            document.documentElement.scrollTop = 788
        } else if (index === 1) {
            document.documentElement.scrollTop = 973
        } else if (index === 2) {
            document.documentElement.scrollTop = 1410
        } else if (index === 3) {
            document.documentElement.scrollTop = 2000
        } else if (index === 4) {
            document.documentElement.scrollTop = 2640
        } else if (index === 5) {
            document.documentElement.scrollTop = 2724
        } else if (index === 6) {
            document.documentElement.scrollTop = 3200
        } else if (index === 7) {
            document.documentElement.scrollTop = 3342
        } else if (index === 8) {
            document.documentElement.scrollTop = 4340
        } else if (index === 9) {
            document.documentElement.scrollTop = 2980
        } else if (index === 10) {
            document.documentElement.scrollTop = 5112
        } else if (index === 11) {
            document.documentElement.scrollTop = 5958
        } else if (index === 12) {
            document.documentElement.scrollTop = 6224
        } else if (index === 21) {
            document.documentElement.scrollTop = 10536
        }

    }

}

const mapStateToProps = (state) => {
    return {
        hotCityList: state.getIn(["indexReducer", "hotCityList"]),
        moreCityList: state.getIn(["indexReducer", "moreCityList"]),
        currentCity: state.getIn(["indexReducer", "currentCity"]),
    }
}
const mapDispatchToProps = (dispatch) => ({
    handleGetHotCityData() {
        dispatch(loadHotCityDataAsync(dispatch));
        dispatch(loadMoreCityAsync(dispatch))
    },
    handleCity(itemList) {
        let temp = itemList.toJS();
        temp.type = SET_INDEX_DATA;
        dispatch(temp);
        this.setState({ isCity: !this.state.isCity });
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(City));