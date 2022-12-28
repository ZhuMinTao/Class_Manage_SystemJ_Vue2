<template>
    <div>
        <Carousel title="往期活动"/>
        <div style="display:flex;align-items: flex-end;">
            <b class="default_title">班级介绍</b>
            <p class="small_title">
                班委会成员介绍
                <svg t="1671443886952" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8079" width="15" height="15"><path d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z" fill="#b53f34" p-id="8080"></path></svg>
            </p>
            <p class="small_title">
                班级荣誉
                <svg t="1671443886952" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8079" width="15" height="15"><path d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z" fill="#b53f34" p-id="8080"></path></svg>
            </p>
        </div>
        <div class="default_context">天星数科（原小米数科）是小米集团旗下数字科技服务平台。随着5G+万物互联时代来临，天星数科将依托小米集团“手机×AIoT”战略， 秉承小米集团技术立业的传统，保持行稳致远的节奏，发挥深耕产业的优势，通过开放连接的平台模式，运用数字科技手段，不断自我提升，服务好实体企业的产业金融需求、服务好金融机构的转型升级需求、服务好广大消费者的个人金融需求。</div>
        <b class="default_title">班规</b>
        <div class="default_context">
            天星数科（原小米数科）是小米集团旗下数字科技服务平台。随着5G+万物互联时代来临，天星数科将依托小米集团“手机×AIoT”战略， 秉承小米集团技术立业的传统，保持行稳致远的节奏，发挥深耕产业的优势，通过开放连接的平台模式，运用数字科技手段，不断自我提升，服务好实体企业的产业金融需求、服务好金融机构的转型升级需求、服务好广大消费者的个人金融需求。
        </div>
        <div style="width:100%;display:flex;justify-content: center;margin-top: 50px;">
            <!-- ismore 是否显示更多按钮  moreBtnRouter更多跳转的路径-->
            <NewsColumn title="往期班级活动" :isMore="true" moreBtnRouter=""/>
        </div>
    </div>
</template>
<script>
import { mapMutations } from 'vuex';
import Carousel from '@/components/common/Carousel.vue'
import NewsColumn from '@/components/home/NewsColumn.vue';

export default {
   name: '',
   data() {
        return {

        };
    },
    mounted(){
        this.SETHOMETOPINDEX(1)
    },
    methods: {
        ...mapMutations(['SETHOMETOPINDEX'])
    },
    components:{
        Carousel,
        NewsColumn
    }
};
</script>

<style scoped>
    .small_title{
        margin-left: 20px;
        color:rgb(164, 43, 43);
        font-size: 15px;
        display: flex;
        align-items: center;
        cursor:pointer;
        transition: 500ms ease;
    }
    .small_title svg{
        transition: 500ms ease;
    }
    .small_title:hover svg{
        transform: translateX(10px);
        transition: 500ms ease;
    }
</style>
