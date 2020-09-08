


import React, { Component } from 'react'
import  { connect } from 'react-redux'
import * as cityActions from './actions/city'
import * as userinfoActions from './actions/userinfo'
import { bindActionCreators } from 'redux'

class App extends Component {
  /*/**
* 用于初始化需要
      1.城市初始化  关联redux
*/
componentDidMount(){
  // 后期  上海 可以来源于定位
  // 始化数据时App.jsx先读取本地是否存在城市 否则进行数据自定义初始化
  const city = localStorage.getItem('city')
  const userinfo = localStorage.getItem('name')
  // const cityIsEx = decodeURIComponent(city) //对encodeURLComponent()进行解码
  // console.log(userinfo)
  // if(cityIsEx === null){
  //   this.props.cityActions.initCity({
  //     cityName:'北京'
  //   })
  // }else{
  //   this.props.cityActions.initCity({
  //     cityName:cityIsEx
  //   })
  // }
  this.props.cityActions.initCity({
    cityName:city || '北京'
  })
  this.props.userinfoActions.loginUser({
    name:userinfo || ''
  })
 
}

  render() {
    return (
      <div>
         {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    city:state.city,
    userino:state.userinfo
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    cityActions:bindActionCreators(cityActions,dispatch),
    userinfoActions:bindActionCreators(userinfoActions,dispatch)
  }
}
export default connect( mapStateToProps,mapDispatchToProps )(App)