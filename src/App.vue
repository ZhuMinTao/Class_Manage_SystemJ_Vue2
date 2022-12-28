<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<style lang="less">

.default_title{
  display: block;
  margin-top: 100px;
  font-family: '宋体';
  margin-left: 150px;
  font-size: 34px;
}
.default_context{
  background:rgb(244, 243, 243);
  margin:20px 130px;
  padding:10px 20px;
  line-height: 28px;
  color:gray;
  box-sizing: border-box;
}
//去除浏览器默认间距
*{
  padding:0;
  margin:0;
}
//去除input点击后的边框
input{
  outline-color: transparent;
}
a{
  text-decoration: none;
}
//去除鼠标拖动选中文字
html,body{-moz-user-select: none; -khtml-user-select: none; user-select: none;}
</style>
