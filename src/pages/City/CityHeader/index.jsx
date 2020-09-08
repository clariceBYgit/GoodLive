import React, { Component } from 'react'
import './styles.less'
export default class CityHeader extends Component {
    goBack = () => {
        window.history.back()
    }
        render() {
        return (
            <div className='city-header'>
                <i onClick={ this.goBack } className='icon-chevron-left back'></i>
                <input type="text"/>
                <i className='icon-search search'></i>
            </div>
        )
    }
}
