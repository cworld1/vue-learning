<template>
  <div>
    <h2>用户中心</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  // 通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      // 判断是否需要鉴权
      if (
        localStorage.getItem("mail") === "cworld" &&
        localStorage.getItem("psw") === "123"
      ) {
        next();
      } else if (from.name === "login") {
        alert("看到当前的登录页面了吗？请登录后再查看用户中心");
      } else {
        router.replace("/login");
      }
    } else {
      next();
    }
  },
  // 通过路由规则，离开该组件时被调用
  /* beforeRouteLeave(to, from, next) {
    console.log(to, from);
    next();
  }, */
};
</script>

<style>
</style>