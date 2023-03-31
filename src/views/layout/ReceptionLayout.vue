<template>
    <div>
        <!-- 顶部导航 -->
        <TopPart></TopPart>
        <div style="display: flex;">
            <!-- 左侧菜单 -->
            <LeftPart></LeftPart>
            
            <div style="display: flex;flex-direction: column;width: 82%;">
                <BreadTop :lists="$route.meta.breadList"></BreadTop>
                <router-view  :style="{'height':height-120.5+'px'}" style="overflow: auto;"  v-if="loadingRoute"></router-view> 
            </div>
        </div>
    </div>
</template>

<script>
import TopPart from '@/components/common/TopPart.vue'
import LeftPart from '@/components/common/LeftPart.vue'
import BreadTop from '@/components/common/BreadTop.vue'
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
   name: '',
   data() {
        return {
            loadingRoute:false,
            height:0,
        };
    },
    methods: {
        ...mapActions(['getUserDetailMessage']),
    },
    components:{
        TopPart,
        LeftPart,
        BreadTop,
    },
    async mounted(){
        this.height = document.documentElement.clientHeight
        await this.getUserDetailMessage()
        this.loadingRoute = true
    }
}
</script>

<style scoped>
   
</style>
