### tree-shaking

通常用于移除 js 上下文中的未引用代码（dead-coding）。

它依赖于 ES2015 模块系统中的静态结构特性，例如`import`和`export`

使用tree-shaking需要做到：

- 使用 ES2015 模块语法（即 import 和 export）。
- 在项目 package.json 文件中，添加一个 "sideEffects" 入口。
- 引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。

#### package.json 的 "sideEffects"

**副作用:**
在导入时会执行特殊行为的代码，而不是仅仅暴露一个 export 或多个 export。举例说明，例如 polyfill，它影响全局作用域，并且通常不提供 export。

```
//告知 webpack，它可以安全地删除未用到的 export 导出
{
  "name": "your-project",
  "sideEffects": false
}
```

如果代码中确实有一些副作用，可以改为提供一个数组:
数组方式支持相关文件的相对路径、绝对路径和 glob 模式。它在内部使用 micromatch。

```
"sideEffects": [
  "./src/some-side-effectful-file.js",
  "*.css"
]
```

> 注意，任何导入的文件都会受到 tree shaking 的影响。这意味着，如果在项目中使用类似 css-loader 并导入 CSS 文件，则需要将其添加到 side effect 列表中，以免在生产模式中无意中将它删除

#### 压缩输出

通过 import 和 export 语法，找出那些需要删除的“未使用代码(dead code)”

为了在 bundle 中删除它们。我们将使用 -p(production) 这个 webpack 编译标记，来启用 **uglifyjs** 压缩插件。
> 注意，--optimize-minimize 标记也会在 webpack 内部调用 UglifyJsPlugin。
> 从 webpack 4 开始，也可以通过 "mode" 配置选项轻松切换到压缩输出，只需设置为 "production"