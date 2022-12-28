<template>
    <div class="pages_footer">
        <div class="footer_logo">
            <svg t="1671447122950" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13544" width="64" height="64"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" p-id="13545" fill="#ffffff"></path></svg>
        </div>
        <div style="width:2px;background:gray;"></div>
        <div class="footer_text">   
            <p>©ALIMAMA MUX, powered by alimama THX.</p>
            <p>转载内容版权归作者及来源网站所有，本站原创内容转载请注明来源，商业媒体及纸媒请先联系：1981166068@qq.com</p>
            <p>法律声明隐私协议浙ICP备2022000356号-3浙公网安备 33011002011859号</p>
        </div>
    </div>
</template>
<script>
export default {
   name: 'FooterPart',
   data() {
        return {

        };
    },
    methods: {

    },
};
</script>

<style scoped>
    .footer_text{
        display: flex;
        flex-direction: column;
        width:70%;
        font-size: 12px;
        justify-content: space-around;
        color:rgb(192, 192, 192);
    }
    .pages_footer{
        padding:30px 0;
        width:100%;
        justify-content: space-around;
        background: rgb(61, 61, 61);
        display: flex;
        height: 60px;

    }
    .footer_logo{
        width:20%;
        display: flex;
        justify-content: end;
    }
</style>
