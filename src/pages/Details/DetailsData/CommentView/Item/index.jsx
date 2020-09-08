import React, { Component } from 'react'
import './style.less'
import {
    Star,
} from '../../../../../components'
export default class Item extends Component {
    render() {
        const {comment, username,star} = this.props.data
        // console.log(comment,username,star)
        return (
            <div className='comment-item'>
                <h3>
                    <i className='icon-user'>&nbsp;</i>
                    
                    <span>{username}</span> 

                </h3>
                <Star star={star} />
                <p>{comment}</p>
            </div>
        )
    }
}
