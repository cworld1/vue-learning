<template>
  <div class="app">
    <h1>{{ msg }}{{ displayName }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" @click.native="show" />

    <hr />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student v-on:clickToRun="getStudentName" /> -->
    <Student @clickToRun="getStudentName" @demo="fc1" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <!-- <Student ref="student" /> -->
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊",
      studentName: "",
    };
  },
  computed: {
    displayName() {
      return this.studentName ? ", " + this.studentName : "";
    },
  },
  methods: {
    getSchoolName(name) {
      console.log("APP收到了学校名:", name);
    },
    getStudentName(name, ...params) {
      console.log("APP收到了学生名:", name, params);
      this.studentName = name;
    },
    fc1() {
      console.log("demo事件被触发了，执行了函数fc1");
    },
    show() {
      alert("123");
    },
  },
  mounted() {
    // 通过$refs获取到该vc对象，然后亲自去写它的事件
    // this.$refs.student.$on("clickToRun", this.getStudentName);
    // 这种方法更灵活。如定时器：
    /* setTimeout(() => {
      this.$refs.student.$on("clickToRun", this.getStudentName);
    }, 3000); */
    // 设定只能执行一次：
    // this.$refs.student.$once("clickToRun", this.getStudentName);
  },
};
</script>

<style scoped>
.app {
  background-color: lightgray;
  padding: 10px 15px;
}
</style>