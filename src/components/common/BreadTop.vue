<template>
    <div style="height:60px;display: flex;align-items: center;padding-left: 20px;;">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item  v-for="item in lists" >
                <a  :href='"/#"+item.link' v-if="item.link!=undefined">{{item.name}}</a>
                <p v-if="item.link==undefined">{{ item.name }}</p>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
   export default {
      name: '',
      data() {
           return {
   
           };
       },
       props:{
            lists:{
                type:Array,
            }
       },
       methods: {

       },
   }
</script>

<style scoped>

</style>
