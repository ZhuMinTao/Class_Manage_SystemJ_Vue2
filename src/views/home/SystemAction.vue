<template>
    <div class="main_around" :style="{'height':height+'px'}" >
        <b class="small_action_title">基本功能</b>
        <div class="main_content">
            <div v-for="item in actionList" :key="item.id" >
                <div class="icon_single" >
                    <div class="icon_image">
                        <svg t="1671677973607" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="745" width="40" height="40"><path d="M828.8 598.4c-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L694.4 688c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l35.2-35.2V896c0 16 12.8 32 32 32s32-12.8 32-32V697.6l38.4 38.4c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8l-92.8-92.8z m-419.2-240c16-35.2 6.4-76.8-19.2-105.6-28.8-28.8-73.6-35.2-108.8-22.4-35.2 16-57.6 54.4-57.6 92.8 0 51.2 41.6 92.8 92.8 92.8 38.4 0 76.8-22.4 92.8-57.6zM288 323.2c0-9.6 3.2-16 9.6-22.4 3.2-9.6 12.8-12.8 22.4-12.8 16 0 32 12.8 32 28.8s-12.8 32-28.8 35.2c-19.2 0-35.2-12.8-35.2-28.8z" fill="#333333" p-id="746"></path><path d="M896 96H128c-35.2 0-64 28.8-64 64v640c0 35.2 28.8 64 64 64h544v-64H160c-19.2 0-32-16-32-32V192c0-16 12.8-32 32-32h704c19.2 0 32 16 32 32v416h64V160c0-35.2-28.8-64-64-64z" fill="#333333" p-id="747"></path><path d="M182.4 713.6c12.8 12.8 32 12.8 44.8 0l134.4-134.4 112 112c3.2 3.2 3.2 3.2 6.4 3.2 12.8 6.4 25.6 6.4 38.4-3.2l316.8-316.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L496 624 384 508.8l-3.2-3.2c-12.8-9.6-28.8-9.6-41.6 3.2l-160 160c-9.6 12.8-9.6 32 3.2 44.8z" fill="#333333" p-id="748"></path></svg>
                    </div>
                <div class="icon_title">{{item.name}}</div>
                </div>
            </div>
        </div>
        <b class="small_action_title">附加功能</b>
        <div class="main_content">
            <div v-for="item in 10" :key="item.id" >
                <div class="icon_single" >
                    <div class="icon_image">
                        <svg t="1671677973607" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="745" width="40" height="40"><path d="M828.8 598.4c-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L694.4 688c-12.8 12.8-12.8 32 0 44.8 12.8 12.8 32 12.8 44.8 0l35.2-35.2V896c0 16 12.8 32 32 32s32-12.8 32-32V697.6l38.4 38.4c12.8 12.8 32 12.8 44.8 0 12.8-12.8 12.8-32 0-44.8l-92.8-92.8z m-419.2-240c16-35.2 6.4-76.8-19.2-105.6-28.8-28.8-73.6-35.2-108.8-22.4-35.2 16-57.6 54.4-57.6 92.8 0 51.2 41.6 92.8 92.8 92.8 38.4 0 76.8-22.4 92.8-57.6zM288 323.2c0-9.6 3.2-16 9.6-22.4 3.2-9.6 12.8-12.8 22.4-12.8 16 0 32 12.8 32 28.8s-12.8 32-28.8 35.2c-19.2 0-35.2-12.8-35.2-28.8z" fill="#333333" p-id="746"></path><path d="M896 96H128c-35.2 0-64 28.8-64 64v640c0 35.2 28.8 64 64 64h544v-64H160c-19.2 0-32-16-32-32V192c0-16 12.8-32 32-32h704c19.2 0 32 16 32 32v416h64V160c0-35.2-28.8-64-64-64z" fill="#333333" p-id="747"></path><path d="M182.4 713.6c12.8 12.8 32 12.8 44.8 0l134.4-134.4 112 112c3.2 3.2 3.2 3.2 6.4 3.2 12.8 6.4 25.6 6.4 38.4-3.2l316.8-316.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L496 624 384 508.8l-3.2-3.2c-12.8-9.6-28.8-9.6-41.6 3.2l-160 160c-9.6 12.8-9.6 32 3.2 44.8z" fill="#333333" p-id="748"></path></svg>
                    </div>
                <div class="icon_title">附加功能</div>
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
            actionList:[
                {
                    id:1,
                    name:"图片上传",
                    link:"/upload/images"
                },
                {
                    id:2,
                    name:"Excel导出",
                    link:"/download/excel"

                },
                {
                    id:3,
                    name:"Excel导出",
                    link:"/download/excel"

                },
                {
                    id:4,
                    name:"Excel导出",
                    link:"/download/excel"

                },
                {
                    id:5,
                    name:"Excel导出",
                    link:"/download/excel"

                }
                
                
            ]
        };
    },
    methods: {
        ...mapMutations(['SETHOMETOPINDEX']),
    },
    mounted(){
        this.height = document.documentElement.clientHeight
        this.SETHOMETOPINDEX(2)
    },
};
</script>

<style scoped>
    .main_content>div{
        width:20%;
        margin:15px 0;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .small_action_title{
        margin-top: 30px;
        width:90%;
        font-size: 20px;

    }
    .icon_single{
        padding:10px;
        width:80px;
        height:80px;
        cursor: pointer;
        border-radius: 5px;
        border:2px solid gray;
    }
    .icon_image,.icon_title{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .icon_image{
        height:80%;
    }
    .icon_title{
        height:20%;
        font-size: 16px;
    }
    .main_around{
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .main_content{
        width:90%;
        margin:20px 0;
        display: flex;
        flex-wrap: wrap;
    }
</style>
