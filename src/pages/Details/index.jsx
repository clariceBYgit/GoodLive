import React, { Component } from 'react'

import DetailsData from './DetailsData'
export default class Details extends Component {
 
        render() {
        // 根据每件商品的id进行详情页的显示 this.props.match.params.id
        // console.log(this.props.match.params.id)
        return (
            <div>
                <DetailsData id={this.props.match.params.id} />
            </div>
        )
    }
}
