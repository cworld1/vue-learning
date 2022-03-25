import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "swiper/css/swiper.min.css";

// 引入由 Vuex 构建的 store 状态管理模块
import store from "./store";

// 引入商品分类导航组件（商品分类导航）
import TypeNav from "./components/TypeNav";
import Carousel from "./components/Carousel";

// 引入 MockServe 模拟数据
import "./mock/mockServe";

// 注册全局组件（参数一：全局组件名称；参数二：哪一个组件）
Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  // 使用路由组件
  router,
  // 使用 vuex 组件
  store,
}).$mount("#app");
