/**
 * 收藏
 */

 import * as collectActions from '../constants/collect'
//  会有多个商品的收藏与取消 数组
const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

    case collectActions.COLLECT:
        //数组push 返回数组长度

        /**
         * 问题 redux,不要直接修改state 可能会出现数据改变ui视图不变 redux不会继续响应
         * 官方推荐 object.assign()  
         * （其实更好的是数组拷贝，必须利用深度拷贝，浅拷贝不可以，因其并没有改变引用关系）
         */
        
         state.push(action.data)
        //  console.log(state)
         return state;
         case collectActions.UNCOLLECT:
             // 过滤数组
             // eslint-disable-next-line array-callback-return
             return state.filter((ele)=>{
                 if(ele.id !== action.data.id){
                     return ele
                    }
                })
    default:
        return state
    }
}
