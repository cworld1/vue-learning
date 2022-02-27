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

拆分组件：结构 + 样式 + 图片资源。故一共要拆分为七个组件。

## 使用 axios 二次封装

AJAX：客户端可以'敲敲的'向服务器端发请求，在页面没有刷新的情况下，实现页面的局部更新。
XMLHttpRequest、$、fetch、axios
跨域：如果多次请求协议、域名、端口号有不同的地方，称之为跨域
JSONP、CROS、代理
2.1:工作的时候src目录下的API文件夹，一般关于axios二次封装的文件
2.2进度条：nprogress 模块实现进度条功能
工作的时候，修改进度条的颜色，修改源码样式 .bar 类名的

## vuex

vuex：Vue官方提供的一个插件，插件可以管理项目共用数据。
书写任何项目都需要vuex？
项目大的时候，需要有一个地方‘统一管理数据’即为仓库store
Vuex基本使用：



















