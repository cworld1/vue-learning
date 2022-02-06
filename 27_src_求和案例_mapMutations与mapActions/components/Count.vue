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
      <!-- <button @click="ADD(select)">+</button>
      <button @click="CUT(select)">-</button> -->
      <button @click="increament(select)">+</button>
      <button @click="decreament(select)">-</button>
    </p>
    <p>
      <button @click="addOdd(select)">当前数字为奇数才加</button>
      <button @click="addWait(select)">等半秒才加</button>
      <!-- <button @click="increamentOdd(select)">当前数字为奇数才加</button>
      <button @click="increamentWait(select)">等半秒才加</button> -->
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      select: 1,
    };
  },
  computed: {
    // 借助mapState/mapGetters生成计算属性，从state中读取数据。（对象写法）
    /* ...mapState({ number: "number", place: "place", subject: "subject" }),
    ...mapGetters({ magnifiedNum: "magnifiedNum" }), */

    // 借助mapState/mapGetters生成计算属性，从state中读取数据。（数组写法）
    ...mapState(["number", "place", "subject"]),
    ...mapGetters(["magnifiedNum"]),
  },
  methods: {
    // 靠程序员自己亲自去写计算属性
    /* increament() { this.$store.commit("ADD", this.select) },
    decreament() { this.$store.commit("CUT", this.select) },
    increamentOdd() { this.$store.dispatch("addOdd", this.select) },
    increamentWait() { this.$store.dispatch("addWait", this.select) }, */

    // 借助mapMutations/mapActions生成计算属性，方法中会调用commit/dispatch去联系Mutations/Actions。（对象写法）
    ...mapMutations({ increament: "ADD", decreament: "CUT" }),
    /* ...mapActions({ increamentOdd: "addOdd", increamentWait: "addWait" }), */

    // 借助mapMutations/mapActions生成计算属性，方法中会调用commit/dispatch去联系Mutations/Actions。（数组写法）
    /* ...mapMutations(["ADD", "CUT"]), */
    ...mapActions(["addOdd", "addWait"]),
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