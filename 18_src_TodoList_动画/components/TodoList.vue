<template>
  <ul class="todo-main">
    <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  components: { TodoItem },
  // 声明接收App传递过来的数据
  props: ["todos"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  padding: 0px;
  background-color: #fdfdfd;
  overflow: hidden;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #f1f1f1;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>