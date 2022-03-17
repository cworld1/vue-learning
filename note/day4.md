# 首页组件的功能完善与接口化处理

前要复习：

- 商品分类的三级列表由静态变为动态形式（获取服务器数据：解决跨域问题）
- 防抖与节流（面试经常出现）
- vuex 可以模块式开发；vuex 经常用的套路是 state、mutations、actions、getters、modules
- 路由跳转：路由式导航（router-link）、编程式导航

## 完善 TypeNav 组件

### TypeNav 组件的场景优化

- 在 Home 模块当中，使用了商品分类组件（TypeNav）

- 在 Search 模块当中，也使用了商品分类组件（TypeNav）

#### 将该组件注册为全局组件

- 以后在开发项目的时候，如果发现某一个组件在项目当中多个地方出现频繁的使用，通常会把这类的组件注册为全局组件。

  > 注册全局组件的好处：只需要注册一次，可以在程序任意地方使用。

- 项目中的全局组件（共用的组件）一般放置于 components 文件夹中

- 全局组件只需要注册一次，就可以在项目当中任意的地方使用。而注册全局组件一般是在入口文件注册。

#### 该组件在不同场景下个性化展示

在不同的场景下互相切换，会导致商品分类组件的销毁与创建。在每一次创建组件时（mounted）通过判断场景来个性化展示分类。

```js
if (this.$route.name != "Home") {
  // 相关执行代码
}
```

#### 个性化展示对应的动画效果

在 html 结构对使用 `transition` 包裹：

```html
<transition name="sort">
  <!-- 相关代码内容 -->
</transition>
```

css 书写为：

```css
/* 前文命名则用前文命名，没有则默认为 "v" */
/* 展示动画全过程 */
.sort-enter-active,
.sort-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}
/* 收起时状态 */
.sort-enter,
.sort-leave-to {
  height: 0px;
  opacity: 0.8;
}
/* 展开时状态 */
.sort-enter-to,
.sort-leave {
  height: 510px;
  opacity: 2;
}
```

需要注意，节点|组件务必出现 `v-if` / `v-show` 指令才可以使用。

#### 组件的 name 属性的作用

- 开发者工具中可以看见组件的名字
- 注册全局组件的时候，可以通过组件实例获取相应组件的名字

### TypeNav 组件业务分析

特殊场景优化：

- 在 Home 模块正常显示
- 在 Search 模块自动显示与隐藏：通过创建响应式属性控制三级联动显示与隐藏

业务逻辑问题解决：

- 开发时出现的问题：在 home 模块下不应该出现 Search 模块下的个性化展示效果
- 转化问题：通过让该组件获取它所在的场景，从而控制是否个性化展示 。
- 解决方案：通过 $route 让组件获取到底在哪个场景下；以后再复用的时候，如果出现组件需要个性化展示时，就可以通过区分在什么场景下（如 Home、Search），通过 $route 路由信息区分。

> 注意：路由跳转的时候，相应的组件会被重新销毁与创建（注意使用 keep-alive）

### 针对 TypeNav 优化性能

从 Home 模块切换到 Search 或从 Search 切换到 Home，我们发现组件在频繁地向服务器发请求，
获取三级联动的数据进行展示。究其原因，是页面在切换时对 TypeNav 组件进行反复的销毁与创建。

项目中如果频繁的向服务器发请求，会比较影响整个网页的性能与加载速度，因此迫切需要进行优化。

- 为什么会这样频繁获取数据？

  因为路由跳转的时候，TypeNav 组件会进行销毁；跳转结束后会重新创建 TypeNav 组件，之后再在组件的 created 函数调起动作从而向 vuex 派发 action，因此频繁的获取三级联动的数据。
  实际生产环境中，我们只需要发一次请求，获取到三级联动的数据即可，不需要多次；同时也为了保证时效性，数据也不需要存储本地。
  最终解决方案：在 App 组件调起 action 获取数据储存在 vuex 中。

- 项目性能优化手段有哪些？

  - 对于 `v-if` / `v-show` 的合理选择

  - 按需加载（如 lodash、ant 等）

  - 防抖与节流

  - 请求次数优化


## 完善 listContainer / Floor 组件

接下来需要开发 ListContainer 与 Floor 组件业务。

### 使用 mock.js 模拟数据接口

> 场景：开发项目，产品经理画出原型，前端与后端人员需要介入（即开发项目），产品经理刚开完会，明确分工安排前端与后端负责哪些模块。于是后端人员开发服务器，前端人员负责项目起步、开发静态页面、查分静态组件。而如果此时前端人员发现后台的接口没有写好，则可以 mock 一些数据（前端程序员自己模拟的一些假接口），当工作项目上线准备时，把 mock 数据变为后台开发的接口进行数据替换即可。

项目中如果使用了 mock 数据，则我们把这些数据当成真实接口数据处理。mock（模拟数据）数据需要使用到 mockjs 模块，可以帮助我们模拟数据。注意：是 mockjs 并非 mock.js mock-js。

#### mock.js 介绍

mock 官网一句话：生成随机数据，拦截 Ajax 请求

官方地址：http://mockjs.com/

mock 官网当中这句话的理解：模拟的数据一般：对象、数组。如：

```json
{
  "a|1-10": "数据内容"
}
```

拦截 ajax 请求：请求发布出去，浏览器会进行拦截，得到的只是项目当中本地自己配置好的样本数据。

#### 使用 mock.js

- 第一步：安装依赖包 mockjs

- 第二步：在 src 文件夹下创建一个文件夹，文件夹 mock 文件夹。

- 第三步：准备模拟的数据
  把 mock 数据需要的图片放置于 public 文件夹中。如 listContainer 中的轮播图的数据：

  ```json
  [
    { "id": 1, "imgUrl": "xxxxxxxxx" },
    { "id": 2, "imgUrl": "xxxxxxxxx" },
    { "id": 3, "imgUrl": "xxxxxxxxx" }
  ]
  ```

- 第四步：在 mock 文件夹中创建一个 server.js 文件

  注意：在 server.js 文件当中对于 banner.json / floor.json 的数据没有暴露，但是可以在 server 模块中使用。而对于 webpack 当中一些模块：图片、json，不需要对外暴露，因为默认就是对外暴露。

- 第五步：通过 mock 模块模拟出数据：通过 Mock.mock 方法进行模拟数据

- 第六步：回到入口文件，引入 serve.js
  mock 需要的数据|相关 mock 代码页书写完毕，关于 mock 当中 serve.js 需要执行一次，如果不执行，和你没有书写一样的。

- 第七步：在 API 文件夹中创建 mockRequest（axios 实例：`baseURL: '/mock'`）
  专门获取模拟数据用的 axios 实例。

在开发项目的时候：多注意单元测试，当某个功能完毕时，需要反复测试是否运行良好。

## 存储数据，存储于 vuex

7.1:书写静态页面
7.2：拆分组件
7.3：获取服务器数据
7.4：展示数据
7.5：开发动态业务

## Swiper 的基本使用

### Swiper 的适用场景

可以在移动端、PC 端都可以使用，这个插件经常用来快速开发轮播图（carousel）

前端用于开发：轮播图、分页器、日历等。

### Swiper 简单上手

官网地址：https://swiperjs.com/

如果不想在项目框架中使用 Swiper，可以直接进行标签引用：

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/swiper@8/swiper-bundle.min.css"
/>

<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>
```

如果您在浏览器中使用 ES 模块，则也有对应的 CDN 版本：

```html
<script type="module">
  import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js'

  const swiper = new Swiper(...)
</script>
```

之后添加基本布局：

```html
<!-- Slide 主要容器 -->
<div class="swiper">
  <!-- 包裹 Slide 内容 -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
  <!-- 如果需要分页功能 -->
  <div class="swiper-pagination"></div>

  <!-- 如果需要导航箭头按钮 -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- 如果需要滚动条 -->
  <div class="swiper-scrollbar"></div>
</div>
```

除了 Swiper 的 [CSS 样式](https://swiperjs.com/swiper-api/#styles) 之外，我们可能需要添加一些自定义样式来设置 Swiper 大小：

```css
.swiper {
  width: 600px;
  height: 300px;
}
```

最后，我们需要在 JS 中初始化 Swiper：

```js
const swiper = new Swiper(".swiper", {
  // 可选参数
  direction: "horizontal", // 布局方向：horizontal / vertical
  loop: true, // 循环

  // 如果需要分页功能
  pagination: {
    el: ".swiper-pagination",
  },

  // 导航箭头
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 如果需要滚动条
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
```

Swiper 配置中 `new Swiper` 传入的第一个参数可以为字符串或 DOM 节点

### Swiper 使用总结

- 第一步：引入依赖包 `swiper.js|swiper.css`
- 第二步：静态页面中结构必须完整（container、wrap、slider），类名不能瞎写
- 第三步：初始化 swiper 实例





