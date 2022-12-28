<template>
    <div class="about_product">
        <div class="about_product_main">
            <div class="about_product_title">功能介绍</div>
            <div class="default_context" style="margin:0 50px;">
                <b>图片上传:</b>
                <div style="display:flex">
                    <span style="margin:0 15px;"></span>
                    <p>
                        主要用于帮助班委或管理员进行图片或截图的收集，将需要上传的截图进行上传，完成对于的上传任务.
                    </p>
                </div>
                <b style="margin-top: 30px;display: block;">Excel导出:</b>
                <div style="display:flex">
                    <span style="margin:0 15px;"></span>
                    <p>
                        用于导出班级花名册、课六安排、卫生安排等信息。
                    </p>
                </div>
            </div>
            <div class="about_product_title">信息查询</div>
            <div class="default_context" style="margin:0 50px;">
                <b>慕课查询:</b>
                <div style="display:flex">
                    <span style="margin:0 15px;"></span>
                    <p>
                        可以查看是否完成对于的慕课任务，以及慕课需要在何时完成
                    </p>
                </div>
                <b style="margin-top: 30px;display: block;">卫生查询:</b>
                <div style="display:flex">
                    <span style="margin:0 15px;"></span>
                    <p>
                        可查询本周卫生安排情况。
                    </p>
                </div>
                <b style="margin-top: 30px;display: block;">课六安排:</b>
                <div style="display:flex">
                    <span style="margin:0 15px;"></span>
                    <p>
                        可查询接下来的专业课，课前六分钟演讲人员安排情况。
                    </p>
                </div>
                <b style="margin-top: 30px;display: block;">周测安排:</b>
                <div style="display:flex">
                    <span style="margin:0 15px;"></span>
                    <p>
                        会列举出本周需要参加周测的人员名单。
                    </p>
                </div>
                <b style="margin-top: 30px;display: block;">成绩查询:</b>
                <div style="display:flex">
                    <span style="margin:0 15px;"></span>
                    <p>
                        可查询学期期末成绩结果。
                    </p>
                </div>
                <b style="margin-top: 30px;display: block;">课表查询:</b>
                <div style="display:flex">
                    <span style="margin:0 15px;"></span>
                    <p>
                        系统会根据时间更新本周课表内容。
                    </p>
                </div>
                <b style="margin-top: 30px;display: block;">活动安排:</b>
                <div style="display:flex">
                    <span style="margin:0 15px;"></span>
                    <p>
                        可以查询接下来的活动计划，如有问题可更改已发布活动计划。
                    </p>
                </div>
                <b style="margin-top: 30px;display: block;">纪律查询:</b>
                <div style="display:flex">
                    <span style="margin:0 15px;"></span>
                    <p>
                        由负责人发布本周纪律的情况，用户可通过系统查询上一周，本班纪律情况。
                    </p>
                </div>
            </div>
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
    methods: {
        ...mapMutations(['SETHOMETOPINDEX']),

    },
    mounted(){
        this.height = document.documentElement.clientHeight
        this.SETHOMETOPINDEX(4)
    },
};
</script>

<style scoped>
    .about_product{
        display: flex;
        margin:20px 0;
        justify-content: center;
    }
    .about_product_main{
        width:90%;
    }
    .about_product_title{
        margin:20px 0;
        font-weight: bold;
        font-size: 18px;
    }
</style>
