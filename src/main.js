import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
// 三级联动组件（商品分类导航）
import TypeNav from '@/pages/Home/TypeNav'

// 注册全局组件（参数一：全局组件名称；参数二：哪一个组件）
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
