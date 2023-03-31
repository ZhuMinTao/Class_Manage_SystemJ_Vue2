<template>
    <div style="padding:0 20px;box-sizing: border-box;">
        <el-card style="height: 600px;">
            <el-table :data="tableData"  max-height="530" v-loading="loading" >
                <el-table-column type="index" width="100">
                </el-table-column>
                <el-table-column prop="stuCode" label="学号" >
                </el-table-column>
                <el-table-column prop="sex" :formatter="sexf" label="性别">
                </el-table-column>
                <el-table-column prop="userName" label="姓名">
                </el-table-column>
            </el-table>
            <el-button style="margin-top: 5px;"  @click="exportClassRoster">导出花名册</el-button>
        </el-card>
    </div>
</template>

<script>
import {selectClassRoster,exportRoster} from '@/api/class_message'
import { mapState } from 'vuex';
import axios from 'axios'
export default {
    name: '',
    data() {
        return {
            tableData: [{ name: "张三" },{ name: "张三" }],
            loading:true,
        };
    },
    methods: {
        sexf(row,index){
            return row.sex=='0'?'女':'男'
        },
        async exportClassRoster(){
            exportRoster({classId:this.userMessage.classId})
            .then(res=>{
                let blob = new Blob([res.data]);
                let url = window.URL.createObjectURL(blob); // 创建 url 并指向 blob
                let a = document.createElement('a');
                a.href = url;
                a.download = '花名册.xlsx';
                a.click();
                window.URL.revokeObjectURL(url); // 释放该 url
            })

            
        }
    },
    async mounted(){
        this.tableData = (await selectClassRoster({classId:this.userMessage.classId})).data.data
        this.loading = false
    },
    computed:{
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped></style>
