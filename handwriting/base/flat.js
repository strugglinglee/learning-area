// [1, [2, [3]]].flat(2)  // [1, 2, 3]


// es5 
// function flatten(arr) {
//   var result = [];
//   for (var i = 0, len = arr.length; i < len; i++) {
//       if (Array.isArray(arr[i])) {
//           result = result.concat(flatten(arr[i]))
//       } else {
//           result.push(arr[i])
//       }
//   }
//   return result;
// }

// es6

// function flatten(arr) {
//   while (arr.some(item => Array.isArray(item))) {
//       arr = [].concat(...arr);
//   }
//   return arr;
// }