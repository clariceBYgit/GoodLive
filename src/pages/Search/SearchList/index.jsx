import React, { Component } from 'react'
import api from '../../../api'
import SearchListView from './SearchListView'

import {
    LoadMore
} from '../../../components'

export default class SearchList extends Component {
    constructor(){
        super()
        this.state={
            searchList:[],
            //数据 加载完毕
            hasMore:false,
            page:0
        }
    }

    componentDidMount(){
        const { city, content } = this.props
        // console.log(city,content)
        this.http(city,content,this.state.page)  //初次加载页码为0
        
        
    }
        // 多次使用 封装网络请求
        http(city,content,page){
            api.search.searchData(city, content,page)
            .then(res => res.json())
            .then( data => {
                this.setState({
                    // 数据合并  对象的话可以使用object.assgin() 数组可以使用 contact
                    searchList:this.state.searchList.concat(data.data),
                    // 获取后端传来的hasMore
                    hasMore:data.hasMore,
                    page:this.state.page+1 //数据页码设置
                })
            })
        }
    

    // 处理再次搜索 页码为0
    componentWillUpdate(prevProps,prevState){
        // prevProps 上一次的props
        // prevState 上一次的state
        // console.log(prevProps)
        // 再次做网络请求
        const { city, content } = this.props
        if(prevProps.content !== content){
            // 再次搜索 页码为0
            this.http(city,content,0)
        }

    }
    
    // 将再次搜索网络请求方法传入LoadMore组件
    loadMore = ()=>{
        const { city, content } = this.props
        this.http(city,content,this.state.page)
        console.log('触发加载')
    }

    // componentWillUnmount  可以执行任何清除方法
    //   1.清除计时器
    //   2.断开网络请求
    //   3.解绑dom事件 
    // 组件卸载时 断开网络情求  state重置
    componentWillUnmount(){
      this.setState = (state,callback) =>{
          return
      }
    }

    render() {
        return (
            <div>
                {
                    this.state.searchList ? 
                    <SearchListView searchList={this.state.searchList} />
                    :
                    <div>数据正在加载....</div>
                }
                {
                    // 判断数据是否已经加载完毕
                    this.state.hasMore ? 
                    <LoadMore  onLoadMore={ this.loadMore } />
                    : <div>被你看光了哦！</div>
                }
                   
            </div>
        )
    }
}
