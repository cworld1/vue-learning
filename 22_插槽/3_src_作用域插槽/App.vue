<template>
  <div class="container">
    <Category title="游戏">
      <!-- <template scope="dataList"> -->
      <template slot-scope="dataList">
        <h2>{{ dataList.msg }}</h2>
        <ul>
          <li v-for="(item, index) in dataList.games" :key="index">
            {{ item }}
          </li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="dataList">
        <h3>{{ dataList.msg }}</h3>
        <ol>
          <li v-for="(item, index) in dataList.games" :key="index">
            {{ item }}
          </li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="{ games }">
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
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