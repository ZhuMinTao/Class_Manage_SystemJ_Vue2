<template>
    <div style="padding:0 30px;">
        <el-card  class="box-card" style="height:600px">
            <el-empty title="暂无数据" style="height: 100%;" v-if="classMooc.length==0"></el-empty>

            <el-tabs  value="index0" v-if="classMooc!=0">
                <el-tab-pane :label="item.examineDate | formatDate" :name="'index'+index" v-for="item,index in classMooc">
                    <div class="text_show_area" v-html="item.completeContent"></div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import {selectMooc} from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            classMooc:[],
        };
    },
    methods: {

    },
    async mounted(){
        this.classMooc = (await selectMooc({classId:this.userMessage.classId})).data.data
    },
    computed:{
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped>
.text_show_area{
        padding: 20px;
        box-sizing: border-box;
        height: 500px;
        background-color: #eeeeee8e;
        overflow-y: auto;
        line-height: 30px;
        border-radius: 5px;
    }
</style>
