<template>
  <div>
    <h2>Home组件内容</h2>

    <ul class="nav nav-tabs">
      <router-link tag="li" active-class="active" to="/home/content">
        <a href="">Content</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/home/news">
        <a href="">News</a>
      </router-link>
    </ul>
    <router-view class="panel-body"></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  /* mounted() {
    console.log("Home组件挂载完毕了", this);
  },
  beforeDestroy() {
    console.log("Home组件即将被销毁了");
  }, */
};
</script>

<style>
</style>