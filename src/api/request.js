// 对于 axios 进行二次封装
import axios from 'axios';
// 引入进度条
import NProgress from 'nprogress';
import "./nprogress.css"

const request = axios.create({
  baseURL: "/api/", // 基础路径
  timeout: 5000, // 请求超时时间
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // 进度条开始
  NProgress.start();
  // config：配置对象，内含重要属性，即 headers 请求头
  return config
})
// 响应拦截器
request.interceptors.response.use(
  (res) => {
    // 进度条结束
    NProgress.done();
    // NProgress.remove();
    // 成功即返回数据
    return res.data
  },
  (error) => { return Promise.reject(new Error('fail')) } // 失败
)
0
// 对外暴露
export default request;