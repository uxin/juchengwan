import styled from "styled-components";
import global from "@/core/global"

let r = global.r;

export const LoginDiv = styled.div`
    width: 100%;
    height: -webkit-fill-available;
    background-image:url("https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/login_bg.png");
    background-repeat: no-repeat;
    background-size: 100%;
    /* background-position: center center; */
    header{
        width: 100%;
        height: ${r(44)};
        line-height:${r(44)} ;
        padding:0 ${r(15)};
        box-sizing:border-box;
        text-align:left;
        background-color: transparent;
    }
    .login_title{
        width: 100%;
        padding-top: ${r(25)};
        box-sizing:border-box;
        h3{
            font-size:${r(25)}
        }
    }
    .login{
        padding:${r(25)} ${r(32)};
        box-sizing:border-box;
        background-color: transparent;
        form{
            input{
                width:100%;
                display:block;
                border:0;
                border-bottom: 0.02133rem solid #666;
                height: ${r(50)};
                background-color: transparent;
                font-size: ${r(16)};
            }
        }
        .login_btn{
            width:100%;
            height: ${r(50)};
            line-height:${r(50)} ;
            font-size:${r(18)} ;
            color: #fefefe;
            background-color: #ebebeb;
            border-radius: ${r(50)};
            margin-top:${r(50)};
            &:active{
                background-color:red;
            }
        }
        .login_forget{
            width: 100%;
            overflow: hidden;
            padding-top: ${r(10)};
            p{
                float: left;
                font-size:  ${r(15)};
                color: #232323;
                &:nth-child(2){
                    float: right;
                }
            }
        }
    }
    .login_b{
        width:100%;
        padding:0 ${r(70)};
        box-sizing:border-box;
        background-color: transparent;
        p{
            &:nth-child(1){
                border-top: 1px solid #999999;
                position: relative;
                span{
                    font-size: ${r(14)};
                    position:absolute;
                    top:${r(-9)};
                    left:${r(66)};
                    color: #999999;
                    background-color: #FEFEFE;
                    padding:0 10px;
                }
            }
            &:nth-child(2){
                overflow: hidden;
                padding:0 ${r(36)};
                box-sizing:border-box;
                margin-top:${r(36)};
                img{
                    width: ${r(36)};
                    height: ${r(36)};
                    float: left;
                    &:nth-child(2){
                        float: right;
                    }
                }
            }
        }
    }

`