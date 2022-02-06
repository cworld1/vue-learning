<template>
  <div>
    <h1>人员列表</h1>
    <h3>我在{{ place }}学习{{ subject }}</h3>
    <p style="color: red">上方组件数值为: {{ number }}</p>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addName">添加</button>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { mapState } from "vuex";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["place", "subject", "persons", "number"]),
  },
  methods: {
    addName() {
      if (!this.name.trim()) return;
      const personObj = { id: nanoid(), name: this.name };
      // console.log(personObj);
      this.$store.commit("ADD_PERSON", personObj);
      this.name = "";
    },
  },
};
</script>