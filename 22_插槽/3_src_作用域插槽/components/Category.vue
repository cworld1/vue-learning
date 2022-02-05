<template>
  <div class="category">
    <p style="text-align: center">最新信息</p>
    <slot :games="games" msg="最热门游戏"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
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