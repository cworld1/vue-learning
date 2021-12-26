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
      <h2 class="title">用户注册</h2>
      <div class="inputbox" id="userbox">
        <span class="iconfont">&#xe68a;</span> 
        <input class="user" id="user"  v-model="name" placeholder="用户名">
      </div>
      <div class="inputbox" id="pwdbox">
        <span class="iconfont">&#xe6db;</span>
        <input class="pwd" id="password" v-model="pwd" type="password" placeholder="密码">
      </div>
      <div class="inputbox" id="pwdbox">
        <span class="iconfont">&#xe6db;</span>
        <input class="pwd" id="re_password"  v-model="repwd" type="password" placeholder="确认密码">
      </div>
      <div class="operate-box">
        <a href="#" class="link">隐私协议</a>
        <button class="btn" type="primary" id="register_btn" @click="register">注册</button>
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
  name: "Register",
  
  data:function (){
    return{
      name:'',
      pwd:'',
      repwd:'',
      user_list:[
      { 
        username:'admin',
        password:'123'
      },

      ]
    }
  },
  methods:{
    
    register(){  
      var flag=1;
      //如果用户名已存在，则需要换一个用户名
      this.user_list.forEach((item) => {
         if(item.username==this.name){
           alert('用户已存在,请换一个用户名');
           flag=0;
         }
        }
      )
      //如果用户名不存在，则继续判断
      if(flag){
        //判断两次输入的密码是否一致，如果密码不一致，则需要重新输入
        if(this.pwd!=this.repwd){
        alert('两次输入的密码不一致,请重新输入');
        }
        //如果密码也一直，则存到用户列表里面
        else {
          var item ={};
          //获取到用户名
          item.username=this.name;
          //获取到密码
          item.password=this.pwd;
          //存储到用户列表
          this.user_list.push(item);
          alert('注册成功');
        //    this.user_list.forEach((item) => {
        //       console.log( item.username);
        // })
        
          this.$router.push({
            path: '/',
            query: {
              list: this.user_list,}
          })
        }
      }
      
    }
  }
}
</script>
