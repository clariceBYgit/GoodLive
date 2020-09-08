import { createStore } from 'redux'
import rootReducers from '../reducer'



export  default function configureStore(){
    const store = createStore(rootReducers,
        // Redux DevTools 扩展的使用说明
        // 从2.7开始，window.devToolsExtension重命名为window.__REDUX_DEVTOOLS_EXTENSION__/ window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__.
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        
    )
    return store
}