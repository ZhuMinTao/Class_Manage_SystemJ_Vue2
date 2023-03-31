<template>
    <div style="padding:30px;box-sizing: border-box;">
        <el-tabs cu style="height: 620px;">
            <el-tab-pane v-if="userMessage.userDetail.sn=='学生'" label="基本信息">
                <el-collapse value="1" @click="">
                    <el-collapse-item class="el_coll_style" title="邮箱绑定" name="1" disabled>
                        <div>邮箱: {{ userBindMessage.emailBind }}
                            <el-tag style="margin-left: 10px;" :type="userBindMessage.emailBind ? '' : 'danger'">
                                {{ userBindMessage.emailBind ? "已绑定" : "未绑定" }}
                            </el-tag>
                        </div>
                    </el-collapse-item>
                    <el-collapse-item class="el_coll_style" title="教务系统绑定" name="1" disabled>
                        <div>账号: {{ userBindMessage.eduAccount }}
                            <el-tag style="margin-left: 10px;" :type="userBindMessage.eduAccount ? '' : 'danger'">
                                {{ userBindMessage.eduAccount ? "已绑定" : "未绑定" }}
                            </el-tag>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </el-tab-pane>
            <el-tab-pane label="邮箱绑定" >
                <div style="margin-top:20px;width: 500px">
                    <el-form :model="emailFrom" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item prop="email" label="绑定邮箱" :rules="emailRule">
                            <div style="display: flex;align-items: center;">
                                <el-input v-model="emailFrom.email"
                                    :disabled="userBindMessage.emailBind ? true : false"></el-input>
                                <el-tag style="margin-left: 10px;" :type="userBindMessage.emailBind ? '' : 'danger'">
                                    {{ userBindMessage.emailBind ? "已绑定" : "未绑定" }}
                                </el-tag>
                            </div>
                        </el-form-item>
                        <el-form-item v-if="userBindMessage.emailBind != ''" prop="updateEmail" label="更换邮箱"
                            :rules="emailRule">
                            <div style="display: flex;align-items: center;">
                                <el-input v-model="emailFrom.updateEmail"></el-input>
                                <el-tag style="margin-left: 10px;visibility:hidden">未绑定</el-tag>
                            </div>
                        </el-form-item>
                        <el-form-item label="验证码" prop="checkPass">
                            <el-input style="width: 150px;" v-model="emailFrom.code" autocomplete="off"></el-input>
                            <el-button style="margin-left: 50px;width: 110px;" @click="sendCodeClick">{{ reciprocal != -1 ?
                                reciprocal : "发送验证码" }}</el-button>
                        </el-form-item>

                        <el-form-item>
                            <el-button style="width: 150px;" type="primary" @click="removeBind">{{ userBindMessage.emailBind
                                ? "更换" : "绑定" }}</el-button>
                        </el-form-item>

                    </el-form>
                </div>
            </el-tab-pane>
            <el-tab-pane v-if="userMessage.userDetail.sn=='学生'" label="教务处绑定">
                <div style="margin-top:20px;width: 500px">
                <el-form :model="eduFrom" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item  label="教务处账号" >
                            <div style="display: flex;align-items: center;">
                                <el-input v-model="eduFrom.userCode"
                                    :disabled="userBindMessage.eduAccount ? true : false"></el-input>
                                <el-tag style="margin-left: 10px;" :type="userBindMessage.eduAccount ? '' : 'danger'">
                                    {{ userBindMessage.eduAccount ? "已绑定" : "未绑定" }}
                                </el-tag>
                            </div>
                        </el-form-item>
                        <el-form-item label="更改账号" v-if=" userBindMessage.eduAccount?true:false">
                            <div style="display: flex;align-items: center;">
                                <el-input v-model="eduFrom.updateCode"></el-input>
                                <el-tag style="margin-left: 10px;visibility:hidden">未绑定</el-tag>
                            </div>
                        </el-form-item>
                        <el-form-item label="教务处密码" v-if=" userBindMessage.eduAccount?false:true">
                            <div style="display: flex;align-items: center;">
                                <el-input type="password" v-model="eduFrom.userPwd"></el-input>
                                <el-tag style="margin-left: 10px;visibility:hidden">未绑定</el-tag>
                            </div>
                        </el-form-item>
                        <el-form-item label="更改账号密码" v-if=" userBindMessage.eduAccount?true:false">
                            <div style="display: flex;align-items: center;">
                                <el-input type="password" v-model="eduFrom.updatePwd"></el-input>
                                <el-tag style="margin-left: 10px;visibility:hidden">未绑定</el-tag>
                            </div>
                        </el-form-item>

                        <el-form-item>
                            <el-button style="width: 150px;" type="primary" @click="bindEdu">{{ userBindMessage.eduAccount
                                ? "更换绑定" : "绑定" }}</el-button>
                        </el-form-item>

                    </el-form>
                </div>
            </el-tab-pane>
            <el-tab-pane  label="修改密码" >
                <el-empty style="height: 500px;" v-if="!userBindMessage.emailBind" description="需先绑定邮箱"></el-empty>
                <div style="margin-top:20px;width: 500px" v-if="userBindMessage.emailBind">
                    <el-form :model="accountPwdFrom" status-icon ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item prop="email" label="绑定邮箱" :rules="emailRule">
                            <div style="display: flex;align-items: center;">
                                <el-input :disabled="true" v-model="accountPwdFrom.email"></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item prop="email" label="密码" >
                            <div style="display: flex;align-items: center;">
                                <el-input type="password" v-model="accountPwdFrom.password"></el-input>
                            </div>
                        </el-form-item>
                        <el-form-item label="验证码" prop="checkPass">
                            <el-input style="width: 150px;" v-model="accountPwdFrom.code" autocomplete="off"></el-input>
                            <el-button style="margin-left: 50px;width: 110px;" @click="sendCodeUpdate">{{ reciprocal != -1 ?
                                reciprocal : "发送验证码" }}</el-button>
                        </el-form-item>

                        <el-form-item>
                            <el-button style="width: 150px;" type="primary" @click="updatePwdBtnClick">修改密码</el-button>
                        </el-form-item>

                    </el-form>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { selectUserBindMessage, updateBindEmail } from '@/api/user_message'
import { sendEmailCode,emailBindAccount,updatePassword } from '@/api/verification'
import { bindEduSystem,updateBindEduSystem } from '@/api/common_message';
import { mapActions, mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            emailFrom: {
                updateEmail: "",
                email: "",
                code: "",
                userCode: "",
            },
            userBindMessage: {},
            emailRule: [
                { message: '请输入邮箱地址', trigger: 'blur' },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
            ],
            eduFrom:{
                userCode:"",
                userPwd:"",
                updateCode:"",
                updatePwd:"",
            },
            accountPwdFrom:{
                email:"",
                code:"",
                password:"",
            },
        };
    },
    methods: {
        async removeBind() {
            if (this.userBindMessage.emailBind == '') {
                emailBindAccount(this.emailFrom)
                .then(({data})=>{
                    if(data.code==200){
                        this.$message({
                            type: 'success',
                            message: '绑定成功!'
                        });
                        
                    }else{
                        this.$message({
                            type: 'error',
                            message: data.message
                        });
                    }
                })

            } else {
                let {data} = await updateBindEmail(this.emailFrom)
                if (data.code == 200) {
                    this.$message({
                        type: 'success',
                        message: '操作成功!'
                    });
                    this.emailFrom.code = this.emailFrom.updateEmail = ""
                    //刷新绑定信息
                    await this.selectBindMessage();
                } else {
                    this.$message({
                        type: 'error',
                        message: data.message
                    })
                }
            }

        },
        async sendCodeClick() {
            if (this.reciprocal != -1) return

            //当账号已经绑定发送已绑定的邮箱，未绑定发送用户输入的邮箱
            let data;
            if (this.userBindMessage.emailBind != '') {
                data = (await sendEmailCode(this.emailFrom.updateEmail)).data
            } else {
                data = (await sendEmailCode(this.emailFrom.email)).data
            }
            if (data.code != 200) {
                this.$message({
                    type: 'danger',
                    message: data.message
                });
            } else {
                this.setAssigment(60)
            }
        },
        async sendCodeUpdate(){
            let {data} = (await sendEmailCode(this.accountPwdFrom.email))

            console.log(data);
            if (data.code != 200) {
                this.$message({
                    type: 'danger',
                    message: data.message
                });
            } else {
                this.setAssigment(60)
            }
        },
        async selectBindMessage(){
           let {data} =  await selectUserBindMessage()
            this.userBindMessage = data.data
            //邮箱表单信息
            this.emailFrom.email = this.userBindMessage.emailBind
            this.emailFrom.userCode = this.userMessage.userCode

            //教务系统表单系统
            this.eduFrom.userCode = this.userBindMessage.eduAccount

            //修改密码设置邮箱信息
            this.accountPwdFrom.email = this.userBindMessage.emailBind

        },
        //邮箱绑定操作
        async bindEdu(){
            if(this.userBindMessage.eduAccount==""){
                let {data} = await bindEduSystem(this.eduFrom)
                if(data.code==200){
                    this.$message.success("绑定成功!")
                    await this.selectBindMessage()
                    this.eduFrom.userPwd = ""
                }else{
                    this.$message.error(data.message)
                }
            }else{
                let {data} = await updateBindEduSystem(this.eduFrom)
                if(data.code==200){
                    this.$message.success("绑定成功!")
                    this.eduFrom.updatePwd = ""
                    this.eduFrom.userPwd = ""
                    this.eduFrom.userCode = ""
                    this.eduFrom.updateCode = ""
                    await this.selectBindMessage()

                }else{
                    this.$message.error(data.message)
                }
            }
            

        },
        //修改密码操作
        async updatePwdBtnClick(){
            let {data} = await updatePassword(this.accountPwdFrom)
            if(data.code==200){
                this.$message.success("修改成功")
                this.accountPwdFrom.password=""
                this.accountPwdFrom.code = ""
                this.setAssigment(0)
            }else{
                this.$message.error(data.message)
            }
        },
        ...mapActions(['setAssigment','getUserDetailMessage']),
    },
    async mounted() {
        await this.getUserDetailMessage()
        await this.selectBindMessage()
        
    },
    computed: {
        ...mapState(['reciprocal','userMessage'])
    }
}
</script>

<style scoped lang="less">
/deep/ .el-collapse-item.is-disabled .el-collapse-item__header {
    cursor: pointer !important;
}</style>
