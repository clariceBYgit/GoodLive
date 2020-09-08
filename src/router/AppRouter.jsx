import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import {  
    Home,
    Shop,
    Life,
    Mine,
    NotFound,
    City,
    Search,
    Details,
    Login,
    ShopCar

} from '../pages'

// 由于需要城市初始化 我们使用App.jsx作为最外层的页面，用于处理
import App from '../App'
export default class AppRouter extends Component {
    render() {
        return (
            <Router>
                <App path='/'>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/life' component={Life}></Route>
                        <Route path='/shop' component={Shop}></Route>
                        <Route path='/mine' component={Mine}></Route>
                        <Route path='/city' component={City}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/shopcar' component={ShopCar}></Route>
                        <Route path='/details/:id' component={Details}></Route>
                        <Route path='/search/:content' component={Search}></Route>
                        <Route  component={NotFound}></Route>
                    
                    </Switch>
                       
                </App>
            </Router>
        )
    }
}
