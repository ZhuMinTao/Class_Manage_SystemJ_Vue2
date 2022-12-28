<template>
    <div class="content">
        <div class="show_main">
            <div class="logo">
                <svg t="1671358795268" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3590" width="48" height="48"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" p-id="3591"></path></svg>
                <p>NewClassSystem</p>
            </div>
            <div class="split">
                <div style="width:2px;height:50%;background:black;"></div>
            </div>
            <div class="nav">
                <div>{{navList[$store.state.homeTopActiveIndex].navName}}</div>
                <ul>
                    <li v-for="navItem,index in navList" :key="navItem.id" :class="{hide:$store.state.homeTopActiveIndex==index}">
                        <a @click="$router.push(navItem.link)">{{navItem.navName}}</a>
                    </li>
                </ul>
            </div>
            <div class="account">
                <div class="account_main">
                    <div class="set">
                        <svg t="1671362182709" style="margin-right:5px" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6970" width="24" height="24"><path d="M940 596l-76-57.6c0.8-8 1.6-16.8 1.6-26.4s-0.8-18.4-1.6-26.4l76-57.6c20.8-16 26.4-44 12.8-68l-84.8-143.2c-9.6-16.8-28-27.2-47.2-27.2-6.4 0-12 0.8-18.4 3.2L712 228c-15.2-10.4-31.2-19.2-47.2-26.4l-13.6-92c-4-26.4-26.4-45.6-53.6-45.6H426.4c-27.2 0-49.6 19.2-53.6 44.8L360 201.6c-16 7.2-31.2 16-47.2 26.4l-90.4-35.2c-6.4-2.4-12.8-3.2-19.2-3.2-19.2 0-37.6 9.6-46.4 26.4L71.2 360c-13.6 22.4-8 52 12.8 68l76 57.6c-0.8 9.6-1.6 18.4-1.6 26.4s0 16.8 1.6 26.4l-76 57.6c-20.8 16-26.4 44-12.8 68l84.8 143.2c9.6 16.8 28 27.2 47.2 27.2 6.4 0 12-0.8 18.4-3.2L312 796c15.2 10.4 31.2 19.2 47.2 26.4l13.6 92c3.2 25.6 26.4 45.6 53.6 45.6h171.2c27.2 0 49.6-19.2 53.6-44.8l13.6-92.8c16-7.2 31.2-16 47.2-26.4l90.4 35.2c6.4 2.4 12.8 3.2 19.2 3.2 19.2 0 37.6-9.6 46.4-26.4l85.6-144.8c12.8-23.2 7.2-51.2-13.6-67.2zM704 512c0 105.6-86.4 192-192 192S320 617.6 320 512s86.4-192 192-192 192 86.4 192 192z" p-id="6971" fill="#515151"></path></svg>
                        <p>设置</p>
                    </div>
                    <div class="user">
                        <svg t="1671361650990" style="margin-right:10px;"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5714" width="32" height="32"><path d="M512 0a512 512 0 1 0 512 512A512.69622 512.69622 0 0 0 512 0z m321.93201 828.501496l-13.088931 13.924395-3.481099-18.380202a311.906445 311.906445 0 0 0-66.697852-142.725047 30.076693 30.076693 0 0 0-46.089747 38.570574 250.639108 250.639108 0 0 1 57.925483 160.130541 18.937177 18.937177 0 0 1 0 2.784879v5.29127l-4.455806 2.924123a450.871906 450.871906 0 0 1-492.645091 0l-4.455807-2.924123v-7.936905a250.639108 250.639108 0 0 1 250.639108-250.639108 215.828121 215.828121 0 1 0-132.560239-45.950503l12.392711 9.607832-13.924395 6.822954a311.767202 311.767202 0 0 0-170.852325 223.347294l-3.481099 18.380201-13.088931-13.924395a447.251564 447.251564 0 0 1-129.914604-315.805276A451.846614 451.846614 0 1 1 833.93201 828.501496zM356.882241 413.833016a154.978515 154.978515 0 1 1 154.978515 155.117759 155.117759 155.117759 0 0 1-154.978515-155.117759z" fill="#515151" p-id="5715"></path></svg>
                        <p style="letter-spacing: 5px;">欢迎!XXX</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
    name: 'TopPart',
    mounted(){
            
    },
    data() {
            return {
                navList:[
                    {id:1,navName:"主页",link:"/home_page"},
                    {id:2,navName:"我的班级",link:"/class"},
                    {id:3,navName:"功能支持",link:"/system_action"},
                    {id:4,navName:"信息查询",link:"/message_select"},
                    {id:5,navName:"关于产品",link:"/about_product"},
                ],
                userInfo:{},
            };
        },
        methods: {
            ...mapMutations(['SETHOMETOPINDEX']),

        },
        computed:{
            ...mapState(['homeTopActiveIndex'])
        }
};
</script>

<style scoped>
    .set,.user{
        width:auto;
        font-size: 14px;
        height:100%;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    .account{
        width:40%;
        height:100%;
        display: flex;
        justify-content: end;
    }
    .account_main>div{
        margin:0 20px;
    }
    .account_main{
        width:auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        height:100%;
        color:gray;
    }
    .hide{
        display: none;
    }
    .nav{
        display: flex;
        width:40%;
        height:100%;
        align-items: center;
        justify-content: space-around;
    }
    .nav>div{
        width:auto;
        height:100%;
        display: flex;
        align-items: center;
        font-weight: bold;
        font-size:20px;
        justify-content: center;
    }
    .nav ul{
        font-size: 14px;
        width:80%;
        height:100%;
        justify-content: space-around;
        display: flex;
        align-items: center;
        list-style: none;
    }
    .nav a{
        color:black;
        cursor: pointer;
    }
    .nav li{
        transition-duration: 1000ms;
    }
    .nav li:hover{
        border-bottom: 3px solid black;
        padding-bottom:5px;
        transition-duration: 400ms;
    }
    .content{
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
        height:60px;
        box-shadow: 0 0 1rem 1px rgb(216, 216, 216);
    }

    .show_main{
        width:90%;
        height:100%;
        display: flex;
        align-items: center;
    }
    .logo{
        display: flex;
        width:15%;
        height:100%;
        justify-content: space-around;
        align-items: center;
    }
    .logo p{
        font-family: initial;
    }
    .split{
        width:5%;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
