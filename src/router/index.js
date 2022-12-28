import Vue from 'vue'
import VueRouter from 'vue-router'

//引入组件
import HomeLayout from '@/views/layout/HomeLayout.vue'
Vue.use(VueRouter)


const routes = [
  {
    path:"/verification_layout",
    component:()=>import('@/views/layout/LoginLayout.vue'),
    redirect:"/verification_layout/login",
    children:[
      {
        name:"login",
        path:"login",
        component:()=>import('../views/login/Login.vue')
      },
      {
        name:"register",
        path:"register",
        component:()=>import('@/views/login/Register.vue')
      },
      {
        name:"email_login",
        path:"email/login",
        component:()=>import('@/views/login/EmailLogin.vue')
      },
      {
        name:"forget",
        path:"email/forget",
        component:()=>import('@/views/login/Forget.vue')
      }
    ]
  },
  {
    path:"/",
    component:HomeLayout,
    redirect:"/home_page",
    children:[
      {
        path:"/home_page",
        component:()=> import("@/views/home/Home.vue")
      },
      {
        path:"/class",
        component:()=> import("@/views/home/MyClass.vue")
      },
      {
        path:"/system_action",
        component:()=> import("@/views/home/SystemAction.vue")
      },
      {
        path:"/message_select",
        component:()=> import("@/views/home/MessageSelect.vue")
      },
      {
        path:"/about_product",
        component:()=> import("@/views/home/AboutProduct.vue")
      }
    ]
  }
]

// 解决路由重复
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
