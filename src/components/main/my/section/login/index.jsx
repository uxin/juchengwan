import React, { PureComponent, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { Toast, Modal } from 'antd-mobile';
import Store from "storejs"  //本地存储
import { LoginDiv } from "@/components/main/my/styled"
import 'font-awesome/css/font-awesome.css';
import { LoginAsync } from "@/components/main/my/actionCreator";
const alert = Modal.alert;

class Login extends PureComponent {
    constructor() {
        super();
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
                            <input className="uname" type="text" placeholder="请输入手机号/邮箱" value={this.state.LoginData.username} onChange={this.usernameVal.bind(this)} />
                            <input className="upwd" type="text" placeholder="请输入密码" value={this.state.LoginData.password} onChange={this.passwordVal.bind(this)} />
                        </form>
                        <div className="login_btn" onClick={this.handleLogin.bind(this)}>登 录</div>
                        <div className="login_forget">
                            <p>忘记密码</p>
                            <p>验证码登录</p>
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
        LoginData[0].username = e.target.value;
        this.setState({ LoginData })
    }
    passwordVal(e) {
        let LoginData = [...this.state.LoginData];
        LoginData[0].password = e.target.value;
        this.setState({ LoginData })
    }
    handleLogin() {
        LoginAsync({ username: "a", password: "123456" }, () => {
            if (Store.get("userInfo").username === this.state.LoginData[0].username && Store.get("userInfo").password === this.state.LoginData[0].password) {
                alert('注册成功', '是否立即我的', [
                    { text: '不去' },
                    { text: '是的', onPress: () => this.props.history.push("/my") },
                ])
            } else if (Store.get("userInfo").username !== this.state.LoginData[0].username) {
                Toast.info('账号错误', 2);
            } else if (Store.get("userInfo").password !== this.state.LoginData[0].password) {
                Toast.info('密码错误', 2);
            }
        })
    }
}
export default withRouter(Login)