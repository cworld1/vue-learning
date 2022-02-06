<template>
  <div>
    <h1>当前数值为: {{ $store.state.number }}</h1>
    <h3>其数值放大10倍后: {{ $store.getters.magnifiedNum }}</h3>
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
export default {
  name: "Count",
  data() {
    return {
      select: 1,
    };
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