### 管理资源

动态打包所有依赖（创建依赖图dependency graph）

除了js，还可以通过loader引入其他任何类型的文件。


### Manifest

通过 manifest，webpack 能够对「你的模块映射到输出 bundle 的过程」保持追踪
[深入了解Manifest]('https://www.webpackjs.com/concepts/manifest/')

### source map

需要准确追踪错误来自哪个源文件

js提供source map，将编译后的代码映射回原始源代码。如果一个错误来自于 b.js，source map 就会明确的告诉你。


### webpack-dev-server

每次要编译代码时，手动运行 npm run build 就会变得很麻烦
webpack-dev-server帮助你在代码发生变化后自动编译代码

#### 开启自动编译的其他方法

1. webpack's Watch Mode
    - package.json中添加一个用于启动 webpack 的观察模式的 npm script 脚本`"watch": "webpack --watch"`
    - 缺点:需要手动刷新浏览器
2. webpack-dev-server
    - 提供一个简单的web服务器，自动刷新浏览器
    - 使用步骤
      - `npm install --save-dev webpack-dev-server`
      - webpack.config.js中配置`devServer`
      - 添加脚本`"start": "webpack-dev-server --open"`
3. webpack-dev-middleware
    - 安装express和webpack-dev-middleware `npm install --save-dev express webpack-dev-middleware`
    - webpack.config.js->output->`publicPath: '/'`
    - 设置我们自定义的 express 服务 `touch server.js`
    - 添加脚本`"server": "node server.js"`

  > webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。
  > webpack-dev-server 在内部使用了它，同时，它也可以作为一个单独的包来使用，以便进行更多自定义设置来实现更多的需要。
