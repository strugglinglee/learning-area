导入导出模块的方法

### CommonJS

- 同步导入模块
- 导入时会给你一个导入对象的副本
- 不能在浏览器中工作，必须经过转换和打包

```
//import 引入
const A = require ('./a.js')

// a.js export导出
module.exports = function A (n){
  //...
}
```

### AMD(asynchronously)

- 异步导入模块
- 提议时，AMD是为前端而做（CJS是后端）
- 语法不如CJS直观

```
define(['dep1', 'dep2'], function (dep1, dep2) {
    //Define the module value by returning a value.
    return function () {};
});
```

### UMD(universal module definition)

```
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery", "underscore"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"), require("underscore"));
    } else {
        root.Requester = factory(root.$, root._);
    }
}(this, function ($, _) {
    // this is where I defined my module implementation

    var Requester = { // ... };

    return Requester;
}));
```

- 在前后端都通用(universal)
- 与CJS和AMD不同，UMD更像是一种配置多个模块系统的模式
- 使用Rollup/webpack之类的打包器时，UMD通常用作备用模块


### ESM

代表`ES`模块，是js提出的实现一个标准模块系统的方案。

- 在很多现代浏览器可以使用
- 兼具两个优点：具有`CJS的简单语法`和`AMD的异步`
- 得益于ES6的静态模块结构，可以进行tree shaking
- ESM允许像Rollup这样的打包器，删除不必要的代码，减少代码包可以获得更快的加载
- 可以在html中调用
  ```
  <script type="module">
    import {func1} from 'my-lib
  </script>
  ```

**由于 ESM 具有简单的语法，异步特性和可摇树性，因此它是最好的模块化方案**
UMD 随处可见，通常在 ESM 不起作用的情况下用作备用
CJS 是同步的，适合后端
AMD 是异步的，适合前端