<template>
    <div style="padding:30px;box-sizing: border-box;">
        <el-tabs value="userMessage" cu style="height: 620px;">
            <el-tab-pane label="用户信息" name="userMessage">
                <div class="text item"
                    style="height: 150px;align-items: center;display: flex;justify-content: space-between;">
                    <div style="display: flex;width: :100%;;">
                        <div>
                            <el-avatar class="el_avatar_img" style="width: 100px;height:100px"
                                :src="userMessage.userDetail? userMessage.userDetail.profilePhoto : 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'">
                            </el-avatar>
                        </div>
                        <div style="margin-left: 30px;">
                            <el-descriptions class="margin-top" :column="1">
                                <el-descriptions-item label="用户名">{{ userMessage.userName }}</el-descriptions-item>
                                <el-descriptions-item label="学号">{{ userMessage.userCode }}</el-descriptions-item>
                            </el-descriptions>
                        </div>

                    </div>
                </div>

                <el-descriptions title="用户详情信息" style="margin-top: 20PX;" class="margin-top" :column="1" border>
                    <template slot="extra">
                        <el-button type="primary" size="small"
                            @click="$router.push('/user_message_set/edit_user_message')">编辑个人信息</el-button>
                    </template>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-mobile-phone"></i>
                            手机号码
                        </template>
                        {{ userMessage.userDetail ? userMessage.userDetail.phoneNumber : "暂无" }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-message"></i>
                            邮箱
                        </template>
                        {{ userMessage.email }}
                    </el-descriptions-item>

                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-connection"></i>
                            性别
                        </template>
                        <el-tag size="small">{{ userMessage.userDetail?userMessage.userDetail.sex=='0'? '女' : '男':'暂无' }}</el-tag>
                    </el-descriptions-item>

                </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="班级信息" name="classMessage">
                <el-empty description="暂未绑定班级，请联系管理员" style="height: 100%;" v-if="!userMessage.classSystem"></el-empty>
                
                <el-descriptions v-if="userMessage.classSystem" :labelStyle="{width:'250px'}" class="margin-top" style="margin-top: 20px;"  :column="1" border>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-paperclip"></i>
                            班级编号
                        </template>
                        {{userMessage.classSystem?userMessage.classSystem.classCode:""}}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-brush"></i>
                            专业名称
                        </template>
                        {{userMessage.classSystem?userMessage.classSystem.exceptName:""}}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-collection-tag"></i>
                            班级号
                        </template>
                        <el-tag >{{ userMessage.classSystem?userMessage.classSystem.num+'班':"" }}</el-tag>
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            辅导员
                        </template>
                        {{userMessage.classSystem?userMessage.classSystem.instructor.userName:""}}

                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-message"></i>
                            辅导员邮箱
                        </template>
                        {{userMessage.classSystem?userMessage.classSystem.instructor.email:""}}

                    </el-descriptions-item>
                </el-descriptions>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: '',
    data() { 
        return {
        };
    },
    methods: {
        ...mapActions(['getUserDetailMessage']),
    },
    computed:{
        ...mapState(['userMessage'])
    },
    async mounted(){
       await this.getUserDetailMessage()
    }
}
</script>

<style scoped lang="less">
/deep/ .el_avatar_img img {
    width: 100%;
}
</style>
