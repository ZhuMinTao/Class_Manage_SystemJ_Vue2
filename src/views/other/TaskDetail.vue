<template>
    <div style="padding:0 30px;box-sizing: border-box;">
        <el-card class="box-card" style="height:600px">
            <div class="tast_detail_title">
                <div>
                    <span>完成内容</span>
                    <span style="margin-left: 10px;" v-if="taskDetail.userCompleteStatus==1"><el-tag>已完成</el-tag></span>
                    <span style="margin-left: 10px;"><el-tag type="danger" v-if="taskDetail.userCompleteStatus==0">未完成</el-tag></span>
                </div>
                <div>
                    <b style="margin-right: 10px;">完成时间:</b>{{ taskDetail.finishDate | formatDate }}
                </div>
            </div>
            <div class="tast_detail_content">{{ taskDetail.taskComment }}
            </div>
            <el-upload style="margin-top: 50px;" v-if="taskDetail.userCompleteStatus==0" class="upload-demo" ref="upload" :headers="headers" :action="$baseUrl+'/upload/file'"
                :on-success="uploadSuccess"
                :limit="1"
                 :file-list="fileList" :auto-upload="false">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传文件</el-button>
            </el-upload>
        </el-card>
        
    </div>
</template>

<script>
    import {uploadTask,uploadTaskById} from '@/api/common_message'
export default {
    name: '',
    data() {
        return {
            taskDetail:{},
            fileList:[],
            headers:{token:localStorage.getItem('new_class_system_token')}
        };
    },
    methods: {
        submitUpload(){
            this.$refs.upload.submit();
        },
        async uploadSuccess(res,file,fileList){
            //获取到上传后的url
            await uploadTask({taskId:this.taskDetail.id,fileUrl:res.url})
            //上传后，刷新页面
            let {data} =  await uploadTaskById({taskId:this.taskDetail.id})
            this.taskDetail = data.data
        }
    },
    async mounted(){
        let id = this.$route.query.id
        this.taskDetail =  (await uploadTaskById({taskId:id})).data.data
    }
}
</script>

<style scoped>
    .tast_detail_title{
        display: flex;
        justify-content: space-between;
    }
    .tast_detail_title>div:first-child{
        font-weight: bold;
        font-size: 18px;
    }
    .tast_detail_content{
        margin:20px 0;
        font-size: 14px;
        padding:10px;
        height: 400px;
        box-sizing: border-box;
        background-color: #f0f0f0f1;
        overflow: hidden;
        overflow-y: auto;
        line-height: 25px;
    }
</style>
