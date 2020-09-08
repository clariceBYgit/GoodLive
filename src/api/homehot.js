// 首页热河推荐接口
import base from './base'
import { getData } from '../utils/http'

const homehot = {
    homehot1Data(city){
        // 读取city并作为参数(get请求进行拼接)发送回后端
        return getData(base.homehot1+"?city="+city)
    },
    homehot2Data(city){
        return getData(base.homehot2+"?city="+city)
    }
}

export default homehot