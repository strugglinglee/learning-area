# FLUX架构

> 参考文章: 
> 1. [阮一峰-Flux架构入门教程](http://www.ruanyifeng.com/blog/2016/01/flux.html)
> 2. [阮一峰-Redux入门教程](https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
> 3. [掘金文章](https://juejin.cn/post/68449039290634240135)

## 什么是状态管理

状态管理就是把组件之间需要共享的状态抽取出来，遵循特定的约定，统一来管理，让状态的变化可以预测。

## FLUX基本概念

FLUX是一种架构思想，专门解决软件的结构问题

**FLUX将一个应用分成四个部分**

- View视图层
- Action(动作): 视图层发出的消息（比如mouseClick）
- Dispatcher(派发器)：用来接收Actions、执行回调函数
- Store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面

## FLUX单向流动过程

保证了流程的清晰

1. 用户访问View
2. View发出用户的Action
3. Dispatcher收到Action,要求Store进行相应的更新
4. Store 更新后，发出一个"change"事件
5. View 收到"change"事件后，更新页面

## FLUX详解

### View

一旦用户操作，调用相关方法，向Dispatcher发出一个Action

### Action

每个Action都是一个对象，包含一个actionType属性和一些其他的属性

- Store的改变只能通过Action
- 具体Action的处理逻辑一般放在Store里
- Action 对象包含 type （类型）与 payload （传递参数）


### Dispatcher

作用是将Action派发到Store，可以将其看做一个路由器，负责在View和Store之间，建立Action的正确传递路线。

Dispatcher只能有一个，而且是全局的。

只用来派发Action，不应该有其他逻辑

### Store

保存整个应用的状态，需要在变动后向View发送change事件，必须实现事件接口
数据层，存放应用状态与更新状态的方法，一旦发生变动，就提醒 Views 更新页面

## Redux

将Flux与函数式编程结合在一起

### 设计思想

1. web应用是一个状态机，视图与状态是一一对应的
2. 所有的状态，保存在一个对象里面

### 基本概念

#### store

保存数据的地方，可以看成一个容器。整个应用只能有一个Store。

redux提供createStore这个函数用来生成Store

#### state

Store对象包含所有数据。如果想得到某个时点的数据，就要对Store生成快照。这种时点的数据集合叫做State。

当前时刻的state,可以通过store.getState()拿到

一个State对应一个View，是要State相同，View就相同。

#### Action

state 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。
Action 就是 View 发出的通知，表示 State 应该要发生变化了。

Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。

Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。

#### store.dispatch()

store.dispatch()是 View 发出 Action 的唯一方法。
store.dispatch接受一个 Action 对象作为参数，将它发送出去。

#### Reducer

Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。
这种 State 的**计算过程**就叫做 Reducer。

Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。

createStore接受 Reducer 作为参数，生成一个新的 Store。
以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。

##### 纯函数

Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。

纯函数是函数式编程的概念，必须遵守以下一些约束。

- 不得改写参数
- 不能调用系统 I/O 的API
- 不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果

由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。
但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象

最好把 State 对象设成只读。你没法改变它，要得到新的 State，唯一办法就是生成一个新对象。
这样的好处是，任何时候，与某个 View 对应的 State 总是一个不变的对象。

#### store.subscribe()

Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。

只要把 View 的更新函数（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染。

store.subscribe方法返回一个函数，调用这个函数就可以解除监听。

#### Middleware

Redux 还支持中间件，用于管理异步数据流。
常用库：redux-actions, redux-thunk, redux-promise 。

#### combineReducers

Redux 提供了一个combineReducers方法，用于 Reducer 的拆分。
你只要定义各个子 Reducer 函数，然后用这个方法，将它们合成一个大的 Reducer。

### React-Router

使用Provide在Router外面包一层，Provide唯一的功能就是传入Store对象

### redux特点

- **单向数据流。**View 发出 Action (store.dispatch(action))，Store 调用 Reducer 计算出新的 state ，若 state 产生变化，则调用监听函数重新渲染 View （store.subscribe(render)）
- **单一数据源**，只有一个 Store
- **state 是只读的**，每次状态更新之后只能返回一个新的 state
- **没有 Dispatcher** ，而是在 Store 中集成了 dispatch 方法，**store.dispatch() 是 View 发出 Action 的唯一途径**
- 支持使用**中间件（Middleware）**管理异步数据流

## Vuex

### 基本概念

#### Store

Vuex 采用单一状态树，每个应用仅有一个 Store 实例，在该实例下包含了 state, actions, mutations, getters, modules

#### State

Vuex 为单一数据源

可以通过 mapState 辅助函数将 state 作为计算属性访问，或者将通过 Store 将 state 注入全局之后使用 this.$store.state 访问
State 更新视图是通过 vue 的双向绑定机制实现的

#### Getter

Getter 的作用与 filters 有一些相似，可以将 State 进行过滤后输出

#### Mutation

Mutaion 是 vuex 中改变 State 的唯一途径（严格模式下），并且只能是同步操作。Vuex 中通过 store.commit() 调用 Mutation


#### Action

一些对 State 的异步操作可以放在 Action 中，并通过在 Action 提交 Mutaion 变更状态

Action 通过 store.dispatch() 方法触发
可以通过 mapActions 辅助函数将 vue 组件的 methods 映射成 store.dispatch 调用（需要先在根节点注入 store）

#### Module

当 Store 对象过于庞大时，可根据具体的业务需求分为多个 Module ，每个 Module 都具有自己的 state 、mutation 、action 、getter


### Vuex 的特点

- **单向数据流**。View 通过 store.dispatch() 调用 Action ，在 Action 执行完异步操作之后通过 store.commit() 调用 Mutation 更新 State ，通过 vue 的响应式机制进行视图更新
- **单一数据源**，和 Redux 一样**全局只有一个 Store 实例**
- **只能应用于 Vue**

## Vuex vs Redux

| Redux | Vuex |
| :-----| :---- |
| action （同步action ，或借助 中间件 实现异步操作，action 不会改变 store，只是描述了怎么改变store） | mutation（用于同步操作） 、action（可用于异步操作，提交 mutation） |
| reducer（纯函数，根据 action 和旧的 store 计算出新的 store	 | mutation里面直接修改 state |
| store.getState() 这个 API 获取 store 树，还有 store.subscribe(listener) 订阅 store 的变化，当 store 改变时会调用监听器；	 | Vuex 有一个 getter 的概念用于根据 state 派生出一些数据，像 Vue 的计算属性一样，当 state 改变时会重新计算出一个结果出来，提供给需要的组件。
| 通过 combineReducers（）结合各个组件的 reducer，各个组件可以单独管理自己的状态，最后合并为一个 reducer 用于生成一个 store	 | 用 Module 这个概念划分 store，与 Redux 一样，可以多层嵌套子状态。 | 


### Redux 的三大原则：

1. 单一数据源（一个Redux应用只有一个store），也是单向的数据流
2. state只读（唯一改变 state 的方法就是触发 action，action 是一个用于描述已发生事件的普通对象。
3. 使用纯函数（reducer）来修改state。

Redux 得益于 **中间件机制**，利用 `redux-thunk `（redux-thunk 可以 dispatch 函数，这个函数用于生成 action，所以在这个函数里面我们可以进行异步操作，等异步的结果出来后再放在 action 里面将这个 action 用 dispatch 分发出去, 而这个函数被叫做 “action creator” ），可以将异步逻辑放在  `action creator` 里面，**通过 action creator 做一个控制反转**， 给 action creator 传入 dispatch 作为参数，于是就可以 dispatch  action，（原本是通过 dispatch 来分发 action ,现在是异步 action 即 action creator 掌握了控制权调用 dispatch，所以叫控制反转）

Redux 并没有创造单独的概念出来专门用于异步逻辑，它是利用了 Redux 自己实现的中间件机制，中间件从 dispatch 一个异步 action 到 action 到达 reducer 之间处理 action，在这期间通过异步操作得到的结果可以放到 action 里面再通过 dispatch 分发到 reducer，以前 dispatch 一个 action 之后，这个 action 回立即到达 reducer ，所以是同步 action，现在在 action creator 里面，我们通过控制反转，可以等待异步操作结果再生成 action 分发，所以叫做异步 action：


### Vuex 的三大原则：

1. 应用层级的状态应该集中到单个 store 对象中。
2. 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
3. 异步逻辑都应该封装到 action 里面。

 Vuex 是用 mutation 来对应 Redux 的 action，另外 Vuex 又创造了一个 action 来提交 mutation 并通过异步提交 mutation 来实现异步操作结果能够到达 state.


