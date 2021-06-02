1.JavaScript 函数调用
    JavaScript 函数有 4 种调用方式。
    每种方式的不同在于 this 的初始化

    1)this 关键字
        一般而言，在Javascript中，this指向函数执行时的当前对象。

    2)调用 JavaScript 函数
        以上函数不属于任何对象。但是在 JavaScript 中它始终是默认的全局对象。
        在 HTML 中默认的全局对象是 HTML 页面本身，所以函数是属于 HTML 页面。
        在浏览器中的页面对象是浏览器窗口(window 对象)。以上函数会自动变为 window 对象的函数。
            myFunction() 和 window.myFunction() 是一样的：
                    function myFunction(a, b) {
                return a * b;
            }
            myFunction(10, 2);           // myFunction(10, 2) 返回 20
        这是调用 JavaScript 函数常用的方法， 但不是良好的编程习惯
        全局变量，方法或函数容易造成命名冲突的bug。
    3)函数作为方法调用
        在 JavaScript 中你可以将函数定义为对象的方法。
        var myObject = {
            firstName:"John",
            lastName: "Doe",
            fullName: function () {
                return this.firstName + " " + this.lastName;
            }
        }
        myObject.fullName();         // 返回 "John Doe"
    4)使用构造函数调用函数
        如果函数调用前使用了 new 关键字, 则是调用了构造函数
        这看起来就像创建了新的函数，但实际上 JavaScript 函数是重新创建的对象：
            // 构造函数:
            function myFunction(arg1, arg2) {
                this.firstName = arg1;
                this.lastName  = arg2;
            }
            
            // This    creates a new object
            var x = new myFunction("John","Doe");
            x.firstName; 
        构造函数中 this 关键字没有任何的值。
        this 的值在函数调用实例化对象(new object)时创建
    5)作为函数方法调用函数
        在 JavaScript 中, 函数是对象。JavaScript 函数有它的属性和方法。
        call() 和 apply() 是预定义的函数方法。 两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。
            function myFunction(a, b) {
                return a * b;
            }
            myObject = myFunction.call(myObject, 10, 2);     // 返回 20

            function myFunction(a, b) {
                return a * b;
            }
            myArray = [10, 2];
            myObject = myFunction.apply(myObject, myArray);  // 返回 20
        两个方法都使用了对象本身作为第一个参数。 两者的区别在于第二个参数： apply传入的是一个参数数组，也就是将多个参数组合成为一个数组传入，而call则作为call的参数传入（从第二个参数开始）。
        在 JavaScript 严格模式(strict mode)下, 在调用函数时第一个参数会成为 this 的值， 即使该参数不是一个对象。
        在 JavaScript 非严格模式(non-strict mode)下, 如果第一个参数的值是 null 或 undefined, 它将使用全局对象替代。
        通过 call() 或 apply() 方法你可以设置 this 的值, 且作为已存在对象的新方法调用。

2.JavaScript 闭包
    JavaScript 变量可以是局部变量或全局变量。
    私有变量可以用到闭包。c
    1)变量生命周期
        全局变量的作用域是全局性的，即在整个JavaScript程序中，全局变量处处都在。
        而在函数内部声明的变量，只在函数内部起作用。这些变量是局部变量，作用域是局部性的；函数的参数也是局部性的，只在函数内部起作用。
    2)JavaScript 内嵌函数
        所有函数都能访问全局变量。  
        实际上，在 JavaScript 中，所有函数都能访问它们上一层的作用域。
        JavaScript 支持嵌套函数。嵌套函数可以访问上一层的函数变量。
        该实例中，内嵌函数 plus() 可以访问父函数的 counter 变量：
            function add() {
                var counter = 0;
                function plus() {counter += 1;}
                plus();    
                return counter; 
            }