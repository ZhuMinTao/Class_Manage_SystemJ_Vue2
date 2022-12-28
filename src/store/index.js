
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ////记录发送验证码秒钟
    reciprocal:-1,
    //用于记录首页标题拦点击的索引
    homeTopActiveIndex:0,
  },
  getters: {

  },
  mutations: {
    //修改首页索引
    SETHOMETOPINDEX(state,value){
      state.homeTopActiveIndex = value
    },
    //修改秒钟时间
    ASSIGNMENT(state,value){
      state.reciprocal = value
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
        if(minStore.state.reciprocal==-1){
          minStore.commit("ASSIGNMENT",--val)
            clearInterval(codeRecip);
        }
    },1000)
    }
  },
  modules: {
  }
})
