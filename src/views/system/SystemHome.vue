<template>
    <div style="padding:0 30px;box-sizing: border-box;">
        <div style="height: 600px;">
            <el-table max-height="600px"
                :data="classList.filter(data => !search || data.classCode.toLowerCase().includes(search.toLowerCase()))"
                style="width: 100%;">
                <el-table-column label="班级编号" prop="classCode" width="200">
                </el-table-column>
                <el-table-column label="辅导员" prop="instructor.userName" width="200">
                </el-table-column>
                <el-table-column label="专业名称" prop="exceptName" width="200">
                </el-table-column>
                <el-table-column align="right">
                    <template slot="header" slot-scope="scope">
                        <el-input v-model="search" size="small  " placeholder="输入班级编号" />
                    </template>
                    <template slot-scope="scope">
                        <el-button size="mini"
                            @click="$router.push('/backstage_layout/class_manage?classId=' + scope.row.id)">查看</el-button>
                        <el-button size="mini" type="danger" @click="deleteOpertion(scope.row.id)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <div style="display: flex;align-items: center;">
            <el-button v-if="userMessage.userDetail.sn == '管理员'" @click="insertAccountModel = true" type="primary"
                style="margin-top: 20px;">新增账号</el-button>

            <el-button @click="dialogFormVisible = true" type="primary" style="margin-top: 20px;">新增班级</el-button>
        </div>


        <el-dialog title="新增班级" :visible="dialogFormVisible" @close="dialogFormVisible = false">
            <el-form label-width="80px" :model="classMessage">
                <el-form-item label="辅导员">
                    <el-select filterable v-model="classMessage.userId" placeholder="请选择对应教师">
                        <el-option v-for="item in teacherList" :label="item.userName" :value="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="班级编号">
                    <el-input v-model="classMessage.classCode" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="专业名称">
                    <el-input v-model="classMessage.exceptName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="班级号">
                    <el-input type="number" v-model="classMessage.num" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="insertOpertion">确 定</el-button>
            </div>
        </el-dialog>


        <el-dialog title="新增账号" :visible="insertAccountModel" @close="insertAccountModel = false">
            <el-form label-width="80px" :model="classMessage">
                <el-form-item label="账号身份">
                    <el-select filterable v-model="accountRe.sn" placeholder="请选择对应身份">
                        <el-option label="管理员" value="管理员"></el-option>
                        <el-option label="老师" value="老师"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="accountRe.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户账号">
                    <el-input v-model="accountRe.userCode" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户密码">
                    <el-input v-model="accountRe.userPassword" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="insertAccountModel = false">取 消</el-button>
                <el-button type="primary" @click="insertAccount">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import { getAllClassList, deleteClass, getTeacherList, insertClass, getManageClassList,insertAccount } from "@/api/system_manage"
import { mapState } from "vuex";
export default {
    name: '',
    data() {
        return {
            classList: [],
            search: "",
            dialogFormVisible: false,
            classMessage: {
                "classCode": "",
                "exceptName": "",
                "num": "",
                "userId": "",
            },
            teacherList: [],
            insertAccountModel: false,
            accountRe: {
                "userCode": "",
                "userPassword": "",
                "sn": "",
                "userName": ""
            }
        };
    },
    methods: {
        //获取班级列表
        async getAllClass() {
            setTimeout(async () => {

                if (this.userMessage.userDetail.sn == '管理员') {
                    let { data } = await getAllClassList()
                    this.classList = data.data
                } else {
                    let { data } = await getManageClassList()
                    this.classList = data.data
                }

            }, 50);

        },
        //删除操作
        deleteOpertion(id) {
            this.$confirm("确定删除此班级吗?")
                .then(async () => {
                    let { data } = await deleteClass({ classId: id })
                    if (data.code == 200) {
                        this.$message.success("删除成功")
                        this.getAllClass()
                    } else {
                        this.$message.error(data.message)
                    }
                })
        },
        //获取老师列表
        async getTeacherList() {
            let { data } = await getTeacherList()
            this.teacherList = data.data
            console.log(data);

        },
        //新增班级
        async insertOpertion() {
            let { data } = await insertClass(this.classMessage)
            if (data.code == 200) {
                this.$message.success("添加成功")
                this.getAllClass()
            } else {
                this.$message.error(data.message)
            }
            this.dialogFormVisible = false
        },
        //新增账号
        async insertAccount(){
            let {data} = await insertAccount(this.accountRe)
            if(data.code==200){
                this.$message.success("添加成功")
                this.getTeacherList()
                this.getAllClass()
                this.insertAccountModel = false
            }else{
                this.$message.error(data.message)
            }
            
        }
    },
    mounted() {
        this.getAllClass();
        this.getTeacherList();
    },
    computed: {
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped></style>
