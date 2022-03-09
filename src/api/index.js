// 对当前 api 进行统一管理
import requests from "./axios";
import mockRequests from "./mockAjax";

// 商品分类导航
// /api/product/getBaseCategoryList get 无参数
export const reqGetTypeNavList = () =>
  requests.get("/product/getBaseCategoryList");

// 首页广告轮播
// /mock/product/getBaseCategoryList get 无参数
export const reqGetBannerList = () => mockRequests.get("/banner");
