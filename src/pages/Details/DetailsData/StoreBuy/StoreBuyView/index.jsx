import React, { Component } from 'react'
import './style.less'
export default class StoreBuyView extends Component {
    storeHandler = () => {
        this.props.onStoreHandler()
    }
    
    buyHandler = () => {
        this.props.onBuyHandler()
    }
    render() {
        return (
            <div className='store-buy-view'>
                {
                    this.props.isCollected ? 
                    <button className='selected o' onClick={this.storeHandler}>已收藏</button>
                    :
                    <button className='selected' onClick={this.storeHandler}>收藏</button>
            }
               
               
                <button onClick={this.buyHandler}>购买</button>
            </div>
        )
    }
}
