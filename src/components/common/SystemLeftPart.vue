<template>
    <div style="width:18%;overflow: auto;border-right: 1px solid #eeeeee;" :style="{ 'height': height - 60.5 + 'px' }">
        <el-menu router :default-active="$route.meta.link" style="border:none;background: rgba(0, 0, 0, 0);"
            class="el-menu-vertical-demo">
            <el-menu-item index="/user_message_set/user_detail">
                <i class="el-icon-postcard"></i>
                <span slot="title">个人信息</span>
            </el-menu-item>
            <el-menu-item index="/user_message_set/account_safe">
                <i class="el-icon-lock"></i>
                <span slot="title">账号安全</span>
            </el-menu-item>
            <el-menu-item v-for="item in menuList" :index="item.menuRouter">
                <i :class="item.icon"></i>
                <span slot="title">{{item.menuName}}</span>
            </el-menu-item>
            <el-menu-item index="/user_message_set/about_product">
                <i class="el-icon-warning-outline"></i>
                <span slot="title">关于产品</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import {getMenuList} from '@/api/power_message'

export default {
    name: '',
    data() {
        return {
            height: 0,
            menuList:[],
        };
    },
    methods: {
        ...mapActions(['getUserDetailMessage']),
        async getMenuList(){
            let {data} = await getMenuList()
            console.log(data.data);
            this.menuList = data.data
        },

    },
    async mounted() {
        this.height = document.documentElement.clientHeight
        await this.getUserDetailMessage()

        await this.getMenuList()

    }
}
</script>

<style scoped>
    /* *{
        color: #646464;
    } */
    ::-webkit-scrollbar{
        height: 0;
    }
</style>
