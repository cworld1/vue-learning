// 引入并使用 Vue Router 依赖
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

// 修改 push 和 replace 方法
let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, resolve, reject) {
  if (resolve || reject)
    return originPush.call(this, location, resolve, reject);
  return originPush.call(this, location).catch((err) => err);
};
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function push(location, resolve, reject) {
  if (resolve || reject)
    return originReplace.call(this, location, resolve, reject);
  return originReplace.call(this, location).catch((err) => err);
};

// 配置路由
const router = new VueRouter({
  routes: [
    {
      name: "Home",
      path: "/home",
      component: Home,
    },
    {
      name: "Search",
      path: "/search/:keyword?",
      component: Search,
    },
    {
      name: "Login",
      path: "/login",
      component: Login,
      meta: { showFooter: false },
    },
    {
      name: "Register",
      path: "/register",
      component: Register,
      meta: { showFooter: false },
    },
    // 重定向处理
    {
      path: "/",
      redirect: "/home",
    },
  ],
});

export default router;
