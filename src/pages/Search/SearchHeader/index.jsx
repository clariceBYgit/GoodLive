import React, { Component } from 'react'
import './style.less'
import { 
    SearchInput 
} from '../../../components'
export default class SearchHeader extends Component {
    goBack = () => {
        window.history.back()
    }
    render() {
        return (
            <div className='search-header'>
                <i onClick={ this.goBack } className='icon-chevron-left back'></i>
                <SearchInput />
                <i className='icon-search search'></i>
            </div>
        )
    }
}
