<template>
    <div style="padding:0 20px;">
        <el-card class="box-card" style="height:600px">
            <el-date-picker @change="selectDateBack" style="margin-bottom: 20px;" v-model="optionDate" type="date"
                placeholder="选择查询日期">
            </el-date-picker>
            <el-empty v-if="classHygiene.length == 0" title="暂无数据"></el-empty>
            <div style="height: 500px;overflow-y: auto;">
                <el-descriptions :labelStyle="{'width':300+'px'}"  style="margin-top: 20px;" v-for="item in classHygiene" class="margin-top" :title="'值日时间: ' + item.hygieneDate | formatYMD"
                    :column="1" border>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            擦黑板
                        </template>
                        {{ item.cleanBlackboard.userName }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            扫地
                        </template>
                        {{ item.sweepFloor.userName }}
                    </el-descriptions-item>
                    <el-descriptions-item>
                        <template slot="label">
                            <i class="el-icon-user"></i>
                            拖地
                        </template>
                        {{ item.moppingFloor.userName }}
                    </el-descriptions-item>
                </el-descriptions>
            </div>
        </el-card>
    </div>
</template>

<script>
import { selectClassHygiene } from '@/api/class_message'
import { mapState } from 'vuex';
export default {
    name: '',
    data() {
        return {
            classHygiene: [],
            optionDate: "",
        };
    },
    methods: {
        async selectDateBack() {
            this.classHygiene = (await selectClassHygiene({
                classId: this.userMessage.classId,
                date: this.optionDate.toLocaleDateString()
            })).data.data
        }
    },
    async mounted() {
        this.classHygiene = (await selectClassHygiene({
            classId: this.userMessage.classId,
            afterDate: new Date().toLocaleDateString()
        })).data.data
        console.log(this.classHygiene);
    },
    computed: {
        ...mapState(['userMessage'])
    }
}
</script>

<style scoped></style>
