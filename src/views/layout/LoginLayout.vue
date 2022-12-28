<template>
  <div class="content" >
      <div class="pages_main" :style="{'height':height+'px'}">
        <el-card class="box-card">
            <div class="card_title">
                <svg t="1671068062544" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2668" width="64" height="64"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" p-id="2669" fill="#2c2c2c"></path></svg>
            </div>
            <div class="title">
            Welcome To New Class System
            </div>
            <router-view></router-view>
        </el-card>
      </div>
      <FooterPart></FooterPart>
  </div>
</template>

<script>
import FooterPart from '@/components/home/FooterPart.vue'
export default {
  name: "LoginLayout",
  mounted(){
      this.height = document.documentElement.clientHeight
  },
  data(){
      return{
          height:0,
      }
  },
  components:{
    FooterPart
  }
};
</script>


<style scoped>

.content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.pages_main{
    align-items: center;
    width:100%;
    display: flex;
    justify-content: center;
}
.title{
    width:100%;height: auto;
    display: flex;
    justify-content: center;
    font-family:'slef-title-english';
    padding:10px 0;
}
.card_title{
    display: flex;
    justify-content: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
    padding:0 50px;
    width: 35%;
}
</style>