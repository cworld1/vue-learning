<template>

<div class="container">
<div class="main">
    <!-- 整个注册盒子 -->
    <div class="box">
        <p class="text">您好，欢迎回来！</p>
        <button class="btn" id="logout_btn" @click="exit_login">退出登录</button>
        <div class="box-content bg"></div>
    </div>
</div>
</div>

</template>

<script>
export default {
    name: "Homepageinfo",
    methods:{
        exit_login(){
            alert("您已退出登录")
            this.$router.push({path: '/'})
        }
    }
}
</script>

<style scoped>
.box {
    display: block;
    text-align: center;
}
#logout_btn {
    float: unset;
}
.box-content.bg {
    width: 840px;
    height: 380px;
    margin: 20px auto;
    border-radius: 5px;
    background-size: auto;
    background-repeat: repeat-x;
    background-position:center;
}
.box-content.bg:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 20px #00000026;
}
</style>