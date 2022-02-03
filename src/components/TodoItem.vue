<template>
  <transition name="todo">
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <!-- @change 那句也可以改用 @click="handleCheck(todo.id)" 代替 -->
        <span :class="doneTitle" v-show="!todo.isEdit">{{ todo.title }}</span>
        <input
          type="text"
          class="edit"
          v-show="todo.isEdit"
          :value="todo.title"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="handleDelete(todo.id)">
        删除
      </button>
      <button
        class="btn btn-normal"
        v-show="!todo.isEdit"
        @click="handleEdit(todo)"
      >
        编辑
      </button>
    </li>
  </transition>
</template>

<script>
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
        this.$bus.$emit("deleteTodo", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      if (todo.hasOwnProperty("isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    // 失去焦点回调（真正执行修改逻辑）
    handleBlur(todo, e) {
      todo.isEdit = false;
      const title = e.target.value;
      if (!title.trim()) return alert("输入不能为空!");
      this.$bus.$emit("updateTodo", todo.id, title);
    },
  },
  computed: {
    doneTitle() {
      return this.todo.done ? "doneTitle" : "";
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
  border-bottom: 1px solid #f1f1f1;
  transition: 0.3s;
}

li:hover {
  background-color: #f7f7f7;
}

li label {
  float: left;
  cursor: pointer;
}

li label span.doneTitle {
  color: gray;
  font-style: italic;
}

li label input[type="checkbox"] {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li label input.edit {
  border: 1px solid transparent;
  background-color: transparent;
  padding: 5px 5px;
  border-radius: 4px;
}
li label input.edit:focus {
  border-color: #b9b9b9cc;
  outline: none;
}

li button {
  float: right;
  opacity: 0;
  margin-top: 3px;
  margin-left: 8px;
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

.todo-enter-active,
.todo-leave-active {
  transition: 0.3s;
}

/* 进入的起点，离开的终点 */
.todo-enter,
.todo-leave-to {
  transform: translateX(20%);
  opacity: 0;
}

/* 进入的终点，离开的起点 */
.todo-enter-to,
.todo-leave {
  transform: translateX(0);
  opacity: 1;
}
</style>