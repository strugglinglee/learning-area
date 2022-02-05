# 组合式API

一组低侵入式的、函数式的 API，使得我们能够更灵活地**组合**组件的逻辑。

## vue2.x暴露的问题

- 随着功能的增长，复杂组件的代码变得越来越难以阅读和理解。这种情况在开发人员阅读他人编写的代码时尤为常见。根本原因是 Vue 现有的 API 迫使我们**通过选项组织代码**，但是有的时候**通过逻辑关系**组织代码更有意义。

- 目前缺少一种`简洁且低成本`的机制来**提取和重用**多个组件之间的逻辑。

## 组合式API优点

- **更好的逻辑复用和组织：** 组合式API 为组件代码的组织提供了更大的灵活性。现在我们不需要总是通过选项来组织代码，而是可以将代码组织为处理特定功能的函数。这些 API 还使得在**组件之间**甚至**组件之外**逻辑的**提取和重用**变得更加简单。
- **更好的类型推导：** Vue3之前在集成 TypeScript 时遇到了不小的麻烦，其主要原因是: Vue 依靠一个简单的 this 上下文来暴露 property，我们现在使用 this 的方式是比较微妙的。

> Vue3之前的 API 在设计之初没有照顾到类型推导，这使适配 TypeScript 变得复杂。

提案中的 API 更像是**暴露 Vue 的核心功能**——比如用**独立的函数**来**创建**和**监听**`响应式的状态`等。

## 响应式状态与副作用

reactive 几乎等价于 2.x 中现有的 **Vue.observable()** API，且为了避免与 RxJS 中的 observable 混淆而做了重命名。

响应式状态的基本用例就是在渲染时使用它。

因为有了**依赖追踪**，视图会在响应式状态发生改变时自动更新。

在 DOM 当中渲染内容会被视为一种“副作用”：程序会在外部修改其本身 (也就是这个 DOM) 的状态。我们可以使用 watchEffect API 应用基于响应式状态的副作用，并自动进行重应用。

### watch 和 watchEffect 的区别

watchEffect 和 2.x 中的 watch 选项类似，但是它**不需要把被依赖的数据源和副作用回调分开**。组合式 API 同样提供了一个 watch 函数，其行为和 2.x 的选项完全一致。

## 插件开发

当下许多 Vue 的插件都向 this 注入 property。例如 Vue Router 注入 this.$route 和 this.$router，而 Vuex 注入 this.$store。这使得类型推导变得很有技巧性，因为每个插件都要求用户为注入的 property 向 Vue 增加类型定义。

当使用组合式 API 时，我们不再使用 this，取而代之的是，插件将在内部利用 provide 和 inject 并暴露一个组合函数。

```js
// 插件代码
const StoreSymbol = Symbol()

export function provideStore(store) {
  provide(StoreSymbol, store)
}

export function useStore() {
  const store = inject(StoreSymbol)
  if (!store) {
    // 抛出错误，不提供 store
  }
  return store
}

```

```javascript
// 在根组件中提供 store
//
const App = {
  setup() {
    provideStore(store)
  },
}

const Child = {
  setup() {
    const store = useStore()
    // 使用 store
  },
}

```

## 组合式API和React Hooks的区别

基于函数的组合式 API 提供了与 React Hooks 同等级别的逻辑组合能力，但是与它还是有很大不同：**组合式 API 的 setup() 函数只会被调用一次**，这意味着使用 Vue 组合式 API 的代码会是：

1. 一般来说更符合惯用的 JavaScript 代码的直觉；
2. 不需要顾虑调用顺序，也可以用在条件语句中；
3. 不会在每次渲染时重复执行，以降低垃圾回收的压力；
4. 不存在内联处理函数导致子组件永远更新的问题，也不需要 useCallback；
5. 不存在忘记记录依赖的问题，也不需要“useEffect”和“useMemo”并传入依赖数组以捕获过时的变量。Vue 的自动依赖跟踪可以确保侦听器和计算值总是准确无误。

## setup组件选项

在**组件创建之前**执行，一旦 props 被解析，就将作为组合式 API 的入口。

### props

解构 prop 在 setup 函数中使用 toRefs 函数来完成此操作：

```javascript
// MyBook.vue
import { toRefs } from 'vue'
setup(props) {
  const { title } = toRefs(props)
  console.log(title.value)
}
```

如果 title 是可选的 prop，则传入的 props 中可能没有 title 。在这种情况下，toRefs 将不会为 title 创建一个 ref 。你需要使用 toRef 替代它：

```javascript
// MyBook.vue
import { toRef } from 'vue'
setup(props) {
  const title = toRef(props, 'title')
  console.log(title.value)
}
```

### Context

执行 setup 时，你只能访问以下 property：

- props
- attrs
- slots
- emit

context 是一个普通的 js 对象，也就是说，它不是响应式的，这意味着你可以安全地对 context 使用 ES6 解构。

attrs 和 slots 是有状态的对象，它们总是会随组件本身的更新而更新。这意味着你应该避免对它们进行解构，并始终以 attrs.x 或 slots.x 的方式引用 property。

请注意，与 props 不同，attrs 和 slots 的 property 是非响应式的。如果你打算根据 attrs 或 slots 的更改应用副作用，那么应该在 onBeforeUpdate 生命周期钩子中执行此操作。

```javascript
export default {
  setup(props, context) {
    // Attribute (非响应式对象，等同于 $attrs)
    console.log(context.attrs)

    // 插槽 (非响应式对象，等同于 $slots)
    console.log(context.slots)

    // 触发事件 (方法，等同于 $emit)
    console.log(context.emit)

    // 暴露公共 property (函数)
    console.log(context.expose)
  }
}
```

### this使用

在 setup() 内部，this 不是该活跃实例的引用，因为 setup() 是在解析其它组件选项之前被调用的，所以 setup() 内部的 this 的行为与其它选项中的 this 完全不同。

这使得 setup() 在和其它选项式 API 一起使用时可能会导致混淆。

### beforeCreate 和 created 生命周期钩子

setup 是围绕 beforeCreate 和 created 生命周期钩子运行的，所以不需要显式地定义它们。换句话说，在这些钩子中编写的任何代码都应该直接在 setup 函数中编写。

### ref

在渲染上下文中暴露 root，并通过 ref="root"，将其绑定到 div 作为其 ref。在虚拟 DOM 补丁算法中，如果 VNode 的 ref 键对应于渲染上下文中的 ref，则 VNode 的相应元素或组件实例将被分配给该 ref 的值。这是在虚拟 DOM 挂载/打补丁过程中执行的，因此模板引用只会在初始渲染之后获得赋值。

作为模板使用的 ref 的行为与任何其他 ref 一样：

它们是响应式的，可以传递到 (或从中返回) 复合函数中。
