<template>
    <div style="padding:0 20px;">
        <el-card class="box-card" style="height:600px;">
            <el-date-picker @change="selectDateBack" style="margin-bottom: 20px;" v-model="optionDate" type="date"
                placeholder="选择查询日期">
            </el-date-picker>
            <el-empty v-if="classCoursix.length == 0" title="暂无数据"></el-empty>
            <div style="height: 500px;overflow-y: auto;">
                <el-descriptions :labelStyle="{'width':300+'px'}" style="margin-top: 20px;" v-for="item in classCoursix" class="margin-top" :title="'值日时间: ' + item.courseSixDate | formatYMD"
                    :column="1" border>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            演讲A
                        </template>
                        {{ item.lectureOne.userName }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            演讲B
                        </template>
                        {{ item.lectureTwo.userName }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            主持人
                        </template>
                        {{ item.presideOver.userName }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            迎接A
                        </template>
                        {{ item.greetOne.userName }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            迎接B
                        </template>
                        {{ item.greetTwo.userName }}
                    </el-descriptions-item>
                </el-descriptions>
            </div>

        </el-card>
    </div>
</template>

<script>
import { selectClassCourseSix } from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            optionDate: "",
            classCoursix: [],
        };
    },
    methods: {
        async selectDateBack() {
            this.classCoursix = (await selectClassCourseSix({ classId: this.userMessage.classId ,date: this.optionDate.toLocaleDateString()})).data.data
        }
    },
    async mounted() {
        this.classCoursix = (await selectClassCourseSix({ classId: this.userMessage.classId ,afterDate:new Date().toLocaleDateString()})).data.data
    },
    computed: {
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped></style>
