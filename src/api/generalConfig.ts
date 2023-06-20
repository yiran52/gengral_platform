// axios.ts

import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3005/'
})

instance.interceptors.response.use(
  (response) => {
    const { code, message } = response.data
    if (code === 0) {
      return response?.data
    } else {
      const e = new Error(message)
      return Promise.reject(e)
    }
  },
  (error: any) => {
    console.error(error)
    return Promise.reject(error) //会对具体请求后错误进行进一步处理
  }
)

export default instance
