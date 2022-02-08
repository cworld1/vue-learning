<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-1 col-xs-10">
        <Banner />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-offset-1 col-xs-2">
        <div class="list-group">
          <!-- Vue中借助router-link标签实现路由的切换 -->
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/home"
            >主页</router-link
          >
          <router-link
            replace
            class="list-group-item"
            active-class="active"
            to="/about"
            >关于</router-link
          >
        </div>
      </div>
      <div class="col-xs-8">
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