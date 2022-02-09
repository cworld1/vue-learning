<template>
  <div>
    <h2>主页</h2>
    <ul class="nav nav-tabs">
      <router-link to="/home/content" custom v-slot="{ href, isActive }">
        <li :class="isActive && 'active'">
          <a :href="href">最新内容</a>
        </li>
      </router-link>
      <router-link to="/home/news" custom v-slot="{ href, isActive }">
        <li :class="isActive && 'active'">
          <a :href="href">更多讯息</a>
        </li>
      </router-link>
    </ul>
    <router-view class="panel-body"></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  /* mounted() {
    this.$router.replace("/home/content");
  }, */
};
</script>

<style>
</style>