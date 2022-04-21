# SFC

Vue单文件组件（又名*.vue文件），缩写为SFC，是一种特殊的文件格式。

允许将Vue组件的模板、逻辑与样式封装在单个文件中。

是经典的HTML、CSS、JS三个经典组合的自然延伸。

每个SFC由三种类型的顶层代码块组成：

1. **template**: 定义了组件的模板
2. **script**: 标准的js模块，导出一个Vue组件定义作为其默认导出
3. **style**: 定义了与此组件关联的CSS

## 工作原理

SFC是框架指定的文件格式，必须由 @vue/compiler-sfc 预编译为标准的js与css。

编译后的SFC是一个标准的ES模块，这意味着通过正确的构建配置，可以像模块一样导入SFC。

## 单文件组件`<script setup>`

是在SFC中使用组合式API的编译时语法糖

### 优点

1. 更少的样板内容，更简洁的代码。
2. 能够使用**纯 Typescript 声明 props** 和**抛出事件**。
3. **更好的运行时性能** (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)。
4. **更好的 IDE 类型推断性能**(减少语言服务器从代码中抽离类型的工作)。

### 基本语法

setup中的代码会在每次组建实例被创建时执行，而不是在组件首次被引入时执行一次。

#### 顶层的绑定会被暴露给模板

任何在 `<script setup>` 声明的**顶层的绑定** (包括变量，函数声明，以及 import 引入的内容) 都能在模板中直接使用

#### 动态组件的使用

由于组件被引用为变量而不是作为字符串键来注册的，在 `<script setup>` 中要使用动态组件的时候，就应该使用动态的 :is 来绑定

```htm
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
  <component :is="Foo" />
  <component :is="someCondition ? Foo : Bar" />
</template>

```

#### 命名空间组件

可以使用带点的组件标记，例如 `<Foo.Bar>` 来引用嵌套在对象属性中的组件。这在需要从单个文件中导入多个组件的时候非常有用：

```htm
<script setup>
import * as Form from './form-components'
</script>

<template>
  <Form.Input>
    <Form.Label>label</Form.Label>
  </Form.Input>
</template>
```

#### 使用自定义指令

必须以 **vNameOfDirective** 的形式来命名本地自定义指令，以使得它们可以直接在模板中使用。

```htm
<script setup>
const vMyDirective = {
  beforeMount: (el) => {
    // 在元素上做些操作
  }
}
</script>
<template>
  <h1 v-my-directive>This is a Heading</h1>
</template>

```

```htm
<script setup>
  // 导入的指令同样能够工作，并且能够通过重命名来使其符合命名规范
  import { myDirective as vMyDirective } from './MyDirective.js'
</script>

```
