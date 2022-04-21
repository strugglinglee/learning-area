(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{497:function(t,a,s){"use strict";s.r(a);var n=s(62),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue指令"}},[t._v("#")]),t._v(" Vue指令")]),t._v(" "),s("h2",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),s("p",[t._v("代码复用和抽象的主要形式是组件。")]),t._v(" "),s("p",[t._v("有的情况下，你仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。")]),t._v(" "),s("h2",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册一个全局自定义指令 `v-focus`")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("directive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'focus'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当被绑定的元素插入到 DOM 中时……")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("inserted")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 聚焦元素")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("directives")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指令的定义")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("inserted")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("el")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("focus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"钩子函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#钩子函数"}},[t._v("#")]),t._v(" 钩子函数")]),t._v(" "),s("p",[t._v("一个指令定义对象可以提供如下几个钩子函数 (均为可选)：")]),t._v(" "),s("h3",{attrs:{id:"bind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bind"}},[t._v("#")]),t._v(" bind")]),t._v(" "),s("p",[t._v("bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。")]),t._v(" "),s("h3",{attrs:{id:"inserted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inserted"}},[t._v("#")]),t._v(" inserted")]),t._v(" "),s("p",[t._v("inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。")]),t._v(" "),s("h3",{attrs:{id:"update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[t._v("#")]),t._v(" update")]),t._v(" "),s("p",[t._v("update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。")]),t._v(" "),s("h3",{attrs:{id:"componentupdated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#componentupdated"}},[t._v("#")]),t._v(" componentUpdated")]),t._v(" "),s("p",[t._v("componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。")]),t._v(" "),s("h3",{attrs:{id:"unbind"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unbind"}},[t._v("#")]),t._v(" unbind")]),t._v(" "),s("p",[t._v("unbind：只调用一次，指令与元素解绑时调用。")]),t._v(" "),s("p",[t._v("接下来我们来看一下钩子函数的参数 (即 el、binding、vnode 和 oldVnode)。")]),t._v(" "),s("h2",{attrs:{id:"钩子函数的参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#钩子函数的参数"}},[t._v("#")]),t._v(" 钩子函数的参数")]),t._v(" "),s("ul",[s("li",[t._v("el：指令所绑定的元素，可以用来直接操作 DOM。")]),t._v(" "),s("li",[t._v("binding：一个对象，包含以下 property：\n"),s("ul",[s("li",[t._v("name：指令名，不包括 v- 前缀。")]),t._v(" "),s("li",[t._v('value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。')]),t._v(" "),s("li",[t._v("oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。")]),t._v(" "),s("li",[t._v('expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。')]),t._v(" "),s("li",[t._v('arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。')]),t._v(" "),s("li",[t._v("modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: - true }。")])])]),t._v(" "),s("li",[t._v("vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。")]),t._v(" "),s("li",[t._v("oldVnode：上一个虚拟节点，仅在 "),s("code",[t._v("update")]),t._v(" 和 "),s("code",[t._v("componentUpdated")]),t._v(" 钩子中可用。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);