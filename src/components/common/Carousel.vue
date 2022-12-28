<template>
    <div style="width:100%;display: flex;justify-content: center;overflow: hidden;">
        <div class="carousel">
            <div class="carousel_main" :style="inStyle" >
                <div class="carousel_title" v-if="title!=''">{{title}}</div>
                <transition  :name="currendActive" v-for="item,index in imageList">
                    <img :style="inStyle"  style = "position: absolute;top: 0;left: 0;" v-show="currendIndex==index"  :src="item" />
                </transition >
            </div>
            <div class="carousel_icon">
                <span class="icon_left">
                    <svg t="1671416782497"  @click="lastImageClick" style="margin-right: 20px; cursor: pointer;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2497" width="32" height="32"><path d="M671.968176 911.99957c-12.287381 0-24.576482-4.67206-33.951566-14.047144L286.048434 545.984249c-18.751888-18.719204-18.751888-49.12028 0-67.872168L638.016611 126.111222c18.751888-18.751888 49.12028-18.751888 67.872168 0 18.751888 18.719204 18.751888 49.12028 0 67.872168l-318.016611 318.047574L705.888778 830.047574c18.751888 18.751888 18.751888 49.12028 0 67.872168C696.544658 907.32751 684.255557 911.99957 671.968176 911.99957z" fill="#2c2c2c" p-id="2498"></path></svg>
                </span>
                <div v-for="i,index in imageList.length" :class="{carousel_icon_active:currendIndex==index}"></div>
                <span class="icon_right">
                    <svg t="1671416745497" @click="nextImageClick" style="margin-left: 20px; cursor: pointer;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1378" width="32" height="32"><path d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z" fill="#2c2c2c" p-id="1379"></path></svg>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: '',
   data() {
        return {
            imageList:[
                require('../../assets/img/1.jpg'),
                require('../../assets/img/2.jpg'),
                require('../../assets/img/2.jpg'),
                require('../../assets/img/2.jpg'),
            ],
            //记录当前被选中索引
            currendIndex:0,
            currendActive:"carousel_right",
            //按钮失效时间
            btnInvalid:1,
            isCreateTiming:false,
        };
    },
    props:{
        inStyle:{
            type:String,
            default:"width:100%;height:500px"
        },
        title:{
            type:String,
            default:""
        }
    },
    methods: {
        lastImageClick(){

            //查看是否是按钮失效时间内,如果是直接return
            if(this.isCreateTiming)return

            //设置动画方式
            this.currendActive = "carousel_right"

            //判断是否是第一张图片
            if(this.currendIndex-1<0){

                this.currendIndex=this.imageList.length-1

            }else{

                this.currendIndex = this.currendIndex-1

            }
            
            //开启按钮失效时间
            this.isCreateTiming = true

            setTimeout(()=>{

                //经过1秒后将按钮功能恢复
                this.isCreateTiming = false
                
            },1000)
        },
        nextImageClick(){
            if(this.isCreateTiming)return
            
            this.currendActive = "carousel_left"


            if(this.currendIndex+1>this.imageList.length-1){
                
                this.currendIndex = 0
                
            }else{

                this.currendIndex = this.currendIndex+1
            
            }
            this.isCreateTiming = true

            setTimeout(()=>{
                this.isCreateTiming = false
            },1000)
            
        }
    },
};
</script>

<style scoped>
    .carousel_title{
        position: absolute;
        background-color: rgba(53, 52, 52, 0.438);
        color:white;
        font-weight: bold;
        padding:5px 10px;
        z-index: 1;
        top: 20px;
        left: 20px;
    }

  .carousel_right-enter-active,.carousel_right-leave-active,.carousel_left-leave-active,.carousel_left-enter-active{
        transition: 1000ms ease;
    }

    .carousel_right-enter,.carousel_left-leave-to{
        transform: translateX(-100%);
    }
  
    .carousel_right-enter-to,.carousel_right-leave,.carousel_left-enter-to,.carousel_left-leave{
        transform: translateX(0%);

    }
    .carousel_right-leave-to,.carousel_left-enter{
        transform: translateX(100%);
    }

    /* .carousel_main img{
        transition: 2s ease;
    } */
    .carousel{
        width:1920px;
        height:auto;
    }
    .carousel_main{
        height:500px;
        position: relative;
        width:100%;
        display: flex;
        overflow: hidden;
    }

    .carousel_icon{
        display: flex;
        justify-content: center;
        align-items: center;
        margin:20px 0;
    }
    .carousel_icon>div{
        width:8px;
        height:8px;
        border-radius: 50%;
        border:1px solid black;
        margin:0 10px;
    }
    .carousel_icon_active{
        background-color: black;
    }
    .icon_left,.icon_right{
        transition: 500ms linear;
    }
    .icon_left:hover svg{
        transform: translateX(-10px);
        transition: 500ms linear;
    }
    .icon_right:hover{
        transform: translateX(10px);
        transition: 500ms ease;
    }
</style>
