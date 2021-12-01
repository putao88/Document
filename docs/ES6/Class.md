##  参考文章
[Class](https://es6.ruanyifeng.com/#docs/class)
## Class基本语法
### 简介
- 类的数据类型就是函数，类本身就指向构造函数
- 使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。
- 构造函数的prototype属性，在 ES6 的“类”上面继续存在。事实上，类的所有方法都定义在类的prototype属性上面。
- 由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign()方法可以很方便地一次向类添加多个方法。
```javascript
class Point {
  constructor(){
    // ...
  }
}
Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
});
```
- 类的内部所有定义的方法，都是不可枚举的（non-enumerable）。
### constructor 方法
- constructor()方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor()方法，如果没有显式定义，一个空的constructor()方法会被默认添加。
- 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。
### 类的实例
- 生成类的实例的写法，与 ES5 完全一样，也是使用new命令。
- 与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
```javascript
//定义类
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
var point = new Point(2, 3);
point.toString() // (2, 3)
point.hasOwnProperty('x') // true
point.hasOwnProperty('y') // true
point.hasOwnProperty('toString') // false
point.__proto__.hasOwnProperty('toString') // true
```
- 与 ES5 一样，类的所有实例共享一个原型对象。
- 使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。
### 取值函数（getter）和存值函数（setter)
- 与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。
- 存值函数和取值函数是设置在属性的 Descriptor 对象上的
### 属性表达式
-  类的属性名，可以采用表达式
```javascript
let methodName = 'getArea';
class Square {
  constructor(length) {
    // ...
  }
  [methodName]() {
    // ...
  }
}
```
### Class 表达式
- 与函数一样，类也可以使用表达式的形式定义。
### 注意点
- 严格模式:类和模块的内部，默认就是严格模式，所以不需要使用use strict指定运行模式。
- 不存在提升:类不存在变量提升（hoist），这一点与 ES5 完全不同
- name 属性:由于本质上，ES6 的类只是 ES5 的构造函数的一层包装，所以函数的许多特性都被Class继承，包括name属性。name属性总是返回紧跟在class关键字后面的类名。
- Generator 方法:如果某个方法之前加上星号（*），就表示该方法是一个 Generator 函数。
- this 的指向:类的方法内部如果含有this，它默认指向类的实例。箭头函数内部的this总是指向定义时所在的对象。
### 静态方法
- 类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。
- 注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。
- 静态方法可以与非静态方法重名。
- 父类的静态方法，可以被子类继承。
- 静态方法也是可以从super对象上调用的。
### 实例属性的新写法
- 实例属性除了定义在constructor()方法里面的this上面，也可以定义在类的最顶层。
```javascript
class IncreasingCounter {
  constructor() {
    this._count = 0;
  }
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```
### 静态属性
- 静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性
### 私有方法和私有属性
- 现有的解决方案
    1. 在命名上加以区别。
    2. 将私有方法移出类
    3. 利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。
- 私有属性的提案
    1. 为class加了私有属性。方法是在属性名之前，使用#表示。
    2. 私有属性也可以设置 getter 和 setter 方法。
- in 运算符:try...catch结构可以用来判断是否存在某个私有属性。
    1. V8 引擎改进了in运算符，使它也可以用来判断私有属性。
    2. in也可以跟this一起配合使用。
    3. 注意，判断私有属性时，in只能用在定义该私有属性的类的内部。
    4. 子类从父类继承的私有属性，也可以使用in运算符来判断。
### 静态块
- ES2022 引入了静态块（static block），允许在类的内部设置一个代码块，在类生成时运行一次，主要作用是对静态属性进行初始化。
- 每个类只能有一个静态块，在静态属性声明后运行。静态块的内部不能有return语句。
- 静态块内部可以使用类名或this，指代当前类。
- 除了静态属性的初始化，静态块还有一个作用，就是将私有属性与类的外部代码分享。
### new.target 属性
- new是从构造函数生成实例对象的命令。ES6 为new命令引入了一个new.target属性，该属性一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令或Reflect.construct()调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的。
- Class 内部调用new.target，返回当前 Class。
- 需要注意的是，子类继承父类时，new.target会返回子类。
- 注意，在函数外部，使用new.target会报错。



