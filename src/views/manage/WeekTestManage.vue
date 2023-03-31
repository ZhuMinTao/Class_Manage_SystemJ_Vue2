<template>
    <div style="padding:30px;box-sizing: border-box;">
        <div style="height: 10%;">
            <el-button type="primary"
                @click="$router.push(`/user_message_set/week_test_update?opertion=insert`)">新增信息</el-button>
        </div>
        <el-table :row-style="{ height: '150' }" header-align="center" aitem :data="showWeekTest" border
            style="width: 100%;height: 75%;">
            <el-table-column prop="testTime" label="测试时间" width="200">
            </el-table-column>
            <el-table-column prop="testPlace" label="测试地点" width="150">
            </el-table-column>
            <el-table-column prop="substitutionMembers" label="替补人员" width="200">
                <template slot-scope="scope">
                    {{ scope.row.substitutionMembers | memberSplit }}
                </template>
            </el-table-column>
            <el-table-column prop="testMembers" label="测试人员">
                <template slot-scope="scope">
                    {{ scope.row.testMembers | memberSplit }}
                </template>
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="220">
                <template slot-scope="scope">
                    <el-button size="mini" type="primary"
                        @click="$router.push(`/user_message_set/week_test_update?opertion=edit&weekTest=${JSON.stringify(scope.row)}`)">修改</el-button>
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
import { selectWeekTest,deleteWeekTest } from '@/api/class_message';
import { mapActions, mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            weekTest: [],
            showWeekTest: [],
            pageTatal: undefined,
            pageIndex: 1,
        };
    },
    methods: {
        //获取周测列表
        async getWorkTest() {
            setTimeout(async () => {
                let { data } = await selectWeekTest({ classId: this.userMessage.classId, isDate: true })
                this.weekTest = data.data
                if (this.pageIndex > Math.ceil(data.total / 8)) {
                    this.pageIndex -= 1
                }
                this.showWeekTest= this.weekTest.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)
                this.pageTatal = data.total
            }, 50);
        },
        pageCurrentClick(e) {
            this.pageIndex = e
            this.showWeekTest = this.weekTest.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)
        },
        //删除某条课六安排
        async deleteOpertion(id) {
            await this.$confirm("你确定删除吗?")
                .then(async () => {
                    let { data } = await deleteWeekTest({ id })
                    if (data.code) {
                        this.$message.success("删除成功")
                        this.getWorkTest()
                    } else {
                        this.$message.error(data.message)
                    }
                })

        }

    },
    async mounted() {
        this.getWorkTest()
    },
    computed: {
        ...mapState(["userMessage"])
    },
    filters:{
        memberSplit(val){
            return String(val).replaceAll(','," ")
        }
    }
}
</script>

<style scoped lang="less">
/deep/ .el-table__row {
    max-height: 100px;
}
</style>
