<template>
  <div>
    <p><button>原生的按钮</button></p>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <p><input type="text" placeholder="原生的输入框" /></p>
    <el-input
      placeholder="请输入内容"
      v-model="input"
      clearable
      style="width: 200px !important"
    >
    </el-input>

    <br />
    <br />
    <div class="block">
      <el-date-picker v-model="value1" type="date" placeholder="选择日期">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      input: "",
      value1: "",
    };
  },
};
</script>

<style>
</style>