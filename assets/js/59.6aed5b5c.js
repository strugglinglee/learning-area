(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{503:function(t,e,v){"use strict";v.r(e);var a=v(65),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"组成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组成"}},[t._v("#")]),t._v(" 组成")]),t._v(" "),v("ol",[v("li",[v("strong",[t._v("一个开发服务器")]),t._v("，它基于"),v("code",[t._v("原生ES模块")]),t._v("，提供了丰富的内建功能，如速度快到惊人的模块热更新（HMR）")]),t._v(" "),v("li",[v("strong",[t._v("一套构建指令")]),t._v("，使用"),v("code",[t._v("Rollup")]),t._v("打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源")])]),t._v(" "),v("blockquote",[v("p",[t._v("开箱即用的配置，它的"),v("code",[t._v("插件API")]),t._v("和"),v("code",[t._v("JavaScript API")]),t._v("带来了高度的可扩展性，并有完整的类型支撑")])]),t._v(" "),v("h3",{attrs:{id:"浏览器支持"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器支持"}},[t._v("#")]),t._v(" 浏览器支持")]),t._v(" "),v("ul",[v("li",[t._v("在script标签上支持"),v("code",[t._v("原生ESM")])]),t._v(" "),v("li",[t._v("和"),v("code",[t._v("原生ESM动态导入")])])]),t._v(" "),v("blockquote",[v("p",[t._v("传统浏览器可以通过插件"),v("code",[t._v("@vitejs/plugin-legacy")]),t._v("支持")])]),t._v(" "),v("h3",{attrs:{id:"创建项目"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[t._v("#")]),t._v(" 创建项目")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("# npm 6.x\nnpm init vite@latest my-vue-app --template vue\n\n# npm 7+, 需要额外的双横线：\nnpm init vite@latest my-vue-app -- --template vue\n\n# yarn\nyarn create vite my-vue-app --template vue\n")])])]),v("p",[t._v("create-vite 是一个快速生成主流框架基础模板的工具")]),t._v(" "),v("h3",{attrs:{id:"index-html-在项目最外层"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#index-html-在项目最外层"}},[t._v("#")]),t._v(" index.html 在项目最外层")]),t._v(" "),v("p",[t._v("index.html 在项目最外层而不是在 public 文件夹内。")]),t._v(" "),v("blockquote",[v("p",[t._v("在开发期间 Vite 是一个服务器，而 index.html 是该 Vite 项目的入口文件。")])]),t._v(" "),v("p",[t._v("Vite 将 index.html 视为源码和模块图的一部分。\nVite 解析 "),v("code",[t._v('<script type="module" src="...">')]),t._v("，这个标签指向你的 JavaScript 源码。")]),t._v(" "),v("p",[t._v("甚至内联引入 JavaScript 的 "),v("code",[t._v('<script type="module">')]),t._v(" 和引用 CSS 的 "),v("code",[t._v("<link href>")]),t._v(" 也能利用 Vite 特有的功能被解析。")]),t._v(" "),v("p",[t._v("另外，index.html 中的 URL 将被自动转换，因此不再需要 %PUBLIC_URL% 占位符了。")]),t._v(" "),v("p",[t._v("与静态 HTTP 服务器类似，Vite 也有 “根目录” 的概念，即服务文件的位置，在接下来的文档中你将看到它会以"),v("code",[t._v("<root>")]),t._v("代称。源码中的绝对 URL 路径将以项目的 “根” 作为基础来解析，因此你可以像在普通的静态文件服务器上一样编写代码（并且功能更强大！）。Vite 还能够处理依赖关系，解析处于根目录外的文件位置，这使得它即使在基于 monorepo 的方案中也十分有用。")]),t._v(" "),v("p",[t._v("Vite 也支持多个 .html 作入口点的 多页面应用模式。")]),t._v(" "),v("h2",{attrs:{id:"esbuild"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#esbuild"}},[t._v("#")]),t._v(" esbuild")]),t._v(" "),v("p",[t._v("对非常基础的使用来说，使用 Vite 开发和使用一个静态文件服务器并没有太大区别。\n然而，Vite 还通过原生 ESM 导入提供了许多主要用于打包场景的增强功能。")]),t._v(" "),v("p",[t._v("原生 ES 导入不支持下面这样的裸模块导入，上面的代码会在浏览器中抛出一个错误。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("import { someMethod } from 'my-dep'\n")])])]),v("p",[t._v("Vite 将会检测到所有被加载的源文件中的此类裸模块导入，并执行以下操作:")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("预构建 它们以加快页面加载速度，并将 CommonJS / UMD 转换为 ESM 格式。预构建这一步由 esbuild 执行，这使得 Vite 的冷启动时间比任何基于 JavaScript 的打包器都要快得多。")])]),t._v(" "),v("li",[v("p",[t._v("重写导入为合法的 URL，例如 /node_modules/.vite/my-dep.js?v=f3sf2ebd 以便浏览器能够正确导入它们。")])])])])}),[],!1,null,null,null);e.default=_.exports}}]);