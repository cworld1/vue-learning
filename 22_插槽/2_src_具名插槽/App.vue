<template>
  <div class="container">
    <Category title="美食" :listData="foods">
      <!-- <template v-slot:link> -->
      <template slot="link">
        <div class="link">
          <a href="https://www.ele.me/">更多美食</a>
          <a href="https://www.koubei.com/">相关评价</a>
        </div>
        <a class="link" href="https://www.ele.me/">美食广场红包雨即将降临!!</a>
      </template>
      <img
        src="https://pic57.photophoto.cn/20201001/0017030037480075_b.jpg"
        alt=""
        class="media"
        slot="media"
      />
    </Category>
    <Category title="游戏" :listData="games">
      <div class="link" slot="link">
        <a href="https://www.4399.com/">单机游戏</a>
        <a href="https://qqgame.qq.com/index.shtml">网络游戏</a>
      </div>
      <video
        controls
        autoplay
        muted
        src="https://webstatic.mihoyo.com/upload/op-public/2020/09/27/fd431739ff26ceeb3010ac561d68446b_345688670889091949.mp4"
        class="media"
        slot="media"
      ></video>
    </Category>
    <Category title="电影" :listData="films">
      <div class="link" slot="link">
        <a href="https://www.cangkus.com/special/classicmovie">经典</a>
        <a href="https://acz.youku.com/wow/ykpage/act/top_hot/">热门</a>
        <a href="https://youku.com/">推荐</a>
      </div>
      <video
        controls
        autoplay
        muted
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        class="media"
        slot="media"
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
.container,
.link {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}
</style>