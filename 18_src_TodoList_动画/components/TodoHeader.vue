<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="content"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "TodoHeader",
  data() {
    return {
      content: "",
    };
  },
  methods: {
    add() {
      // 校验数据
      if (!this.content.trim()) return alert("输入不能为空");
      // 将用户的输入包装成一个todo对象
      const todoObj = { id: nanoid(), title: this.content, done: false };
      // 通知App组件去添加一个todo对象
      this.$emit("addTodo", todoObj);
      // 清空输入
      this.content = "";
    },
  },
};
</script>

<style scoped>
/*header*/
.todo-header input {
  transition: 0.3s;
  width: 552px;
  height: 28px;
  font-size: 14px;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 4px 7px;
  background-color: #f3f3f3;
}

.todo-header input:focus {
  outline: none;
  border-color: #b9b9b9cc;
}
</style>