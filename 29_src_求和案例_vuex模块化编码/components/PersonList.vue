<template>
  <div>
    <h1>人员列表</h1>
    <p>列表中第一项是: {{ firstPersonName }}</p>
    <h3>我在{{ place }}学习{{ subject }}</h3>
    <p style="color: red">上方组件数值为: {{ number }}</p>

    <p>
      <input type="text" placeholder="请输入名字" v-model="name" />
      <button @click="addName">添加</button>
    </p>
    <p>
      <button @click="addPersonVerifyWang">验证姓为王的才添加</button>
      <button @click="addPersonServer">从服务器索取 (诗词)</button>
    </p>
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "PersonList",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    persons() {
      return this.$store.state.personList.persons;
    },
    number() {
      return this.$store.state.counter.number;
    },
    place() {
      return this.$store.state.place;
    },
    subject() {
      return this.$store.state.subject;
    },
    firstPersonName() {
      return this.$store.getters["personList/firstPersonName"];
    },
  },
  methods: {
    addName() {
      if (!this.name.trim()) return;
      const personObj = { id: nanoid(), name: this.name };
      // console.log(personObj);
      this.$store.commit("personList/ADD_PERSON", personObj);
      this.name = "";
    },
    addPersonVerifyWang() {
      if (!this.name.trim()) return;
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personList/addPersonVerify", [personObj, "王"]);
      this.name = "";
    },
    addPersonServer() {
      this.$store.dispatch("personList/addPersonServer");
    },
  },
};
</script>