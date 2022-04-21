(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{472:function(v,_,e){"use strict";e.r(_);var s=e(62),t=Object(s.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h4",{attrs:{id:"单线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单线程"}},[v._v("#")]),v._v(" 单线程")]),v._v(" "),e("p",[v._v("单线程的最大好处：")]),v._v(" "),e("p",[v._v("不用像多线程编程那样处处在意状态的同步问题，这里没有死锁的存在，也没有线程上下文交换所带来的性能上的开销。")]),v._v(" "),e("p",[v._v("单线程的缺点：")]),v._v(" "),e("ul",[e("li",[v._v("无法利用多核CPU。")]),v._v(" "),e("li",[v._v("错误会引起整个应用退出，应用的健壮性值得考验。")]),v._v(" "),e("li",[v._v("大量计算占用CPU导致无法继续调用异步I/O。")])]),v._v(" "),e("p",[e("code",[v._v("Web Workers")]),v._v("能够创建工作线程来进行计算，以解决JavaScript大计算阻塞UI渲染的问题。\n工作线程为了不阻塞主线程，通过消息传递的方式来传递运行结果，这也使得工作线程不能访问到主线程中的UI。")]),v._v(" "),e("p",[v._v("Node采用了与Web Workers相同的思路来解决单线程中大计算量的问题："),e("code",[v._v("child_process")]),v._v("。")]),v._v(" "),e("p",[v._v("在Node中引入模块，需要经历如下3个步骤。")]),v._v(" "),e("ol",[e("li",[v._v("路径分析")]),v._v(" "),e("li",[v._v("文件定位")]),v._v(" "),e("li",[v._v("编译执行")])]),v._v(" "),e("p",[v._v("在Node中，模块分为两类：")]),v._v(" "),e("p",[v._v("一类是Node提供的模块，称为核心模块；\n另一类是用户编写的模块，称为文件模块。")]),v._v(" "),e("blockquote",[e("p",[v._v("在Node源代码的编译过程中，编译进了二进制执行文件。在Node进程启动时，部分核心模块就被直接加载进内存中，所以这部分核心模块引入时，文件定位和编译执行这两个步骤可以省略掉，并且在路径分析中优先判断，所以它的加载速度是最快的。\n文件模块则是在运行时动态加载，需要完整的路径分析、文件定位、编译执行过程，速度比核心模块慢。")])]),v._v(" "),e("p",[v._v("我们将那些由纯C/C++编写的部分统一称为内建模块，因为它们通常不被用户直接调用。Node的buffer、crypto、evals、fs、os等模块都是部分通过C/C++编写的。")]),v._v(" "),e("h3",{attrs:{id:"包与npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包与npm"}},[v._v("#")]),v._v(" 包与NPM")]),v._v(" "),e("p",[v._v("包和NPM是将模块联系起来的一种机制")]),v._v(" "),e("h4",{attrs:{id:"commmonjs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commmonjs"}},[v._v("#")]),v._v(" CommmonJS")]),v._v(" "),e("p",[v._v("CommmonJS包规范：")]),v._v(" "),e("ul",[e("li",[v._v("包结构（用于组织包中的各种文件）")]),v._v(" "),e("li",[v._v("包描述文件（用于描述包的相关信息，以供外部读取分析）")])]),v._v(" "),e("blockquote",[e("p",[v._v("包实际上是一个存档文件，即一个目录直接打包为"),e("code",[v._v(".zip")]),v._v("或"),e("code",[v._v("tar.gz")]),v._v("格式的文件，安装后解压还原为目录")])]),v._v(" "),e("h5",{attrs:{id:"包结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包结构"}},[v._v("#")]),v._v(" 包结构")]),v._v(" "),e("ul",[e("li",[v._v("package.json：包描述文件。")]),v._v(" "),e("li",[v._v("bin：用于存放可执行二进制文件的目录。")]),v._v(" "),e("li",[v._v("lib：用于存放JavaScript代码的目录。")]),v._v(" "),e("li",[v._v("doc：用于存放文档的目录。")]),v._v(" "),e("li",[v._v("test：用于存放单元测试用例的代码。")])]),v._v(" "),e("h5",{attrs:{id:"包描述文件与npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包描述文件与npm"}},[v._v("#")]),v._v(" 包描述文件与NPM")]),v._v(" "),e("h6",{attrs:{id:"package-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#package-json"}},[v._v("#")]),v._v(" package.json")]),v._v(" "),e("p",[v._v("包描述文件用于表达非代码相关的信息，它是一个JSON格式的文件——package.json，位于包的根目录下，是包的重要组成部分。")]),v._v(" "),e("p",[e("code",[v._v("NPM")]),v._v("的所有行为都与包描述文件的字段息息相关。")]),v._v(" "),e("ul",[e("li",[e("p",[e("strong",[v._v("name。包名")]),v._v("。规范定义它需要由小写的字母和数字组成，可以包含.、_和-，但不允许出现空格。包名必须是唯一的，以免对外公布时产生重名冲突的误解。除此之外，NPM还建议不要在包名中附带上node或js来重复标识它是JavaScript或Node模块。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("description。包简介")]),v._v("。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("version。版本号")]),v._v("。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("keywords。关键词数组")]),v._v("，NPM中主要用来做分类搜索。一个好的关键词数组有利于用户快速找到你编写的包。")])]),v._v(" "),e("li",[e("p",[v._v("maintainers。包维护者列表。每个维护者由name、email和web这3个属性组成。NPM通过该属性进行权限认证。")])]),v._v(" "),e("li",[e("p",[v._v("contributors。贡献者列表。列表中的第一个贡献应当是包的作者本人。它的格式与维护者列表相同。")])]),v._v(" "),e("li",[e("p",[v._v("bugs。一个可以反馈bug的网页地址或邮件地址。")])]),v._v(" "),e("li",[e("p",[v._v("licenses。当前包所使用的许可证列表，表示这个包可以在哪些许可证下使用。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("repositories。托管源代码的位置列表")]),v._v("，表明可以通过哪些方式和地址访问包的源代码。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("dependencies。使用当前包所需要依赖的包列表")]),v._v("。这个属性十分重要，NPM会通过这个属性帮助")])]),v._v(" "),e("li",[e("p",[v._v("engine。支持的JavaScript引擎列表，有效的引擎取值包括ejs、flusspferd、gpsee、jsc、spidermonkey、narwhal、node和v8。")])]),v._v(" "),e("li",[e("p",[v._v("builtin。标志当前包是否是内建在底层系统的标准组件。")])]),v._v(" "),e("li",[e("p",[v._v("directories。包目录说明。")])]),v._v(" "),e("li",[e("p",[v._v("implements。实现规范的列表。标志当前包实现了CommonJS的哪些规范。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("scripts。脚本说明对象")]),v._v("。它主要被包管理器用来安装、编译、测试和卸载包。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("author。包作者")]),v._v("。")])]),v._v(" "),e("li",[e("p",[v._v("bin。一些包作者希望包可以作为命令行工具使用。配置好bin字段后，通过npm install package_name -g命令可以将脚本添加到执行路径中，之后可以在命令行中直接执行。前面的node-gyp即是这样安装的。通过-g命令安装的模块包称为全局模式。")])]),v._v(" "),e("li",[e("p",[v._v("main。模块引入方法require()在引入包时，会优先检查这个字段，并将其作为包中其余模块的入口。如果不存在这个字段，require()方法会查找包目录下的index.js、index.node、index.json文件作为默认入口。")])]),v._v(" "),e("li",[e("p",[e("strong",[v._v("devDependencies。一些模块只在开发时需要依赖")]),v._v("。配置这个属性，可以提示包的后续开发者安装依赖包。")])])]),v._v(" "),e("h4",{attrs:{id:"npm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[v._v("#")]),v._v(" NPM")]),v._v(" "),e("p",[e("strong",[v._v("CommmonJS包规范是理论，NPM是其中的一种实践。")]),v._v("\n对于Node而言，NPM帮助完成了第三方模块的发布、安装和依赖等，借助NPM，Node与第三方模块之间形成了很好的一个生态系统。")]),v._v(" "),e("h4",{attrs:{id:"包发布流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#包发布流程"}},[v._v("#")]),v._v(" 包发布流程")]),v._v(" "),e("ul",[e("li",[v._v("编写模块")]),v._v(" "),e("li",[v._v("初始化包描述文件（npm init 生成package.json）")])])])}),[],!1,null,null,null);_.default=t.exports}}]);