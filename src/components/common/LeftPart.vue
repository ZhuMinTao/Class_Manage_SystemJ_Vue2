<template>
    <div style="width:18%;border-right: 1px solid #eeeeee;overflow: auto;" :style="{'height':height-60.5+'px'}">
        <el-menu
      :default-active="$route.meta.breadList[0].link"
      style="border:none;background: rgba(0, 0, 0, 0);"
      class="el-menu-vertical-demo"
      router
      >
      <el-menu-item index="/">
        <i class="el-icon-house"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/score_query">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">成绩查询</span>
      </el-menu-item>
      <el-menu-item index="/course_table" >
        <i class="el-icon-document"></i>
        <span slot="title">课表查询</span>
      </el-menu-item>
      <el-menu-item index="/tast_list">
        <i class="el-icon-news"></i>
        <span slot="title">上传任务</span>
      </el-menu-item>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-coordinate"></i>
          <span>我的班级</span>
        </template>
        <el-menu-item-group>
          <template slot="title">介绍</template>
          <el-menu-item index="/class_introduce">班级介绍</el-menu-item>
          <el-menu-item index="/committee_introduce">班委会介绍</el-menu-item>
          <el-menu-item index="/class_roster">班级花名册</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <template slot="title">安排</template>
          <el-menu-item index="/class_hygiene">卫生安排</el-menu-item>
          <el-menu-item index="/class_coure_six">课六安排</el-menu-item>
          <el-menu-item index="/class_mooc">慕课安排</el-menu-item>
          <el-menu-item index="/class_week_test">周测安排</el-menu-item>
          <el-menu-item index="/class_activity">活动安排</el-menu-item>
          <el-menu-item index="/class_week_work">作业安排</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            height:0,
        };
    },
    methods: {

    },
    mounted(){
        this.height = document.documentElement.clientHeight
    }
}
</script>

<style scoped>
::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
</style>
