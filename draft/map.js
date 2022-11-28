// const m = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
//   ["key3", "value3"],
// ]);
// for (let [key, value] of m.entries()) {
//   console.log(key, value);
// }
// entries() ---- 默认迭代器
// for (let [key, value] of m) {
//   console.log(key, value);
// }
// for (let key of m.keys()) {
//   console.log(key);
// }
// for (let value of m.values()) {
//   console.log(value);
// }
// map转数组
// console.log([...m]); // [ [ 'key1', 'value1' ], [ 'key2', 'value2' ], [ 'key3', 'value3' ] ]
// console.log([...m.keys()]); // ['key1', 'key2', 'key3']
// console.log([...m.values()]); // ['value1', 'value2', 'value3']

// 数组转map
// const a = [
//   ["key1", "value1"],
//   ["key2", "value2"],
//   ["key3", "value3"],
// ];
// new Map(a);

// map转对象
// function strMapToObj(strMap) {
//   let obj = Object.create(null);
//   for (let [k, v] of strMap) {
//     obj[k] = v;
//   }
//   return obj;
// }

// 对象转map

// new Map(Object.entries({}));

// 实现filter
// const m2 = new Map([...m].filter(([k, v]) => ...));

// m.forEach((value, key, map) => {
//   console.log(value, key, map);
// });
//value1 key1 Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
// value2 key2 Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
// value3 key3 Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }
