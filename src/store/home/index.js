// home 模块下的 store 仓库

// 引入商品分类导航信息获取 api
import { reqTypeNav } from '@/api'

const state = {
  typeNavData: []
}
const mutations = {
  ADDTYPENAV(state, data) {
    state.typeNavData = data
  }
}
const actions = {
  // 向服务器发请求
  async getTypeNav({ commit }) {
    let result = await reqTypeNav()
    if (result.code == 200) {
      commit("ADDTYPENAV", result.data)
    }
  }
}
const getters = {}

export default ({
  state,
  mutations,
  actions,
  getters
})