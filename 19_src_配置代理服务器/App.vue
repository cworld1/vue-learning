<template>
  <div>
    <h1>配置代理</h1>
    <button @click="getStudents">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudents() {
      axios.get("http://localhost:8080/studentApi/students").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/carApi/cars").then(
        (response) => {
          console.log("请求成功了", response.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>