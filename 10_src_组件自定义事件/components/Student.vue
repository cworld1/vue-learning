<template>
  <div class="student">
    <h2>学生姓名: {{ name }}</h2>
    <h2>学生年龄: {{ sex }}</h2>
    <button @click="sendStudentName">
      把学生名传给App (组件自定义事件方法)
    </button>
    <button @click="unbind">解绑clickToRun事件</button>
    <button @click="destroy">销毁当前Student的组件实例(vc)</button>

    <h2>当前值为: {{ number }}</h2>
    <button @click="add">点我数值+1</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "张三",
      sex: "男",
      number: 0,
    };
  },
  methods: {
    sendStudentName() {
      // 触发Student组件实例对象身上的clickToRun事件
      this.$emit("clickToRun", this.name, 666, 888, 900);
      // this.$emit("demo");
    },
    unbind() {
      this.$off("clickToRun"); // 适用于解绑一个事件
      // this.$off(["clickToRun", "demo"]); // 适用于解绑多个事件
      // this.$off(); // 适用于解绑所有的自定义事件
    },
    destroy() {
      this.$destroy(); // //销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全都不奏效
    },
    add() {
      console.log("add回调被调用了");
      this.number++;
    },
  },
};
</script>

<style scoped>
.student {
  background-color: pink;
  padding: 10px 15px;
}
</style>