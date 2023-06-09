import axios from 'axios'

//默认超时时间
axios.defaults.timeout = 120000
// axios.defaults.baseURL ='http://localhost:8080'
axios.defaults.baseURL ='http://1.12.218.227:8080'
//http request拦截
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
//http response 拦截
axios.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    return Promise.reject(new Error(error))
  }
)

export default axios
