// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

const Demo = Vue.extend({})
const d = new Demo()

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this // 安装全局事件总线
    }
})