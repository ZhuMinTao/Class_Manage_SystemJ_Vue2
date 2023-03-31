<template>
    <div style="height: 100%;box-sizing: border-box;">
        <el-page-header @back="$router.back()" :content="opertion == 'insert' ? '新增信息' : '编辑信息'"></el-page-header>
        <el-form ref="form" :model="classhygiene" label-width="80px" style="padding:30px 0;box-sizing: ;" v-if="isLoding">
            <el-form-item label="擦黑板">
                <el-select style="width: 46.5%;" v-model="classhygiene.sweepFloor.id" filterable placeholder="请选择">
                    <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="拖地">
                <el-select style="width: 46.5%;" v-model="classhygiene.moppingFloor.id" filterable placeholder="请选择">
                    <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="扫地">
                <el-select style="width: 46.5%;" v-model="classhygiene.cleanBlackboard.id" filterable placeholder="请选择">
                    <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="值日时间" style="width: 50%;">
                <el-date-picker type="date" placeholder="选择日期" v-model="classhygiene.hygieneDate"
                    style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="width: 100px;">立即创建</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { selectUserByclassId } from '@/api/user_message'
import { updateHygiene,insertHygiene } from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            opertion: "",
            classhygiene: {},
            classMemberList: [],
            isLoding: false,
        };
    },
    methods: {
        //查询班级成员
        async getClassMember() {
            setTimeout(async () => {
                let { data } = await selectUserByclassId({ classId: this.userMessage.classId })
                this.classMemberList = data.data
            }, 50);
        },
        //用户点击提交
        async onSubmit() {
            this.classhygiene.hygieneDate = new Date(this.classhygiene.hygieneDate).toLocaleDateString()
            console.log(this.classhygiene);

            if (this.opertion == 'edit') {
                let { data } = await updateHygiene(this.classhygiene)
                if (data.code == 200) {
                    this.$message.success("修改成功")
                    this.$router.back()
                } else {
                    this.$message.error(data.message)
                }
            } else {
                let { data } = await insertHygiene(this.classhygiene)
                if (data.code == 200) {
                    this.$message.success("添加成功")
                     this.classCourseSix = {
                        "id": "",
                        "sweepFloor": { "id": "" },
                        "moppingFloor": { "id": "" },
                        "cleanBlackboard": { "id": "" },
                        "hygieneDate": "",
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
        await this.getClassMember()
        this.isLoding = true
        if (this.opertion == 'insert') {
            this.classhygiene = {
                "id": "",
                "sweepFloor": { "id": "" },
                "moppingFloor": { "id": "" },
                "cleanBlackboard": { "id": "" },
                "hygieneDate": "",
                "classId":"",
            }
            this.classhygiene.classId = this.userMessage.classId
        } else {
            this.classhygiene = JSON.parse(this.$route.query.classhygiene);
        }

    },
    computed: {
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped></style>
