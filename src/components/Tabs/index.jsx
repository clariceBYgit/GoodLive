import React, { Component } from 'react'
import './style.less'
export default class Tabs extends Component {
    constructor(){
        super()
        this.state={
            currentIndex:0
        }
    }
    /**
     * <tabs>
     *      <tab tabname='标题一'>
     *          <div>内容1</div>
     *       </tab>
     *      <tab tabname='标题二'>
     *          <div>内容2</div>
     *       </tab>
     * </tabs>
     * 获取结构的方案：props.children
     * 
     * <div>标题</div>
     * <div>内容</div>
     * 
     */

    // 标题选中的class样式
    check_title_index = (index) => {
        return index ===this.state.currentIndex ? 'active active_border' : ""
    }
    titleCheck(index){
        // console.log(index)
        this.setState({
            currentIndex:index
        })
    }

    check_item_index = index => {
        return index === this.state.currentIndex ? 'show' : 'hiden'
    }
    render() {
        return (
            <div className='tab_view'>
                <div className='Tab_title_wrap'>
                   {
                    //    console.log(React.Children)
                    React.Children.map(this.props.children,(ele,index)=>{
                        return(
                            <div 
                                className={this.check_title_index(index)}
                                onClick={this.titleCheck.bind(this,index)}    
                            >{ele.props.tabname}</div>
                        )
                    })
                   } 
                </div>
                <div className='Tab_item_wrap'>
                   {
                       React.Children.map(this.props.children,(ele,index)=>{
                           return(
                                <div className={this.check_item_index(index)}>{ele.props.children}</div>
                           )
                       })
                   }
                </div>
            </div>
        )
    }
}
