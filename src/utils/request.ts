// 封装axios
import axios, { AxiosError } from 'axios'
import { Toast } from 'antd-mobile'
import { getToken } from './storage'
const instance = axios.create({
    baseURL: 'http://geek.itheima.net/v1_0/',
    timeout: 5000,
})

// 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        const token = getToken().token
        if (token) {
            config.headers!.Authorization = `Bearer ${token}`
        }
        return config
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)

// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        return response
    },
    function (error: AxiosError<{ message: string }>) {
        if (!error.response) {
            Toast.show('网络繁忙，请稍后重试')
            return Promise.reject(error)
        }
        Toast.show(error.response.data.message)
        // 对响应错误做点什么
        return Promise.reject(error)
    }
)

export default instance
