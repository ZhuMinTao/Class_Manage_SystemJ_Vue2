<template>
    <div style="padding:0 30px">
        
            <table class="course_table">
                <thead >
                    <tr>
                        <th>#</th>
                        <th>星期一</th>
                        <th>星期二</th>
                        <th>星期三</th>
                        <th>星期四</th>
                        <th>星期五</th>
                        <th>星期六</th>
                        <th>星期日</th>
                    </tr>
                </thead>
                <tbody>
                    <el-empty style="height: 500px;" v-if="classCourseTable.length==0"></el-empty>
                    <tr v-for="courseSingle in classCourseTable">
                        <td >{{courseSingle.whichSection.split('(')[0]}}</td>
                        <td v-for="course in courseSingle.courseList" style="padding:5px;box-sizing: border-box;display: flex;flex-direction: column;justify-content: space-around;align-items: start;">
                            {{ course.length==0?"暂无安排":'' }}
                            <p style="line-height: 22px;"  v-for="c,index in course"  v-html="c" ></p>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        <el-dialog title="绑定教务处用户密码" :visible="dialogStatus" @close="dialogStatus=false">
            <el-form :model="eduSystemMessage">
                <el-form-item label="用户名">
                    <el-input v-model="eduSystemMessage.userCode"  autocomplete="off"></el-input>
                </el-form-item> 
                <el-form-item label="密码">
                    <el-input v-model="eduSystemMessage.userPwd" type="password"  autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogStatus = false">取 消</el-button>
                <el-button type="primary" @click="bindEduSystemFont">确 定</el-button>
            </div>
    </el-dialog>
    </div>

    
</template>

<script>
import {  selectEduUser,bindEduSystem,selectEduCourseTable } from '@/api/common_message'
   export default {
      name: '',
      data() {
           return {
                dialogStatus:false,
                eduSystemMessage:{
                    userCode:"",
                    userPwd:""
                },
                classCourseTable:[],
           };
       },
       methods: {
            async userIsBindEdu() {
                //查询是否已经绑定教务处系统
                let { data } = await selectEduUser()
                console.log(data);
                return data.code === 200
            },
            async eduCourseTable(){
                this.classCourseTable = (await selectEduCourseTable()).data.data
                this.classCourseTable = this.classCourseTable.map(item=>{
                    item.courseList = item.courseList.map(i=>{
                        i = String(i).split('<br/>').splice(2)
                        i = i.map(s=>{
                            let str = String(s).replace(/：/g,"：<br/><b>")
                            str+="</b>"
                            s = str;
                            return s;
                        })
                        return i
                    })
                    return item
                })
                console.log(this.classCourseTable);
            },
            async bindEduSystemFont(){
                let { data } = await bindEduSystem()
                if(data.code!=200){
                    this.$message.error(data.message);
                }else{
                    this.$message({
                    message: '绑定成功',
                    type: 'success'
                    });
                    this.dialogStatus = false
                    this.tableData = await this.eduCourseTable()
                    this.loading = false
                }
            
            }
       },
       async mounted(){
            if(await this.userIsBindEdu()){
                this.eduCourseTable()
            }else{
                this.dialogStatus = true;
            }
       }
   }
</script>

<style scoped>
    .course_table{
        border-spacing: 0;
        border-collapse: collapse;
        width:100%;
    }
    .course_table thead, .course_table thead tr{
        display: flex;
        width:100%;
        height:60px;
        align-items: center;
        justify-content: center;
        background-color: #e3e3e3;


    }
    .course_table thead tr th:first-child{
        width: 6%;
    }
    .course_table thead tr th{
        width:13.4%;
        font-size: 14px;
    }
    .course_table tbody tr{
        display: flex;
        height:220px;
    }
    .course_table tbody tr td:first-child{
        width: 6%;
        padding:5px;
        

    }
     .course_table tbody tr td{
        display: flex;
        width:13.4%;
        align-items: center;
        justify-content: center;
        border:1px solid rgb(227, 227, 227);
        font-size: 13px;
    }
    /* .course_table tbody tr:nth-child(2n){
        background-color: #e3e3e3;
    } */


    
</style>
