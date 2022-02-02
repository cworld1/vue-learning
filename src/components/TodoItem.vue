<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />
      <!-- @change 那句也可以改用 @click="handleCheck(todo.id)" 代替 -->
      <span>{{ todo.title }}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "TodoItem",
  // 声明接收todo对象
  props: ["todo"],
  methods: {
    // 勾选or取消勾选
    handleCheck(id) {
      // 通知App组件将对应的todo对象的done值取反
      this.$bus.$emit("checkTodo", id);
    },
    // 删除
    handleDelete(id) {
      if (confirm("确定删除吗？")) {
        // 通知App组件删除对应的todo对象
        // this.$bus.$emit("deleteTodo", id);
        pubsub.publish("deleteTodo", id);
      }
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
  transition: 0.3s;
}

li:hover {
  background-color: rgb(247, 247, 247);
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  opacity: 0;
  margin-top: 3px;
  transition: 0.3s;
}

li:hover button {
  opacity: 1;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>