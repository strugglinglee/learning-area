### HMR（hot module replacement）

模块热替换，允许在运行时更新各种模块，而无需进行完全刷新

- 更新 webpack-dev-server 的配置
- 使用 webpack 内置的 HMR 插件

> 如果你使用了 webpack-dev-middleware 而没有使用 webpack-dev-server，请使用 webpack-hot-middleware package 包，以在你的自定义服务或应用程序上启用 HMR。

> 在实践过程中会有各种原因导致，代码更新了，但是页面表现像没有更新一样。还有很多其他地方可以轻松地让人犯错。幸运的是，存在很多 loader（其中一些在下面提到），使得模块热替换的过程变得更容易。

#### HMR修改样式表

> 借助于 style-loader 的帮助，CSS 的模块热替换实际上是相当简单的。当更新 CSS 依赖模块时，此 loader 在后台使用 module.hot.accept 来修补(patch) `<style>`标签。