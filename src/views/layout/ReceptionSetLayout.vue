<template>
    <div>
        <TopPart :is-default-button="false" :back="true"></TopPart>
        <div style="display: flex;">
            <SystemLeftPart ></SystemLeftPart>
            <router-view style="width: 82%;padding:30px;"></router-view>
        </div>
    </div>
</template>

<script>
import TopPart from '@/components/common/TopPart.vue'
import SystemLeftPart from '@/components/common/SystemLeftPart.vue'
export default {
    name: '',
    data() {
        return {

        };
    },
    methods: {
    },
    components:{
        SystemLeftPart,
        TopPart,
    }
}
</script>

<style scoped>
    .set_nav{
        padding:0 50px;
        box-sizing: border-box;
        height: 60px;
        display: flex;
        align-items: center;
    }
</style>
