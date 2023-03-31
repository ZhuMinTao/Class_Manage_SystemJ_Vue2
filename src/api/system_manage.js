import request from '@/utils/request'

//查询所有班级
export const getAllClassList = (params)=>{
    return request({
        url:'/system_class/all_msg',
        params,
    })
}
//查询老师管理的班级
export const getManageClassList = (params)=>{
    return request({
        url:'/system_class/manage_msg',
        params,
    })
}

//删除指定班级
export const deleteClass = (data)=>{
    return request({
        url:'/system_class/delete_point',
        method:"POST",
        data,
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
}

//获取老师列表
export const getTeacherList = ()=>{
    return request({
        url:'/user_manage/teacher_list'
    })
}

//新增班级
export const insertClass = (data)=>{
    return request({
        url:'/system_class/insert_class',
        data,
        method:"POST"
    })
}

//获取权限列表
export const getRolePowerList = ()=>{
    return request({
        url:'/power/power_list',
        method:"GET",
    })
}

//获取用户权限
export const getUserDefaultPower = (params)=>{
    return request({
        url:'/power/user_power',
        method:"GET",
        params,
    })
}

//设置用户权限
export const setUserRole = (data)=>{
    return request({
        url:'/power/power_user_set',
        method:"POST",
        data
    })
}

//新增账号
export const insertAccount = (data)=>{
    return request({
        url:"/verification/account/register",
        method:"POST",
        data,
    })
}