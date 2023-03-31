<template>
    <div style="padding:30px;height: 100%;box-sizing: border-box;">
        <el-page-header @back="$router.back()" :content="opertion == 'insert' ? '新增信息' : '编辑信息'"></el-page-header>
        <el-form ref="form" :model="weekWork" label-width="80px" style="padding:30px 0;box-sizing: ;" v-if="isLoding">
            <el-form-item label="完成时间" style="width: 50%;">
                <el-date-picker type="date" placeholder="选择日期" v-model="weekWork.workTime"
                    style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="任务备注">
                <el-input type="textarea" :autosize="true" v-model="weekWork.remark"></el-input>
            </el-form-item>
            <el-form-item label="文件上传">
                <el-upload :headers="headers" ref="upload" class="upload-demo" :action="$baseUrl + '/upload/file'" :limit="1" :on-change="fileChange"
                    :on-remove="removeFile"    :on-success="fileUploadSuccess" :auto-upload="false" :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submit()" style="width: 100px;">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { insertWeekWork, updateWeekWork } from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            opertion: "",
            weekWork: {},
            isLoding: false,
            fileList: [],
            isFileChange: false,
            headers: { "token": localStorage.getItem("new_class_system_token") },
        };
    },
    methods: {
        //用户点击提交
        async onSubmit() {
            this.weekWork.workTime = new Date(this.weekWork.workTime).toLocaleDateString()
            if (this.opertion == 'edit') {
                let { data } = await updateWeekWork(this.weekWork)
                if (data.code == 200) {
                    this.$message.success("修改成功")
                    this.$router.back()
                } else {
                    this.$message.error(data.message)
                }
            } else {
                let { data } = await insertWeekWork(this.weekWork)
                console.log(this.weekWork);
                if (data.code == 200) {
                    this.$message.success("添加成功")
                    this.weekWork = {
                        "fileUrl": "", //周末作业文件路径
                        "workTime": "", //完成时间
                        "remark": "", //备注
                        "classId": this.userMessage.classId //班级id
                    }
                    
                    this.fileList = []

                } else {
                    this.$message.error(data.message)
                }
            }

        },
        //文件上传成功钩子
        fileUploadSuccess(res) {
            this.weekWork.fileUrl = res.url
            this.onSubmit()
        },
        //文件改变时
        fileChange(file, fileList) {
            this.isFileChange = true
            this.fileList = fileList
        },
        submit() {
            if (this.isFileChange) {
                this.$refs.upload.submit()
            } else {
                this.onSubmit()
            }
        },
        //移除文件
        removeFile(file,filelist){
            this.weekWork.fileUrl = ""
        }
    },
    async mounted() {
        this.opertion = this.$route.query.opertion

        if (this.opertion == 'insert') {
            this.weekWork = {
                "fileUrl": "", //周末作业文件路径
                "workTime": "", //完成时间
                "remark": "", //备注
                "classId": this.userMessage.classId //班级id
            }
            this.weekWork.classId = this.userMessage.classId
        } else {

            this.weekWork = JSON.parse(this.$route.query.weekWork);
            if(this.weekWork.fileUrl!=""){
                this.fileList.push({ name: this.weekWork.fileUrl, url: this.weekWork.fileUrl })
            }
        }
        this.isLoding = true

    },
    computed: {
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped></style>
