
import axios from 'axios'

const instance = axios.create({
    timeout: 10000 // 请求超时时间
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})
// 最后暴露实例
export default instance
