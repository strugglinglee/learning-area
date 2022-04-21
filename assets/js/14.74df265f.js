(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{446:function(t,a,s){"use strict";s.r(a);var r=s(62),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h4",{attrs:{id:"grid-vs-flex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-vs-flex"}},[t._v("#")]),t._v(" Grid vs Flex")]),t._v(" "),s("p",[t._v("Grid 布局是 css 最强大的布局方案。")]),t._v(" "),s("p",[t._v('Flex 布局是轴线布局，只能指定"项目"针对轴线的位置，可以看作是一维布局。')]),t._v(" "),s("p",[t._v('Grid 布局则是将容器划分成"行"和"列"，产生单元格，然后指定"项目所在"的单元格，可以看作是二维布局。\nGrid 布局远比 Flex 布局强大。')]),t._v(" "),s("h3",{attrs:{id:"网格线-grid-line"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网格线-grid-line"}},[t._v("#")]),t._v(" 网格线(grid line)")]),t._v(" "),s("p",[t._v("水平网格线划分出行，垂直网格线划分出列。")]),t._v(" "),s("p",[t._v("n 行有 n + 1 根水平网格线，m 列有 m + 1 根垂直网格线，比如三行就有四根水平网格线。")]),t._v(" "),s("h3",{attrs:{id:"容器属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器属性"}},[t._v("#")]),t._v(" 容器属性")]),t._v(" "),s("h4",{attrs:{id:"display"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#display"}},[t._v("#")]),t._v(" display")]),t._v(" "),s("p",[t._v("指定一个容器采用网格布局")]),t._v(" "),s("blockquote",[s("p",[t._v("子元素的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*块级元素*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("grid\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*行内元素*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inline-grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"grid-template-columns-属性-grid-template-rows-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-template-columns-属性-grid-template-rows-属性"}},[t._v("#")]),t._v(" grid-template-columns 属性，grid-template-rows 属性")]),t._v(" "),s("p",[t._v("grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*指定了一个三行三列的网格，列宽和行高都是100px*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px 100px 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px 100px 100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*也可以使用百分比*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 33.33% 33.33% 33.33%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 33.33% 33.33% 33.33%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h5",{attrs:{id:"repeat"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#repeat"}},[t._v("#")]),t._v(" repeat")]),t._v(" "),s("p",[t._v("重复写同样的值非常麻烦，尤其网格很多时。这时，可以使用repeat()函数")]),t._v(" "),s("p",[t._v("repeat()接受两个参数，第一个参数是重复的次数（上例是3），第二个参数是所要重复的值。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*指定了一个三行三列的网格，列宽和行高都是100px*/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("100px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("repeat()重复"),s("code",[t._v("某种模式")]),t._v("也是可以的。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 100px 20px 80px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h5",{attrs:{id:"auto-fill-关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-fill-关键字"}},[t._v("#")]),t._v(" auto-fill 关键字")]),t._v(" "),s("p",[t._v("单元格的大小是固定的，但是容器的大小不确定。如果希望每一行（或每一列）容纳尽可能多的单元格，这时可以使用auto-fill关键字表示自动填充")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("\n")])])]),s("h5",{attrs:{id:"fr关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fr关键字"}},[t._v("#")]),t._v(" fr关键字")]),t._v(" "),s("p",[t._v('网格布局提供了fr关键字（fraction 的缩写，意为"片段"）。如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。')]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr 1fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("fr可以与绝对长度的单位结合使用，这时会非常方便")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 150px 1fr 2fr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h5",{attrs:{id:"minmax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#minmax"}},[t._v("#")]),t._v(" minmax()")]),t._v(" "),s("p",[t._v("minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// minmax(100px, 1fr)表示列宽不小于100px，不大于1fr。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// grid-template-columns: 1fr 1fr minmax(100px, 1fr);")]),t._v("\n")])])]),s("h5",{attrs:{id:"auto-关键字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#auto-关键字"}},[t._v("#")]),t._v(" auto 关键字")]),t._v(" "),s("p",[t._v("auto关键字表示由浏览器自己决定长度。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// grid-template-columns: 100px auto 100px;")]),t._v("\n\n")])])]),s("p",[t._v("上面代码中，第二列的宽度，基本上等于该列单元格的最大宽度，除非单元格内容设置了min-width，且这个值大于最大宽度。")]),t._v(" "),s("h5",{attrs:{id:"网格线的名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网格线的名称"}},[t._v("#")]),t._v(" 网格线的名称")]),t._v(" "),s("p",[t._v("grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [c1] 100px [c2] 100px [c3] auto [c4]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-rows")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [r1] 100px [r2] 100px [r3] auto [r4]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h5",{attrs:{id:"布局实例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#布局实例"}},[t._v("#")]),t._v(" 布局实例")]),t._v(" "),s("p",[t._v("grid-template-columns属性对于网页布局非常有用。两栏式布局只需要一行代码。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrapper")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 70% 30%"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("传统的十二网格布局，写起来也很容易。"),s("code",[t._v("grid-template-columns: repeat(12, 1fr);")])]),t._v(" "),s("h4",{attrs:{id:"grid-row-gap-属性-grid-column-gap-属性-grid-gap-属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grid-row-gap-属性-grid-column-gap-属性-grid-gap-属性"}},[t._v("#")]),t._v(" grid-row-gap 属性，grid-column-gap 属性，grid-gap 属性")]),t._v(" "),s("blockquote",[s("p",[t._v("根据最新标准，上面三个属性名的grid-前缀已经删除，grid-column-gap和grid-row-gap写成column-gap和row-gap，grid-gap写成gap。")])]),t._v(" "),s("p",[t._v("grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）。")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-row-gap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-column-gap")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("grid-gap属性是grid-column-gap和grid-row-gap的合并简写形式，语法如下。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("grid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("grid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("row"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("grid"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("column"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("gap"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("如果grid-gap省略了第二个值，浏览器认为第二个值等于第一个值。")])])}),[],!1,null,null,null);a.default=n.exports}}]);