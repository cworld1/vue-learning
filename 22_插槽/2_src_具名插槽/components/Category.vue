<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <ul>
      <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
    </ul>
    <!-- 定义一个插槽（挖个坑，等着组件的使用者进行填充） -->
    <slot name="link"></slot>
    <slot name="media"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title", "listData"],
};
</script>

<style>
.category {
  background-color: #f3ebeb;
  width: 220px;
  height: 350px;
  overflow: hidden;
  border-radius: 8px;
}
h3 {
  text-align: center;
  background-color: #ff7d7d;
  color: white;
}
.media {
  width: 90%;
  border-radius: 8px;
  margin: 0 5%;
}
</style>