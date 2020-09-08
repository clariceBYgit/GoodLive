import React, { Component } from 'react'
import './style.less'
export default class UserView extends Component {
    render() {
        // console.log(this.props)
        const { name, city } = this.props
        return (
            <div className='user-view'>
                <div>
                    <i className='icon-user'></i>
                    {name}
                </div>
                <div>
                    <i className='icon-map-marker'></i>
                    {city}
                </div>
            </div>
        )
    }
}
