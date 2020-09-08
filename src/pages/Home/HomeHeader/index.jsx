import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.less'
import {
    SearchInput
} from '../../../components'
export default class index extends Component {

    render() {
        // console.log(this.props)
        return (
            <div id='Home-header' className='clear-fix'>
                <div className='header-left float-left'>
                    <span>
                        <Link to='/city'>{ this.props.city}</Link>
                    </span>
                        <i className='icon-angle-down'></i>
                </div>
                <div  className='header-right float-right'>
                        <Link to='/shopcar'>  
                            <i className='iconfont icon-car'></i>
                        </Link>
                </div>
                <div  className='header-middle'>
                    {/* <div className='search-container'> */}
                        <i className='icon-search'></i>
                        {/* <input type="text"/> */}
                        <SearchInput />
                    {/* </div> */}
                </div>
               
               
            </div>
        )
    }
}
