<template>
<div class="container">
<div class="main">
  <!-- 整个注册盒子 -->
  <div id="loginbox" class="box">
    <!-- 左侧的注册盒子 -->
    <div class="box-content bg" id="loginbox-left">
      <div class="welcome">欢迎使用用户注册与登录系统</div>
    </div>

    <!-- 右侧的注册盒子 -->
    <div class="box-content" id="loginbox-right">
      <h2 class="title">用户登录</h2>
      <div class="inputbox" id="userbox">
        <span class="iconfont">&#xe68a;</span> 
        <input class="user" id="user"  v-model="name" placeholder="用户名">
      </div>
      <div class="inputbox" id="pwdbox">
        <span class="iconfont">&#xe6db;</span>
        <input class="pwd" id="password" v-model="pwd" type="password" placeholder="密码">
      </div>
      <div class="operate-box">
        <a href="/Register" class="link">前往注册</a>
        <button class="btn" type="primary" id="login_btn" @click="login">登录</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<style scoped>
</style>

<script>
export default {
  name: "Login",
  
  data:function (){
    return{
      name:'',
      pwd:'',
      user_list:[
      { 
        id:'1',
        username:'admin',
        password:'123'
      },
      ]
     
    }
  },
    
  methods:{
   
    register(){  this.$router.push("Register")},

    getParams: function () {
            // 取到路由带过来的参数
            var routerParams = this.$route.query.list;
            this.user_list = routerParams;
    },
    login(){
        var flag=0;
        //如果是有参数传递
        if(!this.$route.query.list){
        this.user_list.forEach((item) => {
         if(item.username==this.name){
           if(item.password==this.pwd){
            flag=1;//用户存在，并且密码正确
          }
         }
        }
      )
      if(flag==1){
        //可以跳转到主页
        this.$router.push("Homepage");
      }
      else{
        alert("用户名或密码错误，请重新输入");
      }
      }
      else{
        // 取到路由带过来的参数
        var routerParams = this.$route.query.list;
        this.user_list = routerParams;
        this.user_list.forEach((item) => {
         if(item.username==this.name){
           if(item.password==this.pwd){
            flag=1;//用户存在，并且密码正确
           }
         }
        }
      )
      if(flag==1){
        //可以跳转到主页
        // this.$router.push("Homepage");
        this.$router.push({
            path: 'Homepage',
          }
        )
      }
      else{
        alert("用户名或密码错误，请重新输入");}
      }
    },

  },
   
   
}
</script>
