<template>
  <div>
    <h2 @click="showName">学生姓名: {{ name }}</h2>
    <h2>学生年龄: {{ sex }}</h2>
  </div>
</template>

<script>
// import { m, m2 } from "../mixin"; // 局部引入

export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      x: 666,
    };
  },
  // mixins: [m, m2],
};
</script>