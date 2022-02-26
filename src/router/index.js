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
            path: "/home",
            component: Home
        },
        {
            path: "/search",
            component: Search
        },
        {
            path: "/login",
            component: Login
        },
        {
            path: "/register",
            component: Register
        },
    ]
})

export default router