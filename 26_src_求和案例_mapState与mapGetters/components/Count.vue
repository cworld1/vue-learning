<template>
  <div>
    <h1>当前数值为: {{ number }}</h1>
    <h3>其数值放大10倍后: {{ magnifiedNum }}</h3>
    <h3>我在{{ place }}学习{{ subject }}</h3>
    <p>
      <select v-model.number="select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <button @click="increament">+</button>
      <button @click="decreament">-</button>
    </p>
    <p>
      <button @click="increamentOdd">当前数字为奇数才加</button>
      <button @click="increamentWait">等半秒才加</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      select: 1,
    };
  },
  computed: {
    // 靠程序员自己亲自去写计算属性
    /* number() { return this.$store.state.number },
    place() { return this.$store.state.place },
    subject() { return this.$store.state.subject },
    magnifiedNum() { return this.$store.getters.magnifiedNum }, */

    // 借助mapState/mapGetters生成计算属性，从state中读取数据。（对象写法）
    ...mapState({ number: "number", place: "place", subject: "subject" }),
    ...mapGetters({ magnifiedNum: "magnifiedNum" }),

    // 借助mapState/mapGetters生成计算属性，从state中读取数据。（数组写法）
    ...mapState(["number", "place", "subject"]),
    ...mapGetters(["magnifiedNum"]),
  },
  methods: {
    increament() {
      this.$store.commit("ADD", this.select);
    },
    decreament() {
      this.$store.commit("CUT", this.select);
    },
    increamentOdd() {
      this.$store.dispatch("addOdd", this.select);
    },
    increamentWait() {
      this.$store.dispatch("addWait", this.select);
    },
  },
};
</script>

<style scoped>
select,
button {
  margin-right: 6px;
  background-color: #e9e9e9;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 8px 16px;
}
</style>