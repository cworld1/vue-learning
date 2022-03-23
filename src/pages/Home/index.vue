<template>
  <div>
    <!-- 商品分类导航 -->
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <Recommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor
      v-for="floor in floorData"
      :key="floor.id"
      :singleFloorData="floor"
    />
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
import ListContainer from "./ListContainer";
import Recommend from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";

import { mapState } from "vuex";
export default {
  name: "Home",
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  computed: {
    ...mapState({
      floorData: (state) => state.home.floorData,
    }),
  },
  mounted() {
    // 派发 action，获取 Floor 组件的数据
    this.$store.dispatch("getFloorList");
  },
};
</script>

<style scoped>
.list-container {
  margin-bottom: 115px;
}
</style>
