import axios from 'axios'
import qs from 'querystring'
import {message} from 'antd'
import _ from 'lodash'


export default function fetch (path, params, body_is_json) {
    params = _.cloneDeep(params || {})
    let url = 'http://localhost:8000' + path;
    let contentType = body_is_json === true ?  'application/json' : 'application/x-www-form-urlencoded'
    let body = body_is_json === true ? params : qs.stringify(params)
    return new Promise((resolve, rejecet) => {
        axios({
            url,
            method: 'post',
            header: {
                'Content-Type': contentType
            },
            data: params,
            timeout: 5000,
            responseType: 'json',
            responseEncoding: 'utf8'
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            console.log(error)
            message.error('请求错误,错误信息：' + error)
        })
    }) 
}
