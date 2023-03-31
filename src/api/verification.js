
import request from '@/utils/request'

/*
    管理验证操作
*/

//账号登录
export const checkLogin = (data)=>{
    return request({
        method:"post",
        url:"/verification/account/login",
        //post携带的参数
        data
    })
}
//邮箱登录 
export const emailLogin = (data)=>{
    return request({
        method:"post",
        url:"/verification/email/login",
        headers:{ 'content-type': 'application/x-www-form-urlencoded' },
        data:data,
    })
}

//账号是否存在
export const accountExist = (account)=>{
    return request.get("/verification/account/exist/"+account)
}

//判断账号是否绑定
export const emailExist = (email)=>{
    return request.get('/verification/email/exist?email='+email)
}

//发送验证码
export const sendEmailCode = (email)=>{
    return request.get('/verification/email/send/code?email='+email)
}

//邮箱注册
export const emailRegister = (data)=>{
    return request({
        method:"post",
        url:"/verification/email/register",
        data
    })
}

//修改密码
export const updatePassword = (data)=>{
    return request({
        method:"post",
        url:"/verification/email/update/password",
        headers:{ 'content-type': 'application/x-www-form-urlencoded' },
        data
    })
}

//邮箱绑定
export const emailBindAccount = (data)=>{
    return request({
        method:"POST",
        url:"/verification/email/bind",
        headers:{ 'content-type': 'application/x-www-form-urlencoded' },
        data,
    })
}





