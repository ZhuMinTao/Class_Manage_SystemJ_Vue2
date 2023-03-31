<template>
    <div style="padding:0 20px;box-sizing: border-box;">
        <el-card class="box-card" style="height:600px">
            <el-table :data="tableData" style="height: 560px;" max-height="560px" v-loading="loading">
                <el-table-column fixed prop="courseTitle" label="课程名称" width="250">
                </el-table-column>
                <el-table-column prop="courseNumber" label="课程编号" width="200">
                </el-table-column>
                <el-table-column prop="performance" label="课程成绩" width="100">
                </el-table-column>
                <el-table-column prop="characteristicsOfCourse" label="课程类型" width="200">
                </el-table-column>
                <el-table-column prop="commencementTerm" label="学期" width="200">
                </el-table-column>
                <el-table-column prop="totalClassHours" label="学时" width="100">
                </el-table-column>
                <el-table-column prop="evaluationMode" label="考试形式" width="100">
                </el-table-column>
            </el-table>
        </el-card>
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
import { selectShcoolSystemQuery, selectEduUser,bindEduSystem } from '@/api/common_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            tableData: [],
            loading: true,
            dialogStatus:false,
            eduSystemMessage:{
                userCode:"",
                userPwd:""
            }
        };
    },
    methods: {
        async userIsBindEdu() {
            //查询是否已经绑定教务处系统
            let { data } = await selectEduUser()
            return data.code == 200
        },
        async userQuery() {
            let { data } = await selectShcoolSystemQuery()
            return data.data
        },
        async bindEduSystemFont(){
            let { data } = await bindEduSystem(this.eduSystemMessage)
            if(data.code!=200){
                this.$message.error(data.message);
            }else{
                this.$message({
                message: '绑定成功',
                type: 'success'
                });
                this.dialogStatus = false
                this.tableData = await this.userQuery()
                this.loading = false
            }

           
        }
    },
    components: {
    },
    async mounted() {

        //查询是否绑定过教务处系统
        let eduBind = await this.userIsBindEdu()

        if (eduBind) {
            this.tableData = await this.userQuery()
            this.loading = false
        } else {
            this.dialogStatus = true
        }

    },
    computed: {
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped></style>
