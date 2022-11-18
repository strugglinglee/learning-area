// function createPerson(name, age, job) {
//   let o = new Object();
//   o.name = name;
//   o.age = age;
//   o.job = job;
//   o.sayName = function () {
//     console.log(this.name);
//   };
//   return o;
// }

// const person1 = createPerson("lee", 25, "FE");
// person1.sayName();
// console.log(person1);

// function sayName() {
//   console.log(this.name);
// }

// function Person(name, age, job) {
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = sayName;
// }
// const person2 = new Person("lee", 25, "stu");
// const person1 = new Person("lee222", 25, "FE");
// person2.sayName();
// person1.sayName();

// function Person() {}
// const person1 = new Person();
// console.log(person1.__proto__); // {}
// console.log(person1.__proto__ === Person.prototype); // true
// console.log(Person.prototype.constructor === Person); // true
// console.log(person1.__proto__.constructor === Person); // true
// console.log(Person.prototype.__proto__ === Object.prototype); // true

// function A() {}
// function B() {}
// const b = new B();
// A.prototype = b;
// console.log(A.prototype === b); // true
// console.log(B.prototype === b.__proto__); // true
// console.log(B.prototype === A.prototype.__proto__); // true

// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue"];
// }
// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// };

// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// };
// const a = new SubType("little red", 25);
// const b = new SubType("little blue", 24);
// // a.colors.push("purple");
// // console.log(a, b);
// a.sayName();
// b.sayName();
// a.sayAge();
// b.sayAge();

// // a ["red", "blue","purple"]
// // b ["red", "blue"]

// function object(o) {
//   function F() {}
//   F.prototype = o;
//   return new F();
// }

// let person = {
//   name: "lee",
//   friends: ["zhao", "qian", "sun"],
// };

// let person1 = object(person);
// person1.name = "wang";
// person1.friends.push("wu");

// let person2 = object(person);
// person2.name = "zhou";
// person2.friends.push("zheng");
// console.log(person); // { name: 'lee', friends: [ 'zhao', 'qian', 'sun', 'wu', 'zheng' ] }

// function createAnother(origin) {
//   let clone = Object(origin);
//   clone.sayHi = () => {
//     console.log("hi");
//   };
//   return clone;
// }
// let person = {
//   name: "lee",
//   friends: ["zhao", "qian", "sun"],
// };
// let person1 = createAnother(person);
// person1.sayHi()
// //通过寄生式继承给对象添加函数会导致函数难以重用，与构造函数模式类似。

// function inheritPrototype(subType, superType) {
//   let prototype = Object(superType.prototype); // 创建对象
//   prototype.constructor = subType; // 增强对象
//   subType.prototype = prototype; // 赋值对象
// }

// function SuperType(name) {
//   this.name = name;
//   this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function () {
//   console.log(this.name);
// };
// function SubType(name, age) {
//   SuperType.call(this, name);
//   this.age = age;
// }
// inheritPrototype(SubType, SuperType);
// SubType.prototype.sayAge = function () {
//   console.log(this.age);
// };
// // 这里只调用了一次 SuperType 构造函数，避免了 SubType.prototype 上不必要也用不到的属性，因此可以说这个例子的效率更高。而且，原型链仍然保持不变，因此 instanceof 操作符和isPrototypeOf()方法正常有效。寄生式组合继承可以算是引用类型继承的最佳模式。

// function Person() {}
// Person.prototype.friends = ["little red", "little blue"];

// const person1 = new Person();
// person1.friends.push("little wang");

// const person2 = new Person();
// console.log(person1.friends); // [ 'little red', 'little blue', 'little wang' ]
// console.log(person2.friends); // [ 'little red', 'little blue', 'little wang' ]

// function createAnother(origin) {
//   let clone = Object(origin);
//   clone.sayHi = () => {
//     console.log("hi");
//   };
//   return clone;
// }
// let person = {
//   name: "lee",
//   friends: ["zhao", "qian", "sun"],
// };
// let person1 = createAnother(person);
// person1.friends.push("hi");
// let person2 = createAnother(person);
// console.log(person2.friends);

// 这一步参考了寄生式继承：创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象
function inheritPrototype(subType, superType) {
  let prototype = Object(superType.prototype); // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype; // 赋值对象
}

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
  console.log(this.name);
};
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType, SuperType);

console.log(SubType.prototype.constructor); // SubType
console.log(SuperType.prototype.constructor); // SubType
