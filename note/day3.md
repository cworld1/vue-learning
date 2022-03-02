## 完成一级分类的背景效果

- 方案一：CSS  hover 怎么简单怎么来
- 方案二：单独通过动态数据绑定

## 解决演示卡顿与性能问题

### 了解防抖与节流

正常：事件触发非常频繁，而且每一次的触发，相应回调函数都执行一次（如果时间很短，而回调函数内部有计算，那么很可能出现浏览器卡顿）。

> 支持防抖 / 节流的插件：Lodash

防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发，实际代码只会执行一次。

Lodash 示例代码：

```js
xxx.onInput = _.debounce(function() {
    // 正常执行内容
}, 1000)
```

节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发。

```js
xxx.onClick = _.throttle(function() {
    // 正常执行内容
}, 1000)
```

两者共性：都是通过闭包 + 延时器实现

### 为菜单添加节流效果

按需加载：对于 loadsh 插件，它里面封装的函数功能很多。
`import _ from lodash` 相当于把全部功能引入进来，但是我们只是需要节流。所以需要引入关键部分：

```js
// 首先引入相关模块
import throttle from "lodash/throttle";
// ...
xxx: throttle(function(xxx) {
    // 正常执行内容
}, 50)
```

## 路由的跳转与传参

- 声明式导航
  问题：为什么使用 router-link 切换组件的时候，会出现卡顿现象
  原因：router-link 是一个组件，相当于 VueComponent 类的实例对象，一瞬间
  new VueComponent 很多实例（1000+），很消耗内存，因此导致卡顿。

- 编程式导航：使用 push / replace

故最好的解决方案：编程式导航 ＋ 事件委派

用事件委派存在一些问题：
- 无法确认点击的一定是 a 标签
- 如何获取参数

路由跳转的时候（由 home 到 search）：需要进行路由传递参数（分类的名字、一二三级分类的 id）

```js
this.$router.push()

{
    name: 'search',
    query: {
        categoryName: '电子书',
        category2Id: 4
    }
}
```

解决方案：

- 对于问题一：把子节点中的 a 标签，加上自定义属性 data-categoryName，其余的子节点是没有的。
  获取到当前出发这个事件的节点（如 h3、a、dt、dl 等），如果带有 data-categoryname 属性，则这样的节点一定是 a 标签。
  
- 对于问题二：获取到底是一级、二级还是三级分类自定义属性的 a 标签。
    ```js
  // 获取 DOM 元素
  let element = event.target;
  // 节点有一个属性 dataset 属性，可以获取节点的自定义属性与属性值
  let {categoryname, categorylid, category2id, category3id} = element.dataset;
  // 如果标签身上拥有 categoryname 属性一定是 a 标签
  if (categoryname) {
      // ...
      // 一级分类、二级分类、三级分类的 a 标签
  	if (category1id) {
          // ...
  	} else if (category2id){
          // ...
      } else if (category3id){
          // ...
      }
  }
  ```







































