<template>
    <div >

        <div style="font-weight: bold;display: flex;align-items: center;height: 10%;">
            <i class="el-icon-chat-dot-round" style="font-size: 20px;"></i>
            <p style="margin-left: 5px;">{{title}}</p>
        </div>
        <el-empty description="暂无数据" v-if="list?list.length==0:true"></el-empty>
        <div class="notice_list" v-if="list?list.length!=0:false">
            <ul>
                <li style="list-style-type: square;" v-for="i in list"  v-if="i.url?true:false" >
                    <a style="cursor: pointer;" :href="i.url=='router'?'#':i.url" @click="i.url!='router'?'':$router.push(routerDetail+'?item='+JSON.stringify(i))">{{ i.title }}</a>
                    <p>{{i.date}}</p>   
                </li>
                <div class="more" v-if="isButton">
                    <span class="more_text" @click="$router.push('/home_notice')" >更多通知</span>
                    <span class="more_sign" style="margin-left: 5px;">></span>
                </div>
                
            </ul>
        </div>
        
    </div>
</template>

<script>
   export default {
      name: '',
      data() {
           return {
   
           };
       },
       methods: {

       },
       props:{
            isButton:{
                type:Boolean,
                default:true,
            },
            title:{
                type:String,
            },
            list:{
                type:Array,
            },
            routerDetail:{
                type:String,
                default:'/home_notice_detail',
            }
       }
   }
</script>

<style scoped>
    .more{
        margin-top: 20px;
        display: flex;justify-content: end;
        font-weight: bold;
        font-size: 14px;
        color:#a92e2e;

    }
    .more_text{
        cursor: pointer;
    }
    .more_sign{
        transition: 0.5s;
    }
    .more:hover>.more_sign{
        transform: translateX(5px);
        transition: 0.5s;
    }
    .notice_list{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width:100%;
        height: 90%;

    }
   .notice_list>ul{
        padding:0 20px;box-sizing: border-box;
   }
   .notice_list>ul>li{
    height: auto;
    display: flex;
    margin-top: 10px;
    align-items: center;
    border-bottom: 1px dashed #cfcfcf;
    padding:10px 0;

   }
   .notice_list>ul>li>a{
        width:85%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color:rgb(50, 50, 50);
   }
   .notice_list>ul>li>a:hover{
        color:hsl(206, 93%, 48%);
        text-decoration:underline;
   }
   .notice_list>ul>li>p{
        width:15%;
        justify-content: center;
        display: flex;
        font-size: 14px;
        color:#9e9e9e;
   }
</style>
