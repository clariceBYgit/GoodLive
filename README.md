1.配置less
  npm i --save less less-loader
  npm run eject 获取配置文件
   在config文件夹下找到webpack.config.js 搜索sass，按照sass配置less

2. rem的适配
<script>
      (function ( doc, win) {
        var docEl = doc.documentElement,
          resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
          recalc = function(){
            var clientWidth = docEl.clientWidth
            if(!clientWidth) return;
            if(clientWidth>=750){//iPhone 6 的比例
              docEl.style.fontSize = '100px'
            }else{
              docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
            }
          }
          if(!doc.addEventListener) return;
          win.addEventListener(resizeEvt, recalc, false)
          doc.addEventListener('DOMContentLoaded', recalc, false)
        })(document,window)
    </script>

    3.路由配置
      npm i --save react-router-dom react-router

    4.初始化文件 一般在static
     common.less 等

    5.前端解决跨域
      npm i http-proxy-middleware --save
       
    6.city关联redux
     前端
        redux的调试
      调试流程
     Chrome浏览器需要安装插件   Redux Devtools
     安装依赖  npm install --save-dev redux-devtools-extension
     使用
        import { composeWithDevTools } from 'redux-devtools-extension'
      

        const store = createStore( rootReducer,composeWithDevTools( applyMiddleware(logger,thunk) ) )

      7.上拉加载组件 LoadMore
             包含了节流防抖的知识点
             清除滚动事件 清除定时器 state重置

      8. react 框架的结构查询React Developer Tools

      9.tab切换   包含使用React.Children.map()的使用