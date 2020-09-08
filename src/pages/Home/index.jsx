import React, { Component } from 'react'
import {
    FootNav,
    Swiper
 } from '../../components'

 import HomeHeader from './HomeHeader'
 import HomeHot from './HomeHot'
//  引入图片
import banner1 from '../../static/images/banner1.png'
import banner2 from '../../static/images/banner2.png'
import banner3 from '../../static/images/banner3.png'

import { connect } from 'react-redux'
class Home extends Component {
    
    render() {
        return (
            <div>
                <HomeHeader city={  this.props.city.cityName} />
                <Swiper banners={[banner1, banner2, banner3]} />
                <HomeHot city={  this.props.city.cityName} />
                <FootNav />
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
return {
    city:state.city
}
}

export default connect(mapStateToProps)(Home)