// home 模块下的 store 仓库

// 引入商品分类导航信息获取 api
import { reqGetTypeNavList, reqGetBannerList, reqGetFloorList } from "@/api";

const state = {
  // 商品分类导航
  typeNavData: [],
  // 首页广告轮播
  bannerData: [],
  // 首页 Floor 组件
  floorData: [],
};
const mutations = {
  // 商品分类导航
  ADDTYPENAVLIST(state, data) {
    state.typeNavData = data;
  },
  // 首页广告轮播
  ADDBANNERLIST(state, data) {
    state.bannerData = data;
  },
  // 首页 Floor 组件
  ADDFLOORLIST(state, data) {
    state.floorData = data;
  },
};
const actions = {
  // 商品分类导航
  async getTypeNavList({ commit }) {
    let result = await reqGetTypeNavList();
    if (result.code == 200) {
      commit("ADDTYPENAVLIST", result.data);
    }
  },
  // 首页广告轮播
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      commit("ADDBANNERLIST", result.data);
    }
  },
  // 首页 Floor 组件
  async getFloorList({ commit }) {
    let result = await reqGetFloorList();
    if (result.code == 200) {
      commit("ADDFLOORLIST", result.data);
    }
  },
};
const getters = {}; // 计算属性

export default {
  state,
  mutations,
  actions,
  getters,
};
