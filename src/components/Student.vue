<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生年龄: {{ sex }}</h2>
    <h2>学生年龄: {{ myAge }}</h2>
    <button @click="updateAge">尝试年龄+1</button>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      msg: "我是一个西南大学的学生",
      myAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.myAge++;
    },
  },
  // 简单声明接收
  // props: ["name", "sex", "age"],

  // 接收的同时对数据进行类型限制
  /* props: {
    name: String,
    sex: String,
    age: Number,
  }, */

  // 接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String, // 类型是字符串
      required: true, // 数据传入是必要的
    },
    sex: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 99, // 默认值为99
    },
  },
};
</script>