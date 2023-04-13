<template>
    <div style="padding:30px;box-sizing: border-box;">
        <div style="height: 10%;">
            <el-button type="primary"
                @click="$router.push(`/user_message_set/hygiene_update?opertion=insert`)">新增信息</el-button>
        </div>
        <el-table :row-style="{ height: '150' }" header-align="center" aitem  border
        :data="showClassHygiene.filter(data => !search || data.hygieneDate.toLowerCase().includes(search.toLowerCase()))"

            style="width: 100%;height: 75%;">
            <el-table-column prop="hygieneDate" label="值日时间">
            </el-table-column>
            <el-table-column prop="cleanBlackboard.userName" label="擦黑板">
            </el-table-column>
            <el-table-column prop="moppingFloor.userName" label="拖地">
            </el-table-column>
            <el-table-column prop="sweepFloor.userName" label="扫地">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="220">
                <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="small" placeholder="请输入值日时间" />
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" type="primary"
                        @click="$router.push(`/user_message_set/hygiene_update?opertion=edit&classhygiene=${JSON.stringify(scope.row)}`)">修改</el-button>
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
import { selectClassHygiene, deleteClassHygiene } from '@/api/class_message';
import { mapActions, mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            classHygiene: [],
            showClassHygiene: [],
            pageTatal: undefined,
            pageIndex: 1,
            search:"",
        };
    },
    methods: {
        //获取卫生信息列表
        async getHygieneList() {
            setTimeout(async () => {
                let { data } = await selectClassHygiene({ classId: this.userMessage.classId})
                this.classHygiene = data.data
                if (this.pageIndex > Math.ceil(data.total / 8)) {
                    this.pageIndex -= 1
                }
                this.showClassHygiene = this.classHygiene.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)
                this.pageTatal = data.total
            }, 50);
        },
        //分页页数点击事件
        pageCurrentClick(e) {
            this.pageIndex = e
            this.showClassHygiene = this.classHygiene.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)
        },
        //删除某条课六安排
        async deleteOpertion(id) {
            await this.$confirm("你确定删除吗?")
                .then(async () => {
                    let { data } = await deleteClassHygiene({id:id})
                    if (data.code==200) {
                        this.$message.success("删除成功")
                        this.getHygieneList()
                    } else {
                        this.$message.error(data.message)
                    }
                })
        }

    },
    async mounted() {
        //查询卫生安排列表
        this.getHygieneList()
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
