<template>
    <div>
        <!-- 导航栏 -->
        <TopPart></TopPart>

        <router-view></router-view>

        <!-- 页脚 -->
        <FooterPart></FooterPart>
    </div>
</template>

<script>
import TopPart from '@/components/home/TopPart.vue';
import FooterPart from '@/components/home/FooterPart.vue'

export default {
   name: 'HomeLayout',
   data() {
        return {

        };
    },
    components:{
        TopPart,
        FooterPart
    },
    methods: {

    },
};
</script>

<style scoped>

</style>
