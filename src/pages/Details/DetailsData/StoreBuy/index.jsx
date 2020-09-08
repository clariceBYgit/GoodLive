import React, { Component } from 'react'
import StoreBuyView from './StoreBuyView'
// 判断是否登录只有登录才可以收藏或购买  连接redux
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as collectActions from '../../../../actions/collect'
import { bindActionCreators } from 'redux'

 class StoreBuy extends Component {
    /**
     * 详情页试图页面 -> 收藏与购买的业务逻辑 -> 收藏月购买的视图
     * 
     */ 
    constructor(){
        super()
        this.state={
            collected:false
        }
    }
    componentDidMount(){
        // 设置收藏的值
        this.setState({
            collected:this.isStore()
        })
    }

    storeHandler = () => {
        // 判断是否登录只有登录才可以收藏或购买
        // 收藏实现 由于没有后端 因此采取前端redux的形式进行模拟
        if(this.props.userinfo.name || localStorage.getItem('name')){
            // console.log(this.props.userinfo.name)
            if( this.isStore() ){
                // 取消收藏
                this.props.collectActions.cancelCollect({
                    id: this.props.id
                })
                this.setState({
                    collected:false
                })
            }else{
                // 收藏实现
                this.props.collectActions.setCollect({
                    id:this.props.id
                })
                this.setState({
                    collected:true
                })
            }
        }else{

            // 否则去登录
            this.props.history.push('/login')
        }

    }
    /**
     * 收藏判断
     */
    isStore(){
        // filter some every 遍历方法
        // some
        const id = this.props.id
        const collects = this.props.collect
        return collects.some( (ele) => {
            return ele.id === id  //代表存在 已收藏
        } )
    }
    
    buyHandler = () => {
        console.log('购买')
    }

    render() {
        // console.log(this.props.id)
        return (
            <div>
                <StoreBuyView  
                    onStoreHandler={this.storeHandler} 
                    onBuyHandler={this.buyHandler} 
                    isCollected={this.state.collected}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        userinfo:state.userinfo,
        collect:state.collect
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        collectActions:bindActionCreators(collectActions,dispatch)
    }
}

export default withRouter(connect( mapStateToProps, mapDispatchToProps )(StoreBuy))