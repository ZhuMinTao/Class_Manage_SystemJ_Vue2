import request from '@/utils/request'

export const selectCarouselByType = (data)=>{
    return request({
        url:"/slides_show/type/"+data.type
    })
}


//查询教务处bind用户信息
export const selectEduUser = (data)=>{
    return request({
        url:'/plan/is_bind_edu',
    })
}
//查询教务处成绩
export const selectShcoolSystemQuery = (data)=>{
    return request({
        url:'/plan/query/performance',
    })
}


//查询任务列表
export const selectTaskList = (data)=>{
    return request({
        url:'/function/upload_task_list',
        params:data,
    })
}

//上传某个任务
export const uploadTask = (data)=>{
    return request({
        url:'/function/upload/file_url',
        params:data
    })
}

//通过任务id查询某个任务
export const uploadTaskById = (data)=>{
    return request({
        url:'/function/upload_task_list/'+data.taskId
    })
}

//绑定教务系统
export const bindEduSystem = (data)=>{
    return request({
        url:'/plan/bind/edu_system',
        data,
        method:"POST",
        headers: {
            'Content-Type': 'multipart/form-data',
            "token":localStorage.getItem("new_class_system_token")
         },
    })
}

//查询教务系统课表
export const selectEduCourseTable = ()=>{
    return request({
        url:'/function/course_table'
    })
}

//修改绑定的教务处账号
export const updateBindEduSystem=(data)=>{
    return request({
        url:'/plan/update_bind/edu_system',
        data,
        method:"POST",
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
}

//删除上传任务

export const deleteTask = (data)=>{
    return request({
        url:'/function/delete_upload_task',
        data,
        method:"POST",
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
}
//新增上传任务
export const insertTask = (data)=>{
    return request({
        url:'/function/publish_upload_task',
        data,
        method:"POST",
    })
}

//更新上传任务
export const updateTask = (data)=>{
    return request({
        url:'/function/update_upload_task',
        data,
        method:"POST"
    })
}


//下载某个任务的上传文件
export const downLoadTask=(params)=>{
    return request({
        url:'/system/download/task_file',
        params,
        responseType: 'blob'  
    })
}

//查询所有未完成名单
export const selectUnfinishRoster = (params)=>{
    return request({
        url:'/function/task_unfinished_roster',
        params,
    })
}