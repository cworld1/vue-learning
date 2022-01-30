<template>
  <div>
    <h2>学校名称: {{ name }}</h2>
    <h2>学校地址: {{ address | mySlice }}</h2>
    <button @click="test">点我测试一个hello方法</button>
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
  methods: {
    test() {
      this.hello();
    },
  },
};
</script>