<template>
  <div>
    <div class="top">Sign</div>
    <div class="main_input">
        <div @click="inputClick(1)" :class="{border_active:currentIndex==1}">
            <svg t="1671075323148" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5792" width="18" height="18"><path d="M511.333 63.333c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z m0 832c-51.868 0-102.15-10.144-149.451-30.15-36.011-15.231-69.123-35.67-98.812-60.897 12.177-31.985 42.226-63.875 84.223-88.903C396.189 686.243 456.222 669.53 512 669.53c55.631 0 115.416 16.658 164.026 45.703 41.762 24.953 71.689 56.812 83.863 88.804-29.764 25.342-62.976 45.865-99.106 61.146-47.299 20.006-97.582 30.15-149.45 30.15z m296.268-139.658c-20.493-35.937-54.353-68.855-98.747-95.381C649.75 624.979 579.839 605.53 512 605.53c-67.964 0-138.094 19.488-197.471 54.875-44.644 26.606-78.656 59.594-99.195 95.586-23.835-28.755-43.234-60.652-57.85-95.208-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.3-20.006 97.583-30.15 149.451-30.15 51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-14.563 34.429-33.869 66.22-57.583 94.892z" fill="#8a8a8a" p-id="5793"></path><path d="M512 220.223c-88.224 0-160 71.776-160 160s71.776 160 160 160c88.225 0 160-71.775 160-160s-71.775-160-160-160z m0 256c-52.935 0-96-43.065-96-96s43.065-96 96-96 96 43.065 96 96-43.065 96-96 96z" fill="#8a8a8a" p-id="5794"></path></svg>
            <input type="text" placeholder="请输入账号" @focus="currentIndex=1" v-model="accountSubmit.userCode" ref="account" style="flex-grow:1" @blur="accountBlur">
        </div>
        <span>{{logObject.accountLog}}</span>
        <div  @click="inputClick(2)"  :class="{border_active:currentIndex==2}" >
            <svg t="1671074896767" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3914" width="18" height="18"><path d="M511.970836 499.271094c-67.470671 0-124.724653 53.072753-130.051985 119.469975-0.358157 1.096984-0.775666 2.648316-0.775666 4.466732l0 31.441083c0 7.708566 6.224772 13.96199 13.876032 13.96199l31.203676 0c7.65126 0 13.931291-6.252401 13.931291-13.96199l-0.116657-9.052167c-0.535189-2.594081-0.35918-5.598508-0.11768-8.724709 0.11768-1.935072 0.234337-3.840468 0.234337-5.808286 0-39.924291 32.185027-72.467475 71.816652-72.467475 39.627533 0 71.870888 32.544207 71.870888 72.467475 0 31.771611-20.661575 59.697637-50.166563 69.136613l0-45.552475c0-7.68503-6.251378-13.96506-13.902638-13.96506l-31.174 0c-7.65433 0-13.906731 6.281053-13.906731 13.96506l0 94.259804c0 7.68503 6.252401 13.96506 13.906731 13.96506l31.174 0c1.279133 0 2.52859-0.208754 3.839445-0.596588 66.899666-5.985318 119.213126-63.475683 119.241778-131.214461C642.853745 558.38647 584.141552 499.271094 511.970836 499.271094" fill="#8a8a8a" p-id="3915"></path><path d="M806.553061 336.037383l-76.131935-0.090051 0-55.245232c0-104.908328-83.48439-190.268438-186.147584-190.268438L508.27977 90.433662c-101.113909 0-184.302563 83.84357-185.969529 187.18624l-0.177032 1.533936c0 1.057075 0.118704 1.696642 0 1.548262l0.357134 6.104021 0.952698 0c3.393283 12.400425 14.736633 21.497617 27.868721 21.497617 13.219069 0 24.473391-9.097192 27.836999-21.497617l0.983397 0 0.23843-5.819542c3.333932-74.213235 59.962673-132.331911 128.97956-132.331911l33.853016 0c71.311139 0 129.308041 62.390979 129.308041 139.030473l0 48.352241L375.188566 336.037383l0.089028-0.090051-157.800979 0.090051c-48.680722 0-88.307232 40.46255-88.307232 90.124624l0 417.338037c0 49.665143 39.627533 90.066295 88.307232 90.066295L806.553061 933.566338c48.708352 0 88.277556-40.400129 88.277556-90.066295L894.830617 426.162006C894.829594 376.499933 855.260389 336.037383 806.553061 336.037383M839.364351 430.584736l0 408.480298c0 21.019733-16.645099 38.081317-37.128619 38.081317L221.764268 877.146351c-20.484543 0-37.157271-17.061584-37.157271-38.081317L184.606996 430.584736c0-20.976754 16.672728-38.081317 37.157271-38.081317l580.471464 0C822.719252 392.503419 839.364351 409.609005 839.364351 430.584736" fill="#8a8a8a" p-id="3916"></path></svg>
            <input :type="eyeShow?'text':'password'" @focus="currentIndex=2" placeholder="请输入密码" v-model="accountSubmit.userPassword"  class="account_password"  ref="password">
            <svg @click="eyeClick" v-show="eyeShow" t="1671076018058" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;" p-id="8535" width="18" height="18"><path d="M518.826667 763.733333c-98.190222 0-177.777778-79.587556-177.777778-177.777777s79.587556-177.777778 177.777778-177.777778 177.777778 79.587556 177.777777 177.777778-79.587556 177.777778-177.777777 177.777777z m0-99.555555a78.222222 78.222222 0 1 0 0-156.444445 78.222222 78.222222 0 0 0 0 156.444445z" fill="#8a8a8a" p-id="8536"></path><path d="M522.467556 814.520889c124.529778 0 249.287111-73.244444 374.357333-224.199111-109.155556-151.054222-233.244444-224.241778-374.357333-224.241778-141.255111 0-269.909333 73.329778-387.569778 224.284444 133.575111 150.798222 262.869333 224.156444 387.569778 224.156445z m373.063111-380.344889c36.750222 37.432889 71.68 81.038222 104.803555 130.744889l19.911111 29.880889-22.087111 28.330666C848.284444 815.317333 689.706667 914.062222 522.467556 914.062222c-166.684444 0-329.742222-98.176-489.571556-289.664L8.149333 594.773333l22.570667-31.331555c44.743111-62.122667 91.818667-114.673778 141.169778-157.482667l-84.337778-89.827555a35.555556 35.555556 0 1 1 51.84-48.668445l88.789333 94.577778c51.342222-35.726222 104.96-61.525333 160.768-77.226667l-43.079111-101.674666a35.555556 35.555556 0 1 1 65.479111-27.733334l48.739556 115.000889a499.527111 499.527111 0 0 1 62.378667-3.868444c36.508444 0 72.007111 3.882667 106.481777 11.619555l56.945778-125.297778a35.555556 35.555556 0 0 1 64.739556 29.44l-53.105778 116.821334c51.043556 19.911111 99.612444 48.938667 145.621333 86.897778l103.936-103.950223a35.555556 35.555556 0 0 1 50.289778 50.289778l-101.831111 101.831111z" fill="#8a8a8a" p-id="8537"></path></svg>
            <svg @click="eyeClick" v-show="!eyeShow" t="1671076042893" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;" p-id="9636" width="18" height="18"><path d="M469.333333 681.386667c-36.053333-2.432-71.253333-8.533333-104.96-17.92l-69.802666 149.674666a42.368 42.368 0 0 1-56.533334 20.266667 42.666667 42.666667 0 0 1-20.821333-56.32l66.986667-143.658667a451.712 451.712 0 0 1-148.906667-112.682666 388.693333 388.693333 0 0 1-70.570667-119.338667 42.666667 42.666667 0 1 1 80.128-29.354667 303.445333 303.445333 0 0 0 55.210667 93.098667C270.634667 547.413333 383.018667 597.333333 505.728 597.333333c122.752 0 235.136-49.962667 305.706667-132.181333a303.445333 303.445333 0 0 0 55.210666-93.098667 42.666667 42.666667 0 0 1 80.128 29.354667 388.693333 388.693333 0 0 1-70.570666 119.338667 423.68 423.68 0 0 1-18.773334 20.48l104.362667 104.362666a42.666667 42.666667 0 0 1-0.298667 60.032 42.368 42.368 0 0 1-60.032 0.298667l-109.653333-109.653333c-20.48 14.08-42.24 26.581333-65.024 37.418666l66.901333 143.36a42.666667 42.666667 0 0 1-20.821333 56.362667 42.368 42.368 0 0 1-56.533333-20.266667l-69.717334-149.546666a520.533333 520.533333 0 0 1-91.946666 16.810666v130.645334A42.666667 42.666667 0 0 1 512 853.333333c-23.722667 0-42.666667-18.944-42.666667-42.24v-129.706666z" fill="#8a8a8a" p-id="9637"></path><path d="M176.128 524.373333a42.368 42.368 0 0 1 60.032 0.256 42.666667 42.666667 0 0 1 0.298667 60.074667l-121.216 121.216a42.368 42.368 0 0 1-60.074667-0.298667 42.666667 42.666667 0 0 1-0.298667-60.032l121.258667-121.258666z" fill="#8a8a8a" p-id="9638"></path></svg>
            <p style="margin-left:20px;color: rgb(37, 163, 212);cursor: pointer;font-size:14px;flex-grow: 5;" @click="$router.push('/verification_layout/email/forget')">忘记密码?</p>
        </div>
        <span>{{logObject.submitLog}}</span>
        <div class="submit_btn" @click="submit">登录</div>
    </div>
    <div class="footer">
        <div @click="$router.replace('/verification_layout/register')">立即注册</div>
        <div @click="$router.replace('/verification_layout/email/login')">邮箱登录</div>
    </div>
  </div>
  
</template>

<script>

import {accountExist,checkLogin} from '@/api/verification'
import { mapActions, mapState } from 'vuex';
export default {
  name:"Register",
  data() {
    return {
        currentIndex:-1,
        //眼睛睁开 
        eyeShow:false,
        accountSubmit:{
            userCode:"",
            userPassword:""
        },
        logObject:{
            accountLog:"",
            submitLog:"",
        }
    }
  },
  methods:{
      //input点击事件
    inputClick(e){
        this.currentIndex=e
        if(e==1)this.$refs.account.focus()
        else this.$refs.password.focus()

    },
    //眼睛点击事件
    eyeClick(){
        console.log(2342);
        if(this.eyeShow){
            
        }else{

        }
        this.eyeShow = !this.eyeShow
    },
    //账号失焦事件
    accountBlur(){

        //判断是否输入
        if(!this.accountSubmit.userCode.trim()){
           this.$refs.account.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
           this.logObject.accountLog = "请输入账号"
           return
       }
       //发送请求
        accountExist(this.accountSubmit.userCode)
        .then(res=>{
            let {data} = res

            let [logMsg,styleMsg] = ""
            if(data.code!=200){
                logMsg = data.message
                styleMsg = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            }else{
                logMsg = ""
                styleMsg = ""
                this.logObject.submitLog = ""
                this.$refs.password.parentNode.style = ""
            }
            this.logObject.accountLog = logMsg
            this.$refs.account.parentNode.style = styleMsg

        }).catch(err=>{
            this.logObject.accountLog ="服务器异常!"
            this.$refs.account.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
        })
    },
    //登录操作
    async submit(){

        //判断是否输入
        if(!this.accountSubmit.userCode){
           this.$refs.account.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
           this.logObject.accountLog = "请输入账号"
           this.logObject.submitLog = "需解决上诉错误"
           this.$refs.password.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
           return
       }

        //判断是否解决前面错误
       if(this.logObject.accountLog!=""){
           this.logObject.submitLog = "需解决上诉错误"
           this.$refs.password.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
           return
       }

       let {data} = await checkLogin(this.accountSubmit)
       if(data.code==200){
            localStorage.setItem("new_class_system_token",data.token)
            
           await this.getUserDetailMessage()
           let sn = this.userMessage.userDetail.sn
           if(sn==='学生'){
                this.$router.push("/")
           }else if(sn==='管理员'||sn==='老师'){
                this.$router.push("/backstage_layout/system_home")
           }
           return
       }
        this.logObject.submitLog = data.message

    },
    ...mapActions(['getUserDetailMessage'])


  },
  computed:{
    ...mapState(['userMessage'])
  }

};
</script>
<style scoped>
.main_input>span{
    width:80%;
    display: flex;
    color:rgba(243, 61, 61, 0.836);
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