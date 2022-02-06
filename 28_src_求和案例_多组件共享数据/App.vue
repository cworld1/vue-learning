<template>
  <div>
    <Count />
    <hr />
    <Person />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: { Count, Person },
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