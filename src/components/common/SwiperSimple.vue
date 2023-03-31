<template>
    <div class="swiper mySwiper" style="cursor: pointer;">
        <div class="swiper-wrapper" >
            <div class="swiper-slide" v-for="item in list" @click="$router.push('class_activity_detail?item='+JSON.stringify(item))">
                <img width="100%" height="100%" :src="item.activityImage" alt="">
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper/bundle';
    import 'swiper/swiper-bundle.css'
   export default {
      name: '',
      data() {
           return {
   
           };
       },
       methods: {

       },
       mounted(){
        var swiper = new Swiper(".mySwiper", {
            pagination: {el: ".swiper-pagination",},
            autoplay:true,
        });
       },
       props:{
            list:{
                type:Array,
            }
       }
   }
</script>

<style scoped>

</style>
