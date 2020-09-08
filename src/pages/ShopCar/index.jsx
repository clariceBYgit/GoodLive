import React, { Component } from 'react'
import OrderView from './OrderView'
import UserView from './UserView'
import {
    Header
} from '../../components'
// 关联redux
import { connect } from 'react-redux'

// 做请求
import api from '../../api'

class ShopCar extends Component {
    /**
     * 判断是否登录 是有登录后才能进入购物车
     */

    constructor() {
        super()
        this.state = {
            order: []
        }
    }


    componentWillMount() {
        const userinfo = this.props.userinfo.name || localStorage.getItem('name')
        if (userinfo) {
            //网络请求
            api.order.orderData(userinfo)
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        order: data
                    })
                    // console.log(data)
                })

        } else {
            //重定向到登录
            this.props.history.push('/login')
        }


    }
    render() {
        return (
            <div>
                <Header title='购物车' />
                <UserView city={this.props.city.cityName} name={this.props.userinfo.name} />
                {
                    this.state.order ?
                        <OrderView order={this.state.order} />
                        : <div>数据加载中。。。。</div>
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        userinfo: state.userinfo,
        city: state.city
    }
}

export default connect(mapStateToProps)(ShopCar)