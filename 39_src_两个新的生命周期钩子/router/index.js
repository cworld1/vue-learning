// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Content from '../pages/Content.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'
import User from '../pages/User.vue'

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
              path: 'detail/:id',
              component: Detail,
              // props的第一种写法，值为对象，该对象中的所有key-value都会以props的形式传给Detail组件。
              // props: {a:1,b:'hello'}

              // props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给Detail组件。
              // props: true

              // props的第二种写法，值为函数
              /* props($router) {
                return {
                  id: $router.params.id,
                  title: $router.query.title,
                  media: $router.query.media,
                  summary: $router.query.summary,
                } */
              props({ params: { id }, query: { title, media, summary } }) {
                return { id, title, media, summary }
              }
            }
          ]

        },
      ]
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/about',
      component: About
    },
  ]
})
