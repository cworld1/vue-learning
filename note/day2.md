# 数据的管理与维护

易错点总结：

- 项目阶段，左侧菜单目录，只能有项目文件夹。
- 电脑安装 node_modules 依赖包时，经常丢包。使用 `npm install --save axios --force` 解决。
- 单词拼写错误。

## 解决路由参数不变时执行报错

> 注意：编程式导航（push|replace）才会有这种情况的异常，声明式导航是没有这种问题，因为声明式导航内部已经解决这种问题，vue-router 底层己经处理好了。

编程式导航路由跳转到当前路由（参数不变），多次执行会抛出 `NavigationDuplicated` 的警告错误。这种异常，对于程序没有任何影响的。

由于 vue-router 最新版本 v3.5.3，引入了 promise，当传递参数多次且重复，会抛出异常，因此出现上面现象。

- 方法1：是给 push 函数，传入相应的成功的回调与失败的回调，可以捕获到当前错误，暂时解决当前问题：
  ```js
  this.$router.push({
      name: "search",
      params: { paramsKey: this.keyword },
      query: {queryKey: this.keyword.toUpperCase(), () => { }, () => { }};
  ```

  缺点：以后再用 push|replace 还是会出现类似现象，需要每次都调用。

- 方法2：重写 push 和 replace

  对 push 进行重写：
  ```js
  let originPush = VueRouter.prototype.push;
  VueRouter.prototype.push = function push(location, resolve, reject) {
      if (resolve || reject) return originPush.call(this, location, resolve, reject);
      return originPush.call(this, location).catch(err => err);
  }
  ```

  对 replace 进行重写：

  ```js
  let originReplace = VueRouter.prototype.replace;
  VueRouter.prototype.replace = function push(location, resolve, reject) {
      if (resolve || reject) return originReplace.call(this, location, resolve, reject);
      return originReplace.call(this, location).catch(err => err);
  }
  ```

  函数的三个接收参数：
  - 第一个参数：告诉原来 push 方法，你往哪里跳转（传递哪些参数）
  - 第二个参数：成功的回调
  - 第三个参数：失败的回调

  call 与 apply 的区别：
  - 相同点，都可以调用函数一次，都可以篡改函数的上下文一次
  - 不同点：call 与 apply 传递参数：call 方法传递参数（用逗号隔开），apply 方法传递数组

## 将 Home 组件再拆分

拆分内容：
- 静态页面样式
- 静态组件

拆分目的与效果：
- 发请求获取服务器数据进行展示
- 开发动态业务

拆分组件：结构（HTLML）+ 样式（CSS）+ 图片资源。故一共要拆分为七个组件。

## 使用 axios 二次封装

> AJAX：客户端可以 ”悄悄地“ 向服务器端发请求，在页面没有刷新的情况下，实现页面的局部更新。

### 了解 axios

向服务器发请求的手段：XMLHttpRequest（原生）、fetch、JQuery、axios

使用 axios 的原因：可以使用请求拦截器、响应拦截器。
- 请求拦截器：在发请求之前处理一些业务逻辑。
- 响应拦截器：当服务器数据返回以后，进行一些操作。

### 封装 axios

安装 axios：
```powershell
npm install axios
```

用于 axios 二次封装的文件存放位置：一般位于 src/api

首先需要引入 axios。随即对 axios 进行基础配置：
```js
const request = axios.create({
  // 基础路径，发出请求的时候，路径前缀中会默认出现 api
  baseURL: "",
  // 代表请求超时的时间
  timeout: 5000,
})
```

### 对接口统一管理

项目很小：完全可以在组件的生命周期函数中发请求
项目大：使用 `axios.get("xxx")`

### 跨域问题

跨域：如果多次请求协议、域名、端口号有不同的地方，称之为跨域。如本次开发环境中：
- 前端项目本地服务器：http://localhost:8080/#/home
- 后台服务器：http://39.98.123.211

解决方法：JSONP、CROS、代理

## 实现进度条展示功能

添加进度条插件 NProgress：
```powershell
npm i nprogress
```

引入 NProgress，注意要引入相应样式。如果需修改进度条的颜色，应复制 css 文件后进行修改。

相关配置代码：
```js
  // 进度条开始
  NProgress.start();
  // 进度条结束
  NProgress.done();
  // 移除进度条
  NProgress.remove();
```

## 使用 Vuex 状态管理库

> vuex：Vue 官方提供的一个插件，插件可以管理项目共用数据。

并非任何项目的状态管理都需要 vuex。如果项目很小，则完全不需要 vuex，如果项目很大，组件很多、数据很多，数据维护很费劲，则一般会使用 vue 去统一管理数据。而管理数据的地方即为仓库 store。

### Vuex 基本使用

安装 Vuex：

```powershell
npm i vuex@3
```

在 store/index.js 引入并使用 vuex。

配置 Vuex：

```js
// state：仓库存储数据的地方
const state = {}
// mutations：修改 state 的唯一手段
const mutations = {}
// actions: 处理 action，可以书写自己的业务逻辑或处理异步
const actions = {}
// getters：理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {}

const store = new Vuex.Store({
  state, mutations, actions, getters
})
export default store
```

使用 mapState 快速配置 computed：

- 数组：`...xxx([xxx,xxx])`

- 函数：

  ```js
  ...xxx({
      // 右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
      // 注入一个参数 state，其实即为大仓库中的数据
      xxx: (state) => {
          return state.xxx
      },
      // 简化后
      xxx: state => state.xxx
  })
  ```

  















