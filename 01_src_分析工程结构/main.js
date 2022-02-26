// 引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象——app（类似于之前Vue2的vm，但app比vm更“轻”）
createApp(App).mount('#app')

// Vue3的写法
/* const app = createApp(App)
app.mount('#app') // 挂载
console.log(app); */

// 卸载挂载
/* setTimeout(() => {
    app.unmount('#app')
}, 1000); */

// Vue2的写法
/* const vm = new Vue({
    render: h=> h(App)
})
vm.$mount('#app')
console.log(vm); */