<template>
  <div class="school">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "西南大学",
      address: "重庆市北碚区",
    };
  },
  mounted() {
    this.$bus.$on("clickToRun", (data) => {
      console.log("我是School组件，收到了数据:", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("clickToRun");
  },
};
</script>

<style scoped>
.school {
  background-color: skyblue;
  padding: 10px 15px;
}
</style>