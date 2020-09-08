import React, { Component } from 'react'
import LoginView from './LoginView'
import './style.less'
import { connect } from 'react-redux'  //用于读取
import * as userinfoActions from '../../actions/userinfo'
import { bindActionCreators } from 'redux'  //用于写入
class Login extends Component {

    loginHandler = (user) =>{
        //  例如：user是后台返回来的登录信息（token：令牌）
        // 用户信息的存储：（多次存储） redux\本地 localStorage
        // console.log('登录')
        // 使用正则对电话号码进行验证  
        // https://tool.oschina.net/uploads/apidocs/jquery/regexp.html 常用的正则表达式
        // ^头 $ 尾
        //  [  ] 字符集合，匹配所包含的任意字符
        // \d 任意数字字符  [0-9]
        if(!/^1[3-9]\d{9}$/.test(user)){
            alert('请输入正确的电话号码')
            return;
        }
        this.props.userinfoActions.loginUser({
            name:user
        })
        // 返回上一个页面
        localStorage.setItem('name',user)
        // this.props.history.goBack()
        window.history.back(-1)

        // 部分需求： 需要记录上一个路径信息  => 从哪来回哪去


        // console.log(user)
    }
    render() {
        return (
            <div>
               <LoginView onLoginHandler={  this.loginHandler } />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        userinfo:state.userinfo
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        userinfoActions:bindActionCreators(userinfoActions,dispatch)
    }
}
export default connect( mapStateToProps,mapDispatchToProps )(Login)