module.exports = {
  // productionSourceMap: false,
  // 关闭 ESLint 校验工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://39.98.123.211",
      },
    },
  },
};
