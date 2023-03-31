import Vue from 'vue'
import App from './App.vue'

import store from './store'

import router from './router'

//引入图标库
import '@/assets/fonts/icon/iconfont.css'

//引入ElementUI
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import Filter from '@/filters/filters'
import axios from 'axios'

for(let singleFilter in Filter){
    Vue.filter(singleFilter,Filter[singleFilter ])
}


Vue.config.productionTip = false

Vue.prototype.$baseUrl = axios.defaults.baseURL



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
