<template>
  <div>
    <h1>当前数值为{{ number }}</h1>
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
      number: 0, // 当前数值
      select: 1,
    };
  },
  methods: {
    increament() {
      this.number += this.select;
    },
    decreament() {
      this.number -= this.select;
    },
    increamentOdd() {
      if (this.number % 2) {
        this.number += this.select;
      }
    },
    increamentWait() {
      setTimeout(() => {
        this.number += this.select;
      }, 500);
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
  padding: 5px 12px;
}
</style>