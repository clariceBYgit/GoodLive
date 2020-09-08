import React, { Component } from 'react'
import './style.less'
export default class Header extends Component {
    goBack = () => {
        window.history.back(-1)
    }
    render() {
        return (
            <div className='header'>
                <i onClick={ this.goBack } className='icon-chevron-left'></i>
                <h1>{ this.props.title}</h1>
            </div>
        )
    }
}
