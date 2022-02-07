// 人员管理相关的配置
import axios from 'axios'
export default {
    namespaced: true,
    actions: {
        addPersonVerify(context, [value, familyName]) {
            if (value.name.indexOf(familyName) === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context) {
            axios.get('https://v1.hitokoto.cn/?c=i').then(
                response => {
                    const personObj = { id: response.data.uuid, name: response.data.hitokoto };
                    context.commit('ADD_PERSON', personObj)
                },
                error => {
                    alert('失败了（；´д｀）ゞ', error.msg)
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.persons.unshift(value)
        }
    },
    state: {
        persons: [
            { id: '001', name: '张三' },
            { id: '002', name: '李四' }
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.persons[0].name
        }
    }
}