(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{391:function(n,t,a){"use strict";a.r(t);var e=a(13),s=Object(e.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[n._v("通过命中缓存，以降低网络流量，使网站加载速度更快。\n然而，如果我们在部署新版本时不更改资源的文件名，浏览器可能会认为它没有被更新，就会使用它的缓存版本。由于缓存的存在，当你需要获取新的代码时，就会显得很棘手。")]),n._v(" "),t("p",[n._v("通过必要的配置，以确保 webpack 编译生成的文件能够被客户端缓存，而在文件内容变化(版本更新)后，能够请求到新的文件。")]),n._v(" "),t("h3",{attrs:{id:"output-filenames"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-filenames"}},[n._v("#")]),n._v(" output filenames")]),n._v(" "),t("p",[n._v("通过使用 output.filename 进行文件名替换，可以确保浏览器获取到修改后的文件。\n[hash] 替换可以用于在文件名中包含一个构建相关(build-specific)的 hash，\n但是更好的方式是使用 [chunkhash] 替换，在文件名中包含一个 chunk 相关(chunk-specific)的哈希。")]),n._v(" "),t("h3",{attrs:{id:"提取模版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提取模版"}},[n._v("#")]),n._v(" 提取模版")]),n._v(" "),t("p",[n._v("就像我们之前从代码分离了解到的，CommonsChunkPlugin 可以用于将模块分离到单独的文件中。然而 CommonsChunkPlugin 有一个较少有人知道的功能是，能够在每次修改后的构建结果中，将 webpack 的样板(boilerplate)和 manifest 提取出来。通过指定 entry 配置中未用到的名称，此插件会自动将我们需要的内容提取到单独的包中")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("optimization: {\n  runtimeChunk: {\n    name: 'manifest',\n  },\n  splitChunks: {\n    maxInitialRequests: 10,\n    cacheGroups: {\n      common: {\n        name: 'common',\n        //chunks: 'all'\n      },\n    },\n  },\n},\n")])])]),t("p",[n._v("将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。\n因此通过实现以上步骤，利用客户端的长效缓存机制，可以通过命中缓存来消除请求，并减少向服务器获取资源，同时还能保证客户端代码和服务器端代码版本一致。\n这可以通过使用新的 entry(入口) 起点，以及再额外配置一个 CommonsChunkPlugin 实例的组合方式来实现")])])}),[],!1,null,null,null);t.default=s.exports}}]);