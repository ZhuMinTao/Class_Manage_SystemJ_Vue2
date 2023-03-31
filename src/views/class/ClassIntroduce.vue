<template>
    <div style="padding:0 30px">
        <el-card style="height: 600px;">
            <el-empty title="暂无数据" style="height: 100%;" v-if="!classMessage"></el-empty>
            <el-tabs value="first" v-if="loadingCompelete&&classMessage" >
                <el-tab-pane label="班级介绍" name="first">
                    <div class="text_show_area" v-html="classMessage.classSystemDetail.classIntroduce"></div>
                </el-tab-pane>
                <el-tab-pane label="班规介绍" name="second">
                    <div class="text_show_area" v-html="classMessage.classSystemDetail.classRole"></div>
                </el-tab-pane>
                <el-tab-pane label="班级荣誉" name="third">
                    <div class="text_show_area" v-html="classMessage.classSystemDetail.classHonor"></div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
       
    </div>
</template>

<script>
    import {selectClassMessage} from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            classMessage:{},
            loadingCompelete:false,
        };
    },
    methods: {

    },
    async mounted(){

        this.classMessage = (await selectClassMessage({classId:this.userMessage.classId})).data.data

        this.loadingCompelete = true

        
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
