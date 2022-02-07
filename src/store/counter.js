// 计数功能相关的配置
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        ADD(state, value) {
            // console.log('Mutations中的ADD被调用了', state, value);
            state.number += value
        },
        CUT(state, value) {
            state.number -= value
        },
    },
    state: {
        number: 1, // 当前数值
    },
    getters: {
        magnifiedNum(state) {
            return state.number * 10
        },
    }
}