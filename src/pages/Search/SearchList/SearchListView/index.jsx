import React, { Component } from 'react'
import Item from './Item'
export default class SearchListView extends Component {
    render() {
        const searchList = this.props.searchList
        // console.log(searchList)
        /**
         * 数据会发生改变的情况下：
         *              key:坚决杜绝使用index下标作为唯一索引
         */
        return (
            <div className='list-item'>
                {
                    searchList.map((item,index)=>{
                        // 由于数据时模拟数据id会重复 此处模拟改为index会更好
                        // return <Item item={item}  key={item.id}/>  
                        return <Item item={item}  key={index}/>
                    })
                }
            </div>
        )
    }
}
