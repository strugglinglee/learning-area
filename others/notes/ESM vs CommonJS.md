[es6教程](https://es6.ruanyifeng.com/#docs/module-loader#ES6-%E6%A8%A1%E5%9D%97%E4%B8%8E-CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%B7%AE%E5%BC%82)

### JavaScript 的两种模块

1. 一种是 ES6 模块，简称 ESM；
2. 另一种是 CommonJS 模块，简称 CJS。

> CommonJS 模块是 Node.js 专用的，与 ES6 模块不兼容。
> 语法上面，两者最明显的差异是，CommonJS 模块使用require()和module.exports，ES6 模块使用import和export。
> 它们采用不同的加载方案。从 Node.js v13.2 版本开始，Node.js 已经默认打开了 ES6 模块支持。

### 后缀名

Node.js 要求 ES6 模块采用.mjs后缀文件名。也就是说，只要脚本文件里面使用import或者export命令，那么就必须采用.mjs后缀名。
Node.js 遇到.mjs文件，就认为它是 ES6 模块，默认启用严格模式，不必在每个模块文件顶部指定"use strict"。

如果不希望将后缀名改成.mjs，可以在项目的package.json文件中，指定type字段为module。

**.mjs文件总是以 ES6 模块加载，.cjs文件总是以 CommonJS 模块加载，.js文件的加载取决于package.json里面type字段的设置。**

### CommonJS和ESM的三个重大差异

- CommonJS 模块输出的是一个`值的拷贝`，ES6 模块输出的是`值的引用`。
- CommonJS 模块是`运行时加载`，ES6 模块是`编译时输出接口`。
- CommonJS 模块的`require()是同步加载模块`，ES6 模块的`import命令是异步加载`，有一个`独立的模块依赖`的解析阶段。

第二个差异是因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。
而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

> ES6 模块的import命令可以加载 CommonJS 模块，但是只能整体加载，不能只加载单一的输出项。

### 同时支持 CommonJS 和 ES6 两种格式

如果原始模块是 ES6 格式，那么需要给出一个整体输出接口，比如export default obj，使得 CommonJS 可以用import()进行加载。