import React, { Component } from 'react'
import HomeHotView from './HomeHotView'
import api from '../../../api'
import './style.less'
export default class HomeHot extends Component {
    constructor(){
        super()
        this.state={
            hot1:[],
            hot2:[]
        }
    }
    componentDidMount(){
        // 读取city，初次进入 city为undefined 需要进行默认数据 初始化数据时App.jsx先读取本地是否存在城市
        const city = this.props.city || localStorage.getItem('city') || '北京'
        // console.log(decodeURIComponent(city))
        api.homehot.homehot1Data(city)
        .then(res=>res.json())
        .then(data => {
           this.setState({
               hot1:data
           })
        })

        api.homehot.homehot2Data(city)
        .then(res=>res.json())
        .then(data => {
            this.setState({
                hot2:data
            })
        })
    }
    render() {
        const { hot1,hot2 } = this.state
        // console.log(hot1,hot2)
        return (
            <div className='homehot-container'>
                <div className='title-btns'>
                    <div className='title-btn'>
                        <p>新品上市</p>
                    </div>
                    <div className='title-btn'>
                        <p>二手商城</p>
                    </div>
                </div>
               
                {
                    hot1.length>0?(
                        <div className='hot-title clear-fix'>
                            <p className='hot-title1'>热销单品</p>
                            <HomeHotView data={ hot1 } />
                        </div>
                    )
                    :
                    <div>数据正在请求</div>

                }
                {
                   hot2.length>0?(
                    <div className='hot-title clear-fix'>
                        <p className='hot-title1'>家庭常用</p>
                        <HomeHotView data={ hot2 } />
                    </div>
                )
                   :
                   <div>数据正在请求</div>
 
                }
            </div>
        )
    }
}
