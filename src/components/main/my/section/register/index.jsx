import React, { PureComponent, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import Store from "storejs"  //本地存储
import { LoginDiv } from "@/components/main/my/styled"
import 'font-awesome/css/font-awesome.css';
import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';  // 提示框
const alert = Modal.alert;

class Register extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            LoginData: [
                { username: "", password: "" }
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <LoginDiv>
                    <header>
                        <i className="fa  fa-angle-left fa-3x" onClick={() => this.props.history.push("/index")}></i>
                    </header>
                    <div className="login_title">
                        <h3>欢迎来到王者荣耀</h3>
                    </div>
                    <div className="login">
                        <form action="">
                            <input className="uname" type="text" placeholder="请输入手机号/邮箱" onChange={this.usernameVal.bind(this)}/>
                            <input className="upwd" type="text" placeholder="请输入密码" onChange={this.passwordVal.bind(this)} />
                        </form>
                        <div className="login_btn" onClick={this.handleLogin.bind(this)}>免费注册</div>
                        <div className="login_forget">
                            <p>邮箱注册</p>
                            <p onClick={() => this.props.history.push("/login")}>密码登录</p>
                        </div>
                    </div>
                    <div className="login_b">
                        <p>
                            <span>其他登录方式</span>
                        </p>
                        <p>
                            <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/qq.png" alt="" />
                            <img src="https://m.juooo.com/public/basic/Home/app/app-juooo5/images/login/weibo.png" alt="" />
                        </p>
                    </div>
                </LoginDiv>
            </Fragment>
        )
    }
    usernameVal(e) {
        let LoginData = [...this.state.LoginData];
        LoginData[0].username = e.target.value.replace(/\s+/g, "");  //replace(/\s+/g, "")  去掉全部空格
        this.setState({ LoginData })
    }
    passwordVal(e) {
        let LoginData = [...this.state.LoginData];
        LoginData[0].password = e.target.value.replace(/\s+/g, "");
        this.setState({ LoginData })
    }
    handleLogin() {
        if (this.state.LoginData[0].username !== "" && this.state.LoginData[0].password !== ""){
            Store.set("userInfo", this.state.LoginData[0]);
            alert('注册成功', '是否立即登录', [
                { text: '不去' },
                { text: '是的', onPress: () => this.props.history.push("/login") },
            ])
        }else{
            Toast.info('账号密码不能为空', 2);
        }

    }
}
export default withRouter(Register)