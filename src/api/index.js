// 对当前 api 进行统一管理
import requests from "./request";

// 商品分类导航
// /api/product/getBaseCategoryList get 无参数
export const reqTypeNav = () => requests({
  url: 'product/getBaseCategoryList',
  method: 'get'
})