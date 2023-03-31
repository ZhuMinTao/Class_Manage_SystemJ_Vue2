<template>
    <div style="padding:30px;height: 100%;box-sizing: border-box;">
        <el-page-header @back="$router.back()" :content="opertion == 'insert' ? '新增信息' : '编辑信息'"></el-page-header>
        <el-form ref="form" :model="weekTest" label-width="80px" style="padding:30px 0;box-sizing: ;" v-if="isLoding">
            <el-col :span="11">
                <el-form-item label="测试1">
                    <el-select style="width: 46.5%;" v-model="optionMember.test1" filterable placeholder="请选择">
                        <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                            :value="item.userName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="测试2">
                    <el-select style="width: 46.5%;" v-model="optionMember.test2" filterable placeholder="请选择">
                        <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                            :value="item.userName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="测试3">
                    <el-select style="width: 46.5%;" v-model="optionMember.test3" filterable placeholder="请选择">
                        <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                            :value="item.userName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="测试4">
                    <el-select style="width: 46.5%;" v-model="optionMember.test4" filterable placeholder="请选择">
                        <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                            :value="item.userName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="测试5">
                    <el-select style="width: 46.5%;" v-model="optionMember.test5" filterable placeholder="请选择">
                        <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                            :value="item.userName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="测试6">
                    <el-select style="width: 46.5%;" v-model="optionMember.test6" filterable placeholder="请选择">
                        <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                            :value="item.userName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="测试7">
                    <el-select style="width: 46.5%;" v-model="optionMember.test7" filterable placeholder="请选择">
                        <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                            :value="item.userName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="测试8">
                    <el-select style="width: 46.5%;" v-model="optionMember.test8" filterable placeholder="请选择">
                        <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                            :value="item.userName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="*替补1">
                    <el-select style="width: 46.5%;" v-model="alternate.test1" filterable placeholder="请选择">
                        <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                            :value="item.userName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col :span="11">
                <el-form-item label="*替补2">
                    <el-select style="width: 46.5%;" v-model="alternate.test2" filterable placeholder="请选择">
                        <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                            :value="item.userName">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col>
                <el-form-item label="测试时间" style="width: 50%;height: auto;">
                    <el-date-picker type="date" placeholder="选择日期" v-model="weekTest.testTime"
                        style="width: 100%;"></el-date-picker>
                </el-form-item>
            </el-col>
            <el-col>
                <el-form-item label="活动地点">
                    <el-input v-model="weekTest.testPlace" style="width: 45%;"></el-input>
                </el-form-item>
            </el-col>
            <el-col>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit" style="width: 100px;">立即创建</el-button>
                </el-form-item>
            </el-col>
        </el-form>
    </div>
</template>

<script>
import { selectUserByclassId } from '@/api/user_message'

import { updateWeekTest, inserWeekTest } from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            opertion: "",
            weekTest: {},
            classMemberList: [],
            isLoding: false,
            optionMember: {
                test1: "",
                test2: "",
                test3: "",
                test4: "",
                test5: "",
                test6: "",
                test7: "",
                test8: ""
            },
            alternate: {
                test1: "",
                test2: "",
            }
        };
    },
    methods: {
        //查询班级成员
        async getClassMember() {
            setTimeout(async () => {
                let { data } = await selectUserByclassId({ classId: this.userMessage.classId })
                this.classMemberList = data.data
            }, 100);
        },
        //用户点击提交
        async onSubmit() {
            console.log(this.weekTest);

            this.weekTest.testTime = new Date(this.weekTest.testTime).toLocaleDateString()

            this.weekTest.testMembers = this.getTestMemberDeal()

            this.weekTest.substitutionMembers = this.getAlternateMemberDeal()

            if (this.opertion == 'edit') {
                let { data } = await updateWeekTest(this.weekTest)
                if (data.code == 200) {
                    this.$message.success("修改成功")
                    this.$router.back()
                } else {
                    this.$message.error(data.message)
                }
            } else {
                let { data } = await inserWeekTest(this.weekTest)
                if (data.code == 200) {
                    this.$message.success("添加成功")
                    this.weekTest = {
                        "testMembers": "",//测试人员
                        "testPlace": "", //测试地点
                        "testTime": "", //测试时间
                        "substitutionMembers": "", //替补人员
                        "classId": this.userMessage.classId //班级id
                    }
                } else {
                    this.$message.error(data.message)
                }
            }

        },
        //处理周测人员字符串数据
        dealTestMemberData() {
            let realTestMember = String(this.weekTest.testMembers).split(',')
            let i = 0;
            for (let val in this.optionMember) {
                this.optionMember[val] = realTestMember[i]
                i++
            }
        },
        //处理替补人员字符串数据
        dealAlternate() {
            let realAlternate = String(this.weekTest.substitutionMembers).split(',')
            let i = 0;
            for (let val in this.alternate) {
                this.alternate[val] = realAlternate[i]
                i++
            }
        },
        //获取处理过后的周测人员列表
        getTestMemberDeal(){
            let str = ""
            for (let val in this.optionMember) {
                str=str + this.optionMember[val] + ","
            }
            return str
        },
        //获取处理过后的替补人员列表
        getAlternateMemberDeal(){
            let str = ""
            for (let val in this.alternate) {
                str+=this.alternate[val] + ","
            }
            return str
        }
    },
    async mounted() {
        this.opertion = this.$route.query.opertion
        await this.getClassMember()
        this.isLoding = true
        if (this.opertion == 'insert') {
            this.weekTest = {
                "testMembers": "",//测试人员
                "testPlace": "", //测试地点
                "testTime": "", //测试时间
                "substitutionMembers": "", //替补人员
                "classId": this.userMessage.classId //班级id
            }
        } else {
            this.weekTest = JSON.parse(this.$route.query.weekTest);

            this.dealTestMemberData()

            this.dealAlternate()


        }

    },
    computed: {
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped></style>
