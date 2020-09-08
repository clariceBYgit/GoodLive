import React, { Component } from 'react'
import Item from './Item'
import './style.less'
export default class CommentView extends Component {
   
    render() {
        const data = this.props.comments
        //  console.log(data)
        return (
            <div className='comment-list'>
                {
                    data.data.map((item,index)=>{
                        return <Item key={index} data={item} />
                    })
                }
                {
                    // this.state.hasMore ? <LoadMore /> : <div>被你看光了哦....</div>
                }
            </div>
        )
    }
}
