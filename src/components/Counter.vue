<template>
  <div>
    <h1>当前数值为: {{ number }}</h1>
    <p>其数值放大10倍后: {{ magnifiedNum }}</p>
    <h3>我在{{ place }}学习{{ subject }}</h3>
    <p style="color: red">下方组件总人数是: {{ persons.length }}</p>
    <p>
      <select v-model.number="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increament(select)">+</button>
      <button @click="decreament(select)">-</button>
    </p>
    <p>
      <button @click="increamentOdd(select)">当前数字为奇数才加</button>
      <button @click="increamentWait(select)">等半秒才加</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Counter",
  data() {
    return {
      select: 1,
    };
  },
  computed: {
    // 借助mapState/mapGetters生成计算属性，从State/Getters中读取数据。（数组写法）
    ...mapState("counter", ["number"]),
    ...mapState("personList", ["persons"]),
    ...mapState(["place", "subject"]),
    ...mapGetters("counter", ["magnifiedNum"]),
  },
  methods: {
    // 借助mapMutations/mapActions生成计算属性，方法中会调用commit/dispatch去联系Mutations/Actions。（对象写法）
    ...mapMutations("counter", { increament: "ADD", decreament: "CUT" }),
    ...mapActions("counter", {
      increamentOdd: "addOdd",
      increamentWait: "addWait",
    }),
  },
};
</script>