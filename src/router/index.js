// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'

// 创建一个路由器
export default new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
    ]
})