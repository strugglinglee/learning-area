module.exports = {
  title: "阿李贝斯的学习文档",
  description: "偶尔学习，经常摸鱼",
  base: "/learning-area/",
  // theme: 'reco',
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "github",
        link: "https://github.com/strugglinglee/learning-area",
      },
    ],
    sidebar: [
      {
        title: "CSS",
        path: "/css",
        children: [
          {
            title: "文字对齐",
            path: "/css/line-height.md",
          },
          {
            title: "flex",
            path: "/css/flex.md",
          },
          {
            title: "grid",
            path: "/css/grid.md",
          },
        ],
      },
      {
        title: "JS",
        path: "/javascript",
        children: [
          {
            title: "ES6+",
            // path: "/es6+",
            children: [
              {
                title: "proxy",
                path: "/javascript/docs/es6+/proxy.md",
              },
              {
                title: "Set&Map",
                path: "/javascript/docs/es6+/Set&Map.md",
              },
            ],
          },
          {
            title: "事件循环",
            path: "/javascript/docs/事件循环/eventLoop.md",
          },
          {
            title: "变量、作用域和内存",
            path: "/javascript/docs/变量、作用域和内存.md",
          },
          {
            title: "操作符",
            path: "/javascript/docs/操作符.md",
          },
          {
            title: "对象、类与面向对象",
            path: "/javascript/docs/对象、类与面向对象.md",
          },
          {
            title: "类与继承",
            path: "/javascript/docs/类与继承.md",
          },
          {
            title: "数据类型",
            path: "/javascript/docs/数据类型.md",
          },
          {
            title: "class",
            path: "/javascript/docs/class.md",
          },
          {
            title: "notes",
            path: "/javascript/docs/notes.md",
          },
          {
            title: "Object类型",
            path: "/javascript/docs/Object类型.md",
          },
          {
            title: "promise",
            path: "/javascript/docs/promise.md",
          },
        ],
      },
      {
        title: "VUE",
        path: "/vue",
        // collapsable: true,
        children: [
          {
            title: "VUE3.0",
            path: "/vue/vue3.0",
            // collapsable: true,
            children: [
              {
                title: "组合式api",
                path: "/vue/vue3.0/docs/组合式api.md",
              },
              {
                title: "SFC",
                path: "/vue/vue3.0/docs/SFC.md",
              },
            ],
          },
          {
            title: "文档学习",
            path: "/vue/docs/vue官方文档学习.md",
          },
          {
            title: "vue指令",
            path: "/vue/docs/vue指令.md",
          },
        ],
      },
      {
        title: "Git",
        path: "/git",
        children: [
          {
            title: "commit提交规范",
            path: "/git/docs/commit提交规范.md",
          },
          {
            title: "git-hooks",
            path: "/git/docs/git-hooks.md",
          },
        ],
      },
      {
        title: "前端工程化",
        path: "/前端工程化",
        // collapsable: true,
        children: [
          {
            title: "代码规范",
            path: "/前端工程化/代码规范",
            // collapsable: true,
            children: [
              {
                title: "eslint",
                path: "/前端工程化/代码规范/eslint.md",
              },
              {
                title: "prettier",
                path: "/前端工程化/代码规范/prettier.md",
              },
            ],
          },
          {
            title: "第三方插件使用",
            children: [
              {
                title: "moment",
                path: "/前端工程化/第三方插件使用/moment.md",
              },
            ],
          },
        ],
      },
      {
        title: "图形学",
        path: "/图形学",
        // collapsable: true,
        children: [
          {
            title: "图片生成方案",
            path: "/图形学/canvas/图片生成方案.md",
          },
        ],
      },
      {
        title: "业务相关",
        path: "/业务相关",
        // collapsable: true,
        children: [
          {
            title: "微信小程序",
            children: [
              {
                title: "小程序登录逻辑",
                path: "/业务相关/wechat/小程序登录逻辑.md",
              },
              {
                title: "小程序与普通网页开发的区别",
                path: "/业务相关/wechat/小程序与普通网页开发的区别.md",
              },
            ],
          },
          {
            title: "权限控制",
            path: "/业务相关/权限控制.md",
          },
        ],
      },
      {
        title: "性能优化",
        // path: "/图形学",
        // collapsable: true,
        children: [
          {
            title: "浏览器运行机制",
            path: "/性能优化/浏览器运行机制.md",
          },
          {
            title: "cdn",
            path: "/性能优化/cdn.md",
          },
          {
            title: "DOM优化",
            path: "/性能优化/DOM优化.md",
          },
          {
            title: "ssr",
            path: "/性能优化/ssr.md",
          },
        ],
      },
      {
        title: "Docker",
        path: "/docker",
        children: [
          {
            title: "常用命令",
            path: "/docker/docs/常用命令.md",
          },
          {
            title: "前置知识",
            path: "/docker/docs/基础知识补充.md",
          },
          {
            title: "基础",
            path: "/docker/docs/base.md",
          },
          {
            title: "Container",
            path: "/docker/docs/Container.md",
          },
        ],
      },
      {
        title: "Node.js",
        path: "/node",
        children: [
          {
            title: "深入浅出node.js",
            path: "/node/深入浅出node.js",
            children: [
              {
                title: "内存控制",
                path: "/node/深入浅出node.js/内存控制.md",
              },
              {
                title: "异步编程",
                path: "/node/深入浅出node.js/异步编程.md",
              },
              {
                title: "异步并发控制",
                path: "/node/深入浅出node.js/异步并发控制.md",
              },
            ],
          },
        ],
      },
      {
        title: "Vite",
        path: "/vite",
        children: [
          {
            title: "vite基础",
            path: "/vite/docs/基础.md",
          },
          {
            title: "webpack和vite的区别",
            path: "/vite/docs/webpack和vite的区别.md",
          },
        ],
      },
      {
        title: "其他",
        // collapsable: true,
        path: "/others",
        children: [
          {
            title: "灵感想法",
            // path: "/others/ideas",
            children: [
              {
                title: "配置化",
                path: "/others/ideas/配置化/1.md",
              },
            ],
          },
          {
            title: "名词解释",
            // path: "/others/名词解释",
            children: [
              {
                title: "基础",
                path: "/others/名词解释/基础.md",
              },
              {
                title: "登录认证相关",
                path: "/others/名词解释/登录认证相关.md",
              },
              {
                title: "代码分割",
                path: "/others/名词解释/代码分割.md",
              },
              {
                title: "模块引入方式",
                path: "/others/名词解释/模块引入方式.md",
              },
              {
                title: "有限状态机",
                path: "/others/名词解释/有限状态机.md",
              },
              {
                title: "CJS, AMD, UMD 和 ESM",
                path: "/others/名词解释/CJS, AMD, UMD 和 ESM.md",
              },
              {
                title: "FLUX架构",
                path: "/others/名词解释/FLUX架构.md",
              },
              {
                title: "git-alias",
                path: "/others/名词解释/git-alias.md",
              },
              {
                title: "markdown语法",
                path: "/others/名词解释/markdown语法.md",
              },
              {
                title: "esbuild",
                path: "/others/名词解释/esbuild.md",
              },
            ],
          },
          {
            title: "效率提升",
            // path: "/others/效率提升",
            children: [
              {
                title: "snippets基本语法",
                path: "/others/效率提升/snippets基本语法.md",
              },
            ],
          },
          {
            title: "vscode相关",
            children: [],
          },
          {
            title: "vue指令",
            path: "/others/收藏组件库.md",
          },
          {
            title: "oh-my-zsh",
            path: "/others/oh-my-zsh/oh-my-zsh.md",
          },
        ],
      },
    ],
  },
};
