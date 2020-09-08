import React, { Component } from 'react'
import './style.less'
export default class Star extends Component {
    render() {
        let star = this.props.star
        // console.log(star)
        if(star >= 5){
            star=5
        }
        return (
            <div className='star-container'>
                {
                    [1,2,3,4,5].map((item,index)=>{
                        // star是参数
                        let lightClass = star >= item ? ' light' : ''
                        return <i key={index} className={'icon-star'+ lightClass}></i>
                    }
                        
                    )
                }
            </div>
        )
    }
}
