<template>
    <div style="padding:30px;height: 100%;box-sizing: border-box;">
        <el-page-header @back="$router.back()" :content="opertion == 'insert' ? '新增信息' : '编辑信息'"></el-page-header>
        <el-form ref="form" :model="classCourseSix" label-width="80px" style="padding:30px 0;box-sizing: ;" v-if="isLoding">
            <el-form-item label="主持人">
                <el-select style="width: 46.5%;" v-model="classCourseSix.presideOver.id" filterable placeholder="请选择">
                    <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="迎接A">
                <el-select style="width: 46.5%;" v-model="classCourseSix.greetOne.id" filterable placeholder="请选择">
                    <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="迎接B">
                <el-select style="width: 46.5%;" v-model="classCourseSix.greetTwo.id" filterable placeholder="请选择">
                    <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="演讲A">
                <el-select style="width: 46.5%;" v-model="classCourseSix.lectureOne.id" filterable placeholder="请选择">
                    <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="演讲B">
                <el-select style="width: 46.5%;" v-model="classCourseSix.lectureTwo.id" filterable placeholder="请选择">
                    <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                        :value="item.id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="课六时间" style="width: 50%;">
                <el-date-picker type="date" placeholder="选择日期" v-model="classCourseSix.courseSixDate"
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

import {updateCourseSix, insertCourseSix} from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            opertion: "",
            classCourseSix: {},
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
            this.classCourseSix.courseSixDate = new Date(this.classCourseSix.courseSixDate).toLocaleDateString()

            if (this.opertion == 'edit') {
                let { data } = await updateCourseSix(this.classCourseSix)
                if (data.code == 200) {
                    this.$message.success("修改成功")
                    this.$router.back()
                } else {
                    this.$message.error(data.message)
                }
            } else {
                let { data } = await insertCourseSix(this.classCourseSix)
                if (data.code == 200) {
                    this.$message.success("添加成功")
                    this.classCourseSix = this.classCourseSix = {
                        "greetOne": { "id": undefined },
                        "greetTwo": { "id": undefined },
                        "presideOver": { "id": undefined },
                        "lectureOne": { "id": undefined },
                        "lectureTwo": { "id": undefined },
                        "courseSixDate": "",
                        "classId": undefined
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
            this.classCourseSix = {
                "greetOne": { "id": undefined },
                "greetTwo": { "id": undefined },
                "presideOver": { "id": undefined },
                "lectureOne": { "id": undefined },
                "lectureTwo": { "id": undefined },
                "courseSixDate": undefined,
                "classId": undefined
            }
            this.classCourseSix.classId = this.userMessage.classId
        } else {
            this.classCourseSix = JSON.parse(this.$route.query.classCourseSix);
        }

    },
    computed: {
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped></style>
