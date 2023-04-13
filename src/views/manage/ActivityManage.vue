<template>
    <div style="box-sizing: border-box;">
        <div style="height: 10%;">
            <el-button type="primary"
                @click="$router.push(`/user_message_set/activity_update?opertion=insert`)">新增活动</el-button>
        </div>
        <el-table :row-style="{ height: '150' }" header-align="center" aitem  border
        :data="classActivity.filter(data => !search || data.schemeUser.userName.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%;height: 75%;">
            <el-table-column prop="schemeUser.userName" label="策划人" width="150">
            </el-table-column>
            <el-table-column prop="activityDate" label="时间" width="200">
            </el-table-column>
            <el-table-column prop="activityPlace" label="地点" width="120">
            </el-table-column>
            <el-table-column label="图片" prop="activityImage" width="100">
                <template slot-scope="scope">
                    <el-image :src="scope.row.activityImage" style="width: 50px; height: 50px;"
                        v-if="scope.row.activityImage"></el-image>
                    <div v-if="!scope.row.activityImage">暂无</div>
                </template>
            </el-table-column>
            <el-table-column prop="activityContent" label="内容">
                <template slot-scope="scope">
                    <div v-text="scope.row.activityContent"
                        style="width: 100%;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;"></div>
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="220">
                <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="small" placeholder="请输入策划人" />
                    </template>
                <template slot-scope="scope">
                    <el-button size="mini"
                        @click="$router.push(`/user_message_set/activity_update?classActiviy=${JSON.stringify(scope.row)}&opertion=select`)">查看</el-button>
                    <el-button size="mini" type="primary"
                        @click="$router.push(`/user_message_set/activity_update?classActiviy=${JSON.stringify(scope.row)}&opertion=edit`)">修改</el-button>
                    <el-button size="mini" type="danger" @click="deleteActivity(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
        <el-pagination @current-change="pageCurrentClick" style="height:15%;display: flex;align-items: center;" :page-size="5" background layout="prev, pager, next" :total="pageTatal">
        </el-pagination>
    </div>
</template>

<script>
import { selectClassActivity, deleteClassActivity } from '@/api/class_message';
import { mapActions, mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            classActivity: [],
            pageTatal:undefined,
            search:"",
        };
    },
    methods: {
        async deleteActivity(id) {
            await this.$confirm("你确定删除吗?")
                .then(async () => {
                    let { data } = await deleteClassActivity({ id })
                    if (data.code == 200) {
                        this.$message.success("删除成功")
                        this.getClassActivity()
                    } else {
                        this.$message.error("删除失败")
                    }
                })

        },
        getClassActivity() {
            setTimeout(() => {
                selectClassActivity({ classId: this.userMessage.classId, isDate: true,pageNum:1 })
                    .then(({ data }) => {
                        console.log(data);
                        this.pageTatal = data.total
                        this.classActivity = data.data
                    })
            }, 50);
        },
        pageCurrentClick(e){
            selectClassActivity({ classId: this.userMessage.classId, isDate: true,pageNum:e })
                .then(({ data }) => {
                    this.pageTatal = data.total
                    this.classActivity = data.data
                })
        }
    },
    async mounted() {
        this.getClassActivity()
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
