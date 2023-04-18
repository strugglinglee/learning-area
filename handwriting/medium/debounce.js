// 触发高频事件 N 秒后只会执行一次，如果 N 秒内事件再次触发，则会重新计时。
// 简单版：函数内部支持使用 this 和 event 对象；

// function debounce(func, wait) {
//   var timeout;
//   return function () {
//     var context = this;
//     var args = arguments;
//     clearTimeout(timeout);
//     timeout = setTimeout(function () {
//       func.apply(context, args);
//     }, wait);
//   };
// }

// var node = document.getElementById("layout");
// function getUserAction(e) {
//   console.log(this, e); // 分别打印：node 这个节点 和 MouseEvent
//   node.innerHTML = count++;
// }
// node.onmousemove = debounce(getUserAction, 1000);

// 最终版：除了支持 this 和 event 外，还支持以下功能：

// 支持立即执行；
// 函数可能有返回值；
// 支持取消功能；

// function debounce(func, wait, immediate) {
//   var timeout, result;
  
//   var debounced = function () {
//       var context = this;
//       var args = arguments;
      
//       if (timeout) clearTimeout(timeout);
//       if (immediate) {
//           // 如果已经执行过，不再执行
//           var callNow = !timeout;
//           timeout = setTimeout(function(){
//               timeout = null;
//           }, wait)
//           if (callNow) result = func.apply(context, args)
//       } else {
//           timeout = setTimeout(function(){
//               func.apply(context, args)
//           }, wait);
//       }
//       return result;
//   };

//   debounced.cancel = function() {
//       clearTimeout(timeout);
//       timeout = null;
//   };

//   return debounced;
// }

// var setUseAction = debounce(getUserAction, 10000, true);
// // 使用防抖
// node.onmousemove = setUseAction

// // 取消防抖
// setUseAction.cancel()