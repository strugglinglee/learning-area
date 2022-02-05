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
