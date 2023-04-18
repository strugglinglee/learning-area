// 改变this指向

// call
// 使用一个指定的 this 值和一个或多个参数来调用一个函数。

// 实现要点：

// this 可能传入 null；
// 传入不固定个数的参数；
// 函数可能有返回值；

// call方法的第一个参数也是this的指向，后面传入的是一个参数列表（注意和apply传参的区别）。当一个参数为null或undefined的时候，表示指向window（在浏览器中），和apply一样，call也只是临时改变一次this指向，并立即执行。

Function.prototype.call2 = function (context) {
  context = context || window;
  context.fn = this;

  let args = [];
  for (let i = 1, len = arguments.length; i < len; i++) {
    args.push("arguments[" + i + "]");
  }
  
  console.log(args, 'args')
  const result = eval("context.fn(" + args + ")");
  
  delete context.fn;
  return result;
};

const test1 = function (a, b) {
  console.log(this.fn, a, b);
};

test1.call2({ name: 1,fn: 'annan' }, 2, 3);

// apply
// apply 和 call 一样，唯一的区别就是 call 是传入不固定个数的参数，而 apply 是传入一个数组。

// 实现要点：

// this 可能传入 null；
// 传入一个数组；
// 函数可能有返回值；

Function.prototype.apply2 = function (context, arr) {
  context = context || window;
  context.fn = this;

  let result;
  if (!arr) {
    result = context.fn();
  } else {
    let args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("context.fn(" + args + ")");
  }

  delete context.fn;
  return result;
};

// bind
// bind 方法会创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
// 实现要点：

// bind() 除了 this 外，还可传入多个参数；
// bing 创建的新函数可能传入多个参数；
// 新函数可能被当做构造函数调用；
// 函数可能有返回值；

// bind方法和call很相似，第一参数也是this的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入，call则必须一次性传入所有参数)，但是它改变this指向后不会立即执行，而是返回一个永久改变this指向的函数。

Function.prototype.bind2 = function (context) {
  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);

  const fNOP = function () {};

  const fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(
      this instanceof fNOP ? this : context,
      args.concat(bindArgs)
    );
  };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
