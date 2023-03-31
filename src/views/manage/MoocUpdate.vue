<template>
    <div style="padding:30px;height: 100%;box-sizing: border-box;">
        <el-page-header @back="$router.back()" :content="opertion == 'insert' ? '新增信息' : '编辑信息'"></el-page-header>
        <el-form ref="form" :model="classMooc" label-width="80px" style="padding:30px 0;box-sizing: ;" v-if="isLoding">
            <el-form-item label="完成时间" style="width: 50%;">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="classMooc.examineDate"
                        style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="classMooc.examineDate"
                        style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="活动内容">
                <el-input type="textarea" :autosize="true" v-model="classMooc.completeContent"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="width: 100px;">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { insertMooc, updateMooc } from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            opertion: "",
            classMooc: {},
            isLoding: false,
        };
    },
    methods: {
        //用户点击提交
        async onSubmit() {
            this.classMooc.examineDate = new Date(this.classMooc.examineDate).toLocaleDateString() +' '+new Date(this.classMooc.examineDate).toLocaleTimeString()

            if (this.opertion == 'edit') {
                let { data } = await updateMooc(this.classMooc)
                if (data.code == 200) {
                    this.$message.success("修改成功")
                    this.$router.back()
                } else {
                    this.$message.error(data.message)
                }
            } else {
                let { data } = await insertMooc(this.classMooc)
                console.log(this.classMooc);
                if (data.code == 200) {
                    this.$message.success("添加成功")
                    this.classMooc = {
                        "completeContent": "", //内容
                        "examineDate": "", //结束时间
                        "classId":this.userMessage.classId,
                    }
                } else {
                    this.$message.error(data.message)
                }
            }

        }
    },
    async mounted() {
        this.opertion = this.$route.query.opertion

        if (this.opertion == 'insert') {
            this.classMooc = {
                "completeContent": "", //内容
                "examineDate": "", //结束时间
                "classId": "" //班级id
            }
            this.classMooc.classId = this.userMessage.classId
        } else {
            this.classMooc = JSON.parse(this.$route.query.classMooc);
        }
        this.isLoding = true

    },
    computed: {
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped></style>
