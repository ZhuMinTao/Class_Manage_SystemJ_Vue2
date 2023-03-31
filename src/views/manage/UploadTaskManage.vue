<template>
    <div style="padding:30px;box-sizing: border-box;">
        <div style="height: 10%;">
            <el-button type="primary"
                @click="$router.push('/user_message_set/upload_task_update?opertion=insert')">新增任务</el-button>
        </div>
        <el-table :row-style="{ height: '150' }" header-align="center" aitem :data="showTaskList" border
            style="width: 100%;height: 75%;">
            <el-table-column prop="issuer" label="发布人" width="100">
            </el-table-column>
            <el-table-column prop="publishDate" label="发布时间" width="180">
            </el-table-column>
            <el-table-column prop="finishDate" label="完成时间" width="180">
            </el-table-column>
            <el-table-column prop="finishDate" label="状态" width="80">
                <template slot-scope="scope">
                    <el-tag style="line-height: 25px;height: 25px;" :type="scope.row.completeStatus == '0' ? 'danger' : ''">
                        {{ scope.row.completeStatus == '0' ? "未完成" : "已完成" }}
                    </el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="taskComment" label="完成内容" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column fixed="right" label="操作" width="320">
                <template slot-scope="scope">
                    <el-button size="mini" @click="taskNotCompelete(scope.row.id)">未完成名单</el-button>
                    <el-button size="mini" type="success" @click="downLoadTaskVue(scope.row.id)">下载</el-button>
                    <el-button size="mini" type="primary"
                        @click="$router.push(`/user_message_set/upload_task_update?opertion=edit&taskManage=${JSON.stringify(scope.row)}`)">修改</el-button>
                    <el-button size="mini" type="danger" @click="deleteOpertion(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
        <el-pagination @current-change="pageCurrentClick" style="height:15%;display: flex;align-items: center;"
            :page-size="8" background layout="prev, pager, next" :total="pageTatal">
        </el-pagination>


        <el-dialog title="未完成名单" :visible="taskCompeleteModel" @close="taskCompeleteModel = false">
            <div style="display: flex;justify-content: center;align-items: center;">
                <el-empty description="全部完成" v-if="unfinishedRoster.length == 0"></el-empty>
                <el-table  ref="singleTable" :data="unfinishedRoster" 
                    style="max-height: 500px;">
                    <el-table-column type="index" width="80" >
                    </el-table-column>
                    <el-table-column property="userCode" label="学号">
                    </el-table-column>
                    <el-table-column property="userName" label="姓名">
                    </el-table-column>
                </el-table>
            </div>

        </el-dialog>
    </div>
</template>

<script>
import { selectTaskList, deleteTask, downLoadTask, selectUnfinishRoster } from '@/api/common_message'
import { mapActions, mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            taskList: [],
            pageTatal: undefined,
            showTaskList: [],
            pageIndex: 1,
            taskCompeleteModel: false,
            taskNotCompeleteList: [],
            unfinishedRoster: [],
        };
    },
    methods: {
        async deleteOpertion(id) {
            await this.$confirm("你确定删除吗?")
                .then(async () => {
                    let { data } = await deleteTask({ id })
                    if (data.code == 200) {
                        this.$message.success("删除成功")
                        this.getTaskList()
                    } else {
                        this.$message.error(data.message)
                    }
                })
        },
        getTaskList() {
            setTimeout(() => {
                selectTaskList({ classId: this.userMessage.classId, isDate: true })
                    .then(({ data }) => {
                        this.pageTatal = data.total
                        this.taskList = data.data
                        if (this.pageIndex > Math.ceil(data.total / 8)) {
                            this.pageIndex -= 1
                        }
                        this.showTaskList = this.taskList.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)

                    })
            }, 50);
        },
        //分页数字点击
        pageCurrentClick(e) {
            this.pageIndex = e
            this.showTaskList = this.taskList.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)
        },
        downLoadTaskVue(id) {
            downLoadTask({ "taskId": id })
                .then(res => {
                    let blob = new Blob([res.data]);
                    let url = window.URL.createObjectURL(blob); // 创建 url 并指向 blob
                    let a = document.createElement('a');
                    a.href = url;
                    a.download = '任务.rar';
                    a.click();
                    window.URL.revokeObjectURL(url); // 释放该 url
                })
        },
        //查询未完成名单
        taskNotCompelete(id) {
            this.taskCompeleteModel = true
            selectUnfinishRoster({ taskId: id })
                .then(({ data }) => {
                    this.unfinishedRoster = data.data
                })

        }
    },
    async mounted() {
        this.getTaskList()
    },
    computed: {
        ...mapState(["userMessage"])
    }
}
</script>

<style scoped lang="less">
/deep/ .el-table__row {
    max-height: 100px;
}
</style>
