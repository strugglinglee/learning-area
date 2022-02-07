# vue-router

## vue路由hash模式和history模式实现原理分别是什么，他们的区别是什么？

- hash 模式：
  - #后面 hash 值的变化，不会导致浏览器向服务器发出请求，浏览器不发出请求，就不会刷新页面
  - 通过监听 **hashchange** 事件可以知道 hash 发生了哪些变化，然后根据 hash 变化来实现更新页面部分内容的操作。
- history 模式：
  - history 模式的实现，主要是 HTML5 标准发布的两个 API，**pushState** 和 **replaceState**，这两个 API 可以在改变 url，但是不会发送请求。这样就可以监听 url 变化来实现更新页面部分内容的操作
- 区别
  - url 展示上，hash 模式有“#”，history 模式没有
  - 刷新页面时，hash 模式可以正常加载到 hash 值对应的页面，而 history 没有处理的话，会返回 404，一般需要后端将所有页面都配置重定向到首页路由
  - 兼容性，hash 可以支持低版本浏览器和 IE。

## 路由懒加载是什么意思？如何实现路由懒加载？

- 路由懒加载的含义：把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件

- 实现：结合 Vue 的异步组件和 Webpack 的代码分割功能

  - 1. 可以将异步组件定义为返回一个 Promise 的工厂函数 (该函数返回的 Promise 应该 resolve 组件本身)

  ```js
        const Foo = () => Promise.resolve({ /* 组件定义对象 */ })
  ```

  - 2. 在 Webpack 2 中，我们可以使用动态 import语法来定义代码分块点 (split point)

  ```js
  import('./Foo.vue') // 返回 Promise
  ```

  - 结合这两者，这就是如何定义一个能够被 Webpack 自动代码分割的异步组件

  ```js
  const Foo = () => import('./Foo.vue')
  const router = new VueRouter({ routes: [ { path: '/foo', component: Foo } ]})
  ```

- 使用命名 chunk，和webpack中的魔法注释就可以把某个路由下的所有组件都打包在同个异步块 (chunk) 中

```js
chunkconst Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
```

## Vue-router 导航守卫有哪些

- 全局前置/钩子：beforeEach、beforeResolve、afterEach
- 路由独享的守卫：beforeEnter
- 组件内的守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave
