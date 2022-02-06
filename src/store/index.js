// 该文件用于创建vuex中最为核心的store

// 引入vue
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 使用插件
Vue.use(Vuex)

// 准备 Actions —— 用于响应组件中的动作
const actions = {
    add(context, value) {
        // console.log('Actions中的add被调用了', context, value);
        context.commit('ADD', value)
    },
    cut(context, value) {
        context.commit('CUT', value)
    },
    addOdd(context, value) {
        if (context.state.number % 2) {
            context.commit('ADD', value)
        }
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value)
        }, 500);
    },
}

// 准备 Mutations —— 用于操作数据 (state)
const mutations = {
    ADD(state, value) {
        // console.log('Mutations中的ADD被调用了', state, value);
        state.number += value
    },
    CUT(state, value) {
        state.number -= value
    },
    ADD_PERSON(state, value) {
        state.persons.unshift(value)
    }
}

// 准备 State —— 用于存储数据
const state = {
    number: 1, // 当前数值
    place: 'B站',
    subject: '前端',
    persons: [
        { id: '001', name: '张三' },
        { id: '002', name: '李四' }
    ]
}

// 准备 Getters —— 用于将State中的数据进行加工
const getters = {
    magnifiedNum(state) {
        return state.number * 10
    }
}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})