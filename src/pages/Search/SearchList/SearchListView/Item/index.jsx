import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.less'
export default class Item extends Component {
    render() {
        // console.log(this.props.item)
        const item = this.props.item
        return (
            <div className='item'>
                <Link to={`/details/${item.id}`}>
                    <img src={ item.img } alt=""/>
                    <div className='mask'>
                        <div className='left'>
                            <p>{ item.title }</p>
                            <p>{ item.houseType }</p>
                        </div>
                        <div className='right'>
                            <div className='btn'>{ item.rentType } </div>
                            {/* dangerouslySetInnerHTML 用于匹配标签 相当于innerHTML */}
                            <p dangerouslySetInnerHTML={{__html:item.price+'/月'}}></p>
                        </div>
                    </div>
           
                </Link>
           
            </div> 
        )
    }
}
