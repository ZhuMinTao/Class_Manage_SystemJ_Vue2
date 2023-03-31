//导入axios
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1" //服务器地址

axios.defaults.timeout = 10000 //设置超时时间



//请求拦截
axios.interceptors.request.use(config=>{
    config.headers['token'] = localStorage.getItem("new_class_system_token")
    return config  //不做处理直接return
},err=>{
    return Promise.reject(err) //错误直接抛出不做处理
})

//响应拦截
axios.interceptors.response.use(res=>{
    return res  //不做处理直接return
},err=>{
    return Promise.reject(err) //错误直接抛出不做处理
})



export default axios


