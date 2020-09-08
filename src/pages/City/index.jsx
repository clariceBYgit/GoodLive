import React, { Component } from 'react'
// 改版后的头部
// import CityHeader from './CityHeader'  



// 旧头部
import { 
    Header
} from '../../components'

import CurrentCity from './CurrentCity'
import HotCity from './HotCity'
import { connect } from 'react-redux'
// 将选择的city写入redux
import * as cityActions from '../../actions/city'
import { bindActionCreators } from 'redux'

/*/**
 * 城市初始化来源;
 1.定位
 2.用户选择
 3.程序自动赋值
 */
 class City extends Component {
     
    onCityNameHandler = (cityName) => {
        this.props.cityActions.updateCity({
            cityName
        })
        // 选好位置好返回上一页
        window.history.back(-1)
        // 用户修改城市需要存储（将城市进行转码） encodeURIComponent(str);
        // decodeURIComponent()进行解密
        // localStorage.setItem('city',encodeURIComponent(cityName))
        localStorage.setItem('city',cityName)
    }
    render() {
        return (
            <div>
                <Header title='城市选择' />
                <CurrentCity city={ this.props.city.cityName } />
                <HotCity cityNameHandler={ this.onCityNameHandler } />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        city:state.city
    }
}
const mapDispatchToProps = dispatch => {
    return {
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(City)