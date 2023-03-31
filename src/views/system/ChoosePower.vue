<template>
    <div>
        <el-card style="height: 90%;" v-if="load">
                <el-checkbox-group v-model="checkedCities">
                    <div v-for="city,index in cities" style="margin-top: 20px;">
                        <el-checkbox  :label="city.id" :key="index+'index'">{{ city.roleName }}</el-checkbox>
                        <div>
                            <el-tag style="margin: 10px 5px;" v-for="i in city.powerNameList">{{ i.powerIntroduce }}</el-tag>
                        </div>
                    </div>
                </el-checkbox-group>
        </el-card>
        <div style="height: 10%;display: flex;align-items: center;justify-content: end;">
            <el-button type="primary" style="width: 100px;" @click="submit">提交</el-button>
        </div>
    </div>
</template>

<script>
import { getRolePowerList, getUserDefaultPower,setUserRole } from '@/api/system_manage'

export default {
    name: '',
    data() {
        return {
            userId: undefined,
            cities: [],
            //选择的列表
            checkedCities: [],
            load: false,

        };
    },
    methods: {
        async getPower() {
            let { data } = await getRolePowerList()

            this.cities = data.data.map(item => {
                item.isChoose = false
                item.isIndeterminate = false
                return item
            })
           this.getUserPower()
            this.load = true

        },
        async submit(){
            

            let roleList = this.checkedCities.map(item=>{
                return {id:item}
            })

            let reqObj = {
                userId:this.userId,
                roleList,
            }

            let {data} = await setUserRole(reqObj);

            if(data.code==200){
                this.$message.success("设置成功！")
                this.getUserPower()
            }else{
                this.$message.error(data.message)
            }
        },
        //获取用户权限
        async getUserPower(){
            this.checkedCities = (await getUserDefaultPower({userId:this.userId})).data.data.map(item => {
                return item.id
            })
        }

    },
    async mounted() {


        this.getPower()
        this.userId = this.$route.query.userId
    }
}
</script>

<style scoped></style>
