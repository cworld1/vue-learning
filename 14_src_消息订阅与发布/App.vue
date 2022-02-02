<template>
  <div class="app">
    <h1>{{ msg }}</h1>
    <School />
    <hr />
    <Student />
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
    };
  },
};
</script>

<style scoped>
.app {
  background-color: lightgray;
  padding: 10px 15px;
}
</style>