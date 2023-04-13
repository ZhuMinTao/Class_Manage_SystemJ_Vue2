<template>
    <div style="padding:30px;box-sizing: border-box;">
        <div style="height: 10%;">
            <el-button type="primary"
                @click="$router.push(`/user_message_set/coure_six_update?opertion=insert`)">新增信息</el-button>
        </div>
        <el-table :row-style="{ height: '150' }" header-align="center" aitem  border
        :data="showClassCourseSix.filter(data => !search || data.courseSixDate.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%;height: 75%;">
            <el-table-column prop="courseSixDate" label="课六日期">
            </el-table-column>
            <el-table-column prop="presideOver.userName" label="主持人">
            </el-table-column>
            <el-table-column prop="greetOne.userName" label="迎接A">
            </el-table-column>
            <el-table-column prop="greetTwo.userName" label="迎接B">
            </el-table-column>
            <el-table-column prop="lectureOne.userName" label="演讲A">
            </el-table-column>
            <el-table-column prop="lectureTwo.userName" label="演讲B">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="220">
                <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="small" placeholder="请输入课六时间" />
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" type="primary"
                        @click="$router.push(`/user_message_set/coure_six_update?opertion=edit&classCourseSix=${JSON.stringify(scope.row)}`)">修改</el-button>
                    <el-button size="mini" type="danger" @click="deleteCourseSix(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination @current-change="pageCurrentClick" style="height:15%;display: flex;align-items: center;"
            :page-size="8" background layout="prev, pager, next" :total="pageTatal">
        </el-pagination>
    </div>
</template>

<script>
import { selectClassCourseSix, deleteClassCourseSix } from '@/api/class_message';
import { mapActions, mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            classCourseSix: [],
            showClassCourseSix: [],
            pageTatal: undefined,
            pageIndex: 1,
            search:"",
        };
    },
    methods: {
        //获取课六信息列表
        async getCoureMessageList() {
            setTimeout(async () => {
                let { data } = await selectClassCourseSix({ classId: this.userMessage.classId, isDate: true })
                this.classCourseSix = data.data
                console.log(Math.ceil(data.total / 8));
                if (this.pageIndex > Math.ceil(data.total / 8)) {
                    this.pageIndex -= 1
                }
                this.showClassCourseSix = this.classCourseSix.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)
                this.pageTatal = data.total
            }, 50);
        },
        //分页页数点击事件
        pageCurrentClick(e) {
            this.pageIndex = e
            this.showClassCourseSix = this.classCourseSix.slice((this.pageIndex - 1) * 8, (this.pageIndex - 1) * 8 + 8)
        },
        //删除某条课六安排
        async deleteCourseSix(id) {
            await this.$confirm("你确定删除吗?")
                .then(async () => {
                    let { data } = await deleteClassCourseSix({ id })
                    if (data.code) {
                        this.$message.success("删除成功")
                        this.getCoureMessageList()
                    } else {
                        this.$message.error(data.message)
                    }
                })

        }

    },
    async mounted() {
        this.getCoureMessageList()
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
