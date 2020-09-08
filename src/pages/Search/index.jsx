import React, { Component } from 'react'
import SearchHeader from './SearchHeader'
import SearchList from './SearchList'
// import api from '../../api'


// 关联城市 redux
import { connect } from 'react-redux'

class Search extends Component {
    render() {
        const city = this.props.city.cityName
        const content = this.props.match.params.content
        return (
            <div>
                <SearchHeader />
                <SearchList city={city} content={content} />
             
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        city:state.city
    }
}

export default connect(mapStateToProps)(Search)