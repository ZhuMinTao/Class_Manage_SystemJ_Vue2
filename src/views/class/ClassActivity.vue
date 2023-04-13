<template>
    <div style="padding:0 30px;">
        <NoticeList :isButton="false" routerDetail="class_activity_detail" title="活动通知" style="height:600px" :list="classActivityList"></NoticeList>
    </div>
</template>

<script>
import {selectClassActivity} from '@/api/class_message'
import { mapState } from 'vuex';
import NoticeList from '@/components/common/NoticeList.vue'
export default {
    name: '',
    data() {
        return {
            
            classActivityList:[],
        };
    },
    methods: {

    },
    async mounted(){
        this.classActivityList = (await selectClassActivity({classId:this.userMessage.classId})).data.data
        this.classActivityList.map(item=>{
            item.title = item.activityContent
            item.date = item.activityDate
            delete item.activityDate
            delete item.activityContent
            item.url = "router"
        })
    },
    computed:{
        ...mapState(['userMessage'])
    },
    components:{
        NoticeList,
    }
}
</script>

<style scoped></style>
