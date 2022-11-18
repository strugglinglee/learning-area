// class Person {
//   constructor() {
//     this.name = "joey";
//     this.sayName = () => {
//       console.log(this.name);
//     };
//   }
//   static locate() {
//     console.log("locate");
//   }
// }

// const person1 = new Person();
// person1.locate(); // TypeError: person1.locate is not a function
// Person.locate(); // locate

// class Person {
//   constructor(age) {
//     this.age_ = age;
//   }
//   sayAge() {
//     console.log(this.age_);
//   }
//   static create() {
//     return new Person(Math.floor(Math.random() * 100));
//   }
// }

// const person1 = Person.create();
// person1.sayAge();
// class SuperType {
//   func1() {
//     console.log("hihihi");
//   }
//   static func2() {
//     console.log("static");
//   }
// }

// class SubType extends SuperType {
//   constructor() {
//     super();
//     this.func1();
//   }
//   subFunc() {
//     super.func1();
//   }
// }

// let super1 = new SuperType();
// let sub1 = new SubType();

// super1.func1();
// sub1.func1();
// // super1.func2();
// // sub1.func2();

// // SubType.func1();
// console.log(SuperType.prototype);
