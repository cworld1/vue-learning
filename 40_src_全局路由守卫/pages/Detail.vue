<template>
  <div>
    <hr />
    <h3>{{ title }}</h3>
    <p>资讯编号: {{ id }}</p>
    <p>
      <img class="img-responsive img-rounded" :src="media" />
    </p>
    <p>{{ summary }}</p>
    <a :href="`https://ys.mihoyo.com/main/news/detail/${id}`" target="_blank"
      >阅读原文</a
    >
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title", "media", "summary"],
};
</script>

<style>
</style>