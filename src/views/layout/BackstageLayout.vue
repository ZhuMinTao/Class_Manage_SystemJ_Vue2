<template>
    <div style="display: flex;">
        <BackstageSystemLeftPart></BackstageSystemLeftPart>
        <div  style="width: 82%;">
            <BreadTop :lists="$route.meta.breadList"></BreadTop>
            <router-view style="padding:0 30px;height: 90%;"></router-view>
        </div>
    </div>
</template>

<script>
import BackstageSystemLeftPart from '@/components/backstage/BackstageSystemLeftPart.vue'
import BreadTop from '@/components/common/BreadTop.vue'
export default {
    name: '',
    data() {
        return {

        };
    },
    methods: {

    },
    components: {
        BackstageSystemLeftPart,
        BreadTop,
    }
}
</script>

<style scoped></style>
