# DOM优化

## DOM优化思路

### DOM为什么这么慢

把 DOM 和 JavaScript 各自想象成一个岛屿，它们之间用收费桥梁连接。

对 DOM 的操作都不会局限于访问，而是为了修改它。当我们对 DOM 的修改会引发它外观（样式）上的改变时，就会触发**回流或重绘**。

这个过程本质上还是因为我们对 DOM 的修改触发了渲染树（Render Tree）的变化所导致的。

### 回流（重排）

对 DOM 的修改引发了 **DOM 几何尺寸**的变化（比如修改元素的宽、高或隐藏元素等）时，浏览器需要重新计算元素的几何属性（其他元素的几何属性和位置也会因此受到影响），然后再将计算的结果绘制出来。这个过程就是回流（也叫重排）。

### 重绘

对 DOM 的修改导致了样式的变化、却**并未影响其几何属性**（比如修改了颜色或背景色）时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式（跳过了上图所示的回流环节）。这个过程叫做重绘。

### DOM优化提议

**减少 DOM 操作：少交“过路费”、避免过度渲染**
考虑JS 的运行速度，比 DOM 快得多这个特性。我们减少 DOM 操作的核心思路，就是让 JS 去给 DOM 分压

## 事件循环和异步更新策略

Vue和React都实现了异步更新策略，目的都是减少DOM操作，避免过度渲染的目的。

### 事件循环

事件循环中的异步队列有两种：macro（宏任务）队列和 micro（微任务）队列。

#### macro（宏任务）队列

- setTimeout、setInterval、 setImmediate
- script（整体代码）
- I/O 操作
- UI 渲染等

#### micro（微任务）队列

- Promise
- process.nextTick
- MutationObserver 等。

### 事件循环过程

#### 初始状态：调用栈空

micro 队列空，macro 队列里有且只有一个 script 脚本（整体代码）。

#### 全局上下文（script 标签）被推入调用栈

全局上下文（script 标签）被推入调用栈，同步代码执行。在执行的过程中，通过对一些接口的调用，可以产生新的 macro-task 与 micro-task，它们会分别被推入各自的任务队列里。

同步代码执行完了，script 脚本会被移出 macro 队列，这个过程本质上是队列的 macro-task 的执行和出队的过程。

#### 处理的 micro-task

上一步我们出队的是一个 macro-task，这一步我们处理的是 micro-task。

需要注意的是：
当 macro-task 出队时，任务是**一个一个执行**的；

而 micro-task 出队时，任务是**一队一队执行**的。

因此，我们处理 micro 队列这一步，会逐个执行队列中的任务并把它出队，直到队列被清空。

**执行渲染操作，更新界面**（敲黑板划重点）。

检查是否存在 Web worker 任务，如果有，则对其进行处理 。

（上述过程循环往复，直到两个队列都清空）

### 渲染的时机

**假如我想要在异步任务里进行DOM更新，我该把它包装成 micro 还是 macro 呢？**

我们更新 DOM 的时间点，应该尽可能靠近渲染的时机。当我们需要在异步任务中实现 DOM 修改时，把它包装成 micro 任务是相对明智的选择。

当前执行栈（宏任务script代码）执行完之后，是要立即去执行微任务队列中的任务的，包装成宏任务的话，本次事件循环就不会去执行，而是要等待下一次事件循环中执行。

### Vue的异步更新策略

#### 什么是异步更新

更新数据时，这个更新并**不会立即生效**，而是会被**推入到一个队列里**。待到适当的时机，队列中的更新任务会被**批量触发**。这就是异步更新。

#### Vue的异步更新手法--nextTick

Vue 每次想要更新一个状态的时候，会先把它这个更新操作给包装成一个异步操作派发出去。

Vue 的异步任务默认情况下都是用 Promise 来包装的，也就是是说它们都是 micro-task。

Vue 中每产生一个状态更新任务，它就会被塞进一个叫 callbacks 的数组（此处是任务队列的实现形式）中。

这个任务队列在被丢进 micro 或 macro 队列之前，会先去检查当前是否有异步更新任务正在执行（即检查 pending 锁）。

如果确认 pending 锁是开着的（false），就把它设置为锁上（true），然后对当前 callbacks 数组的任务进行派发（丢进 micro 或 macro 队列）和执行。设置 pending 锁的意义在于保证状态更新任务的有序进行，避免发生混乱。

## 懒加载

在懒加载的实现中，有两个关键的数值：

一个是**当前可视区域的高度**: window.innerHeight || document.documentElement.clientHeight

另一个是**元素距离可视区域顶部的高度**:getBoundingClientRect

```js
// 获取所有的图片标签
const imgs = document.getElementsByTagName('img')
// 获取可视区域的高度
const viewHeight = window.innerHeight || document.documentElement.clientHeight
// num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
let num = 0
function lazyload(){
    for(let i=num; i<imgs.length; i++) {
        // 用可视区域高度减去元素顶部距离可视区域顶部的高度
        let distance = viewHeight - imgs[i].getBoundingClientRect().top
        // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
        if(distance >= 0 ){
            // 给元素写入真实的src，展示图片
            imgs[i].src = imgs[i].getAttribute('data-src')
            // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
            num = i + 1
        }
    }
}
// 监听Scroll事件
window.addEventListener('scroll', lazyload, false);
```

## 事件的节流和防抖

scroll 事件是一个非常容易被反复触发的事件。其实不止 scroll 事件，resize 事件、鼠标事件（比如 mousemove、mouseover 等）、键盘事件（keyup、keydown 等）都存在被频繁触发的风险

throttle（事件节流）和 debounce（事件防抖）出现了

### 节流和防抖的本质

以闭包的形式存在，对事件**对应的回调函数进行包裹**、以自由变量的形式缓存时间信息，最后用 setTimeout 来控制事件的触发频率。

#### 节流

在某段时间内，不管你触发了多少次回调，都只认第一次，并在计时结束时给予响应。

```js
// fn是我们需要包装的事件回调, interval是时间间隔的阈值
function throttle(fn, interval) {
  // last为上一次触发回调的时间
  let last = 0

  // 将throttle处理结果当作函数返回
  return function () {
      // 保留调用时的this上下文
      let context = this
      // 保留调用时传入的参数
      let args = arguments
      // 记录本次触发回调的时间
      let now = +new Date()

      // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
      if (now - last >= interval) {
      // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调
          console.log(now - last >= interval)
          last = now;
          fn.apply(context, args);
      }
    }
}

// 用throttle来包装scroll的回调
const better_scroll = throttle(() => console.log('触发了滚动事件'), 1000)

document.addEventListener('scroll', better_scroll)

```

#### 防抖

“最后一个人说了算”，debounce 会为每一个新乘客设定新的定时器。

```js

// fn是我们需要包装的事件回调, delay是每次推迟执行的等待时间
function debounce(fn, delay) {
  // 定时器
  let timer = null

  // 将debounce处理结果当作函数返回
  return function () {
    // 保留调用时的this上下文
    let context = this
    // 保留调用时传入的参数
    let args = arguments

    // 每次事件被触发时，都去清除之前的旧定时器
    if(timer) {
        clearTimeout(timer)
    }
    // 设立新定时器
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

// 用debounce来包装scroll的回调
const better_scroll = debounce(() => console.log('触发了滚动事件'), 1000)

document.addEventListener('scroll', better_scroll)
```

#### 节流与防抖的结合

通过和节流的组合，来优化无底线等待的防抖

delay 时间内，我可以为你重新生成定时器；但只要delay的时间到了，我必须要给用户一个响应。

```js
function throttle(fn, delay) {
  // last为上一次触发回调的时间, timer是定时器
  let last = 0, timer = null
  // 将throttle处理结果当作函数返回

  return function () {
    // 保留调用时的this上下文
    let context = this
    // 保留调用时传入的参数
    let args = arguments
    // 记录本次触发回调的时间
    let now = +new Date()

    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last < delay) {
      // 如果时间间隔小于我们设定的时间间隔阈值，则为本次触发操作设立一个新的定时器
      // 使用防抖思想
       clearTimeout(timer)
       timer = setTimeout(function () {
          last = now
          fn.apply(context, args)
        }, delay)
    } else {
        // 使用节流思想
        // 如果时间间隔超出了我们设定的时间间隔阈值，那就不等了，无论如何要反馈给用户一次响应
        last = now
        fn.apply(context, args)
    }
  }
}

// 用新的throttle包装scroll的回调
const better_scroll = throttle(() => console.log('触发了滚动事件'), 1000)

document.addEventListener('scroll', better_scroll)
```
