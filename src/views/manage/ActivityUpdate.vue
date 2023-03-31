<template>
    <div style="padding:30px;box-sizing: border-box;">
        <el-page-header @back="$router.back()"
            :content="opertion == 'select' ? '查看详情' : opertion == 'edit' ? '编辑信息' : '新增信息'"></el-page-header>
        <el-form ref="form" :model="activityFrom" label-width="80px" style="margin-top:20px;">
            <el-form-item label="活动地点">
                <el-select :disabled="isDisabled" @change="selectChange" :value="activityFrom.schemeUser.id"
                    placeholder="策划人">
                    <el-option v-for="item, index in committessList" :label="item.user.userName"
                        :value="item.user.id"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="活动地点">
                <el-input :disabled="isDisabled" v-model="activityFrom.activityPlace"></el-input>
            </el-form-item>
            <el-form-item label="活动时间" style="width: 40%;">
                <el-col :span="11">
                    <el-date-picker type="date" :disabled="isDisabled" placeholder="选择日期"
                        v-model="activityFrom.activityDate" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker :disabled="isDisabled" placeholder="选择时间" v-model="activityFrom.activityDate"
                        style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item :required="false" label="活动图片" style="width: 40%;">
                <el-upload :class="{ hide: hideUpload }" :on-success="uploadImageSuccuss" ref="upload"
                    :on-change="uploadChange" :action="$baseUrl + '/upload/file'" list-type="picture-card"
                    :file-list="uploadFileImg" :auto-upload="false" :headers="headers" :limit="1">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{file}">

                        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="">

                        <span class="el-upload-list__item-actions">
                            <span v-if="opertion=='select'" class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                                <i class="el-icon-zoom-in"></i>
                            </span>
                            <span v-if="!isDisabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                                <i class="el-icon-delete"></i>
                            </span>
                        </span>
                    </div>
                </el-upload>
            </el-form-item>
            <el-form-item label="活动内容">
                <el-input :disabled="isDisabled" type="textarea" :autosize="true"
                    v-model="activityFrom.activityContent"></el-input>
            </el-form-item>
            <el-form-item v-if="opertion != 'select'">
                <el-button style="width: 100px;" type="primary" @click="submit()">{{ opertion == 'insert' ? '新增' : '修改'
                }}</el-button>
            </el-form-item>
        </el-form>

        <el-dialog :visible="dialogVisible" @close="dialogVisible=false">
            <img width="100%" :src="activityFrom.activityImage" alt="">
        </el-dialog>
    </div>
</template>

<script>
import { updateClassActivity, insertActivity } from '@/api/class_message'
import { selectCommittees } from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            activityFrom: {
                "schemeUser": { "id": undefined },
                "scheme": "", //计划人用户id
                "activityContent": "", //活动内容
                "activityDate": "", //活动日期
                "activityPlace": "", //活动地点
                "activityImage": "", //活动图片
                "classId": ""//班级id
            },
            opertion: "",
            isDisabled: true,
            uploadFileImg: [],
            hideUpload: false,
            headers: { "token": localStorage.getItem("new_class_system_token") },
            //记录图片是否被更改过
            imgIsUpdate: false,
            committessList: [],
            dialogVisible: false,


        };
    },
    methods: {
        //图片上传钩子
        async uploadImageSuccuss(res) {
            this.activityFrom.activityImage = res.url
            if (this.opertion == 'insert') {

                this.insertActivityVue()

            } else {
                this.updateActivity()
            }
        },
        //js删除图片钩子
        handleDownload() {
            this.uploadFileImg = []
            this.hideUpload = false
        },
        //图片选择钩子
        uploadChange(file, fileList) {
            //选择了图片就必须上传图片
            this.uploadFileImg = fileList
            this.imgIsUpdate = true
            if (this.uploadFileImg.length > 0) {
                this.hideUpload = true
            }
        },
        //发送请求执行修改
        async updateActivity() {

            let activityDateTime = new Date(this.activityFrom.activityDate)

            this.activityFrom.activityDate = activityDateTime.toLocaleDateString() + ' ' + activityDateTime.toLocaleTimeString()

            let { data } = await updateClassActivity(this.activityFrom)
            if (data.code == 200) {
                this.$message.success("修改成功")
                this.$router.back()
            } else {
                this.$message.error(data.message)

            }
        },
        //用户点击修改
        async submit() {
            //判断是否为新增页面
            if (this.opertion == 'insert') {
                //判断在更新页面是否更改过图片
                if (this.imgIsUpdate) {
                    console.log(6766);
                    this.$refs.upload.submit()
                } else {
                    this.insertActivityVue()
                }
            } else {
                //判断在更新页面是否更改过图片
                if (this.imgIsUpdate) {
                    this.$refs.upload.submit()
                } else {
                    this.updateActivity()
                }
            }

        },
        //select标签选择钩子
        selectChange(e) {
            this.activityFrom.schemeUser.id = e
        },
        //发出请求执行新增
        async insertActivityVue() {
            let activityDateTime = new Date(this.activityFrom.activityDate)
            this.activityFrom.activityDate = activityDateTime.toLocaleDateString() + ' ' + activityDateTime.toLocaleTimeString()
            this.activityFrom.scheme = this.activityFrom.schemeUser.id
            this.activityFrom.classId = this.userMessage.classId
            let { data } = await insertActivity(this.activityFrom)
            if (data.code == 200) {
                this.$message.success("添加成功")
                this.$router.back()
            } else {
                this.$message.error(data.message)
            }
        },
        handlePictureCardPreview() {
            this.dialogVisible = true;
        }
    },
    mounted() {
        this.opertion = this.$route.query.opertion

        //发送请求获取班委信息
        setTimeout(() => {
            selectCommittees({ classId: this.userMessage.classId })
                .then(({ data }) => {
                    this.committessList = data.data
                })
        }, 50)

        if (this.opertion === 'insert') {
            this.isDisabled = false
        } else {
            this.activityFrom = JSON.parse(this.$route.query.classActiviy)



            if (this.activityFrom.activityImage) {
                this.uploadFileImg.push({ name: this.activityFrom.activityImage, url: this.activityFrom.activityImage })
                this.hideUpload = true

            }
            if (this.opertion === 'select') this.isDisabled = true
            else this.isDisabled = false
        }




    },
    computed: {
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped lang="less">
/deep/ .el-input.is-disabled .el-input__inner {
    cursor: text;
}

/deep/ .el-textarea.is-disabled .el-textarea__inner {
    cursor: text;
}

/deep/ .el-upload-list__item {
    transition: none;
}

/deep/ .hide .el-upload--picture-card {
    display: none;
}
</style>
