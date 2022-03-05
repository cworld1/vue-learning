import Vue from "vue";
import Vuex from "vuex";
import home from "./home";
import search from "./search";

// 使用 Vuex 插件
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { home, search },
});
// 对外暴露 Store 类的一个实例
export default store;
