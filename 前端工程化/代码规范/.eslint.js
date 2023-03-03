module.exports = {
  /**
   * 解析器设定
   *
   * ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器，只要该解析器符合下列要求：
   * - 它必须是一个 Node 模块，可以从它出现的配置文件中加载。通常，这意味着应该使用 npm 单独安装解析器包。
   * - 它必须符合 parser interface。
   * 注意，即使满足这些兼容性要求，也不能保证一个外部解析器可以与 ESLint 正常配合工作，ESLint 也不会修复与其它解析器不兼容的相关 bug
   */
  parser: "babel-eslint",
  // 解析器选项(设置解析器选项能帮助 ESLint 确定什么是解析错误，所有语言选项默认都是 false)
  parserOptions: {
    /**
     * 默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本，你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
     *
     * 支持ES6语法 (并不意味着同时支持新的 ES6 全局变量或类型，需要设置env.es6)
     */
    ecmaVersion: 6,
    // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
    sourceType: "module",
    /**
     * ecmaFeatures - 这是个对象，表示你想使用的额外的语言特性:
     *
     * - globalReturn - 允许在全局作用域下使用 return 语句
     * - impliedStrict - 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
     * - jsx - 启用 JSX
     * - experimentalObjectRestSpread - 启用实验性的 object rest/spread properties 支持。(重要：这是一个实验性的功能,在未来可能会有明显改变。 建议你写的规则 不要 依赖该功能，除非当它发生改变时你愿意承担维护成本。)
     */
    ecmaFeatures: {
      jsx: true,
    },
  },
  /**
   * 一个环境定义了一组预定义的全局变量。可用的环境包括
   *
   * browser - 浏览器环境中的全局变量。
   * node - Node.js 全局变量和 Node.js 作用域。
   * commonjs - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
   * shared-node-browser - Node.js 和 Browser 通用全局变量。
   * es6 - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
   * worker - Web Workers 全局变量。
   * amd - 将 require() 和 define() 定义为像 amd 一样的全局变量。
   * mocha - 添加所有的 Mocha 测试全局变量。
   * jasmine - 添加所有的 Jasmine 版本 1.3 和 2.0 的测试全局变量。
   * jest - Jest 全局变量。
   * phantomjs - PhantomJS 全局变量。
   * protractor - Protractor 全局变量。
   * qunit - QUnit 全局变量。
   * jquery - jQuery 全局变量。
   * prototypejs - Prototype.js 全局变量。
   * shelljs - ShellJS 全局变量。
   * meteor - Meteor 全局变量。
   * mongo - MongoDB 全局变量。
   * applescript - AppleScript 全局变量。
   * nashorn - Java 8 Nashorn 全局变量。
   * serviceworker - Service Worker 全局变量。
   * atomtest - Atom 测试全局变量。
   * embertest - Ember 测试全局变量。
   * webextensions - WebExtensions 全局变量。
   * greasemonkey - GreaseMonkey 全局变量。
   *
   * 这些环境并不是互斥的，所以你可以同时定义多个。可以在源文件里、在配置文件中或使用 命令行 的 --env 选项来指定环境
   */
  env: {
    //脚本目标的运行环境
    browser: true,
    node: true,
    es6: true, //自动启用es6语法
    commonjs: true,
    // 如果你想在一个特定的插件中使用一种环境，确保提前在 plugins 数组里指定了插件名，然后在 env 配置中不带前缀的插件名后跟一个 / ，紧随着环境名
    "example/custom": true,
  },
  /**
   * 可共享的配置 
   * 是一个 npm 包，它输出一个配置对象
   * 
   * extends 属性值可以是：
   * 指定配置的字符串(配置文件的路径、可共享配置的名称、eslint:recommended 或 eslint:all)
   * 字符串数组：每个配置继承它前面的配置
   * extends 属性值可以是到基本配置文件的绝对路径，也可以是相对路径
   * extends 属性值可以是 "eslint:all"，启用当前安装的 ESLint 中所有的核心规则
   */
  extends: ["plugin:prettier/recommended"],
  /**
   *
   * ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一
   * - "off" 或 0 - 关闭规则
   * - "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
   * - "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
  /**
   * 插件 支持使用第三方插件
   * 是一个 npm 包，通常输出规则 使用插件之前，你必须使用 npm 安装它
   * 在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。
   *
   * 插件可以提供处理器。处理器可以从另一种文件中提取 JavaScript 代码，然后让 ESLint 检测 JavaScript 代码。或者处理器可以在预处理中转换 JavaScript 代码
   * 【注意】当指定来自插件的规则时，确保删除 eslint-plugin- 前缀。ESLint 在内部只使用没有前缀的名称去定位规则。
   */
  plugins: ["a-plugin"],
  // 若要在配置文件中指定处理器，请使用 processor 键，并使用由插件名和处理器名组成的串接字符串加上斜杠。例如，下面的选项启用插件 a-plugin 提供的处理器 a-processor：
  processor: "a-plugin/a-processor",
  // 要为特定类型的文件指定处理器，请使用 overrides 键和 processor 键的组合。例如，下面对 *.md 文件使用处理器 a-plugin/markdown
  overrides: [
    {
      files: ["*.md"],
      processor: "a-plugin/markdown",
    },
    // 若要禁用一组文件的配置文件中的规则，请使用 overrides 和 files
    {
      files: ["*-test.js", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
  /**
   * 当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。
   * 如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量
   *
   */
  globals: {
    var1: "writable", //  "writable" 以允许重写变量，或 "readonly" 不允许重写变量
    var2: "readonly",
    /** 可以使用字符串 "off" 禁用全局变量
     * 在大多数 ES2015 全局变量可用但 Promise 不可用的环境中，你可以使用以下配置:
     */
    Promise: "off",
    // 要启用no-global-assign规则来禁止对只读的全局变量进行修改
  },
  // 直接在 js 中定义
  /* global var1, var2 */
  /* global var1:writable, var2:writable */
  /**
   * 在配置文件添加共享设置。你可以添加 settings 对象到配置文件，它将提供给每一个将被执行的规则
   */
  settings: {
    sharedData: "Hello",
  },
};
