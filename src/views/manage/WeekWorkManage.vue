<template>
    <div style="padding:30px;box-sizing: border-box;">
        <div style="height: 10%;">
            <el-button type="primary"
                @click="$router.push('/user_message_set/week_work_update?opertion=insert')">新增任务</el-button>
        </div>
        <el-table :row-style="{ height: '150' }" header-align="center" aitem  border
        :data="showWeekWork.filter(data => !search || data.workTime.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%;height: 75%;">
            <el-table-column prop="workTime" label="完成时间" width="200">
            </el-table-column>
            <el-table-column prop="fileUrl" label="链接地址" width="200">
                <template slot-scope="scope">
                    <template v-if="scope.row.fileUrl != ''">
                        <a :href="scope.row.fileUrl" style="text-decoration:underline;color:#0c88e7;">链接地址</a>
                    </template>
                    <template v-if="scope.row.fileUrl == ''">
                        暂无
                    </template>
                </template>
            </el-table-column>
            <el-table-column prop="remark" label="完成内容" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column fixed="right" label="操作" width="220">
                <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="small" placeholder="请输入完成时间" />
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" type="primary"
                        @click="$router.push(`/user_message_set/week_work_update?opertion=edit&weekWork=${JSON.stringify(scope.row)}`)">修改</el-button>
                    <el-button size="mini" type="danger" @click="deleteOpertion(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
        <el-pagination @current-change="pageCurrentClick" style="height:15%;display: flex;align-items: center;"
            :page-size="8" background layout="prev, pager, next" :total="pageTatal">
        </el-pagination>
    </div>
</template>

<script>
import { selectWeekWork, deleteWeekWork } from '@/api/class_message';
import { mapActions, mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            weekWork: [],
            pageTatal: undefined,
            showWeekWork: [],
            pageIndex: 1,
            search:"",
        };
    },
    methods: {
        async deleteOpertion(id) {
            await this.$confirm("你确定删除吗?")
                .then(async () => {
                    let { data } = await deleteWeekWork({ id })
                    if (data.code == 200) {
                        this.$message.success("删除成功")
                        this.getWeekWork()
                    } else {
                        this.$message.error("删除失败")
                    }
                })
        },
        getWeekWork() {
            setTimeout(() => {
                selectWeekWork({ classId: this.userMessage.classId, isDate: true })
                    .then(({ data }) => {
                        this.pageTatal = data.total
                        this.weekWork = data.data
                        this.showWeekWork = this.weekWork.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)

                    })
            }, 50);
        },
        //分页数字点击
        pageCurrentClick(e) {
            this.pageIndex = e
            this.showWeekWork = this.weekWork.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)
        }
    },
    async mounted() {
        this.getWeekWork()
    },
    computed: {
        ...mapState(["userMessage"])
    }
}
</script>

<style scoped lang="less"></style>
