// 该文件用于创建vuex中最为核心的store

// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入配置文件
import counterOptions from './counter'
import personListOptions from './personList'

// 使用插件
Vue.use(Vuex)



const state = {
    place: 'B站',
    subject: '前端',
}

// 创建并暴露store
export default new Vuex.Store({
    modules: {
        counter: counterOptions,
        personList: personListOptions
    },
    state,
})