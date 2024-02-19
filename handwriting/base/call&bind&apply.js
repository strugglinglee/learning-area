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

  console.log(args, "args");
  const result = eval("context.fn(" + args + ")");

  delete context.fn;
  return result;
};

const test1 = function (a, b) {
  console.log(this.fn, a, b);
};

test1.call2({ name: 1, fn: "annan" }, 2, 3);

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

Function.prototype.bind2 = function (context) {
  // 调用他的对象
  const self = this;
  // 复制实际传参
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

// bind方法和call很相似，第一参数也是this的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入，call则必须一次性传入所有参数)，但是它改变this指向后不会立即执行，而是返回一个永久改变this指向的函数。 再次调用之后的结果才和call一样

Function.prototype.bind3 = function () {
  var _this = this;
  var context = arguments[0];
  var arg = [].slice.call(arguments, 1);
  // 返回一个函数
  return function () {
    arg = [].concat.apply(arg, arguments);
    // 执行apply
    _this.apply(context, arg);
  };
};

//实现bind方法
Function.prototype.bind3 = function (oThis) {
  if (typeof this !== "function") {
    // closest thing possible to the ECMAScript 5
    // internal IsCallable function
    throw new TypeError(
      "Function.prototype.bind - what is trying to be bound is not callable"
    );
  }
  var aArgs = Array.prototype.slice.call(arguments, 1);
  var fToBind = this;
  var fNOP = function () {};
  var fBound = function () {
    // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
    return fToBind.apply(
      this instanceof fBound ? this : oThis,
      // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
      aArgs.concat(Array.prototype.slice.call(arguments))
    );
  };
  // 维护原型关系
  if (this.prototype) {
    // 当执行Function.prototype.bind()时, this为Function.prototype
    // this.prototype(即Function.prototype.prototype)为undefined
    fNOP.prototype = this.prototype;
  }
  // 下行的代码使fBound.prototype是fNOP的实例,因此
  // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
  fBound.prototype = new fNOP();
  return fBound;
};
var arr = [1, 11, 5, 8, 12];
var max = Math.max.bind(null, arr[0], arr[1], arr[2], arr[3]);
console.log(max(arr[4])); //12
