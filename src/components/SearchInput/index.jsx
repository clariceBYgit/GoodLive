import React, { Component } from 'react'
// import './style.less'
import { withRouter } from 'react-router-dom'
class SearchInput extends Component {
    constructor(){
        super()
        this.state={
            inputVal:""
        }
    }
    getSerchVal = (e)=> {
        // console.log(e.target.value)
        this.setState({
            inputVal:e.target.value
        })
    }
    onKeyUpEvent = (e) => {
        // 回车判断
        if(e.keyCode === 13){
            // console.log(e.target.value)
            // 动态路由跳转
            // this.props.history.push({pathname:'/search', searchVal:e.target.value})
            this.props.history.push('/search/'+this.state.inputVal)
            
        }
    }
    render() {
        return (
            <div className='search-input'>
                <input 
                    type="text" 
                    placeholder="请输入搜索内容" 
                    onChange={ this.getSerchVal } 
                    value={ this.state.inputVal }
                    onKeyUp={ this.onKeyUpEvent }
                    
                />
            </div>
        )
    }
}

export default withRouter(SearchInput)