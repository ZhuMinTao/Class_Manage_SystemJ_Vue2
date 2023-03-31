
import Vue from 'vue'
import Vuex from 'vuex'
import {selectUserDetail} from '@/api/user_message'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ////记录发送验证码秒钟
    reciprocal:-1,

    userMessage:{},
  },
  getters: {

  },
  mutations: {
    //修改秒钟时间
    ASSIGNMENT(state,value){
      state.reciprocal = value
    },
    //设置用户信息
    SETUSERMESSAGE(state,value){
      state.userMessage = value
    }
  },
  actions: {
    //用于发送验证码倒计时
    setAssigment(minStore,value){
      if(minStore.state.reciprocal!=-1)return
      //将reciprocal赋值为传进来的参数
      minStore.commit("ASSIGNMENT",value)
      let val = value;
      //加入定时器
      const codeRecip = setInterval(()=>{
        minStore.commit("ASSIGNMENT",--val)
        //当为0时候清楚定时器，并将值赋值为-1
        if(minStore.state.reciprocal==0){
          minStore.commit("ASSIGNMENT",--val)
            clearInterval(codeRecip);
        }
    },1000)
    },
    //获取用户基本信息
    async getUserDetailMessage(minStore,value){
      let userDetail = (await selectUserDetail()).data.data;
      minStore.commit("SETUSERMESSAGE",userDetail)
    }
  },
  modules: {
  }
})
