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
        title: "VUE3.0",
        path: "/vue3.0",
        collapsable: true,
        children: [
          {
            title: "组合式api",
            path: "/vue3.0/docs/组合式api.md",
          },
          {
            title: "SFC",
            path: "/vue3.0/docs/SFC.md",
          },
        ],
      },
      {
        title: "vue",
        path: "/vue",
        collapsable: true,
        children: [
          {
            title: "文档学习",
            path: "/vue/docs/vue官方文档学习.md",
          },
        ],
      },
      {
        title: "代码规范",
        path: "/代码规范",
        collapsable: true,
        children: [
          {
            title: "eslint",
            path: "/代码规范/eslint.md",
          },
          {
            title: "prettier",
            path: "/代码规范/prettier.md",
          },
        ],
      },
      {
        title: "第三方插件使用",
        children: [
          {
            title: "moment",
            path: "/第三方插件使用/moment.md",
          },
        ],
      },
      {
        title: "前端工程化",
        // path: "/前端工程化",
        collapsable: true,
        children: [
          {
            title: "基础",
            path: "/前端工程化/base.md",
          },
        ],
      },
      {
        title: "图形学",
        path: "/图形学",
        collapsable: true,
        children: [
          {
            title: "图片生成方案",
            path: "/图形学/canvas/图片生成方案.md",
          },
        ],
      },
      {
        title: "效率提升",
        // path: "/效率提升",
        collapsable: true,
        children: [
          {
            title: "代码片段",
            path: "/效率提升/代码片段.md",
          },
          {
            title: "vscode",
            path: "/效率提升/vscode.md",
          },
        ],
      },
      {
        title: "重要知识整理",
        collapsable: true,
        // path: "/图形学",
        children: [
          {
            title: "事件循环",
            path: "/重要知识整理/事件循环/事件循环.md",
          },
          {
            title: "promise",
            path: "/重要知识整理/promise/promise.md",
          },
          {
            title: "类与继承",
            path: "/重要知识整理/类与继承.md",
          },
          {
            title: "权限控制",
            path: "/重要知识整理/权限控制.md",
          },
          {
            title: "class",
            path: "/重要知识整理/class.md",
          },
          {
            title: "vue指令",
            path: "/重要知识整理/vue指令.md",
          },
          {
            title: "webpack和vite的区别",
            path: "/重要知识整理/webpack和vite的区别.md",
          },
        ],
      },
      {
        title: "性能优化",
        // path: "/图形学",
        collapsable: true,
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
        title: "组件库",
        // path: "/图形学",
        children: [
          {
            title: "收藏组件库",
            path: "/组件库/收藏组件库.md",
          },
        ],
      },
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
        title: "ES6+",
        // path: "/es6+",
        children: [
          {
            title: "proxy",
            path: "/es6+/docs/proxy.md",
          },
          {
            title: "flex",
            path: "/es6+/docs/Set&Map.md",
          },
        ],
      },
      {
        title: "docker",
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
        title: "git",
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
        title: "ideas",
        // path: "/ideas",
        children: [
          {
            title: "配置化的思考",
            path: "/ideas/配置化.md",
          },
        ],
      },
      {
        title: "node",
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
    ],
  },
};
