// 评价接口

import base from './base'
import { getData } from '../utils/http'

const comment = {
    getCommentData(id,page){
        return getData(base.comment+'?id='+id+'&page='+page)
    }
}
export default comment