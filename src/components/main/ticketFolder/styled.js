import styled from "styled-components";
import global from "@/core/global"

let r = global.r;

// 票夾头部
export const TicketFolderHeader = styled.header`
    position:fixed;
    width:100%;
    height: ${r(44)};
    line-height:  ${r(44)};
    background-color: #fff;
    border-bottom: 1px solid #ebebeb;
    z-index: 10;
    .fa-angle-left{
        font-size: ${r(40)};
        font-weight:100;
        position: absolute;
        left: ${r(15)};
        top:0;
    }
    .fa-ellipsis-h{
        font-size: ${r(20)};
        position: absolute;
        right: ${r(15)};
        top:30%;
    }
    p{
    font-size: ${r(18)};
    color: #232323;
    }
`
export const TicketFolderDiv = styled.div`
    padding:0 ${r(15)};
    box-sizing:border-box;
    overflow:hidden;
    .TicketFolder_box{
        overflow: hidden;
        .swiper-container.swiper-container-horizontal{
            width:100%;
            height:${r(50)};
            position:fixed;
            left:0;
            top:${r(45)};
            background-color: #fefefe;
            padding:${r(10)} 0;
            box-sizing:border-box;
        .swiper-wrapper{
            line-height: ${r(30)};
            .swiper-slide{
                overflow: hidden;
                width: ${r(74)};
                span{
                        font-size: ${r(15)};
                        color: #232323;
                    }
                    .borb_cli{
                        border-bottom:1px solid #ff6743;
                        color:#ff6743;
                    }
                }
            }
        }
    }
    .TicketFolder_city{
        width: ${r(74)};
        height: ${r(18)};
        border-left: 1px solid #e0e0e0;
        position:fixed;
        top:${r(63)};
        right:0;
        background-color: #fefefe;
        z-index: 10;
        span{
            font-size: ${r(15)};
            color: #232323;
        }
        .fa-map-marker{
            display: inline-block;
            width: ${r(25)};
            height: ${r(14)};
            vertical-align: initial;
        }
    }
`

// 城市
export const TicketSectionCity=styled.div`
    display: ${props => (props.dis)};
    position: fixed;
    left: 0;
    right: 0;
    top: 1.17333rem;
    bottom: 0;
    z-index: 101;
    overflow: scroll;
    background-color: rgba(0,0,0,.6);
    animation: play .5s linear;
        @keyframes play {
            from{
                transform: translateX(100%);
            }
            to{
                transform: translateX(0%);
            }
        }
    .TicketSectionCity_box{
        width: ${r(246)};
        overflow: hidden;
        background-color: #fefefe;
        float: right;
        padding: ${r(15)} ${r(15)} 0;
        h3{
            font-size:${r(15)};
            color: #666;
            text-align:left;
        }
        .TicketSection_city{
            overflow: hidden;
            margin-top:${r(10)};
            ul{
                overflow: hidden;
                li{
                    width: ${r(76)};
                    height:${r(32)} ;
                    line-height:${r(32)} ;
                    font-size: ${r(12)};
                    margin-right:${r(6)};
                    margin-bottom:${r(6)};
                    border-radius: .05333rem;
                    background-color: #f5f5f5;
                    border-radius: .05333rem;
                    float: left;
                }
                .clbg{
                    background-color: #fff1e9;
                    color: #ff6743;
                }
                .clmr{
                    margin-right:0;
                }
            }
        }
        .TicketSectionCity_btn{
            width: 100%;
            overflow: hidden;
            position: fixed;
            bottom: 0;
            right:0;
            .btn{
                width: ${r(137)};
                height: ${r(45)};
                font-size: ${r(14)};
                line-height: ${r(45)};
                float: right;
            }
            .TicketSectionCity_btn_l{
                background:#FFF;
                color: #232323;
            }
            .TicketSectionCity_btn_r{
                background:#ff6743;
                color: #fff;
            }
        }
    }
`

export const Paomo = styled.div`
    height: 100%;
    width: ${r(100)};
    display: ${props => (props.dis)};
    position: fixed;
    left: 0;
    right: 0;
    top: 1.17333rem;
    bottom: 0;
    z-index: 102;
`