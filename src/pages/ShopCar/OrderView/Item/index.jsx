import React, { Component } from 'react'
import './style.less'
import api from '../../../../api'
export default class Item extends Component {
    constructor() {
        super()
        this.state = {
            commentState: 0
        }
        // 通过React.createRef 获取 评价框的数据
        this.commentData = React.createRef()
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        })
    }
    commentHandler = () => {
        this.setState({
            commentState:1
        })
    }

    // 提交评价  并向提交订单评价接口 发送请求 post
    submitCommentHandler = () =>{
        this.setState({
            commentState:2
        })
        api.ordercomment.orderCommentData(
            {info:this.commentData.current.value}
        ).then( res => res.json())
        .then(data => {
            alert(data.msg)
        }
        )
    }   

    // 取消评价
    hideComment = () => {
        this.setState({
            commentState:0
        })
    }

    render() {
        const item = this.props.data
        // console.log(item)
        return (
            <div className='order-view'>
                <div className='views'>
                    <img src={item.img} alt="" />
                    <div className='view-middle'>
                        <p>商户：{item.title}</p>
                        <p>类型：{item.houseType}</p>
                        <p>价格：{item.price}</p>
                    </div>
                    <div className='view-right'>
                        {
                            this.state.commentState === 0 ?
                                <button className='btn' onClick={this.commentHandler}>评价</button>
                                :this.state.commentState === 1 ?
                                <button className='btn'>评价中...</button>
                                : <button className='btn unselected'>已评价</button>
                        }
                    </div>
                    {/* 评价框视图 */}
                    {
                        this.state.commentState === 1 ?
                            <div className='comment-box'>
                                <textarea ref={this.commentData} name="" id="" cols="30" rows="10"></textarea>
                                <button onClick={this.submitCommentHandler} className='btn'>提交</button>
                                <button onClick={this.hideComment} className='btn unselected'>取消</button>
                            </div>
                            : ''
                    }

                </div>
            </div>
        )
    }
}
