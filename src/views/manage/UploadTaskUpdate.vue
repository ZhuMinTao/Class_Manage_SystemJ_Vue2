<template>
    <div style="padding:30px;box-sizing: border-box;">
        <el-page-header @back="$router.back()"
            :content="opertion == 'select' ? '查看详情' : opertion == 'edit' ? '编辑信息' : '新增信息'"></el-page-header>
        <el-form ref="form" :model="taskManage" label-width="80px" style="margin-top:20px;">
            <el-form-item label="发布人">
                <el-select @change="selectChange" :value="taskManage.issuer" placeholder="请输入">
                    <el-option v-for="item in committessList" :label="item.user.userName"
                        :value="item.user.userName"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="完成时间" style="width: 40%;">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="taskManage.finishDate"
                        style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="taskManage.finishDate"
                        style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="完成内容">
                <el-input  type="textarea" :autosize="true"
                    v-model="taskManage.taskComment"></el-input>
            </el-form-item>
            <el-form-item v-if="opertion != 'select'">
                <el-button style="width: 100px;" type="primary" @click="submit()">{{ opertion == 'insert' ? '新增' : '修改'
                }}</el-button>
            </el-form-item>
        </el-form>

        <el-dialog :visible="dialogVisible" @close="dialogVisible = false">
            <img width="100%" :src="taskManage.activityImage" alt="">
        </el-dialog>
    </div>
</template>

<script>
import { selectCommittees } from '@/api/class_message'
import { insertTask,updateTask } from '@/api/common_message';
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            taskManage: {},
            opertion: "",
            committessList: [],
            dialogVisible: false,


        };
    },
    methods: {
        //用户点击修改
        async submit() {
            this.taskManage.finishDate = new Date(this.taskManage.finishDate).toLocaleDateString() +' '+new Date(this.taskManage.finishDate).toLocaleTimeString()
            if (this.opertion == 'edit') {
                let { data } = await updateTask(this.taskManage)
                if (data.code == 200) {
                    this.$message.success("修改成功")
                    this.$router.back()
                } else {
                    this.$message.error(data.message)
                }
            } else {
                let { data } = await insertTask(this.taskManage)

                if (data.code == 200) {
                    this.$message.success("添加成功")
                    this.taskManage = {
                    "finishDate": "",
                    "taskComment": "",
                    "classId": this.userMessage.classId,
                    "issuer": "",
                }

                } else {
                    this.$message.error(data.message)
                }
            }
        },
        //select标签选择钩子
        selectChange(e) {
            this.taskManage.issuer = e
        },
       
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
            setTimeout(() => {
                this.taskManage = {
                    "finishDate": "",
                    "taskComment": "",
                    "classId": this.userMessage.classId,
                    "issuer": "",
                }
            }, 50);
            
        } else {
            this.taskManage = JSON.parse(this.$route.query.taskManage)
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
