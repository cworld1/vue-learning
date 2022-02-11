// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 完整引入ElementUI并注册
// import ElementUI from 'element-ui'; // 引入ElementUI组件库
// import 'element-ui/lib/theme-chalk/index.css'; // 引入ElementUI全部样式
// Vue.use(ElementUI) // 应用ElementUI

// 按需引入ElementUI组件
import { Button, Row, Input, DatePicker } from 'element-ui';
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Input.name, Input);
Vue.component(DatePicker.name, DatePicker);

// 关闭Vue的生产提示
Vue.config.productionTip = false

// 创建vm
new Vue({
    el: '#app',
    render: h => h(App),
})