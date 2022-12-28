<template>
  <div>
    <div class="top">Register</div>
    <div class="main_input">
        <div @click="inputClick(1)" :class="{border_active:currentIndex==1}">
            <svg t="1671075323148" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5792" width="18" height="18"><path d="M511.333 63.333c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z m0 832c-51.868 0-102.15-10.144-149.451-30.15-36.011-15.231-69.123-35.67-98.812-60.897 12.177-31.985 42.226-63.875 84.223-88.903C396.189 686.243 456.222 669.53 512 669.53c55.631 0 115.416 16.658 164.026 45.703 41.762 24.953 71.689 56.812 83.863 88.804-29.764 25.342-62.976 45.865-99.106 61.146-47.299 20.006-97.582 30.15-149.45 30.15z m296.268-139.658c-20.493-35.937-54.353-68.855-98.747-95.381C649.75 624.979 579.839 605.53 512 605.53c-67.964 0-138.094 19.488-197.471 54.875-44.644 26.606-78.656 59.594-99.195 95.586-23.835-28.755-43.234-60.652-57.85-95.208-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.3-20.006 97.583-30.15 149.451-30.15 51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-14.563 34.429-33.869 66.22-57.583 94.892z" fill="#8a8a8a" p-id="5793"></path><path d="M512 220.223c-88.224 0-160 71.776-160 160s71.776 160 160 160c88.225 0 160-71.775 160-160s-71.775-160-160-160z m0 256c-52.935 0-96-43.065-96-96s43.065-96 96-96 96 43.065 96 96-43.065 96-96 96z" fill="#8a8a8a" p-id="5794"></path></svg>
            <input type="text" placeholder="请输入账号(学号)" v-model="submitFormData.userCode" ref="account" >
        </div>
        <span>{{logObject.accountLog}}</span>
        <div  @click="inputClick(2)"  :class="{border_active:currentIndex==2}" >
            <svg t="1671074896767" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3914" width="18" height="18"><path d="M511.970836 499.271094c-67.470671 0-124.724653 53.072753-130.051985 119.469975-0.358157 1.096984-0.775666 2.648316-0.775666 4.466732l0 31.441083c0 7.708566 6.224772 13.96199 13.876032 13.96199l31.203676 0c7.65126 0 13.931291-6.252401 13.931291-13.96199l-0.116657-9.052167c-0.535189-2.594081-0.35918-5.598508-0.11768-8.724709 0.11768-1.935072 0.234337-3.840468 0.234337-5.808286 0-39.924291 32.185027-72.467475 71.816652-72.467475 39.627533 0 71.870888 32.544207 71.870888 72.467475 0 31.771611-20.661575 59.697637-50.166563 69.136613l0-45.552475c0-7.68503-6.251378-13.96506-13.902638-13.96506l-31.174 0c-7.65433 0-13.906731 6.281053-13.906731 13.96506l0 94.259804c0 7.68503 6.252401 13.96506 13.906731 13.96506l31.174 0c1.279133 0 2.52859-0.208754 3.839445-0.596588 66.899666-5.985318 119.213126-63.475683 119.241778-131.214461C642.853745 558.38647 584.141552 499.271094 511.970836 499.271094" fill="#8a8a8a" p-id="3915"></path><path d="M806.553061 336.037383l-76.131935-0.090051 0-55.245232c0-104.908328-83.48439-190.268438-186.147584-190.268438L508.27977 90.433662c-101.113909 0-184.302563 83.84357-185.969529 187.18624l-0.177032 1.533936c0 1.057075 0.118704 1.696642 0 1.548262l0.357134 6.104021 0.952698 0c3.393283 12.400425 14.736633 21.497617 27.868721 21.497617 13.219069 0 24.473391-9.097192 27.836999-21.497617l0.983397 0 0.23843-5.819542c3.333932-74.213235 59.962673-132.331911 128.97956-132.331911l33.853016 0c71.311139 0 129.308041 62.390979 129.308041 139.030473l0 48.352241L375.188566 336.037383l0.089028-0.090051-157.800979 0.090051c-48.680722 0-88.307232 40.46255-88.307232 90.124624l0 417.338037c0 49.665143 39.627533 90.066295 88.307232 90.066295L806.553061 933.566338c48.708352 0 88.277556-40.400129 88.277556-90.066295L894.830617 426.162006C894.829594 376.499933 855.260389 336.037383 806.553061 336.037383M839.364351 430.584736l0 408.480298c0 21.019733-16.645099 38.081317-37.128619 38.081317L221.764268 877.146351c-20.484543 0-37.157271-17.061584-37.157271-38.081317L184.606996 430.584736c0-20.976754 16.672728-38.081317 37.157271-38.081317l580.471464 0C822.719252 392.503419 839.364351 409.609005 839.364351 430.584736" fill="#8a8a8a" p-id="3916"></path></svg>
            <input :type="eyeShow?'text':'password'" @focus="currentIndex=2" placeholder="请输入密码"  style="width:80%;" v-model="submitFormData.userPassword"  class="account_password"  ref="password">
            <svg @click="eyeClick" v-show="eyeShow" t="1671076018058" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;" p-id="8535" width="18" height="18"><path d="M518.826667 763.733333c-98.190222 0-177.777778-79.587556-177.777778-177.777777s79.587556-177.777778 177.777778-177.777778 177.777778 79.587556 177.777777 177.777778-79.587556 177.777778-177.777777 177.777777z m0-99.555555a78.222222 78.222222 0 1 0 0-156.444445 78.222222 78.222222 0 0 0 0 156.444445z" fill="#8a8a8a" p-id="8536"></path><path d="M522.467556 814.520889c124.529778 0 249.287111-73.244444 374.357333-224.199111-109.155556-151.054222-233.244444-224.241778-374.357333-224.241778-141.255111 0-269.909333 73.329778-387.569778 224.284444 133.575111 150.798222 262.869333 224.156444 387.569778 224.156445z m373.063111-380.344889c36.750222 37.432889 71.68 81.038222 104.803555 130.744889l19.911111 29.880889-22.087111 28.330666C848.284444 815.317333 689.706667 914.062222 522.467556 914.062222c-166.684444 0-329.742222-98.176-489.571556-289.664L8.149333 594.773333l22.570667-31.331555c44.743111-62.122667 91.818667-114.673778 141.169778-157.482667l-84.337778-89.827555a35.555556 35.555556 0 1 1 51.84-48.668445l88.789333 94.577778c51.342222-35.726222 104.96-61.525333 160.768-77.226667l-43.079111-101.674666a35.555556 35.555556 0 1 1 65.479111-27.733334l48.739556 115.000889a499.527111 499.527111 0 0 1 62.378667-3.868444c36.508444 0 72.007111 3.882667 106.481777 11.619555l56.945778-125.297778a35.555556 35.555556 0 0 1 64.739556 29.44l-53.105778 116.821334c51.043556 19.911111 99.612444 48.938667 145.621333 86.897778l103.936-103.950223a35.555556 35.555556 0 0 1 50.289778 50.289778l-101.831111 101.831111z" fill="#8a8a8a" p-id="8537"></path></svg>
            <svg @click="eyeClick" v-show="!eyeShow" t="1671076042893" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" style="cursor: pointer;" p-id="9636" width="18" height="18"><path d="M469.333333 681.386667c-36.053333-2.432-71.253333-8.533333-104.96-17.92l-69.802666 149.674666a42.368 42.368 0 0 1-56.533334 20.266667 42.666667 42.666667 0 0 1-20.821333-56.32l66.986667-143.658667a451.712 451.712 0 0 1-148.906667-112.682666 388.693333 388.693333 0 0 1-70.570667-119.338667 42.666667 42.666667 0 1 1 80.128-29.354667 303.445333 303.445333 0 0 0 55.210667 93.098667C270.634667 547.413333 383.018667 597.333333 505.728 597.333333c122.752 0 235.136-49.962667 305.706667-132.181333a303.445333 303.445333 0 0 0 55.210666-93.098667 42.666667 42.666667 0 0 1 80.128 29.354667 388.693333 388.693333 0 0 1-70.570666 119.338667 423.68 423.68 0 0 1-18.773334 20.48l104.362667 104.362666a42.666667 42.666667 0 0 1-0.298667 60.032 42.368 42.368 0 0 1-60.032 0.298667l-109.653333-109.653333c-20.48 14.08-42.24 26.581333-65.024 37.418666l66.901333 143.36a42.666667 42.666667 0 0 1-20.821333 56.362667 42.368 42.368 0 0 1-56.533333-20.266667l-69.717334-149.546666a520.533333 520.533333 0 0 1-91.946666 16.810666v130.645334A42.666667 42.666667 0 0 1 512 853.333333c-23.722667 0-42.666667-18.944-42.666667-42.24v-129.706666z" fill="#8a8a8a" p-id="9637"></path><path d="M176.128 524.373333a42.368 42.368 0 0 1 60.032 0.256 42.666667 42.666667 0 0 1 0.298667 60.074667l-121.216 121.216a42.368 42.368 0 0 1-60.074667-0.298667 42.666667 42.666667 0 0 1-0.298667-60.032l121.258667-121.258666z" fill="#8a8a8a" p-id="9638"></path></svg>
        </div>
        <span>{{logObject.passwordLog}}</span>
        
        <!-- <div @focus="inputClick(4)" :class="{border_active:currentIndex==4}" >
            <svg t="1671085135372" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11004" width="18" height="18"><path d="M872.6 581.1L566.4 470.7c-11.9-4.3-25 1.9-29.3 13.7-1.8 5-1.8 10.5 0 15.5l110.4 306.2c6.6 18.3 31.7 20.5 41.3 3.6l41.6-72.6c6.3-10.9 20.3-14.7 31.2-8.4 1.7 1 3.3 2.2 4.7 3.6L900 865.9c8.9 8.9 23.4 8.9 32.3 0 8.9-8.9 8.9-23.4 0-32.3L798.8 700.1c-8.9-8.9-8.9-23.4 0-32.3 1.4-1.4 3-2.7 4.8-3.7l72.6-41.6c16.9-9.7 14.7-34.7-3.6-41.4z" p-id="11005" fill="#8a8a8a"></path><path d="M908.8 0H115.2C72.7 0 38.1 34.6 38.1 77.1v869.8c0 42.5 34.6 77.1 77.1 77.1h444.9c14.5 0 26.3-11.8 26.3-26.3 0-16.2-13.2-29.5-29.5-29.5H112.2c-10 0-18.2-8.2-18.2-18.2V74.1c0-10 8.2-18.2 18.2-18.2h799.7c10 0 18.2 8.2 18.2 18.2v363.6c0 16 13 29 29 29 14.8 0 26.8-12 26.8-26.8V77.1c0-42.5-34.6-77.1-77.1-77.1z" p-id="11006" fill="#8a8a8a"></path></svg>
            <select class="option_sn">
                <option value="请选择">请选择</option>
                <option value="请选择">请选择</option>
                <option value="请选择">1</option>
                <option value="请选择">请选择</option>
                <option value="请选择">请选择</option>
            </select>
        </div>
        <span></span> -->
        <div @click="inputClick(3)" :class="{border_active:currentIndex==3}" >
            <svg t="1671172224366" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2635" width="18" height="18"><path d="M1002.602667 318.912c-11.818667 0-21.354667 9.578667-21.354667 21.376l0 515.114667c0 69.376-56.448 125.824-125.824 125.824L168.554667 981.226667c-69.376 0-125.824-56.448-125.824-125.824L42.730667 168.533333c0-69.376 56.448-125.824 125.824-125.824L683.733333 42.709333c11.818667 0 21.354667-9.557333 21.354667-21.354667C705.088 9.557333 695.552 0 683.733333 0L168.554667 0C75.605333 0 0 75.605333 0 168.554667L0 855.466667C0 948.373333 75.605333 1024 168.554667 1024L855.466667 1024c92.906667 0 168.533333-75.626667 168.512-168.533333L1023.978667 340.288C1023.978667 328.490667 1014.421333 318.912 1002.602667 318.912z" p-id="2636" fill="#8a8a8a"></path><path d="M274.112 597.994667c-0.64 0.917333-1.514667 1.578667-2.048 2.624l-122.666667 245.290667c-4.096 8.213333-2.474667 18.133333 4.032 24.661333 4.074667 4.053333 9.557333 6.250667 15.125333 6.250667 3.242667 0 6.528-0.746667 9.557333-2.261333l245.290667-122.602667c1.216-0.597333 2.048-1.621333 3.093333-2.410667 0.789333-0.576 1.728-0.896 2.453333-1.621333L894.933333 281.898667c0.042667-0.042667 0.106667-0.042667 0.149333-0.085333s0.064-0.106667 0.106667-0.149333l70.485333-70.485333c17.962667-17.941333 27.882667-41.792 27.882667-67.157333s-9.92-49.194667-27.882667-67.157333l-18.581333-18.56c-17.92-17.962667-41.749333-27.818667-67.114667-27.818667s-49.173333 9.856-67.114667 27.818667l-536.746667 536.746667C275.221333 595.904 274.794667 597.034667 274.112 597.994667zM297.045333 646.208l80.768 80.746667-161.514667 80.746667L297.045333 646.208zM843.050667 88.533333c19.754667-19.733333 54.08-19.776 73.834667 0l18.581333 18.538667c9.877333 9.856 15.338667 22.997333 15.338667 36.928 0 13.952-5.461333 27.072-15.338667 36.949333l-55.509333 55.509333-92.416-92.437333L843.050667 88.533333zM757.333333 174.250667l92.416 92.437333L413.866667 702.592 321.429333 610.133333 757.333333 174.250667z" p-id="2637" fill="#8a8a8a"></path></svg>
            <input type="text" @focus="currentIndex=3" placeholder="请输入姓名"  v-model="submitFormData.userName"  ref="userName" style="flex-grow:1">
        </div>
        <span>{{logObject.userNameLog}}</span>
        <div  @click="inputClick(4)" :class="{border_active:currentIndex==4}">
            <svg t="1671099096712" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13185" width="18" height="18"><path d="M838.954667 234.666667H170.666667c-3.626667 0-7.168 0.448-10.56 1.322666l323.690666 323.669334a21.333333 21.333333 0 0 0 30.165334 0L838.954667 234.666667z m46.144 14.186666l-260.693334 260.693334 262.933334 262.912c5.44-7.168 8.661333-16.106667 8.661333-25.792V277.333333c0-10.944-4.117333-20.906667-10.88-28.48zM843.861333 789.333333l-249.6-249.621333-50.133333 50.133333a64 64 0 0 1-90.517333 0l-50.112-50.133333L156.373333 786.88c4.48 1.578667 9.28 2.453333 14.314667 2.453333h673.194667zM128.661333 754.218667L373.333333 509.525333 129.578667 265.813333A42.709333 42.709333 0 0 0 128 277.333333v469.333334c0 2.56 0.213333 5.098667 0.661333 7.552zM170.666667 192h682.666666a85.333333 85.333333 0 0 1 85.333334 85.333333v469.333334a85.333333 85.333333 0 0 1-85.333334 85.333333H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333333V277.333333a85.333333 85.333333 0 0 1 85.333334-85.333333z" fill="#8a8a8a" p-id="13186"></path></svg>
            <input type="text" @blur="emailBlur" @focus="currentIndex=4" v-model="submitFormData.email" placeholder="请输入邮箱" ref="email" style="flex-grow:1">
        </div>
        <span>{{logObject.emailLog}}</span>
        <div  @click="inputClick(5)" :class="{border_active:currentIndex==5}" >
            <svg t="1671085559224" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12067" width="18" height="18"><path d="M943.1 172c-2.4-0.2-245.1-25.3-413.8-147.8-5.1-3.7-11-5.6-17.3-5.6-6.2 0-12.2 1.9-17.3 5.6C326.9 146 83.3 171.8 80.9 172c-15.2 1.4-26.6 14.1-26.6 29.3 0 6.7 0.6 165.8 54.8 344.4 32.1 105.8 76.4 196.4 131.9 269.2 70.3 92.3 158.5 156 262 189.2 2.9 0.9 5.9 1.4 9 1.4s6.1-0.5 8.9-1.4c103.6-33.2 191.7-96.8 262-189.2 55.4-72.7 99.8-163.2 131.9-269.2 54.1-178.6 54.8-337.7 54.8-344.4C969.7 186.1 958.3 173.5 943.1 172zM910.1 227.2l-0.1 1.6c-2.9 58.1-13.4 174.4-51.4 299.9-66.7 220.1-183.1 360.1-346 416.1L512 945l-0.6-0.2C349 888.9 232.7 749.4 165.8 530.1c-39.8-130.5-49.4-254.2-51.8-301.4l-0.1-1.6 1.5-0.2c70.6-10.3 250.5-44.8 395.5-142.4l0.9-0.7 1 0.7C658 182.1 837.9 216.6 908.5 227L910.1 227.2z" p-id="12068" fill="#8a8a8a"></path><path d="M641.8 351 467 580.3l-89-76.1c-5.3-4.5-12.1-7-19.1-7-8.6 0-16.8 3.7-22.4 10.3-10.5 12.3-9.1 31 3.3 41.5l112.7 96.4c5.2 4.4 12.4 7 19.6 7 0.9 0 1.8 0 2.7-0.1 8-0.8 15.4-5 20.3-11.4l193.7-254c4.8-6.3 6.8-14 5.7-21.8-1-7.8-5.1-14.7-11.3-19.5C670.1 335.6 651.6 338.1 641.8 351z" p-id="12069" fill="#8a8a8a"></path></svg>
            <input type = "text" @focus="currentIndex=5" placeholder="请输入验证码"  v-model="submitFormData.code" class="account_password"  ref="code">
            <p class="v_code" >
                <span style="cursor: pointer;" :class="{active_code:reciprocal>=0}" @click.stop="sendCode">{{reciprocal>=0?reciprocal:"发送验证码"}}</span>
            </p>
        </div>
        <span>{{logObject.submitLog}}</span>

        <div class="submit_btn" @click="submit">注册</div>
    </div>
    <div class="footer">
        <div @click="$router.push('/verification_layout/login')">返回登录</div>
        <div @click="$router.push('/verification_layout/email/login')">邮箱登录</div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapMutations, mapState } from 'vuex';
import {emailExist,emailRegister,sendEmailCode} from "@/api/verification"
export default {
  name:"Register",
  data() {
    return {
         //眼睛睁开 
         eyeShow:false,
         logObject:{
            emailLog:"",
            submitLog:"",
            userNameLog:"",
            accountLog:"",
            passwordLog:"",
         },
        currentIndex:-1,
        submitFormData:{
            "userCode":"",
            "userPassword":"",
            "sn":"学生",
            "userName":"",
            "email":"",
            "code":"",
        }
      
    }
  },
  mixins:[],
  methods:{
    inputClick(e){
        this.currentIndex=e
        switch(e){
            case 1:
                this.$refs.account.focus()
                break;
            case 2:
                this.$refs.password.focus()
                break;
            case 3:
                this.$refs.userName.focus()
                break;
            case 4:
                this.$refs.email.focus()
                break;
            case 5:
                this.$refs.code.focus()
                break;
        }

    },
    //眼睛点击事件
    eyeClick(){
        console.log(2342);
        if(this.eyeShow){
            
        }else{

        }
        this.eyeShow = !this.eyeShow
    },
    sendCode(){
        //判断是否已点击发送
        if(this.reciprocal!=-1)return

        //判断是否未输入邮箱
        if(this.submitFormData.email.trim()==""){
            this.$refs.email.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.emailLog = "邮箱不能为空!"
            return
        }

        //判断是否解决所有错误
        if(this.logObject.emailLog!=""){
            this.$refs.code.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.submitLog = "需解决上述问题"
            return
        }

        this.setAssigment(60)

        sendEmailCode(this.submitFormData.email).then(({data})=>{
            //当发送验证码不成功时
            if(data.code!=200){
                this.$refs.email.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
                this.logObject.emailLog = data.message
                return
            }
            //恢复默认样式
            this.$refs.email.parentNode.style = ""
            this.logObject.emailLog = ""

        }).catch(err=>{
            this.$refs.code.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.emailLog = "服务器异常"
        })
    },
    ...mapActions(['setAssigment']),
    async submit(){

        //判断账号
        if(String(this.submitFormData.userCode).length<12){
            this.$refs.account.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.accountLog = "账号需要12位及以上,建议使用学号!"
            return
        }

        this.$refs.account.parentNode.style = ""
        this.logObject.accountLog = ""

        //判断密码
        if(String(this.submitFormData.userPassword).length<6){
            this.$refs.password.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.passwordLog = "密码需要6位及以上!"
            return
        }
        this.$refs.password.parentNode.style = ""
        this.logObject.passwordLog = ""

        //判断是否输入姓名
        if(this.submitFormData.userName.trim()==""){
            this.$refs.userName.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.userNameLog = "请输入姓名!"
            return
        }
        this.$refs.userName.parentNode.style = ""
            this.logObject.userNameLog = ""

        let {data} = await emailRegister(this.submitFormData)

        if(data.code==200){
            this.$refs.code.parentNode.style = ""
            this.logObject.submitLog = ""
            //注册成功
            this.$message({
                message: '注册成功！',
                type: 'success'
            });

            //清空控件的内容
            Object.keys(this.submitFormData).forEach(item=>{
            this.submitFormData[item] = ""
            })
            
        }else{
            this.$refs.code.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.submitLog = data.message
        }
    },
    //email控件失焦事件
    emailBlur(){

        if(this.submitFormData.email.trim()==""){
            this.$refs.email.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.emailLog = "邮箱不能为空!"
            return
        }

        let reg = new RegExp(/.*@.{2,3}\.com/)

        let formVertity = reg.test(this.submitFormData.email)

        //判断邮箱是否合法
        if(!formVertity){
            this.$refs.email.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
            this.logObject.emailLog = "邮箱格式不合法!"
            return
        }
        //判断该邮箱是否与账号进行绑定
        emailExist(this.submitFormData.email).then(res=>{
            let{data} = res
            if(data.code==200){
                this.$refs.email.parentNode.style = "border:2px solid rgba(243, 61, 61, 0.836) !important;"
                this.logObject.emailLog = "邮箱已与账号绑定!"
            }else{
                this.$refs.email.parentNode.style = ""
                this.logObject.emailLog = ""
                this.$refs.code.parentNode.style = ""
                this.logObject.submitLog = ""
            }
        })
        
    },
    
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
.option_sn{
    flex-grow: 1;
    margin-left: 5px;
    outline-color: transparent;
    border:none;
    color:gray;
}
.main_input>span{
    width:80%;
    display: flex;
    color:red;
    height:30px;
    align-items: center;
    font-size: 12px;
    padding:0 10px;
    box-sizing: border-box;
}
.footer>div{
    cursor: pointer;
}
.footer{
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
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
    padding: 10px 0;
    display: flex;
    align-items: flex-end;

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
    height:45px;
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