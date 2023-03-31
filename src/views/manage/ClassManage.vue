<template>
    <div style="box-sizing: border-box;overflow: auto;" :style="{ 'height': height - 60.5 + 'px' }">
        <el-tabs value="introduce" style="overflow-y: auto;height: 100%;">
            <el-tab-pane label="班级介绍" name="introduce">
                <el-input type="textarea" :autosize="{ minRows: 23, maxRows: 23 }"
                    v-model="classMessage.classSystemDetail.classIntroduce"></el-input>
                <el-button type="primary" style="margin-top: 20px;" @click="setClassIntroduce">设置</el-button>
            </el-tab-pane>
            <el-tab-pane label="班规设置" name="role">
                <el-input type="textarea" :autosize="{ minRows: 23, maxRows: 23 }"
                    v-model="classMessage.classSystemDetail.classRole"></el-input>
                <el-button type="primary" @click="setClassIntroduce" style="margin-top: 20px;">设置</el-button>
            </el-tab-pane>
            <el-tab-pane label="班级荣誉管理" name="honor">
                <el-input type="textarea" :autosize="{ minRows: 23, maxRows: 23 }"
                    v-model="classMessage.classSystemDetail.classHonor"></el-input>
                <el-button type="primary" style="margin-top: 20px;" @click="setClassIntroduce">设置</el-button>
            </el-tab-pane>
            <el-tab-pane label="班委会成员设置" name="committees" v-if="userMessage.userDetail.sn!='学生'">
                <el-button type="primary" style="margin-bottom: 10px;" @click="dialogFormVisible = true">新增信息</el-button>
                <el-table :data="classCommittees" style="width: 100%;height:510px" max-height="500px">
                    <el-table-column label="姓名" prop="user.userName">
                    </el-table-column>
                    <el-table-column label="身份" prop="sn">
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" type="primary" @click="$router.push('/backstage_layout/choose_power?userId='+scope.row.user.id)">权限</el-button>

                            <el-button size="mini" type="danger" @click="deleteOpertion(scope.row.id)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="导入班级花名册" name="roster" v-if="userMessage.userDetail.sn!='学生'">
                <el-table :data="tableData" max-height="510px" style="height: 510px;" v-loading="loading">
                    <el-table-column type="index" width="100">
                    </el-table-column>
                    <el-table-column prop="stuCode" label="学号">
                    </el-table-column>
                    <el-table-column prop="sex" :formatter="sexf" label="性别">
                    </el-table-column>
                    <el-table-column prop="userName" label="姓名">
                    </el-table-column>
                </el-table>
                <div style="padding:15px 0;box-sizing: border-box;">
                    <el-upload :headers="headers" class="upload-demo" ref="upload" :limit="1" :data="uploadParam"
                        :action="$baseUrl + '/function/upload/class_roster'" :file-list="fileList"
                        :on-success="uploadSuccess" :auto-upload="false">
                        <div
                            style="display: flex;justify-content: space-between;width: 100%;padding:0 30px;box-sizing: border-box;">
                            <div>
                                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                                <el-button style="margin-left: 10px;" size="small" type="success"
                                    @click.stop="submitUpload">上传到服务器</el-button>
                            </div>
                            <el-button  type="danger" @click.stop="deleteRoster">删除班级花名册</el-button>
                        </div>
                    </el-upload>
                </div>
            </el-tab-pane>
        </el-tabs>

        <el-dialog title="新增班委信息" :visible="dialogFormVisible" @close="dialogFormVisible = false">
            <el-form :model="classCommitteesSingle">
                <el-form-item label="学生选择" :label-width="'120px'">
                    <el-select style="width: 46.5%;" v-model="classCommitteesSingle.userId" filterable placeholder="请选择">
                        <el-option v-for="item, index in classMemberList" :key="'index' + index" :label="item.userName"
                            :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="班委身份" :label-width="'120px'">
                    <el-input v-model="classCommitteesSingle.sn" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="insertCommitteesOpertion">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
import { selectClassMessage, updateClassMessage, selectCommittees, deleteCommittees, insertCommittees, selectClassRoster,deleteClassRoster } from '@/api/class_message'
import { selectUserByclassId } from '@/api/user_message';
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            classMessage: { classSystemDetail: {} },
            height: 0,
            classCommittees: [{ user: {} }],
            dialogFormVisible: false,
            classCommitteesSingle: { sn: "", userId: "", classId: "" },
            classMemberList: [],
            loading: false,
            uploadParam: {
                classId: "",
            },
            tableData: [],
            headers: { "token": localStorage.getItem("new_class_system_token") },
            fileList: [],
            classId: undefined,

        };
    },
    methods: {
        //更改班级信息设置
        async setClassIntroduce() {
            let { data } = await updateClassMessage(this.classMessage.classSystemDetail)
            if (data.code == 200) {
                this.$message.success("提交成功")
            } else {
                this.$message.error(data.message)
            }
        },
        //删除班委
        deleteOpertion(id) {
            this.$confirm("确定删除此信息吗?")
                .then(() => {
                    deleteCommittees({ id })
                        .then(({ data }) => {
                            if (data.code == 200) {
                                this.$message.success("删除成功")
                                this.classCommitteesSingle.sn = ""
                                this.classCommitteesSingle.userId = ""
                                this.getCommittessMessage()
                            } else {
                                this.$message.error(data.message)

                            }
                        })
                })
        },
        //获取班委信息
        getCommittessMessage() {
            selectCommittees({ classId: this.classId })
                .then(({ data }) => {
                    this.classCommittees = data.data
                })
        },
        //获取班级学生信息
        async getCommberList() {
            let { data } = await selectUserByclassId({ classId: this.classId })
            this.classMemberList = data.data
        },
        //新增班委操作
        insertCommitteesOpertion() {
            this.dialogFormVisible = false
            insertCommittees(this.classCommitteesSingle)
                .then(({ data }) => {
                    if (data.code == 200) {
                        this.$message.success("添加成功")
                        this.classCommitteesSingle.sn = ""
                        this.classCommitteesSingle.userId = ""
                        this.getCommittessMessage()
                    } else {
                        this.$message.error(data.message)
                    }
                })
        },
        //点击上传
        submitUpload() {
            this.$refs.upload.submit()

            this.get
        },
        sexf(row, index) {
            return row.sex == '0' ? '女' : '男'
        },
        //获取班级花名册
        async getRosterLIst() {
            this.tableData = (await selectClassRoster({ classId: this.classId })).data.data
        },
        uploadSuccess(res) {
            this.fileList = []
            if (res.code == 200) {
                this.$message.success("上传成功");
                this.getRosterLIst()
            } else {
                this.$message.error(res.message)
            }
        },
        //删除班级花名册
        async deleteRoster() {
            this.$confirm("你确定删除班级的花名册吗?")
                .then(async () => {
                    let { data } = await deleteClassRoster({classId:this.classId})
                    if (data.code == 200) {
                        this.$message.success("花名册删除成功！")
                        this.getRosterLIst()
                    }else{
                        this.$message.error(data.message)
                    }

                })

        }

    },
    async mounted() {
        this.height = document.documentElement.clientHeight

        setTimeout(async () => {
            let linId = this.$route.query.classId

            this.classId = linId ? linId : this.userMessage.classId



            //设置班级id
            this.classCommitteesSingle.classId = this.classId
            //设置上传花名册的班级id
            this.uploadParam.classId = this.classId

            //班级花名册
            this.getRosterLIst()
            this.loading = false

            //查询班级信息
            selectClassMessage({ classId: this.classId })
                .then(({ data }) => {
                    this.classMessage = data.data
                })
            this.getCommittessMessage()
            this.getCommberList()
        }, 50);




    },
    computed: {
        ...mapState(['userMessage'])
    },
}
</script>

<style scoped lang="less">
/deep/ .el-upload {
    width: 100%;
}
</style>
