import styled from "styled-components";
import global from "@/core/global"

let r = global.r;

export const TheaterDiv = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: ${r(43)};
    line-height: ${r(43)};
    border-bottom: 1px solid #ebebeb;
    background-color: #fefefe;
    z-index: 100;
    h3{
        font-size:${r(18)} ;
        font-weight: 400;
        color: #232323;
    }
`

// 轮播
export const TheaterBox = styled.div`
    width: 100%;
    margin-top:${r(56)};
    margin-bottom:${(62)};
    padding:0 ${r(15)};
    box-sizing:border-box;
    background-color: #fdfdfd;
    overflow: hidden;
    .TheaterBox{
        padding:${r(20)} ${r(16)} ${r(21)} ;
        box-sizing:border-box;
        margin-bottom:${r(15)};
        background-color: #fefefe;
        box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
        border-radius: .10667rem;
        border: 1px solid #ebebeb;
        overflow: hidden;
        .TheaterBox_t{
            overflow: hidden;
            .TheaterBox_t_l{
                overflow: hidden;
                float: left;
                .TheaterBox_t_l_img{
                    width:${r(50)};
                    height:${r(50)};
                    margin-right:${r(10)} ;
                    float: left;
                    img{
                        width: 100%;
                        height: 100%;
                         border-radius: .10667rem;
                    }
                }
                .TheaterBox_t_l_txt{
                    float: left;
                    overflow: hidden;
                    h3{
                        height: ${r(22)};
                        line-height:${r(22)} ;
                        font-size: ${r(17)};
                        font-weight:700;
                        color: #232323;
                        margin-top:${r(3)};
                        margin-bottom:${r(3)};
                    }
                    p{
                        height: ${r(16)};
                        line-height:${r(16)} ;
                        font-size: ${r(12)};
                        color: #666;
                        text-align:left;
                    }
                }
            }
            .TheaterBox_t_r_txt{
                float: right;
                font-size:${r(30)};
                color: #666;
            }
        }

        /* swiper的滑动轮播 */
    .swiper-container.swiper-container-horizontal{
            width:100%;
            margin-top: ${r(20)};
        .swiper-wrapper{
                .swiper-slide{
                    margin-right:${r(8)};
                    &:nth-last-child(1) .swiper_bor{
                            width:100%;
                        }
                    .swiper_date{
                        height:${r(30)};
                        font-size:${r(14)} ;
                        color: #b3b3b3;
                        margin-left: 8px;
                    }
                    .swiper_bor{
                        width:${r(112)};
                        height: ${r(5)};
                        border-top: .05333rem solid #ebebeb;
                        padding-bottom:${r(10)};
                        position:relative;

                        span{
                            width:${r(7)};
                            height:${r(7)};
                            border-radius: 50%;
                            background-color: #ccc;
                            position:absolute;
                            left:46%;
                            top:${r(-4.5)};
                        }
                    }
                    img{
                        width:100%;
                        height:${r(146)};
                        border-radius: ${r(3)};
                    }
                    h3{
                        width: 100%;
                        height:${r(25)};
                        line-height: ${r(25)};
                        font-size: ${r(15)};
                        color: #232323;
                        font-weight: 700;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        margin-right:${r(15)};
                        margin-top: ${r(5)};
                    }
            }
        }
    }
    }
`