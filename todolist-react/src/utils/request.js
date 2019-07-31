import axios from 'axios'

const service = axios.create()

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log('请求拦截器', error)
  }
)

service.interceptors.response.use(response => {
  const res = response.data
  console.log(response)
  if (res.result !== 'SUCCESS') {
  } else {
    return response.data
  }
})

export default service
