<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-if="showFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  computed: {
    showFooter() {
      // return this.$toute.meta.showFooter;
      return !["Login", "Register"].includes(this.$route.name);
    },
  },
  mounted() {
    // 派发一个 action，获取商品分类的数据
    this.$store.dispatch("getTypeNav");
  },
};
</script>

<style>
</style>