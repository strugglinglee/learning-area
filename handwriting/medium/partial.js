// 什么是偏函数？偏函数就是将一个 n 参的函数转换成固定 x 参的函数，剩余参数（n - x）将在下次调用全部传入。举个例子：

// function add(a, b, c) {
//   return a + b + c
// }
// let partialAdd = partial(add, 1)
// partialAdd(2, 3)

// 发现没有，其实偏函数和函数柯里化有点像，所以根据函数柯里化的实现，能够能很快写出偏函数的实现：

// function partial(fn, ...args) {
//   return (...arg) => {
//       return fn(...args, ...arg)
//   }
// }

// 如上这个功能比较简单，现在我们希望偏函数能和柯里化一样能实现占位功能，比如：

// function clg(a, b, c) {
//   console.log(a, b, c)
// }
// let partialClg = partial(clg, '_', 2)
// partialClg(1, 3)  // 依次打印：1, 2, 3

// _ 占的位其实就是 1 的位置。相当于：partial(clg, 1, 2)，然后 partialClg(3)。明白了原理，我们就来写实现：

// function partial(fn, ...args) {
//   return (...arg) => {
//       args[index] = 
//       return fn(...args, ...arg)
//   }
// }