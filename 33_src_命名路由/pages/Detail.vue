<template>
  <div>
    <hr />
    <h3>{{ $route.query.title }}</h3>
    <p>资讯编号: {{ $route.query.id }}</p>
    <p>
      <img class="img-responsive img-rounded" :src="$route.query.media" />
    </p>
    <p>{{ $route.query.summary }}</p>
    <a
      :href="`https://ys.mihoyo.com/main/news/detail/${$route.query.id}`"
      target="_blank"
      >阅读原文</a
    >
  </div>
</template>

<script>
export default {
  name: "Detail",
};
</script>

<style>
</style>