

// import axios from 'axios';
// // import {Message, MessageBox} from 'element-ui';

// // 创建axios实例
// const service = axios.create({
//   // baseURL: process.env.BASE_API, // api的base_url
//   timeout: 10000, // 请求超时时间
// });

// // request拦截器
// service.interceptors.request.use(config => {
// //   let token = getToken()
// //   if(token){
// //     config.headers['access-token'] = getToken();
// //   }
//   return config;
// }, error => {
//   console.log(error); // for debug
//   Promise.reject(error);
// })

// // respone拦截器
// service.interceptors.response.use(response => {
//     return response.data;
//     /**
//      * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
//      * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
//      */
//     // const res = response.data;
//     // if (response.status === 401 || res.status === 40101) {
//     //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//     //     confirmButtonText: '重新登录',
//     //     cancelButtonText: '取消',
//     //     type: 'warning'
//     //   }).then(() => {
//     //     store.dispatch('FedLogOut').then(() => {
//     //       location.reload(); // 为了重新实例化vue-router对象 避免bug
//     //     });
//     //   })
//     //   return Promise.reject('error');
//     // }else if (res.status === 10101) {
//     //   Message({
//     //     message: '当前用户无相关操作权限！',
//     //     type: 'error',
//     //     duration: 5 * 1000
//     //   });
//     //   return Promise.reject('error');
//     // }else if (response.status !== 200) {
//     //   Message({
//     //     message: res.message,
//     //     type: 'error',
//     //     duration: 2 * 1000
//     //   });
//     //   return Promise.reject('error');
//     // } else {
//     //   return response.data;
//     // }
//   },
//   error => {
//     console.log('err' + error); //for debug
//     return Promise.reject(error);
//   }
// );

// export default service;



// import config from 'config'
import axios from 'axios'

const instance = axios.create({
    // baseURL: config.apiBaseUrl, // api的base_url
    timeout: 10000,               // 请求超时时间
    // transformRequest: data => qs.stringify(data) 
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
// 最后暴露实例
export default instance