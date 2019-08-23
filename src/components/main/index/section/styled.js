import styled, { createGlobalStyle } from "styled-components";
import global from "@/core/global"

let r = global.r;

// createGlobalStyle 定义全局样式
export const InitStyled = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, font, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;

}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
:focus {
	outline: 0;
}
ins,a {
	text-decoration: none;
	color: black;
}
del {
	text-decoration: line-through;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

b, strong, i, em{
	font-style: normal;
}
`

//  城市
export const CityDiv = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position:relative;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index:1000;
    background-color: #f5f5f5;

    /* 城市头部 */
    header{
        width: 100%;
        overflow: hidden;
        background-color:#fff;
        position: fixed;
        top:0;
        border-bottom: 1px solid #ebebeb;
        .fa-angle-left{
            float: left;
            font-size: ${r(40)};
            position: absolute;
            left: ${r(16)};
            top:0;
        }
        h3{
            width: 100%;
            height: ${r(44)};
            line-height:${r(44)};
            font-weight: 400;
            color: #232323;
            margin:0;
            font-size: ${r(18)};
        }
    }

    /* 泡沫 */
    .kong{
        width: 100%;
        height: ${r(44)};
    }

    /* 当前城市 */
    .city_list{
        padding-top:${r(13)};
        padding-left:${r(15)};
        box-sizing: border-box;

        p{
            width:100%;
            height: ${r(26)};
            font-size: ${r(12)};
            font-weight: 400;
            color: #999;
            margin-bottom: ${r(5)};
            line-height:${r(26)};
            text-align:left;
        }
        ul{
            width: 100%;
            overflow: hidden;
            li{
                width: ${r(100)};
                height: ${r(35)};
                border: 1px solid #ebebeb;
                margin-right:${r(7)};
                margin-bottom:${r(7)};
                background-color:#fff;
                border-radius: ${r(4)};
                color: #232323;
                font-size:${r(13)};
                line-height: ${r(35)};
                text-align:center;
                float: left;
            }
        }
    }

    /* 城市列表 */
    .city_body{
        width: 100%;
        overflow: hidden;
        h2{
            width: 100%;
            height: ${r(29)};
            padding-left:${r(15)};
            box-sizing: border-box;
            color: #999;
            text-align:left;
            line-height:${r(29)} ;
            font-size: ${r(13)};
        }
        ul{
            width: 100%;
            overflow: hidden;
            padding-left:${r(15)};
            padding-right:${r(42)};
            background-color:#fff;
            box-sizing: border-box;
            li{
                /* width: ${r(317)}; */
                width: 100%;
                height: ${r(50)};

                line-height:${r(50)} ;
                text-align:left;
                border-bottom: 1px solid #ebebeb;
                color: #232323;
                font-size: ${r(13)};
            }
        }
    }

    /* 字母排序 */
    .city_index{
        position:fixed;
        right:${r(8)};
        top:${r(130)};
        ul{
            li{
                font-size: ${r(11)};
                color: #666;
                margin-bottom: ${r(6)};
            }
        }

    }
`



// 搜索
export const IndexHeader = styled.header`
    padding:0 ${r(15)};
    width:100%;
    height: ${r(44)};
    box-sizing:border-box;
    background-color:${props=>{
        return props.heightNum  ? "rgba(255,255,255, 1)" : "rgba(0, 0, 0, 0)";
    }};
    position:fixed;
    top:0;
    display:flex;
    z-index:999;
    .city{
        display:flex;
        align-items:center;
        /* width: 100%; */

        .city_box{
        /* width: ${r(58)}; */
        width:15.4667vw;
        height: ${r(28)};
        border:${props => {
            return props.heightNum ? "none" : "1px solid hsla(0,0%,88%,.3)";
        }};
        border-radius:${r(17)};
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:${props => {
            return props.heightNum ? "rgba(255,255,255, 1)" : "rgba(0,0,0,.3)";
        }};

            .fa-map-marker{
                color:${props => {
                    return props.heightNum ? "red" : "#fff";
                }};
                margin-right: ${r(10)};
            }
            span{
                font-size:${r(16)};
                font-weight:700;
                color:${props => {
                    return props.heightNum ? "#000" : "#fff";
                }};
                white-space:nowrap;
                overflow: hidden;
                text-overflow:ellipsis;
            }
        }

        .search{
            input{
                /* width: ${r(238)}; */
                width: 63.4667vw;
                height: ${r(26)};
                border:0;
                border: 1px solid hsla(0,0%,88%,.3);
                border-radius:${r(17)};
                text-indent:${r(20)};
                color:#fff;
                background-color:${props=>{
                    return props.heightNum  ? "#f5f5f5" : "rgba(0, 0, 0, 0.3)";
                }};
                margin-left: 1.0667vw;
                &:focus {
                outline: none;
                }
            }
        }

        .login{
            /* width: ${r(27)}; */
            width: 7.2vw;
            height: ${r(25)};
            margin-left:3.7333vw;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
`


// 轮播
export const TopCarousel = styled.div`
height: ${r(196)};
touch-action:none;
    .am-wingblank.am-wingblank-lg{
        height: ${r(196)};
        margin:0;
        padding:0;
        .slider.am-carousel{
            height: ${r(196)};
            .slider-frame{
                height: ${r(196)};
                .slider-list{
                    height: ${r(196)};
                    .slider-slide{
                        height: ${r(196)};
                        a{
                            height: ${r(196)};
                            img{
                                height: ${r(196)};
                            }
                        }
                    }
                }
            }
        }
    }
`


// 演唱会
export const VocalConcertDiv = styled.div`
    padding:${r(20)} ${r(15)} ${r(30)} ${r(15)};
    box-sizing:border-box;
    overflow: hidden;
    ul{
        overflow: hidden;
        li{
            overflow: hidden;
            float: left;
            margin-right: ${r(22)};
            &:nth-child(5){
                margin:0;
            }
            img{
                width:${r(51)};
                height: ${r(51)};
            }
            p{
                font-size: ${r(13)};
                color: #232323;
                margin-top:${r(7)}
            }
        }
    }
`

// 活动
export const ActivityDiv = styled.div`
    padding:0 ${r(15)};
    box-sizing:border-box;
    margin-bottom:${r(30)};
    width:100%;
    height: ${r(100)};
    border-radius:${r(20)}
    img{
        width:100%;
        height: 100%;
    }
`
export const ActivityDiv_a = styled.div`
    width: 100%;
    padding:0 ${r(15)};
    margin-bottom: ${r(30)};
    box-sizing:border-box;

    border-radius: ${r(4)};
    background-color: rgba(255,252,245,.5);

    .Activity_top{
        width: 100%;
        height: ${r(39)} ;
        padding:0 ${r(15)};
       border: 1px solid hsla(30,55%,64%,.3);
        box-sizing:border-box;
        border-bottom: 1px dashed hsla(30,55%,64%,.3);
        .Activity_top_l{
            float: left;
            line-height:${r(39)};
            span{
                &:nth-child(1){
                font-size:${r(15)};
                font-weight: 700;
                color: #6b4218;
                margin-right: ${r(5)};
                }
                &:nth-child(2){
                    font-size:${r(11)};
                    color: #6b4218;
                }
            }
        }
        .Activity_top_r{
            float: right;
            line-height:${r(39)};
            span{
                &:nth-child(1){
                    font-size:${r(11)};
                    color: #6b4218;
                    margin-right: ${r(5)};
                }
                &:nth-child(2){
                    font-size:${r(11)};
                    color: #6b4218;
                }
            }
        }
    }

    .Activity_buttom{
        width: 100%;
        padding:${r(15)};
        box-sizing:border-box;
        border: 1px solid hsla(30,55%,64%,.3);
        box-sizing:border-box;
        border-top:0;
        overflow: hidden;
        position: relative;
        .Activity_buttom_img{
            width: ${r(65)};
            height: ${r(89)};
            float: left;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .Activity_buttom_r{
            margin-left: ${r(15)};
            float: left;
            width: ${r(233)};
            p{
                &:nth-child(1){
                    width: 100%;
                    color: #232323;
                    font-size: ${r(14)};
                    font-weight: 700;
                    text-align:left;
                    line-height: ${r(22)};
                }
                &:nth-child(2){
                    width: 100%;
                    height: ${r(17)};
                    color: #666;
                    font-size: ${r(12)};
                    margin-top:${r(10)};
                    text-align:left;
                }
                &:nth-child(3){
                    width: 100%;
                    font-size: ${r(13)};
                    margin-top:${r(10)};
                    text-align:left;
                    span{
                        &:nth-child(1){
                            color: #ff6743;
                        }
                        &:nth-child(2){
                            color: #666;
                            margin-left:${r(5)};
                        }
                    }
                }
            }
        }

        .Activity_buttom_btn{
            width:${r(76)} ;
            height: ${r(24)};
            color: #ff6743;
            border-radius:${r(16)} ;
            border: 1px solid #ff6743;
            line-height:${r(24)} ;
            position:absolute;
            bottom:${r(16)};
            right: ${r(16)};
        }
    }
`

// 卡片
export const CardDiv = styled.div`
    width: 100%;
    padding:0 ${r(15)};
    margin-bottom:${r(20)};

    box-sizing:border-box;
    .Card_box{
        overflow: hidden;
        background-color: #f5f5f5;
        box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
            .Card_top{
            width: 100%;
            overflow: hidden;
            li{
                width: 49%;
                height:${r(90)} ;
                float: right;
                padding: ${r(14)} ${r(17)} 0  ${r(17)};
                box-sizing:border-box;
                background-color: #fefefe;
                border-radius:${r(4)};
                margin-bottom:${r(6)};
                &:nth-child(2n-1){
                    float: left;
                }
                .li_txt{
                    float: left;
                    h3{
                        width: 100%;
                        height: ${r(22)};
                        line-height:${r(22)};
                        color: #232323;
                        font-size:${r(15)} ;
                    }
                    p{
                        width: ${r(80)};
                        text-align: left;
                        line-height:${r(20)};
                        color: #666;
                        font-size: ${r(11)};
                    }
                }
                .li_img{
                    float: right;
                    width:${r(44)} ;
                    height: ${r(45)};
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .Card_bottom{
            width: 100%;
            overflow: hidden;
            margin-top:${r(6)}
            li{
                width: 31.5%;
                height:${r(106)};
                float: left;
                box-sizing:border-box;
                background-color: #fefefe;
                border-radius:${r(4)};
                &:nth-child(2){
                    margin:0 ${r(9)};
                }
                .li_txt{
                    h3{
                        width: 100%;
                        height: ${r(22)};
                        line-height:${r(22)};
                        color: #232323;
                        font-size:${r(15)} ;
                        margin-top:${r(10)};
                    }
                    p{
                        line-height:${r(20)};
                        color: #666;
                        font-size: ${r(11)};
                    }
                }

                .li_img{
                    width:${r(44)} ;
                    height: ${r(45)};
                    margin-left: ${r(32)};
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
`

// 热门演出
export const HotProgramDiv = styled.div`
    padding:${r(20)} 0 ${r(35)} ${r(15)};
    box-sizing:border-box;
    overflow: hidden;
    .HotProgram_title{
        overflow: hidden;
        padding-right:${r(15)};
        box-sizing:border-box;
        h3{
            float: left;
            height: ${r(23)};
            line-height:${r(23)} ;
            font-size: ${r(20)};
            font-weight: 700;
            color: #232323;
        }
        span{
            float: right;
        }
    }

    /* swiper的滑动轮播 */
    .swiper-container.swiper-container-horizontal{
        width:100%;
        height:${props => {
        return props.height ? props.height : "178px"
    }};
    margin-top: ${r(20)};
        .swiper-wrapper{
                .swiper-slide{
                    margin-right:${r(8)};
                img{
                    width:100%;
                    height:${r(146)};
                    border-radius: 3px;
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
`

// 巡回演出
export const TourProgramDiv=styled.div`
    padding:${r(20)} 0;
   box-sizing:border-box;
   overflow: hidden;
   background-color: #f5f5f5;
    .TourProgram_title{
        overflow: hidden;
        padding:0 ${r(15)};
        box-sizing:border-box;
        h3{
            float: left;
            height: ${r(23)};
            line-height:${r(23)} ;
            font-size: ${r(20)};
            font-weight: 700;
            color: #232323;
        }
        span{
            float: right;
        }
    }

    /* swiper的滑动轮播 */
    .swiper-container.swiper-container-horizontal{
        width:100%;
        height:${props => {
        return props.height ? props.height : "200px"
    }};
    margin-top: ${r(20)};
        .swiper-wrapper{
                .swiper-slide{
                    /* margin-right:${r(20)}; */
                img{
                    width:${r(245)};
                    height:${r(126)};
                    border-radius: 3px;
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
        .swiper-slide.swiper-slide-active{
            img{
                width:${r(245)};
                height:${r(140)};
            }
        }
        .swiper-slide.swiper-slide-next{
            padding-top:${r(8)};
            box-sizing:border-box;
        }
        .swiper-slide.swiper-slide-prev{
            padding-top:${r(8)};
            box-sizing:border-box;
        }
    }
`

// 推荐
export const RecommendDiv=styled.div`
    overflow: scroll;
    .Recommend_title{
        width: 100%;
        overflow: hidden;
        h3{
            height:${r(26)} ;
            line-height:${r(26)};
            font-size: ${r(20)};
            font-weight: 700;
            color: #232323;
            float: left;
            &.Recommend_title_h3{
                padding:0 ${r(15)};
                box-sizing:border-box;
            }
        }
    }
    ul{
        margin-top:${props=>{
    return props.m_t? props.m_t : "20px"
        }};
        overflow: hidden;
        &.Recommend_ul{
            padding:0 ${r(15)};
            padding:${props => props.padding ? props.padding :"0 ${r(15)}"};
            box-sizing:border-box;
        }
        li{
            margin-bottom: ${r(23)};
            overflow: hidden;
            .Recommend_img{
                width:${r(110)} ;
                height:${r(150)};
                float: left;
                border-radius: .10667rem;
                border: 1px solid #ebebeb;
                margin-right:${r(15)};
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .Recommend_details{
                /* float: right; */
                margin-top:${r(5)};
                overflow: hidden;
                p{
                    text-align:left;
                }
                .Recommend_date{
                    height:${r(24)};
                    line-height:${r(24)};
                    font-size:${r(16)} ;
                    color:#232323;
                    i{
                        font-size:${r(12)};
                        margin-left: ${r(4)};
                    }
                }
                h3{
                    font-size:${r(17)} ;
                    margin-top:${r(12)};
                    color: #232323;
                    font-weight:700;
                    text-align:left;
                    display:-webkit-box;
                    -webkit-box-orient:vertical;
                    -webkit-line-clamp:2;
                    overflow: hidden;
                    line-height: .6rem;
                }
                .Recommend_city{
                    height: ${r(24)};
                    line-height:${r(24)};
                    margin-top:${r(12)};
                    font-size:${r(12)} ;
                    color:#666;
                }
                .Recommend_money{
                    margin-top:${r(10)};
                    overflow: hidden;
                    span{
                        font-size:${r(16)};
                        color: #ff6743;
                        font-weight: 400;
                        margin-right:${r(5)};
                    }
                    i{
                        font-size: ${r(11)};
                        color: #999;
                        height: ${r(18)};
                        line-height: ${r(18)};
                    }
                }
            }
        }
    }
`