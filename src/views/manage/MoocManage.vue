<template>
    <div style="box-sizing: border-box;">
        <div style="height: 10%;">
            <el-button type="primary"
                @click="$router.push('/user_message_set/mooc_update?opertion=insert')">新增任务</el-button>
        </div>
        <el-table :row-style="{ height: '150' }" header-align="center" aitem  border
        :data="showClassMoocList.filter(data => !search || data.examineDate.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%;height: 75%;">
            <el-table-column prop="publishDate" label="发布时间" width="200">
            </el-table-column>
            <el-table-column prop="examineDate" label="完成时间" width="200">
            </el-table-column>
            <el-table-column prop="completeContent" label="完成内容" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column fixed="right" label="操作" width="220">
                <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="small" placeholder="请输入完成时间" />
                    </template>
                <template slot-scope="scope">
                    <el-button size="mini" type="primary"
                        @click="$router.push(`/user_message_set/mooc_update?opertion=edit&classMooc=${JSON.stringify(scope.row)}`)">修改</el-button>
                    <el-button size="mini" type="danger" @click="deleteOpertion(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>

        </el-table>
        <el-pagination @current-change="pageCurrentClick" style="height:15%;display: flex;align-items: center;" :page-size="8" background layout="prev, pager, next" :total="pageTatal">
        </el-pagination>
    </div>
</template>

<script>
import { selectMooc ,deleteMooc} from '@/api/class_message';
import { mapActions, mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            classMoocList: [],
            pageTatal:undefined,
            showClassMoocList:[],
            pageIndex:1,
            search:"",
        };
    },
    methods: {
        async deleteOpertion(id) {
            await this.$confirm("你确定删除吗?")
            .then(async () => {
                let { data } = await deleteMooc({ id })
                if (data.code == 200) {
                    this.$message.success("删除成功")
                    this.getMoocList()
                } else {
                    this.$message.error("删除失败")
                }
            })
        },
        getMoocList() {
            setTimeout(() => {
                selectMooc({ classId: this.userMessage.classId,isDate:true})
                    .then(({ data }) => {
                        console.log(data);
                        this.pageTatal = data.total
                        this.classMoocList = data.data
                        this.showClassMoocList = this.classMoocList.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)

                    })
            }, 50);
        },
        //分页数字点击
        pageCurrentClick(e){
            this.pageIndex = e
            this.showClassMoocList = this.classMoocList.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)
        }
    },
    async mounted() {
        this.getMoocList()
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
