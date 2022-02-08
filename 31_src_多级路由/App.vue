<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <Banner />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-2">
        <div class="list-group">
          <!-- 原始html中我们使用a标签实现页面的跳转 -->
          <!-- <a class="list-group-item" href="./about.html">About</a> -->
          <!-- <a class="list-group-item active" href="./home.html">Home</a> -->

          <!-- Vue中借助router-link标签实现路由的切换 -->
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <!-- 指定组件的呈现位置 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import "./assets/css/bootstrap.css";
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: { Banner },
};
</script>

<style>
.row {
  margin-right: 0;
  margin-left: 0;
}
</style>