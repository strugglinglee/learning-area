// 触发高频事件，且 N 秒内只执行一次。

// 简单版：使用时间戳来实现，立即执行一次，然后每 N 秒执行一次。

// function throttle(func, wait) {
//   var context, args;
//   var previous = 0;

//   return function() {
//       var now = +new Date();
//       context = this;
//       args = arguments;
//       if (now - previous > wait) {
//           func.apply(context, args);
//           previous = now;
//       }
//   }
// }

// 最终版：支持取消节流；另外通过传入第三个参数，options.leading 来表示是否可以立即执行一次，opitons.trailing 表示结束调用的时候是否还要执行一次，默认都是 true。
// 注意设置的时候不能同时将 leading 或 trailing 设置为 false。


// function throttle(func, wait, options) {
//   var timeout, context, args, result;
//   var previous = 0;
//   if (!options) options = {};

//   var later = function() {
//       previous = options.leading === false ? 0 : new Date().getTime();
//       timeout = null;
//       func.apply(context, args);
//       if (!timeout) context = args = null;
//   };

//   var throttled = function() {
//       var now = new Date().getTime();
//       if (!previous && options.leading === false) previous = now;
//       var remaining = wait - (now - previous);
//       context = this;
//       args = arguments;
//       if (remaining <= 0 || remaining > wait) {
//           if (timeout) {
//               clearTimeout(timeout);
//               timeout = null;
//           }
//           previous = now;
//           func.apply(context, args);
//           if (!timeout) context = args = null;
//       } else if (!timeout && options.trailing !== false) {
//           timeout = setTimeout(later, remaining);
//       }
//   };
  
//   throttled.cancel = function() {
//       clearTimeout(timeout);
//       previous = 0;
//       timeout = null;
//   }
//   return throttled;
// }