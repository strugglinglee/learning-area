# 服务端渲染（SSR）

## 客户端渲染

1. 服务端将渲染所需要的**静态文件**发送给客户端
2. 客户端加载
3. 浏览器跑JS
4. 根据运行结果生成相应的DOM

### 特点

页面上呈现的内容，在html源文件中找不到

```html
<!doctype html>
<html>
  <head>
    <title>我是客户端渲染的页面</title>
  </head>
  <body>
    <div id='root'></div>
    <script src='index.js'></script>
  </body>
</html>
```

## 服务端渲染

用户第一次请求页面时
服务器把需要的组件或页面渲染成HTML字符串返回给客户端
客户端拿到手的 是可以直接渲染后呈现给用户的HTML内容

### 特点

页面上呈现的内容，我们在html源文件里也能找到

## 实践

### React

> import { renderToString } from 'react-dom/server'

1. **renderToString** 是把虚拟DOM转化为真实DOM的关键方法
2. 编写HTML模板，插入转化后的真实DOM内容

### Vue

**renderToString** 是把Vue实例转化为真实DOM的关键方法

``` js
const Vue = require('vue')
// 创建一个express应用
const server = require('express')()
// 提取出renderer实例
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  // 编写Vue实例（虚拟DOM节点）
  const app = new Vue({
    data: {
      url: req.url
    },
    // 编写模板HTML的内容
    template: `<div>访问的 URL 是： {{ url }}</div>`
  })

  // renderToString 是把Vue实例转化为真实DOM的关键方法
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    // 把渲染出来的真实DOM字符串插入HTML模板中
    res.end(`
      <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})

server.listen(8080)
```

### 总结

重要过程：

1. renderToString() 方法；
2. 把转化结果“塞”进模板里的这一步。

在虚拟 DOM“横行”的当下，服务端渲染不再是早年 JSP 里简单粗暴的字符串拼接过程，它还要求这一端要**具备将虚拟 DOM 转化为真实 DOM 的能力**。

与其说是“把 JS 在服务器上先跑一遍”，不如说是“把 Vue、React 等框架代码先在 Node 上跑一遍”。

### 优缺点

**优点：**

SSR主要用于解决单页应用首屏渲染慢以及SEO问题

**缺点：**
提高了服务器压力，吃CPU，内存等资源，优化不好提高成本
