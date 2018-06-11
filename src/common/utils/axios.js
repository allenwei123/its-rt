import axios from 'axios';
import store from '@/store'

let service = axios.create({
  baseURL: 'http://dev.apismcm.bitiot.com.cn/v1',
  timeout: 5000 // request timeout
});

service.interceptors.request.use(config => {
  config.headers['OS'] = '3';
  config.headers['OS-VERSION'] = '3';
  config.headers['DEVICE-ID'] = 'h5';
  config.headers['DEVICE-TYPE'] = 'h5';
  config.headers['PUSH-ID'] = '10086';
  config.headers['CLIENT'] = '1002';
  config.headers['Content-Type'] = 'application/json';
  config.headers['BIT-CID'] = '5a82adf3b06c97e0cd6c0f3d'

  // token
  if (store.getState('token')['Test'].token) {
    config.headers['BIT-TOKEN'] = store.getState('token')['Test'].token
  }

  // uid
  if (store.getState('token')['Test'].uid) {
    config.headers['BIT-UID'] = store.getState('token')['Test'].uid
  }

  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  res => {
    if (res.data) {
      if(res.data.errorCode === 9050001) {
          alert('登陆过期')
      }else if(res.data.errorCode !== 0) {
        alert('页面错误')
      }
    }

    return res.data || res;
  }, error => {
    alert('链接错误,请联系管理员')
    return Promise.reject(error)
  }
)

export default service;
