## 参考文章
[async函数](https://es6.ruanyifeng.com/#docs/async)

## async基础使用
### 含义
- 是 Generator 函数的语法糖
- async函数对 Generator 函数的改进，体现在以下四点。
    1. 内置执行器:async函数自带执行器。async函数的执行，与普通函数一模一样，只要一行,Generator 函数，需要调用next方法，或者用co模块，才能真正执行，得到最后结果
    2. 更好的语义
    3. 更广的适用性:co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
    4. 返回值是 Promise: async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。
- async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖
### 基本用法
- async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。

### 语法
- 返回promise对象
    1. async函数返回一个 Promise 对象。
    2. async函数内部return语句返回的值，会成为then方法回调函数的参数。
    3. async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
- Promise 对象的状态变化
    1. async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。
- await命令
    1. 正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
    2. await命令后面是一个thenable对象（即定义了then方法的对象），那么await会将其等同于 Promise 对象。
    3. await命令后面的 Promise 对象如果变为reject状态，则reject的参数会被catch方法的回调函数接收到
    4. 任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
    ```javascript
    async function f() {
    await Promise.reject('出错了');
    await Promise.resolve('hello world'); // 不会执行
    }
    ```
    5. 我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
    6. 另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。
-  错误处理
    1. 如果await后面的异步操作出错，那么等同于async函数返回的 Promise 对象被reject。
    2. 防止出错的方法，也是将其放在try...catch代码块之中。
    3. 如果有多个await命令，可以统一放在try...catch结构中。
- 使用注意点
    1. await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
    2. 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
    3. await命令只能用在async函数之中，如果用在普通函数，就会报错。
    4. async 函数可以保留运行堆栈。
### async 函数的实现原理
- async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。
