/**
 * 提交订单评论接口
 */
import base from './base'
// 使用post
import { postData } from '../utils/http'
const ordercomment = {
    orderCommentData(info){
        return postData(base.ordercomment,info)
    }
}
export default ordercomment