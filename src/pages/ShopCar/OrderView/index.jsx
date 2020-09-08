import React, { Component } from 'react'
import Item from './Item'
export default class OrderView extends Component {

  

    render() {
        const order = this.props.order
        return (
            <div>    
               {
                   order.map((item,index)=>{
                       return(
                           <Item key={index} data={item} />
                       )
                   })
               }
            </div>
        )
    }
}
