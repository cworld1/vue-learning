// 引入并使用 Vue Router 依赖
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// 配置路由
const router = new VueRouter({
    routes: [
        {
            name: "Home",
            path: "/home",
            component: Home
        },
        {
            name: "Search",
            path: "/search",
            component: Search
        },
        {
            name: "Login",
            path: "/login",
            component: Login,
            meta: { showFooter: false }
        },
        {
            name: "Register",
            path: "/register",
            component: Register,
            meta: { showFooter: false }
        },
        // 重定向处理
        {
            path: "/",
            redirect: "/home"
        }
    ]
})

export default router