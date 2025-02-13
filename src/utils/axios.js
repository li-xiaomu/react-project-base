import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { message } from 'antd'


axios.defaults.timeout = 60000
// NProgress 配置
NProgress.configure({
  showSpinner: false
})

//跨域请求，允许保存cookie
axios.defaults.withCredentials = true


let loadingCount = 0;
let loadingInstance = null;
// 显示 Spin 组件
const showSpin = () => {
  if (loadingCount === 0) {
    loadingInstance = message.loading({ content: 'Loading...', duration: 0 });
  }
  loadingCount++;
};

// 隐藏 Spin 组件
const hideSpin = () => {
  if (loadingCount > 0) {
    loadingCount--;
    if (loadingCount === 0) {
      loadingInstance();
    }
  }
};
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  showSpin()
  NProgress.start()
  if (config.text === true) {
    config.headers['Content-Type'] = 'text/plain'
  }
  if (config.headers.formData === true) {
    const data = new FormData()
    for (let key in config.data) {
      data.append(key, config.data[key])
    }
    config.data = data
    config.headers['Content-Type'] = 'multipart/form-data'
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  showSpin()
  NProgress.start()
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  NProgress.done()
  hideSpin()
  return response;
}, function (error) {
  const msg = error?.response?.data?.msg || '请求失败'
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  NProgress.done()
  hideSpin()
  message.error(msg)
  return Promise.reject(error)
});

export default axios