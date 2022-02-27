# 前端初步框架构建

要求：

- 每一天老师书写代码务必三遍
- node + webpack + VScode + 谷歌浏览器 + git
- 数组的方法 + promise + await + async + 模块化........

## 脚手架使用

### 搭建脚手架

```powershell
vue init webpack <项目的名字>
vue create <项目名称>
```

### 脚手架目录分析

**脚手架目录：public + assets 文件夹区别**

- node_modules 文件夹：放置项目依赖的地方
- public 文件夹：一般放置一些共用的静态资源，打包上线的时候，public 文件夹里面资源原封不动打包到 dist 文件夹里面
- src 文件夹：程序员源代码文件夹
  - assets 文件夹：经常放置一些静态资源（图片），assets 文件夹里面资源 webpack 会进行打包为一个模块（js 文件夹里面）
  - components 文件夹：一般放置非路由组件（或者项目共用的组件）
- App.vue：唯一的根组件
- main.js：入口文件【程序最先执行的文件】
- babel.config.js：babel 配置文件
- package.json：看到项目描述、项目依赖、项目运行指令
- README.md：项目说明文件

## 简单配置项目

### 浏览器自动打开

在 package.json 文件中配置：

```json
"scripts": {
    "serve": "vue-cli-service serve --open",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
},
```

### 关闭eslint校验工具

创建 vue.config.js 文件（需要对外暴露）：

```js
module.exports = {
   lintOnSave: false,
}
```

### src文件夹的别名的设置

因为项目大的时候 src（源代码文件夹）：里面目录会很多，找文件不方便，设置 src 文件夹的别名的好处，找文件会方便一些
创建 jsconfig.json 文件：

```json
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": [
                "src/*"
            ]
        }
    },
    "exclude": [
        "node_modules",
        "dist"
    ]
}
```

## 项目上传 GIT

微信小程序实战课的时候，会带着大家玩耍的，地址：https://gitee.com/jch1011/shangpinhui_0607.git

> 注意：前面基础课程当中，创建分支、处理冲突等等

## 创建组件

### 认识路由（vue-router）

node平台（并非语言）的路由分为 KV，即对应的 key 和 value

- 后台：Key 即为 URL 地址，Value 即为相应的中间件。
  如有地址 http://localhost:8080/0607 ：
  
  ```javascript
  app.get("/0607", (res,req) => {
  	res.send('我是祖国的老花骨朵');
  })
  ```
  
- 前端：Key 即为 URL（网络资源定位符），Value 即为相应的路由组件。

### 组件的拆分确定

确定项目结构顺序：上、中、下——只有中间部分的 V 在发生变化，中间部分应该使用的是路由组件。故我们拆分成：2 个非路由组件 和 4 个路由组件。

- 非路由组件：Header 、Footer
- 路由组件：Home、Search、Login（不含 Footer 组件，带有二维码）、Register（不含 Footer 组件，带有二维码）

### 安装并创建路由组件

- 安装 vue-router：

    ```powershell
    cnpm install --save vue-router
    ```

- 创建路由组件【一般放在views|pages文件夹】
- 配置四个路由组件

### 创建非路由组件

非路由组件使用分为几步：

- 第一步：定义
- 第二步：引入
- 第三步：注册
- 第四步：使用

非路由组件的结构的搭建：
前台项目的结构与样式不需要自己写的，老师准备好了。
辉洪老师静态页面：结构 + 样式 + 图片资源

### 组件显示的控制

首页/搜索底部是有 Footer 组件，而登录注册是没有 Footer 组件：对 Footer 组件添加 `v-show` / `v-if`

#### 【模拟面试题】

- v-show 与 v-if 区别？
  v-show：通过样式 display 控制
  v-if：通过元素上树与下树进行操作
- 开发项目的时候，优化手段有哪些？
  1. v-show / v-if
  2. 按需加载

## Less 语法环境搭建

项目采用的 less 样式，而浏览器不识别 less 语法，需要一些 loader 进行处理，把 less 语法转换为 CSS 语法。

- 安装 less less-loader@5
  切记 less-loader 安装5版本的，不要安装在最新版本，安装最新版本 less-loader 会报错，报的错误 setOption 函数未定义。

- 在所需要的 style 标签身上加上 `lang="less"` ，不添加样式不生效。

## 路由的搭建

### 路由组件的搭建

在上面分析的时候，路由组件应该有四个：Home、Search、Login、 Register

> - components 文件夹：经常放置的非路由组件（共用全局组件）
> - pageslviews 文件夹：经常放置路由组件

路由组件与非路由组件的区别？

1. 路由组件一般放置在 pageslviews 文件夹，非路由组件一般放置 components 文件夹中。
2. 路由组件一般需要在 router 文件夹中进行注册（使用的即为组件的名字），非路由组件在使用的时候，一般都是以标签的形式使用。

### 配置路由

项目当中配置的路由一般放置在  router 文件夹中

注册完路由，不管路由路由组件、还是非路由组件身上都有＄route、$router属性

> - $route：一般获取路由信息【路径、query、params等等】
> - $router：一般进行编程式导航进行路由跳转 【pushlreplace】

前往 /router/index.js 进行配置：

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home'
//对外暴露 VueRouter 类的实例
const router = new VueRouter({
    routes:[
        {
            name: 'Home',
            path: '/home',
            component: Home
        }
   ]
})
export default router
```

main.js   配置项填写相应 router

$route:可以获取路由的信息或参数，如：

- this.$route.name
- this.$route.path
- this.$route.params/query
- this.$route.meta

### 路由的跳转

路由的跳转就两种形式：

- 声明式导航：使用 router-link，注意务必要有 to 属性。
- 编程式导航：使用 push / replace
  编程式导航更好用，因为可以书写自己的业务逻辑。

### 路由传参

params 参数：路由需要占位，程序就崩了，属于 URL 当中一部分
query 参数：路由不需要占位，写法类似于 ajax 当中 query 参数

#### 【模拟面试题】

- 路由传递参数对象写法中 path 是否可以结合 params 参数一起使用？
  不可以。这样书写会使程序报错。

- 如何指定 params 参数可传可不传？
  在配置路由的时候，在占位的后面加上一个问号 “？”，代表 params 参数可传可不传

- 如果指定 name 与 params 配置, 但 params 中数据是一个 ""， 无法跳转，路径会出问题。现在 params 参数已设置为可传可不传，但是如果传递是空串，如何解决？
  设置 undefined 属性，如 `''||undefined` 即可解决。

- 路由组件能不能传递 props 数据？
  可以。有布尔值、对象和函数三种写法。
