import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
// 引入公共less
import './static/css/common.less'
// 引入图标库 两个
import './static/css/font.css'
import './static/css/iconfont.css'

// 关联redux
import { Provider } from 'react-redux'
import configureStore from './store'
const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  document.getElementById('root')
);

