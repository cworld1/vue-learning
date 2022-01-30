<template>
  <div>
    <h1 class="title">你好啊</h1>
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
};
</script>

<style scoped>
.title {
  color: brown;
}
</style> 