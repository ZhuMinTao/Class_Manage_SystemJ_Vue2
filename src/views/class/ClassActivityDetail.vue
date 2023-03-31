<template>
    <div style="padding:10px 30px;box-sizing: border-box;">
        <div class="activity_detail_title">
            <span>策划人:</span>
            <span style="padding-left: 10px;color:red;;">{{activityDetail.schemeUser?activityDetail.schemeUser.userName:""}}</span>
        </div>
        <div class="activity_detail_title">
            <span>时间:</span>
            <span style="padding-left: 10px;font-weight: lighter;">{{activityDetail.date}}</span>
        </div>
        <div class="activity_detail_title">
            <span>地点:</span>
            <span style="padding-left: 10px;font-weight: lighter;">{{activityDetail.activityPlace}}</span>
        </div>
        <div class="activity_detail_title">
            <span>活动内容:</span>
        </div>
        <div class="activity_detail_content">{{ activityDetail.title }}</div>
        <template>
            <div class="activity_detail_title">
            <span>活动图片:</span>
            </div>
            <div class="activity_detail_content">
                <el-empty style="height: 350px;"  v-if="activityDetail.activityImage?false:true"></el-empty>
                <img   v-if="activityDetail.activityImage?true:false" :src="activityDetail.activityImage" style="width: 100%;height: 500px;">
            </div>
        </template>
        
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            activityDetail:{},
        };
    },
    methods: {

    },
    mounted(){
        //获取活动详情
        this.activityDetail = JSON.parse(this.$route.query.item)
    }
}
</script>

<style scoped>
    .activity_detail_title{
        font-weight: bold;
        font-size: 16px;
        margin:10px 0;
    }
    .activity_detail_content{
        padding:10px;
        background-color: #f4f4f4;
    }
</style>
