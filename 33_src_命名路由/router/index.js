// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Content from '../pages/Content.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

// 创建一个路由器
export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'content',
          component: Content

        },
        {
          path: 'news',
          component: News,
          children: [
            {
              name: 'detail',
              path: 'detail',
              component: Detail
            }
          ]

        },
      ]
    },
    {
      name: 'about',
      path: '/about',
      component: About
    },
  ]
})
