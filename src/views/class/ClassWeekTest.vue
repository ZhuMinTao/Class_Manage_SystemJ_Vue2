<template>
    <div style="padding:0 30px">
        <el-card class="box-card" style="height:600px;overflow: auto;">
            <el-empty  title="暂无数据" style="height: 100%;" v-if="weekTestList.length==0"></el-empty>
            <el-tabs value="index0" v-if="weekTestList.length!=0">
                <el-tab-pane v-for="item,index in weekTestList" :label="item.testTime | formatYMD" :name="'index'+index">
                    <el-descriptions :labelStyle="{'width':300+'px'}"  style="margin-top: 10px;" title="基本信息" :column="1"  border>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-user"></i>
                                测试时间
                            </template>
                            {{ item.testTime | formatDate }}
                        </el-descriptions-item>
                        <el-descriptions-item>
                            <template slot="label">
                                <i class="el-icon-user"></i>
                                测试地点
                            </template>
                            {{ item.testPlace}}
                        </el-descriptions-item>
                    </el-descriptions>
                    <el-descriptions :labelStyle="{'width':300+'px'}" style="margin-top: 20px;"   title="周测人员" :column="2"  border>
                        <el-descriptions-item v-for="itemStaff,indexStaff in item.testMembers.split(',',8)">
                            <template slot="label">
                                <i class="el-icon-user"></i>
                                测试人员{{ indexStaff+1 }}
                            </template>
                            {{itemStaff}}
                        </el-descriptions-item>

                    </el-descriptions>
                    <el-descriptions :labelStyle="{'width':300+'px'}"  style="margin-top: 20px;" title="替补人员" :column="2"  border>
                        <el-descriptions-item v-for="itemStaff,indexStaff in item.substitutionMembers.split(',',2)">
                            <template slot="label">
                                <i class="el-icon-user"></i>
                                替补{{ indexStaff+1 }}
                            </template>
                            {{itemStaff}}
                        </el-descriptions-item>

                    </el-descriptions>
                    
                </el-tab-pane>
            </el-tabs>

        </el-card>
    </div>
</template>

<script>
import { selectWeekTest } from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            weekTestList:[],
        };
    },
    methods: {

    },
    async mounted() {
        this.weekTestList = (await selectWeekTest({classId:this.userMessage.classId})).data.data
        console.log(this.weekTestList);
    },
    computed:{
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped></style>
