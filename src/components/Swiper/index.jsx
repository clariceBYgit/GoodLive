import React, { Component } from 'react'


// 可使用github.com 搜索react-swiper查找对应的组件  
// eg:  npm install --save react-swipeable-views

import SwipeableViews from 'react-swipeable-views';
//引入自动播放
import { autoPlay } from 'react-swipeable-views-utils'
import './style.less'
import Pagination from './Pagination'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)
export default class Swiper extends Component {
    constructor(){
        super()
        this.state={
            currentIndex:0
        }
    }
    // 获取当前图标的下标 传入pagination做高亮圆点
    handleChangeIndex = index =>{
        // console.log(index)
        this.setState({
            currentIndex:index
        })
    }
    render() {
        const banners = this.props.banners
        // console.log(banners)
        return (
            <div className='swiper-container'>
                <AutoPlaySwipeableViews onChangeIndex={this.handleChangeIndex}>
                    {
                        banners.map((items,index) => {
                            return (
                                <div className='swiper-item' key={index}>
                                    <img src={items} alt=""/>
                                </div>
                            )
                            }
                          
                        )
                    }
                </AutoPlaySwipeableViews>
                <Pagination currentIndex={this.state.currentIndex} dots={banners.length} />
            </div>
        )
    }
}
