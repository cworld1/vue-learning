<template>
  <div>
    <Counter />
    <hr />
    <PersonList />
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import PersonList from "./components/PersonList.vue";
export default {
  name: "App",
  components: { Counter, PersonList },
};
</script>

<style>
select,
button,
input {
  margin-right: 6px;
  background-color: #e9e9e9;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 8px 16px;
}
</style>