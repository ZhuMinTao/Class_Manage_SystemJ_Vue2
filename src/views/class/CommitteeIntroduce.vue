<template>
    <div style="padding:0 30px;">
        <el-card style="height: 600px;">
            <el-empty title="暂无数据" style="height: 100%;" v-if="!committeeList"></el-empty>

            <el-tabs value="index0" v-if="loadingCompelete&&committeeList">
                <el-tab-pane style="padding:20px;box-sizing: border-box;" :label="item.sn" :name="'index' + index" v-for="item, index in committeeList">
                    <el-descriptions class="margin-top" title="基本介绍"  :column="2" >
                        <el-descriptions-item  label="姓名">{{item.user.userName}}</el-descriptions-item>
                        <el-descriptions-item label="邮箱">{{item.user.email}}</el-descriptions-item>
                        <el-descriptions-item label="手机">{{item.user.userDetail.phoneNumber?item.user.userDetail.phoneNumber:"暂无"}}</el-descriptions-item>
                        <el-descriptions-item label="班级编号">{{item.classSystem.classCode}}</el-descriptions-item>
                        <el-descriptions-item label="专业名称">{{item.classSystem.exceptName}}</el-descriptions-item>
                        <el-descriptions-item label="班级号">{{item.classSystem.num}}班</el-descriptions-item>
                        <el-descriptions-item label="性别">
                            <el-tag size="small">{{item.user.userDetail.sex?item.user.userDetail.sex=='0'?'女':'男':"暂无"}}</el-tag>
                        </el-descriptions-item>
                    </el-descriptions>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import { selectCommittees } from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            loadingCompelete: false,
            committeeList: [],
        };
    },
    methods: {

    },
    async mounted() {
        this.committeeList = (await selectCommittees({ classId: this.userMessage.classId })).data.data
        this.loadingCompelete = true
    },
    computed: {
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped>
</style>
