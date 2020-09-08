import React, { Component } from 'react'
import './style.less'
export default class LoadMore extends Component {
    constructor(){
        super()
        this.load = React.createRef()
    }

    componentDidMount(){
        // 做数据的再次加载 
        // 获取 加载更多的Dom对象
        // console.log(this.load.current)
        // 做页面的滚动的事件监听
        let winHeight = document.documentElement.clientHeight 
        let timer = null
        // console.log(winHeight) //667
        window.onscroll = (event)=>{
            if(timer){
                clearTimeout(timer)
            }
           // console.log(this.load.current.getBoundingClientRect().top) //大致滚动到加载更多元素出为 650
            timer = setTimeout(()=>{
               // 做节流防抖加载
                if(this.load.current.getBoundingClientRect().top < winHeight){
                    // 该做做网络请求加载数据时
                    this.props.onLoadMore()
                }
            },100)
        }   
        
    }

    // 组件卸载 清楚滚动事件
    componentWillUnmount(){
        window.onscroll = null
    }

    render() {
        // console.log(this.props)
        return (
            <div ref={ this.load }>
                加载更多
            </div>
        )
    }
}
