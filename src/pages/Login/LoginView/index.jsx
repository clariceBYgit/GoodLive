import React, { Component } from 'react'
import './style.less'
export default class LoginView extends Component {
    constructor(){
        super()
        this.state={
            phone:''
        }
    }
    phoneHandler = (e) => {
        // console.log(e.target.value)
        this.setState({
            phone:e.target.value
        })
        // console.log(this.state.userPhone)
    }
    loginHandler = () =>{
        // 将登陆信息传过去
        this.props.onLoginHandler(this.state.phone)
    }
    render() {
        // console.log(this.props)
        return (
            <div className='login-view'>
                <i className='icon-tablet i-tablet'></i>
                <input
                    placeholder='请输入电话号码'
                    type="number"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.phoneHandler}
                    id="" />
                <div>
                    <i className='icon-key i-key'></i>
                    <input
                        placeholder='请输入验证码'
                        type="number"
                        name=""
                        id="passCode" />
                        <button className='btn-send'>发送验证码</button>
                </div>

                <button onClick={this.loginHandler} className='btn-login'>登录</button>
            </div>
        )
    }
}
