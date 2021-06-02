
1.JavaScript 函数定义
    1)函数声明
        函数声明后不会立即执行，会在我们需要的时候调用到。
        function myFunction(a, b) {
            return a * b;
        }
    2)函数表达式
        JavaScript 函数可以通过一个表达式定义。
        函数表达式可以存储在变量中：
        在函数表达式存储在变量后，变量也可作为一个函数使用：
        实例
        var x = function (a, b) {return a * b};
        var z = x(4, 3);
        以上函数实际上是一个 匿名函数 (函数没有名称)。
        函数存储在变量中，不需要函数名称，通常通过变量名来调用。
    3)Function() 构造函数
        在以上实例中，我们了解到函数通过关键字 function 定义。
        函数同样可以通过内置的 JavaScript 函数构造器（Function()）定义。
        var myFunction = new Function("a", "b", "return a * b");
        var x = myFunction(4, 3);
        在 JavaScript 中，很多时候，你需要避免使用 new 关键字。
    4)函数提升（Hoisting）
        提升（Hoisting）是 JavaScript 默认将当前作用域提升到前面去的的行为。
        提升（Hoisting）应用在变量的声明与函数的声明。
        myFunction(5);
        function myFunction(y) {
            return y * y;
        }
        使用表达式定义函数时无法提升。
    5)自调用函数
        函数表达式可以 "自调用"。
        自调用表达式会自动调用。
        如果表达式后面紧跟 () ，则会自动调用。
        不能自调用声明的函数。
        通过添加括号，来说明它是一个函数表达式：
            (function () {
                var x = "Hello!!";      // 我将调用自己
            })();
    6)函数是对象
        在 JavaScript 中使用 typeof 操作符判断函数类型将返回 "function" 。
        但是JavaScript 函数描述为一个对象更加准确。
        JavaScript 函数有 属性 和 方法。
        arguments.length 属性返回函数调用过程接收到的参数个数：
            function myFunction(a, b) {
                return arguments.length;
            }
    7)箭头函数
        ES6 新增了箭头函数。
        箭头函数表达式的语法比普通函数表达式更简洁。
            (参数1, 参数2, …, 参数N) => { 函数声明 }
            (参数1, 参数2, …, 参数N) => 表达式(单一)
            // 相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }

        有的箭头函数都没有自己的 this。 不适合顶一个 对象的方法。
        当我们使用箭头函数的时候，箭头函数会默认帮我们绑定外层 this 的值，所以在箭头函数中 this 的值和外层的 this 是一样的。
        箭头函数是不能提升的，所以需要在使用之前定义。
        使用 const 比使用 var 更安全，因为函数表达式始终是一个常量。
        如果函数部分只是一个语句，则可以省略 return 关键字和大括号 {}，这样做是一个比较好的习惯:
            const x = (x, y) => { return x * y };