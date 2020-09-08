import React, { Component } from 'react'
import './style.less'
export default class index extends Component {
    render() {
        const { dots, currentIndex } = this.props
        const dotsArr = new Array(dots).fill(1) //将数字变为数组，用1进行填充
        // console.log(currentIndex)
        return (
            <div className='pagination'>
                <ul>
                    {
                        dotsArr.map((item,index)=>{
                            return <li className={ currentIndex===index ? 'select' : ''} key={index}></li>
                        })
                    }  
                 
                </ul>
            </div>
        )
    }
}
