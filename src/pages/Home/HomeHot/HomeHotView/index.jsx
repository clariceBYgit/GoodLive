import React, { Component } from 'react'
import './style.less'


export default class HomeHotView extends Component {
   
    render() {
        const  data = this.props.data
        // console.log(data)
        return (
            <div className='homehot-view'> 
               
                {
                    data.map((item,index)=>{
                        return(
                            // <div >
                                <div className='views-container' key={index}>
                                    <a href={item.link}>
                                        <img src={item.img} alt=""/>
                                        <p>{item.title}</p>
                                    </a>
                                </div>

                            // </div>
                        )
                    })
                }
            </div>
        )
    }
}
