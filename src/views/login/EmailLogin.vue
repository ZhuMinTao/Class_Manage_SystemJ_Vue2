<template>
  <div>
    <div class="top">EmailSign</div>
    <div class="main_input">
        <div  @click="inputClick(1)" :class="{border_active:currentIndex==1}">
            <svg t="1671099096712" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13185" width="18" height="18"><path d="M838.954667 234.666667H170.666667c-3.626667 0-7.168 0.448-10.56 1.322666l323.690666 323.669334a21.333333 21.333333 0 0 0 30.165334 0L838.954667 234.666667z m46.144 14.186666l-260.693334 260.693334 262.933334 262.912c5.44-7.168 8.661333-16.106667 8.661333-25.792V277.333333c0-10.944-4.117333-20.906667-10.88-28.48zM843.861333 789.333333l-249.6-249.621333-50.133333 50.133333a64 64 0 0 1-90.517333 0l-50.112-50.133333L156.373333 786.88c4.48 1.578667 9.28 2.453333 14.314667 2.453333h673.194667zM128.661333 754.218667L373.333333 509.525333 129.578667 265.813333A42.709333 42.709333 0 0 0 128 277.333333v469.333334c0 2.56 0.213333 5.098667 0.661333 7.552zM170.666667 192h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v469.333334a85.333333 85.333333 0 0 1-85.333334 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V277.333333a85.333333 85.333333 0 0 1 85.333334-85.333333z" fill="#8a8a8a" p-id="13186"></path></svg>
            <input type="text" @blur="emailBlur" @focus="currentIndex=1" v-model="emailSubmit.email" placeholder="请输入邮箱" ref="email" style="flex-grow:1">
        </div>
        <span>{{logObject.emailLog}}</span>
        <div  @click="inputClick(2)" :class="{border_active:currentIndex==2}" >
            <svg t="1671085559224" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12067" width="18" height="18"><path d="M943.1 172c-2.4-0.2-245.1-25.3-413.8-147.8-5.1-3.7-11-5.6-17.3-5.6-6.2 0-12.2 1.9-17.3 5.6C326.9 146 83.3 171.8 80.9 172c-15.2 1.4-26.6 14.1-26.6 29.3 0 6.7 0.6 165.8 54.8 344.4 32.1 105.8 76.4 196.4 131.9 269.2 70.3 92.3 158.5 156 262 189.2 2.9 0.9 5.9 1.4 9 1.4s6.1-0.5 8.9-1.4c103.6-33.2 191.7-96.8 262-189.2 55.4-72.7 99.8-163.2 131.9-269.2 54.1-178.6 54.8-337.7 54.8-344.4C969.7 186.1 958.3 173.5 943.1 172zM910.1 227.2l-0.1 1.6c-2.9 58.1-13.4 174.4-51.4 299.9-66.7 220.1-183.1 360.1-346 416.1L512 945l-0.6-0.2C349 888.9 232.7 749.4 165.8 530.1c-39.8-130.5-49.4-254.2-51.8-301.4l-0.1-1.6 1.5-0.2c70.6-10.3 250.5-44.8 395.5-142.4l0.9-0.7 1 0.7C658 182.1 837.9 216.6 908.5 227L910.1 227.2z" p-id="12068" fill="#8a8a8a"></path><path d="M641.8 351 467 580.3l-89-76.1c-5.3-4.5-12.1-7-19.1-7-8.6 0-16.8 3.7-22.4 10.3-10.5 12.3-9.1 31 3.3 41.5l112.7 96.4c5.2 4.4 12.4 7 19.6 7 0.9 0 1.8 0 2.7-0.1 8-0.8 15.4-5 20.3-11.4l193.7-254c4.8-6.3 6.8-14 5.7-21.8-1-7.8-5.1-14.7-11.3-19.5C670.1 335.6 651.6 338.1 641.8 351z" p-id="12069" fill="#8a8a8a"></path></svg>
            <input type = "text" @focus="currentIndex=2" placeholder="请输入验证码"  v-model="emailSubmit.code" class="account_password"  ref="code">
            <p class="v_code" >
                <span style="cursor: pointer;" :class="{active_code:reciprocal>=0}" @click.stop="sendCode">{{reciprocal>=0?reciprocal:"发送验证码"}}</span>
            </p>
        </div>
        <span>{{logObject.submitLog}}</span>
        <div class="submit_btn" @click="submit">登录</div>
    </div>
    <div class="footer">
        <div @click="$router.replace('/verification_layout/register')">立即注册</div>
        <div @click="$router.replace('/verification_layout/login')">账号登录</div>
    </div>
  </div>
</template>

<script>


import { mapActions, mapState } from 'vuex';
import { checkLogin,emailExist,sendEmailCode,emailLogin } from '@/api/verification';

export default {
  name:"Register",
  data() {
    return {
        currentIndex:-1,
        //眼睛睁开 
        eyeShow:false,
        emailSubmit:{
            email:"",
            code:"",
        },
        logObject:{
            emailLog:"",
            submitLog:"",
        }
        
    }
  },
  methods:{
    inputClick(e){
        this.currentIndex=e
        if(e==1){
            this.$refs.email.focus()
        }else{
            this.$refs.code.focus()
        } 

    },
    //email控件失焦事件
    emailBlur(){
        let reg = new RegExp(/.*@.{2,3}\.com/)

        let formVertity = reg.test(this.emailSubmit.email)

        //判断邮箱是否合法
        if(!formVertity){
            this.$refs.email.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.emailLog = "邮箱格式不合法!"
            return
        }
        //判断该邮箱是否与账号进行绑定
        emailExist(this.emailSubmit.email).then(res=>{
            let{data} = res
            console.log(data);
            if(data.code!=200){
                this.$refs.email.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
                this.logObject.emailLog = "该邮箱未绑定!"
            }else{
                this.$refs.email.parentNode.style = ""
                this.logObject.emailLog = ""
                this.$refs.code.parentNode.style = ""
                this.logObject.submitLog = ""
            }
        }).catch(err=>{
            this.$refs.email.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.emailLog = "服务器异常"
        })
        
        
    },
    sendCode(){
        //判断是否已点击发送
        if(this.reciprocal!=-1)return

        //判断是否未输入邮箱
        if(this.emailSubmit.email.trim()==""){
            this.$refs.email.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.emailLog = "邮箱地址不能为空"
            return
        }

        //判断是否解决所有错误
        if(this.logObject.emailLog!=""){
            this.$refs.code.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.submitLog = "需解决上述问题"
            return
        }



        sendEmailCode(this.emailSubmit.email).then(({data})=>{
            //当发送验证码不成功时
            if(data.code!=200){
                this.$refs.email.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
                this.logObject.emailLog = data.message
                return
            }

            this.setAssigment(300)

            //恢复默认样式
            this.$refs.email.parentNode.style = ""
            this.logObject.emailLog = ""

        }).catch(err=>{
            this.$refs.code.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.submitLog = "服务器异常"
        })
    },
    async submit(){
        let {data} = await emailLogin(this.emailSubmit)

        if(data.code!=200){
            this.$refs.code.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.submitLog = data.message
        }else{
            this.$router.push("/home_layout")
        }
    },
     ...mapActions(['setAssigment'])
  },
  computed:{
      ...mapState(['reciprocal'])
  }

};
</script>
<style scoped>
.active_code{
    border:2px solid rgb(37, 163, 212);
    padding:5px 20px;
    border-radius: 10px;
    
}
.v_code{
    margin-left:20px;
    color: rgb(37, 163, 212);
    font-size:14px;
    flex-grow: 5;
    display: flex;
    justify-content: center;
}
.main_input>span{
    width:80%;
    display: flex;
    color:red;
    height:30px;
    align-items: center;
    font-size: 12px;
    padding:0 30px;
    box-sizing: border-box;
}
.footer>div{
    cursor: pointer;
}
.footer{
    display: flex;
    justify-content: space-around;
    padding:20px 0;
    color: rgb(37, 163, 212)
}
.submit_btn{
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-weight: bold;
    color:white;
    background: linear-gradient(to right,rgb(0, 183, 255),rgb(46, 137, 255));
}

.top {
    font-size:24px;
    width:auto;
    height: auto;
    padding: 20px 0;
    display: flex;
    align-items: flex-end;

}
.account_password{
    width:60%;
    padding:0 10px;
    box-sizing: border-box;
}
.border_active{
    border:2px solid rgb(73, 167, 230) !important;
}
.main_input{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.main_input>div>input{
    border:none;
    padding:0 10px;
    box-sizing: border-box;
}
.main_input>div{
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding:0 10px;
    border-radius: 30px;;
    border:2px solid rgb(211, 211, 211);
    height:50px;
    width:80%;
}
div{
    background: white;
}

.content {
  display: flex;
  justify-content: center;
}

</style>