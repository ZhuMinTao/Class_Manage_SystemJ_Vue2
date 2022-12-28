<template>
    <div class="news_column">
        <div class="subject_title" v-if="title!=''">{{title}}</div>
        <div class="teen_news">
            <div v-for="item in imageList" style="width:23%;">
                <img :src="item" alt="" style="width:100%;">
                <p class="teen_news_title">省委召开湖南省传达学习党的二十大精神大会</p>
                <p class="teen_news_detail">
                    <span>了解详情</span>
                    <svg t="1671443886952" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8079" width="14" height="14"><path d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z" fill="#b53f34" p-id="8080"></path></svg>
                </p>
            </div>
        </div>
        <div class="find_more" v-if="isMore">
            <p class="teen_news_detail" @click="$router.push(moreBtnRouter)">
                <b style="font-size: 16px;">查看更多</b>
                <svg t="1671443886952" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8079" width="14" height="14"><path d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z" fill="#b53f34" p-id="8080"></path></svg>
            </p>
        </div>
    </div>
</template>

<script>
export default {
   name: '',
   data() {
        return {
            imageList:[
                require("./../../assets/img/test.jpg"),
                require("./../../assets/img/test.jpg"),
                require("./../../assets/img/test.jpg"),
                require("./../../assets/img/test.jpg"),
            ],
        };
    },
    props:{
        title:{
            type:String,
            default:""
        },
        isMore:{
            type:Boolean,
            default:false,
        },
        moreBtnRouter:{
            type:String,
            default:""
        }
    },
    methods: {

    },
};
</script>

<style scoped>
    .news_column{
        width: 90%;
        margin-bottom: 50px;
    }
    .find_more{
        display: flex;
        justify-content: end;
    }
    .teen_news_detail svg{
        transition: 500ms ease;
    }
    .teen_news_detail:hover svg{
        transition: 500ms ease;
        transform: translateX(5px);
    }
    .teen_news_detail{
        color:#b53f34;
        width:100px;
        cursor: pointer;
        font-size: 12px;
        font-weight: none;
        display: flex;
        align-items: center;
    }
    .teen_news_title{
        font-weight: bold;
        font-family: "黑体";
        font-size: 18px;
        margin:10px 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .teen_news{
        padding-bottom:30px;
        width:100%;
        display: flex;
        justify-content: space-around;
    }
    .subject_title{
    padding:20px 0;
    font-weight: bold;
    font-size: 24px;
}
</style>
