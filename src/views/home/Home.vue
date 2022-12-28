<template>
    <div>
        <!-- 顶部引导拦 -->
        <div class="guide">
            <div class="guide_text">
                <a href="#">班级荣誉、班委会成员介绍。立即前往查看</a>
                <svg style="transition-duration: 500ms;" t="1671368565460" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8488" width="18" height="18"><path d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z" fill="#ffffff" p-id="8489"></path></svg>
            </div>
        </div>
        <!-- 轮播图 -->
        <Carousel></Carousel>

        <!-- 部分系统功能 -->
        <ActionSmall></ActionSmall>

        <!-- contentpart主要显示内容部分 -->
        <div class="content_part">
            <div class="guide_img">
                <div class="guide_sentence">
                    <span>System prompt:</span>
                    <span>每天都告诉自己一遍，我真的很不错!</span>
                    <div class="guide_action">
                        <p>心理咨询</p>
                        <svg t="1671443886952" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8079" width="18" height="18"><path d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z" fill="#ffffff" p-id="8080"></path></svg>
                    </div>
                </div>
                <img src="@/assets/img/guide.jpg" style="width:1280px;height:500px" alt="">
            </div>
            <!-- 新闻列 -->
            <NewsColumn title="青年新闻"  />
            <div class="introduce">
                <p>关注我们</p>
                <svg t="1671446300353" @click="weCharClick" style="cursor: pointer;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9829" width="32" height="32"><path d="M337.387283 341.82659c-17.757225 0-35.514451 11.83815-35.514451 29.595375s17.757225 29.595376 35.514451 29.595376 29.595376-11.83815 29.595376-29.595376c0-18.49711-11.83815-29.595376-29.595376-29.595375zM577.849711 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763zM501.641618 401.017341c17.757225 0 29.595376-12.578035 29.595376-29.595376 0-17.757225-11.83815-29.595376-29.595376-29.595375s-35.514451 11.83815-35.51445 29.595375 17.757225 29.595376 35.51445 29.595376zM706.589595 513.479769c-11.83815 0-22.936416 12.578035-22.936416 23.6763 0 12.578035 11.83815 23.676301 22.936416 23.676301 17.757225 0 29.595376-11.83815 29.595376-23.676301s-11.83815-23.676301-29.595376-23.6763z" fill="#28C445" p-id="9830"></path><path d="M510.520231 2.959538C228.624277 2.959538 0 231.583815 0 513.479769s228.624277 510.520231 510.520231 510.520231 510.520231-228.624277 510.520231-510.520231-228.624277-510.520231-510.520231-510.520231zM413.595376 644.439306c-29.595376 0-53.271676-5.919075-81.387284-12.578034l-81.387283 41.433526 22.936416-71.768786c-58.450867-41.433526-93.965318-95.445087-93.965317-159.815029 0-113.202312 105.803468-201.988439 233.803468-201.98844 114.682081 0 216.046243 71.028902 236.023121 166.473989-7.398844-0.739884-14.797688-1.479769-22.196532-1.479769-110.982659 1.479769-198.289017 85.086705-198.289017 188.67052 0 17.017341 2.959538 33.294798 7.398844 49.572255-7.398844 0.739884-15.537572 1.479769-22.936416 1.479768z m346.265896 82.867052l17.757225 59.190752-63.630058-35.514451c-22.936416 5.919075-46.612717 11.83815-70.289017 11.83815-111.722543 0-199.768786-76.947977-199.768786-172.393063-0.739884-94.705202 87.306358-171.653179 198.289017-171.65318 105.803468 0 199.028902 77.687861 199.028902 172.393064 0 53.271676-34.774566 100.624277-81.387283 136.138728z" fill="#28C445" p-id="9831"></path></svg>
                <svg t="1671446401838" @click="qqClick" style="cursor: pointer;"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12326" width="32" height="32"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m210.5 612.4c-11.5 1.4-44.9-52.7-44.9-52.7 0 31.3-16.2 72.2-51.1 101.8 16.9 5.2 54.9 19.2 45.9 34.4-7.3 12.3-125.6 7.9-159.8 4-34.2 3.8-152.5 8.3-159.8-4-9.1-15.2 28.9-29.2 45.8-34.4-35-29.5-51.1-70.4-51.1-101.8 0 0-33.4 54.1-44.9 52.7-5.4-0.7-12.4-29.6 9.4-99.7 10.3-33 22-60.5 40.2-105.8-3.1-116.9 45.3-215 160.4-215 113.9 0 163.3 96.1 160.4 215 18.1 45.2 29.9 72.8 40.2 105.8 21.7 70.1 14.6 99.1 9.3 99.7z" p-id="12327" fill="#2c2c2c"></path></svg>
            </div>
        </div>

        
    </div>
</template>

<script>
    import Carousel from '@/components/common/Carousel.vue'
    import ActionSmall from '@/components/common/ActionSmall.vue'
    import NewsColumn from '@/components/home/NewsColumn.vue'
import { mapMutations } from 'vuex';
export default {
   name: '',
   data() {
        return {
            height:0,
        };
    },
    mounted(){
        this.SETHOMETOPINDEX(0)
        
        this.height = document.documentElement.clientHeight
    },
    methods: {
        weCharClick(){
            this.$alert(`<img src="${require('../../assets/img/account_gongzong.jpg')}" style="width:150px;height:150px">`, '关注我们',{
                dangerouslyUseHTMLString: true,
                showConfirmButton:false,
                center:true,
            });
        },
        qqClick(){
            this.$alert(`<img src="${require('../../assets/img/account_qq.png')}" style="width:150px;height:150px">`, '关注我们',{
                dangerouslyUseHTMLString: true,
                showConfirmButton:false,
                center:true,
            });
        },
        ...mapMutations(['SETHOMETOPINDEX']),

    },
    components:{
        Carousel,
        ActionSmall,
        NewsColumn
    }
};
</script>

<style lang="less" scoped>

.introduce>*{
    margin:0 10px
}
.introduce{
    width:90%;
    padding:50px 0;
    display: flex;
    align-items: center;
    color:gray;
    font-size: 14px;
}

.content_part{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.guide_action:hover svg{
    transition: 500ms ease;
    transform: translateX(10px);
}
.guide_action svg{
    transition: 500ms ease;
}
.guide_action{
    margin-top: 10px;
    background-color: black;
    color:white;
    font-weight: bold;
    padding:10px;
    cursor: pointer;
    width: 150px;
    display: flex;
    align-items: center;
    height:auto;
    justify-content: center;
}
.guide_sentence>span:first-child{
    font-weight: bold;
    font-size: 24px;
    line-height: 50px;
}
.guide_sentence>*{
    margin-bottom: 10px;
}
.guide_sentence{
    top:50px;
    width: auto;
    position: absolute;
    display: flex;
    flex-direction: column;
}
.guide_img{
    display: flex;
    justify-content: center;
    margin-top: 30px;
    position: relative;
    margin-bottom: 100px;
}

.guide>div:hover a{
    text-decoration-color: white;
    text-decoration:underline;
}
.guide>div:hover svg{
    transition-duration: 500ms;
    transform: translateX(10px);
}
.guide{
    width:100%;
    height:60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:brown;
}
.guide a{
    color:white;
    font-weight: bold;
}
.guide_text{
    width: auto;
    height:auto;
    display: flex;
    align-items: center
}
</style>
