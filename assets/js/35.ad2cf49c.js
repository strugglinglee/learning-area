(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{326:function(t,a,e){"use strict";e.r(a);var s=e(13),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),a("h2",{attrs:{id:"类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型"}},[t._v("#")]),t._v(" 类型")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("原始类型（6种）：\nUndefined、Null、Boolean、Number、\nString 和 Symbol")])]),t._v(" "),a("li",[a("p",[t._v("复杂类型Object")]),t._v(" "),a("blockquote",[a("p",[t._v("Object是一种无序名值对的集合")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("数据类型都是首字母都是大写的")])]),t._v(" "),a("h3",{attrs:{id:"typeof-操作符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof-操作符"}},[t._v("#")]),t._v(" typeof 操作符")]),t._v(" "),a("p",[t._v("undefined\nboolean\nnumber\nstring\nsymbol\nobject (对象/array/null)\nfunction\nsymbol")]),t._v(" "),a("blockquote",[a("p",[t._v("严格来讲，函数在ECMAScript中被认为是对象，并不代表一种数据类型。但是函数也有自己特殊的属性，有必要通过typeof操作符来区分函数和其他对象")])]),t._v(" "),a("h4",{attrs:{id:"typeof-vs-instanceof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof-vs-instanceof"}},[t._v("#")]),t._v(" typeof vs instanceOf")]),t._v(" "),a("p",[t._v("如果变量是给定引用类型的实例，则 instanceof 操作符返回 true。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量 person 是 Object 吗？")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("colors "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量 colors 是 Array 吗？")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 变量 pattern 是 RegExp 吗？")]),t._v("\n\n")])])]),a("h4",{attrs:{id:"建议在声明变量的同时进行初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建议在声明变量的同时进行初始化"}},[t._v("#")]),t._v(" 建议在声明变量的同时进行初始化")]),t._v(" "),a("p",[t._v("这样，当typeof返回“undefined”时，就能知道是给定的变量尚未声明，而不是声明了但未进行初始化")]),t._v(" "),a("h2",{attrs:{id:"null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[t._v("#")]),t._v(" Null")]),t._v(" "),a("p",[t._v("null值表示一个空对象指针，所以typeof返回object")]),t._v(" "),a("p",[t._v("初始化对象变量时，建议使用null，可以分辨后续是否被重新赋值")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("null===null\nundefined===undefined\nnull==undefined\n")])])]),a("p",[t._v("undefind是由null派生而来的")]),t._v(" "),a("h2",{attrs:{id:"boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#boolean"}},[t._v("#")]),t._v(" Boolean")]),t._v(" "),a("p",[t._v("ECMAScript类型的值都有相应布尔值的等价形式，Boolean()转型函数可以将其他类型的值转换为布尔值")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("数据类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("转换为 true 的值")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("转换为 false 的值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("非空字符串")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v('""（空字符串）')])]),t._v(" "),a("tr",[a("td",[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("非零数值（包括无穷值）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0、NaN（参见后面的相关内容）")])]),t._v(" "),a("tr",[a("td",[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("任意对象")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("Undefined")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("N/A（不存在）")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("undefined")])])])]),t._v(" "),a("h2",{attrs:{id:"number类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number类型"}},[t._v("#")]),t._v(" Number类型")]),t._v(" "),a("p",[t._v("使用IEEE754格式表示整数和浮点值（某些语言中也叫双精度值）")]),t._v(" "),a("h3",{attrs:{id:"浮点值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点值"}},[t._v("#")]),t._v(" 浮点值")]),t._v(" "),a("p",[t._v("数值中必须包含小数点，且小数点后面至少有一个数字")]),t._v(" "),a("blockquote",[a("p",[t._v("存储浮点值使用的内存空间是存储整数值的两倍，所以ECMAScript总是想方设法的把值转化为整数，小数点后面没有数字的情况下或者数值本身是整数只是小数点后面跟着0，数值都会变成整数")])]),t._v(" "),a("h4",{attrs:{id:"科学计数法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#科学计数法"}},[t._v("#")]),t._v(" 科学计数法")]),t._v(" "),a("p",[t._v("默认情况下，ECMAScript 会将小数点后至少包含 6 个零的浮点值转换为科学记数法")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("let floatNum = 3.125e7; // 等于 31250000\nlet floatNum = 3e-17; // 等于 0.000 000 000 000 000 03\n")])])]),a("h4",{attrs:{id:"计算精确度问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算精确度问题"}},[t._v("#")]),t._v(" 计算精确度问题")]),t._v(" "),a("p",[t._v("浮点值的精确度可达17位小数，但算数计算中远不如整数精确")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("0.1+0.2=0.300 000 000 000 000 04\n\n0.1+0.2!==0.3\n")])])]),a("blockquote",[a("p",[t._v("是因为使用了IEEE754数值，这种错误并非ECMAScript独有，其他使用相同格式的语言也会有这个问题")])]),t._v(" "),a("h3",{attrs:{id:"number-min-value-number-max-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number-min-value-number-max-value"}},[t._v("#")]),t._v(" Number.MIN_VALUE & Number.MAX_VALUE")]),t._v(" "),a("ul",[a("li",[t._v("任何无法表示的负数以-Infinity（负无穷大）表示")]),t._v(" "),a("li",[t._v("任何无法表示的正数以 Infinity（正\n无穷大）表示")])]),t._v(" "),a("p",[t._v("确定一个数值是否有限大使用isFinite()函数")]),t._v(" "),a("h3",{attrs:{id:"nan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nan"}},[t._v("#")]),t._v(" NaN")]),t._v(" "),a("p",[t._v("特殊值NaN(not a Number)")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("console.log(NaN == NaN); // false\n")])])]),a("h4",{attrs:{id:"isnan-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isnan-函数"}},[t._v("#")]),t._v(" isNaN()函数")]),t._v(" "),a("p",[t._v("把一个值传给 isNaN()后，该函数会尝试把它转换为数值。")]),t._v(" "),a("h3",{attrs:{id:"数值转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值转换"}},[t._v("#")]),t._v(" 数值转换")]),t._v(" "),a("p",[t._v("3个函数可以将非数值转换为数值：\nNumber()、parseInt()和 parseFloat()。")]),t._v(" "),a("blockquote",[a("p",[t._v("Number()是\n转型函数，可用于任何数据类型。后两个函数主要用于将字符串转换为数值。")])]),t._v(" "),a("h4",{attrs:{id:"parseint-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parseint-函数"}},[t._v("#")]),t._v(" parseInt()函数")]),t._v(" "),a("p",[t._v("考虑到用 Number()函数转换字符串时相对复杂且有点反常规，通常在需要得到整数时可以优先使\n用 parseInt()函数。")]),t._v(" "),a("p",[t._v("能识别不同的整数格式（十进制、八\n进制、十六进制）\n接收第二个参数，用于指定底数（进制数）")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('let num1 = parseInt("1234blue"); // 1234\nlet num2 = parseInt(""); // NaN\nlet num3 = parseInt("0xA"); // 10，解释为十六进制整数\nlet num4 = parseInt(22.5); // 22\nlet num5 = parseInt("70"); // 70，解释为十进制值\nlet num6 = parseInt("0xf"); // 15，解释为十六进制整数\n')])])]),a("h4",{attrs:{id:"parsefloat-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parsefloat-函数"}},[t._v("#")]),t._v(" parseFloat()函数")]),t._v(" "),a("p",[t._v("parseFloat()函数的工作方式跟 parseInt()函数类似")]),t._v(" "),a("ul",[a("li",[t._v("第二次出现的小数点就无效")]),t._v(" "),a("li",[t._v("它始终忽略字符串开头的零")]),t._v(" "),a("li",[t._v("只解析十进制值，因此不能指定底数")])]),t._v(" "),a("h2",{attrs:{id:"string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[t._v("#")]),t._v(" String")]),t._v(" "),a("p",[t._v('表示零或多个16位Unicode字符序列。\n字符串可以使用双引号（""）、单引号（""）、反引号（``）标示')]),t._v(" "),a("p",[t._v("字符串长度可以通过length属性获取")]),t._v(" "),a("blockquote",[a("p",[t._v("字符串中包含双字节字符，那么length返回的可能不是准确字符数")])]),t._v(" "),a("p",[t._v("字符串是不可变的，一旦创建值就不能变了。")]),t._v(" "),a("h3",{attrs:{id:"修改某个变量中的字符串值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改某个变量中的字符串值"}},[t._v("#")]),t._v(" 修改某个变量中的字符串值")]),t._v(" "),a("ol",[a("li",[t._v("销毁原始字符串")]),t._v(" "),a("li",[t._v("将包含新值的另一个字符串保存到该变量")])]),t._v(" "),a("h3",{attrs:{id:"转换字符串方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换字符串方法"}},[t._v("#")]),t._v(" 转换字符串方法")]),t._v(" "),a("ol",[a("li",[t._v("toString()\n"),a("ul",[a("li",[t._v("简单的返回自身的一个副本，null和undefined值没有toString()方法")]),t._v(" "),a("li",[t._v("接收一个底数参数，可以得到数值的n进制 eg.10.toString(2)")])])]),t._v(" "),a("li",[t._v("String()")])]),t._v(" "),a("h3",{attrs:{id:"模板字面量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板字面量"}},[t._v("#")]),t._v(" 模板字面量")]),t._v(" "),a("p",[t._v("保留换行字符，可以跨行定义字符串")]),t._v(" "),a("p",[t._v("使用模板字面量也可以直接获取原始的模板字面量内容（如换行符或 Unicode 字符），而不是被转换后的字符表示。\n为此，可以使用默认的 String.raw 标签函数。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// Unicode 示例\n// \\u00A9 是版权符号\nconsole.log(`\\u00A9`); // ©\nconsole.log(String.raw`\\u00A9`); // \\u00A9\n")])])]),a("h2",{attrs:{id:"symbol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#symbol"}},[t._v("#")]),t._v(" Symbol")]),t._v(" "),a("ul",[a("li",[t._v("Symbol（符号）是 ECMAScript 6 新增的数据类型。")]),t._v(" "),a("li",[t._v("符号是原始值，且符号实例是唯一、不可变的。")]),t._v(" "),a("li",[t._v("符号的用途是确保"),a("code",[t._v("对象属性")]),t._v("使用唯一标识符，不会发生属性冲突的危险。")])]),t._v(" "),a("p",[t._v("可以传入一个字符串参数作为对符号的描述，将来可以通过这个字符串来调试代码。")]),t._v(" "),a("p",[t._v("ES6中 "),a("code",[t._v("instanceof")]),t._v(" 操作符会使用"),a("code",[t._v("Symbol.hasInstance")]),t._v("函数来确定关系。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("class Bar {}\nlet b = new Bar();\nconsole.log(Bar[Symbol.hasInstance](b)); // true\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);