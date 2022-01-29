/*
  该文件是整个项目的入口文件
*/

// 引入专用的残缺版Vue（不能使用Template模板字符串）
import Vue from 'vue'
/*
  关于不同版本的vue：
    1.vue.js与vue.runtime.xxx.js的区别：
      (1).vue.js是完整版的que，包含：核心功能＋模板解析器。
      (2).vue.runtime. xxx.js是运行版的vue，只包含：核心功能：没有模板解析器。
    
    2.因为vue.runtime.xxx.js没有模板解析器，所以不能使用template配置项，需要使用
      render两数接收到的createElement两数去指定具体内容。

  引入其他版本Vue方法示例：（完整组件）import Vue from 'vue/dist/vue'
*/

// 引入App组件，它是所有组件的父组件
import App from './App.vue'
// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建Vue实例对象
new Vue({
  // 注册组件
  el: '#app',

  // 完成了将App组件放入容器中

  // 如果是残缺版的Vue，也可以用render函数简单编写模板字符串。注意此处的render会传入一个函数createElement。
  /* render(createElement) {
    return createElement('h1', '测试一下')
  } */

  // 由于不用this，所以可以改写成箭头函数
  /* render: createElement => {
    return createElement('h1', '测试一下')
  } */

  // 由于只有return一句，故可以去掉花括号，省略return语句，同时将createElement简写（如h）
  /* render: h => h('h1', '测试一下') */

  // 最后去除组件标签内部内容，改成正确标签，得到了与官方HelloWorld相同的代码
  render: h => h(App),

  // template: `<h1>测试一下</h1>`
})
