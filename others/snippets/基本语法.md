### 概念梳理

- prefix
  代码片段名字，即输入此名字就可以调用代码片段。
- body
  这个是代码段的主体.需要编写的代码放在这里,
- $1
  生成代码后光标的初始位置.
- $2
  生成代码后光标的第二个位置,按**tab 键**可进行快速切换,还可以有$3,$4,$5.....
- ${1,字符}
  生成代码后光标的初始位置(其中 1 表示光标开始的序号，字符表示生成代码后光标会直接选中字符。)
- description
  代码段描述,输入名字后编辑器显示的提示信息。

### 注意点

- 多行语句的以 , 隔开
- 每行代码需要用引号包裹住 , 字符串间如果值里包含特殊字符需要 \ 进行转义

### 示例

```
"$ctx.router.addRoutes(routes: Array<RouteConfig>)": {
    "prefix": "$ctx.router.addRoutes(routes: Array<RouteConfig>)",
    "body": [
        "Vue.\\$ctx.router.addRoutes([{",
        "    name: '$1',",
        "    path: '/',",
        "    component: r => require.ensure([], () => r(require('./ui/index.vue')), 'account_center'),",
        "    redirect: { name: '' },",
        "    meta: {},",
        "    children: []",
        "}])"
    ],
    "description": "动态添加更多的路由规则。参数必须是一个符合 routes 选项要求的数组"
}
```
