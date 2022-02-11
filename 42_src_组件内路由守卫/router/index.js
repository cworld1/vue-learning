// 该文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
// 引入组件
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Content from '../pages/Content.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'
import User from '../pages/User.vue'
import Login from '../pages/Login.vue'

// 创建一个路由器
const router = new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home,
      meta: { title: '主页' },
      children: [
        {
          name: 'content',
          path: 'content',
          component: Content,
          meta: { title: '最新内容' },
        },
        {
          name: 'news',
          path: 'news',
          component: News,
          meta: { title: '更多资讯' },
          children: [
            {
              name: 'detail',
              path: 'detail/:id',
              component: Detail,
              meta: { title: '更多资讯' },
              props($router) {
                return {
                  id: $router.params.id,
                  title: $router.query.title,
                  media: $router.query.media,
                  summary: $router.query.summary,
                }
              }
            }
          ]
        },
      ]
    },
    {
      name: 'user',
      path: '/user',
      component: User,
      meta: { title: '用户中心' },
    },
    {
      name: 'about',
      path: '/about',
      component: About,
      meta: { title: '关于' },
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
      meta: { title: '登录' },
    },
  ]
})

// 全局前置守卫————初始化的时候被调用、每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
  // if (to.name === 'user') { // 单独设置某一个页面的访问权限
  if (to.meta.isAuth) { // 直接对权限组isAuth的访问进行验证，不用单独设置组件或页面
    if (localStorage.getItem('mail') === 'cworld' && localStorage.getItem('psw') === '123') {
      next()
    } else if (from.name === 'login') {
      alert('看到当前的登录页面了吗？请登录后再查看用户中心')
    } else {
      router.replace("/login")
    }
  } else {
    next()
  }
}) */

// 全局后置守卫————初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to) => {
  document.title = to.meta.title || 'Vue Router Demo'
})

export default router