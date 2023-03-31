<template>
    <div style="padding:30px;box-sizing: border-box;">
            <el-page-header @back="$router.back()" content="编辑个人信息">
            </el-page-header>
            <el-form style="margin-top: 50px;" label-width="80px" :model="userForm">
                <el-form-item label="手机号">
                    <el-input style="width: 221px;" placeholder="输入手机号" v-model="userForm.phoneNumber"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-select v-model="userForm.sex" placeholder="选择性别">
                        <el-option label="男" :value="1"></el-option>
                        <el-option label="女" :value="0"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="头像" style="height: 150px;">
                    <el-upload :class="{hide:hideUpload}" 
                    :on-success="uploadImageSuccuss"
                    ref="upload"
                    :on-change="uploadChange" :action="$baseUrl+'/upload/file'"
                    list-type="picture-card"
                    :file-list="uploadFileImg"
                    :auto-upload="false"
                    :headers="headers"
                    :limit="1"
                    >
                        <i slot="default" class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{file}">
                            <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">
                            <span class="el-upload-list__item-actions">
                                <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                    <i class="el-icon-delete"></i>
                                </span>
                            </span>
                        </div>
                    </el-upload>
                </el-form-item>
                <el-form-item>
                    <el-button style="width: 200px;" type="primary" @click="onSubmit">修改信息</el-button>
                </el-form-item>
            </el-form>
    </div>
</template>

<script>
    import {updateUserMessage,selectUserDetail} from '@/api/user_message'
import { mapActions, mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            userForm: {
                id:"",
                sex: "",
                phoneNumber: "",
                profilePhoto: "",
            },
            hideUpload: false,
            uploadFileImg: [],
            disabled:false,
            headers:{"token":localStorage.getItem("new_class_system_token")},
            isChangeAvatar:false,
        };
    },
    methods: {
        uploadChange(file,fileList){
            //选择了图片就必须上传图片
            this.isChangeAvatar = true
            this.uploadFileImg = fileList
            if(this.uploadFileImg.length>0){
                this.hideUpload = true
            }
        },
        onSubmit(){
            //是否改变了头像改变了则需要重新上传图片
            if(this.isChangeAvatar){
                this.$refs.upload.submit()
            }else{
                this.submit()
            }
            
        },
        handleDownload(){
            this.uploadFileImg = []
            this.userForm.profilePhoto = ""
            this.hideUpload = false
        },
        uploadImageSuccuss(res){
            this.userForm.profilePhoto = res.url
            this.submit()
        },
        submit(){
            updateUserMessage(this.userForm)
            .then(({data})=>{
                console.log(data);
                if(data.code==200){
                    this.$message({
                    message: '修改成功!',
                    type: 'success'
                    });
                }else{
                    this.$message({
                    message: '修改失败!',
                    type: 'error'
                    });
                }
            })
        },
        ...mapActions(['getUserDetailMessage'])
    },
    async mounted(){
        await this.getUserDetailMessage();
        this.userForm.id = this.userMessage.userDetail.id
        this.userForm.sex = this.userMessage.userDetail.sex
        this.userForm.phoneNumber = this.userMessage.userDetail.phoneNumber
        this.userForm.profilePhoto = this.userMessage.userDetail.profilePhoto

        //将头像进行回显
        if(this.userForm.profilePhoto){
            this.uploadFileImg.push({name:this.userForm.profilePhoto,url:this.userForm.profilePhoto})
            this.hideUpload = true
        }

    },
    computed:{
        ...mapState(['userMessage'])
    }
}
</script>

<style>
.el-upload-list__item {
    transition: none ;
}
.hide .el-upload--picture-card {
  display: none;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>
