### esbuild

是一个js Bundler打包和压缩工具，可以将js和ts代码打包分发在网页上运行

### 支持的功能

- 加载器
- 压缩
- 打包
- tree shaking
- source map生成
- 将jsx和较新的js语法移植到ES6
- ......

### esbulid会比其他的打包工具快至少100倍

#### 原因

- `Go语言`编写而成，可以编译成本地代码
- 解析，生成最终文件和生成source maps全部完全并行化
- 无需昂贵的数据转换，很少几步可以完成所有操作
- 该库以提高编译速度为编写代码时的第一原则，并尽量避免不必要的内存分配

### esbuild API

#### transform

可以用于转化js/tsx/ts等文件，然后输出为旧语法的js

#### build

build 实现了 transform 的能力，即代码转化，并且它还会将转换后的代码压缩并生成 .js 文件到指定 output 目录

#### buildSync

相比较 build 而言，它是同步的构建方式，即如果使用 build 我们需要借助 async await 来实现同步调用，而使用 buildSync 可以直接实现同步调用

#### service

为了解决调用上述 API 时都会创建一个子进行来完成的问题，如果存在多次调用 API 的情况出现，那么就会出现性能上的浪费

本质封装了 build、transform、stop 函数，只是不同于单独调用它们，Service 底层的实现是一个长期存在可供共享的子进程。