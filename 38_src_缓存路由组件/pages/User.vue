<template>
  <div>
    <h2>用户中心</h2>
    <div class="alert alert-danger" role="alert">
      <span class="glyphicon glyphicon-exclamation-sign"></span>
      请先登录后查看详情
    </div>

    <div class="well col-xs-offset-2 col-xs-8">
      <h4>登录</h4>
      <div class="input-group">
        <span class="input-group-addon">
          <span class="glyphicon glyphicon-envelope"></span>
        </span>
        <input type="text" class="form-control" placeholder="Mail" />
      </div>

      <div class="input-group">
        <span class="input-group-addon">
          <span class="glyphicon glyphicon-sunglasses"></span>
        </span>
        <input type="password" class="form-control" placeholder="Password" />
      </div>
      <button class="btn btn-primary">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "User",
  beforeDestroy() {
    console.log("User即将被销毁了");
  },
};
</script>

<style scoped>
.input-group {
  margin-bottom: 18px;
}
</style>