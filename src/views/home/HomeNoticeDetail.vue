<template>
    <div  style="padding:10px;box-sizing: border-box;overflow: auto;" :style="{'height':height-60.5+'px'}">
    </div>
</template>

<script>

   export default {
      name: '',
      data() {
           return {
            height:0,
           };
       },
       methods: {

       },
       components:{
       },
       mounted(){
        this.height = document.documentElement.clientHeight
            
       }
   }
</script>

<style scoped>

</style>
