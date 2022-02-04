<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <img
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
        class="media"
      />
    </Category>
    <Category title="游戏" :listData="games"></Category>
    <Category title="电影" :listData="films">
      <video
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        class="media"
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["火锅", "烧烤", "小龙虾", "牛排"],
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
      films: ["《教父》", "《拆弹专家》", "《你好, 李焕英》", "《头脑特工队》"],
    };
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>