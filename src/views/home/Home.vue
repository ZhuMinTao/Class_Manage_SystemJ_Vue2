<template>
    <div style="padding:10px;box-sizing: border-box;padding-top: 0;" >
            <div class="notice">
                <div style="position: relative;">
                    <div class="swiper_msg">往期活动信息</div>
                </div>
                <SwiperSimple :list="activityList" style="width:100%;height: 400px;border-radius: 5px;"></SwiperSimple>
            </div>
            

            <div style="padding:20px;box-sizing: border-box;">
                <NoticeList :list="newsList.T1348647853363" title="热门新闻" :isButton="false" style="width:100%;height: 400px;padding:10px;box-sizing: border-box;"></NoticeList>
            </div>  
    </div>
</template>

<script>
    import SwiperSimple from '@/components/common/SwiperSimple.vue'
    import NoticeList from '@/components/common/NoticeList.vue'
    import {selectNews} from '@/api/class_message'
    import { selectClassActivity } from '@/api/class_message'
import { mapState } from 'vuex'

   export default {
      name: '',
      data() {
           return {
                newsList:[],
                activityList:[],
                
           };
       },
       methods: {

       },
       components:{
        SwiperSimple,
        NoticeList,
       },
       mounted(){

            selectNews().then(({data})=>{
                this.newsList = JSON.parse(data.data)
                this.newsList.T1348647853363 = this.newsList.T1348647853363.map(item=>{
                    item["date"] = item.ptime
                    return item
                })
            })  
            
            selectClassActivity({classId:this.userMessage.classId})
            .then(({data})=>{
                this.activityList = data.data.sort((itemOne,itemTwo)=>{
                    return new Date(itemTwo.activityDate).getTime()-new Date(itemOne.activityDate).getTime()
                }).slice(0,5)
            })
       },
       computed:{
            ...mapState(['userMessage'])
       }
   }
</script>

<style scoped>
    .swiper_msg{
        position: absolute;
        top:10px;
        left:10px;
        z-index: 3;
        font-size: 14px;
        color:white;
        background: rgba(66, 66, 66, 0.5);
        padding:10px;
        border-radius: 10px;
    }
    .notice{
        padding:5px;
        box-sizing: border-box;
        display: flex;
        justify-content: start;
        width:100%;
        background-color: #c7c6c631;
    }

    ::-webkit-scrollbar{
        height: 0;
    }
</style>
