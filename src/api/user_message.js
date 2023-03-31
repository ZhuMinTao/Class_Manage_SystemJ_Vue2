import request from '@/utils/request'

//查询用户详情
export const selectUserDetail = (data)=>{
    return request.request({
        url:"/user/detail/msg",
        data,
        headers:{
            token:localStorage.getItem("new_class_system_token")
        }
    })
}

//修改用户信息
export const updateUserMessage = (data)=>{
    return request({
        url:'/user/detail/update',
        data,
        method:"POST"
    })
}

//查询用户绑定信息
export const selectUserBindMessage = ()=>{
    return request({
        url:'/function/bind_message'
    })
}

//更改邮箱绑定
export const updateBindEmail = (data)=>{
    return request({
        method:"POST",
        data,
        url:"/user/update_email_bind",
        headers:{ 'content-type': 'application/x-www-form-urlencoded' },
    })
}

//查询指定班级的用户 
export const selectUserByclassId = (data)=>{
    return request({
        params:data,
        url:'/user/by/class_number'
    })
}


