import Vue from 'vue'
import VueRouter from 'vue-router'

import ReceptionLayout from '@/views/layout/ReceptionLayout.vue'

import { selectUserDetail } from '@/api/user_message'

import { Message } from 'element-ui'

Vue.use(VueRouter)


const routes = [
  {
    path: "/verification_layout",
    component: () => import('@/views/layout/LoginLayout.vue'),
    redirect: "/verification_layout/login",
    children: [
      {
        name: "login",
        path: "login",
        component: () => import('../views/login/Login.vue')
      },
      {
        name: "register",
        path: "register",
        component: () => import('@/views/login/Register.vue')
      },
      {
        name: "email_login",
        path: "email/login",
        component: () => import('@/views/login/EmailLogin.vue')
      },
      {
        name: "forget",
        path: "email/forget",
        component: () => import('@/views/login/Forget.vue')
      }
    ]
  },
  {
    path: "/",
    component: ReceptionLayout,
    redirect: "/home",
    children: [
      {
        meta: { breadList: [{ name: "首页", link: "/" }, { name: "" }] },
        name: "home",
        path: "home",
        component: () => import('@/views/home/Home.vue')
      },
      {
        meta: { breadList: [{ name: "首页", link: "/" }, { name: "通知" }] },
        name: "home_notice",
        path: "home_notice",
        component: () => import('@/views/home/HomeNoticeMore.vue')
      },
      {
        meta: { breadList: [{ name: "首页", link: "/" }, { name: "通知" }] },
        name: "home_notice_detail",
        path: "home_notice_detail",
        component: () => import('@/views/home/HomeNoticeDetail.vue')
      },
      {
        meta: { breadList: [{ name: "成绩查询", link: "/score_query" }, { name: "" }] },
        name: "score_query",
        path: "score_query",
        component: () => import('@/views/other/ScoreQuery.vue')
      },
      {
        meta: { breadList: [{ name: "课表查询", link: "/course_table" }, { name: "" }] },
        name: "course_table",
        path: "course_table",
        component: () => import('@/views/other/CouseTable.vue')
      },
      {
        meta: { breadList: [{ name: "上传任务", link: "/tast_list" }, { name: "" }] },
        name: "tast_list",
        path: "tast_list",
        component: () => import('@/views/other/TaskList.vue')
      },
      {
        meta: { breadList: [{ name: "上传任务", link: "/tast_list" }, { name: "详情" }] },
        name: "task_detail",
        path: "task_detail",
        component: () => import('@/views/other/TaskDetail.vue')
      },
      {
        meta: { breadList: [{ name: "班级介绍", link: "/class_introduce" }, { name: "" }] },
        name: "class_introduce",
        path: "class_introduce",
        component: () => import('@/views/class/ClassIntroduce.vue'),
      },
      {
        meta: { breadList: [{ name: "班委会介绍", link: "/committee_introduce" }, { name: "" }] },
        name: "committee_introduce",
        path: "committee_introduce",
        component: () => import('@/views/class/CommitteeIntroduce.vue'),
      },
      {
        meta: { breadList: [{ name: "班级花名册", link: "/class_roster" }, { name: "" }] },
        name: "class_roster",
        path: "class_roster",
        component: () => import('@/views/class/ClassRoster.vue'),
      },
      {
        meta: { breadList: [{ name: "卫生安排", link: "/class_hygiene" }, { name: "" }] },
        name: "class_hygiene",
        path: "class_hygiene",
        component: () => import('@/views/class/ClassHygiene.vue'),
      },
      {
        meta: { breadList: [{ name: "课六安排", link: "/class_coure_six" }, { name: "" }] },
        name: "class_coure_six",
        path: "class_coure_six",
        component: () => import('@/views/class/ClassCoureSix.vue'),
      },
      {
        meta: { breadList: [{ name: "慕课安排", link: "/class_mooc" }, { name: "" }] },
        name: "class_mooc",
        path: "class_mooc",
        component: () => import('@/views/class/ClassMooc.vue'),
      },
      {
        meta: { breadList: [{ name: "周测安排", link: "/class_week_test" }, { name: "" }] },
        name: "class_week_test",
        path: "class_week_test",
        component: () => import('@/views/class/ClassWeekTest.vue'),
      },
      {
        meta: { breadList: [{ name: "活动安排", link: "/class_activity" }, { name: "" }] },
        name: "class_activity",
        path: "class_activity",
        component: () => import('@/views/class/ClassActivity.vue'),
      },
      {
        meta: { breadList: [{ name: "作业安排", link: "/class_week_work" }, { name: "" }] },
        name: "class_week_work",
        path: "class_week_work",
        component: () => import('@/views/class/ClassWeekWork.vue'),
      },
      {
        meta: { breadList: [{ name: "活动安排", link: "/class_activity" }, { name: "活动详情" }] },
        name: "class_activity_detail",
        path: "class_activity_detail",
        component: () => import('@/views/class/ClassActivityDetail.vue'),
      }
    ]
  },
  {
    path: "/user_message_set",
    name: "user_message_set",
    component: () => import('@/views/layout/ReceptionSetLayout.vue'),
    redirect: "/user_message_set/user_detail",
    children: [
      {
        meta: { link: "/user_message_set/user_detail" },
        path: "user_detail",
        name: "user_detail",
        component: () => import('@/views/set/UserDetail.vue')
      },
      {
        meta: { link: "/user_message_set/account_safe" },
        path: "account_safe",
        name: "account_safe",
        component: () => import('@/views/set/AccountSafe.vue')
      },
      {
        meta: { link: "/user_message_set/about_product" },
        path: "about_product",
        name: "about_product",
        component: () => import('@/views/set/AboutProduct.vue')
      },
      {
        meta: { link: "/user_message_set/edit_user_message" },
        path: "edit_user_message",
        name: "edit_user_message",
        component: () => import('@/views/set/EditUserMessage.vue')
      },
      //活动列表表格
      {
        meta: { link: "/user_message_set/activity_manage" },
        path: "activity_manage",
        name: "activity_manage",
        component: () => import('@/views/manage/ActivityManage.vue')
      },
      //活动更新查看页面
      {
        meta: { link: "/user_message_set/activity_manage" },
        path: "activity_update",
        name: "activity_update",
        component: () => import('@/views/manage/ActivityUpdate.vue')
      },
      {
        meta: { link: "/user_message_set/coure_six_manage" },
        path: "coure_six_manage",
        name: "coure_six_manage",
        component: () => import('@/views/manage/CoureSixManage.vue')
      },
      //课六更改界面
      {
        meta: { link: "/user_message_set/coure_six_update" },
        path: "coure_six_update",
        name: "coure_six_update",
        component: () => import('@/views/manage/CoureSixUpdate.vue')
      },
      {
        meta: { link: "/user_message_set/hygiene_manage" },
        path: "hygiene_manage",
        name: "hygiene_manage",
        component: () => import('@/views/manage/HygieneManage.vue')
      },
      //卫生更改页面
      {
        meta: { link: "/user_message_set/hygiene_update" },
        path: "hygiene_update",
        name: "hygiene_update",
        component: () => import('@/views/manage/HygieneUpdate.vue')
      },
      {
        meta: { link: "/user_message_set/mooc_manage" },
        path: "mooc_manage",
        name: "mooc_manage",
        component: () => import('@/views/manage/MoocManage.vue')
      },
      //慕课更改页面
      {
        meta: { link: "/user_message_set/mooc_update" },
        path: "mooc_update",
        name: "mooc_update",
        component: () => import('@/views/manage/MoocUpdate.vue')
      },
      {
        meta: { link: "/user_message_set/week_test_manage" },
        path: "week_test_manage",
        name: "week_test_manage",
        component: () => import('@/views/manage/WeekTestManage.vue')
      },
      //周测更改页面
      {
        meta: { link: "/user_message_set/week_test_update" },
        path: "week_test_update",
        name: "week_test_update",
        component: () => import('@/views/manage/WeekTestUpdate.vue')
      },
      {
        meta: { link: "/user_message_set/week_work_manage" },
        path: "week_work_manage",
        name: "week_work_manage",
        component: () => import('@/views/manage/WeekWorkManage.vue')
      },
      //作业更改页面
      {
        meta: { link: "/user_message_set/week_work_update" },
        path: "week_work_update",
        name: "week_work_update",
        component: () => import('@/views/manage/WeekWorkUpdate.vue')
      },
      {
        meta: { link: "/user_message_set/upload_task_manage" },
        path: "upload_task_manage",
        name: "upload_task_manage",
        component: () => import('@/views/manage/UploadTaskManage.vue')
      },
      //上传任务更改页面
      {
        meta: { link: "/user_message_set/upload_task_update" },
        path: "upload_task_update",
        name: "upload_task_update",
        component: () => import('@/views/manage/UploadTaskUpdate.vue')
      },
      {
        meta: { link: "/user_message_set/class_manage" },
        path: "class_manage",
        name: "class_manage",
        component: () => import('@/views/manage/ClassManage.vue')
      }

    ]
  },
  {
    path: "/backstage_layout",
    name: "backstage_layout",
    component: () => import('@/views/layout/BackstageLayout.vue'),
    redirect: "/backstage_layout/system_home",
    children: [
      {
        meta: {
          link: "/backstage_layout/system_home",
          breadList: [{ name: "班级管理", link: "/backstage_layout/system_home" },
          { name: "" }],
        },
        path: 'system_home',
        name: 'system_home',
        component: () => import('@/views/system/SystemHome')
      },
      {
        meta: {
          link: "/backstage_layout/system_home",
          breadList: [{ name: "班级管理", link: "/backstage_layout/system_home" },
          { name: "查看班级" }],
        },
        path: "class_manage",
        name: "class_manage",
        component: () => import('@/views/manage/ClassManage.vue')
      },
      {
        meta: {
          link: "/backstage_layout/system_user",
          breadList: [{ name: "用户管理", link: "/backstage_layout/system_user" },
          { name: "" }],
        },
        path: "system_user",
        name: "system_user",
        component: () => import('@/views/system/SystemUser.vue')
      },
      {
        meta: {
          link: '/backstage_layout/choose_power',
          breadList: [{ name: "班级管理", link: "/backstage_layout/system_home" },
          { name: "选择权限", link: '' }
          ],
        },
        path: 'choose_power',
        name: 'choose_power',
        component: () => import('@/views/system/ChoosePower.vue')
      },
      {
        meta: {
          link: '/backstage_layout/my_account',
          breadList: [{ name: "我的账号", link: "/backstage_layout/my_account" },
          { name: ""}
          ],
        },
        path: 'my_account',
        name: 'my_account',
        component: () => import('@/views/set/AccountSafe.vue')
      },
      {
        meta: {
          link: '/backstage_layout/my_account',
          breadList: [{ name: "用户信息", link: "/backstage_layout/my_account" },
          { name: ""}
          ],
        },
        path: "edit_user_message",
        name: "edit_user_message",
        component: () => import('@/views/set/EditUserMessage.vue')
      },
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

import store from '@/store'

router.beforeEach(async (to, from, next) => {

  //检查如果为管理员账号只能跳转管理员界面
  
  let regexp = new RegExp(/\/backstage_layout\/*/)

  let regexp2 = new RegExp(/\/verification_layout\/*/)

  await store.dispatch('getUserDetailMessage');
  

  if(store.state.userMessage!=undefined){

  let sn = store.state.userMessage.userDetail.sn

    if (regexp.test(to.path)) {
      if (sn == '学生') {
        Message({
          message: "无法访问",
          type: "error"
        })
        return 
      }
    }
  
    if(sn == '管理员' || sn == '老师'){
      if(!regexp2.test(to.path)){
          if(!regexp.test(to.path)){
              router.push("/backstage_layout")
          }
      }
    }
  }
  

  if (regexp2.test(to.path)) {
    next()
    return
  }
  selectUserDetail()
    .then(({ data }) => {
      if (data.code == 200) {
        next()
      } else {
        Message({
          message: data.message,
          type: "error"
        })
        router.push("/verification_layout/login")
      }
    }).catch((err) => {
      Message({
        message: "The server happen error!",
        type: "error"
      })
    })
})

export default router
