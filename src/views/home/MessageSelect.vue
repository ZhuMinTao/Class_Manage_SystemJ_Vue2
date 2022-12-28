<template>
    <div class="message_select">
        <div class="message_select_menu" :style="{'height':height+'px'}">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>班级安排</span>
                </template>
                <el-menu-item-group>
                <el-menu-item index="1-1">卫生安排</el-menu-item>
                <el-menu-item index="1-2">课六安排</el-menu-item>
                <el-menu-item index="1-3">活动安排</el-menu-item>
                <el-menu-item index="1-4">慕课安排</el-menu-item>
                <el-menu-item index="1-5">周测安排</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="iconfont icon-chengjiluru"></i>
                <span slot="title">成绩查询</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="iconfont icon-kebiao"></i>
                <span slot="title">课表查询</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="iconfont icon-huamingce"></i>
                <span slot="title">班级花名册</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="iconfont icon-jiyao"></i>
                <span slot="title">纪律查询</span>
            </el-menu-item>
          
            </el-menu>
        </div>
        
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
   name: '',
   data() {
        return {
            height:0,
        };
    },
    mounted(){
        this.height = document.documentElement.clientHeight
        this.SETHOMETOPINDEX(3)
    },
    methods: {
        ...mapMutations(['SETHOMETOPINDEX'])
    },
    
};
</script>

<style scoped>
    .iconfont{
        margin:0 5px;
    }
    .el-menu-vertical-demo{
        width:100%;
    }
    .message_select{
        display: flex;
        width:100%;
    }
    .message_select_menu{
        width:15%;
        background-color: #545c64;
    }
</style>
