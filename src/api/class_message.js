import request from '@/utils/request'


//查询班级卫生
export const selectClassHygiene = (data)=>{
    return request({
        url:`/plan/hygiene`,
        params:data
    })
    
}

//查询班级课六信息
export const selectClassCourseSix = (data)=>{
    return request({
        url:`/plan/course_six`,
        params:data
    })
}

//查询班级活动

export const selectClassActivity = (data)=>{
    return request({
        url:`/plan/activity`,
        params:data
    })
}

//查询班级信息
export const selectClassMessage = (data)=>{
    return request({
        url:`/class_msg/class_introduce?classId=`+data.classId
    })
}

//更改班级信息
export const updateClassMessage = (data)=>{
    return request({
        url:'/class_msg/update_class_introduce',
        data,
        method:"POST"
    })
}

//查询班级委员
export const selectCommittees = (data)=>{
    return request({
        url:`/class_msg/class_committee?classId=${data.classId}`
    })
}

//删除班委信息
export const deleteCommittees = (data)=>{
    return request({
        url:'/class_msg/delete_committee',
        data,
        method:"POST",
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
}


//查询慕课
export const selectMooc = (data)=>{
    return request({
        url:`/plan/mooc`,
        params:data
    })
}

//查询周测名单
export const selectWeekTest = (data)=>{
    return request({
        url: `/plan/week_test`,
        params:data
    })
}

//查看班级花名册
export const selectClassRoster = (data)=>{
    return request({
        url:'/class_msg/class_roster?classId='+data.classId
    })
}

//导出花名册
export const exportRoster =(data)=>{
    return request({
        url:'/function/download/class_roster',
        params:data,
        responseType: 'blob'  
    })
}

//查询周末作业
export const selectWeekWork = (data)=>{
    return request({
        url:'/plan/week_work',
        params:data
    })
}

//查询新闻
export const selectNews = ()=>{
    return request({
        url:'/function/news'
    })
}


//修改活动信息
export const updateClassActivity = (data)=>{
    return request({
        url:'/plan/update_activity',
        data,
        method:"POST"
    })
}

//删除活动信息
export const deleteClassActivity = (data)=>{
    return request({
        url:'/plan/delete_activity',
        method:"POST",
        data,
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
}

//新增活动信息
export const insertActivity = (data)=>{
    return request({
        url:'/plan/publish_activity',
        method:"POST",
        data,
    })
}

//删除活动
export const deleteClassCourseSix = (data)=>{
    return request({
        url:'/plan/delete_six',
        method:"POST",
        data,
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
}

//删除某条卫生安排
export const deleteClassHygiene =(data)=>{
    return request({
        url:'/plan/delete_heygiene',
        method:"POST",
        data,
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
}


//修改课六信息
export const updateCourseSix = (data)=>{
    return request({
        data,
        url:'/plan/update_six',
        method:"POST"
    })
}

//新增课六信息
export const insertCourseSix = (data)=>{
    return request({
        data,
        url:'/plan/publish_six',
        method:"POST"
    })
}

//修改卫生安排
export const updateHygiene = (data)=>{
    return request({
        url:'/plan/update_heygiene',
        data,
        method:"POST"
    })
}
//新增卫生安排
export const insertHygiene = (data)=>{
    return request({
        url:'/plan/publish_heygiene',
        data,
        method:"POST"
    })
}

//删除指定慕课
export const deleteMooc = (data)=>{
    return request({
        url:"/plan/delete_mooc",
        data,
        method:"POST",
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
}

//添加慕课信息
export const insertMooc = (data)=>{
    return request({
        url:'/plan/public_mooc',
        data,
        method:"POST",
    })
}
//删除慕课信息
export const updateMooc = (data)=>{
    return request({
        url:'/plan/update_mooc',
        data,
        method:'POST'

    })
}

//删除周测信息
export const deleteWeekTest =(data)=>{
    return request({
        url:'/plan/delete_weektest',
        data,
        method:'POST',
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
}

//修改周测信息
export const updateWeekTest = (data)=>{
    return request({
        url:'/plan/update_weektest',
        data,
        method:"POST"
    })
}

//新增周测信息
export const inserWeekTest = (data)=>{
    return request({
        url:'/plan/publish_weektest',
        data,
        method:"POST",
    })
}

//删除周末作业
export const deleteWeekWork = (data)=>{
    return request({
        url:'/plan/delete_homework',
        data,
        method:"POST",
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
}

//新增周末作业
export const insertWeekWork = (data)=>{
    return request({
        url:'/plan/publish_homework',
        data,
        method:"POST"
    })
}


//更改周末作业
export const updateWeekWork = (data)=>{
    return request({
        url:'/plan/update_homework',
        data,
        method:"POST"
    })
}


//新增班委操作
export const insertCommittees = (data)=>{
    return request({
        url:'/class_msg/add_committees',
        data,
        method:"POST",
    })
}

//删除班级花名册
export const deleteClassRoster = (data)=>{
    return request({
        url:'/system_class/delete_roster',
        data,
        method:"POST",
        headers:{
            'Content-Type': 'multipart/form-data',
        }
    })
}