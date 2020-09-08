/**
 * 订单接口
 */
import base from './base'
 import { getData } from '../utils/http'

const order={
    orderData(user){
        // 读取city并作为参数(get请求进行拼接)发送回后端
        return getData(base.order+"?user="+user)
    },
}

export default order