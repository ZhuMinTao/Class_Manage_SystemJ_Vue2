<template>
    <div style="padding:0 30px;">
        <el-card class="box-card" style="height:600px;overflow: auto;">
            <el-empty title="暂无数据" style="height:500px" v-if="weekWorkList.length==0"></el-empty>

            <div class="text item">
                <div class="task_single" v-for="item in weekWorkList">
                    <div >
                        <p style="font-size: 14px;margin-bottom: 10px;">
                            <b style="margin-right: 10px;">完成时间 {{ item.workTime }}</b>
                        </p>
                        <div style="display:flex;align-items: center;">
                            <p class="tast_title" >
                              {{item.remark}}
                            </p>
                        </div>
                        <a :href="item.fileUrl">下载</a>
                    </div>
                    
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    import {selectWeekWork} from '@/api/class_message'
import { mapState } from 'vuex';
   export default {
      name: '',
      data() {
           return {
            weekWorkList:[],
           };
       },
       methods: {

       },
       async mounted(){
            this.weekWorkList = await (await selectWeekWork({classId:this.userMessage.classId})).data.data
            console.log(this.weekWorkList);
       },
       computed:{
        ...mapState(['userMessage'])
       }
   }
</script>

<style scoped>
    .task {
        padding:0 30px;
        box-sizing: border-box;
    }
    .task_single{
        padding:20px 0;
        border-bottom: 1px dashed rgb(225, 225, 225);
        
    }

    .tast_title{
        font-size: 13px;
        color:#949494;
    }
    .task_state{
        margin-left: 20px;
        font-weight: bold;
        font-size: 14px;
    }
    .task_single>div{
        display: flex;
        flex-direction: column;
    }
    .task_single a{
        margin-top: 10px;
        color:#1e8bf8;
        text-decoration: underline;
    }
</style>
