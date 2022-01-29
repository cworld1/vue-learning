<template>
  <div>
    <h2 @click="showName">学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
  </div>
</template>

<script>
// import { m, m2 } from "../mixin"; // 局部引入

export default {
  name: "School",
  data() {
    return {
      name: "西南大学",
      address: "重庆",
    };
  },
  // mixins: [m, m2],
};
</script>