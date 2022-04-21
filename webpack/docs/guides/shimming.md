## [shimming](https://www.webpackjs.com/guides/shimming/)


### 处理不符合规范的模块
webpack 编译器(compiler)能够识别遵循 ES2015 模块语法、CommonJS 或 AMD 规范编写的模块。
然而，一些第三方的库(library)可能会引用一些全局依赖（例如 jQuery 中的 $）。
这些库也可能创建一些需要被导出的全局变量。这些“不符合规范的模块”就是 shimming 发挥作用的地方


### polyfills
shimming 另外一个使用场景就是，当你希望 polyfill 浏览器功能以支持更多用户时。
在这种情况下，你可能只想要将这些 polyfills 提供给到需要修补(patch)的浏览器（也就是实现按需加载）。

polyfills 虽然是一种模块引入方式，但是并不推荐在主 bundle 中引入 polyfills，因为这不利于具备这些模块功能的现代浏览器用户，会使他们下载体积很大、但却不需要的脚本文件。