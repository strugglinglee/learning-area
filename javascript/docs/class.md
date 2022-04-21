# class(类)

生成实例对象的方法是通过构造函数

``` js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ',' + this.y + ')';
};
```

``` js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ',' + this.y + ')';
};
```

```js

// typeof Point => "function"
class Point {
  // constructor方法表示构造方法
  constructor(x, y) {
    // this 表示实例对象
    this.x = x;
    this.y = y;
  }

  // 类的所有方法 实际上都是定义在类的prototype属性上面
  toString() {
    return '(' + this.x + ',' + this.y + ')';
  }
}

```

// 构造函数的prototype属性在ES6的class上面继续存在 类的所有方法都定义在类的prototype属性上面
Point.prototype = {
  constructor() {},
  toString() {},
};

// 在类的实例上调用方法，实际上就是调用原型上的方法

class B {}

const b = new B();
b.constructor === B.prototype.constructor;

// 由于类的方法都定义在prototype对象上面 所以类的新方法可以添加在prototype对象上面，Object.assign()方法可以很方便的向类添加多个方法

class Point {
  constructor() {}
}

Object.assign(Point.prototype, {
  toString() {},
  toValue() {},
});

prototype对象的constructor()属性，直接指向“类”的本身

Point.prototype.constructor === Point;

// 类的内部的所有定义的方法 都是不可枚举的
