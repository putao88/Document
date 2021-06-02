1.JavaScript 数据类型
    在 JavaScript 中有 6 种不同的数据类型：
        string
        number
        boolean
        object
        function
        symbol

    3种对象类型：
        Object
        Date
        Array

    2个不包含任何值的数据类型：
        null
        undefined

2.constructor 属性
    constructor 属性返回所有 JavaScript 变量的构造函数。
    "John".constructor                 // 返回函数 String()  { [native code] }
    (3.14).constructor                 // 返回函数 Number()  { [native code] }
    false.constructor                  // 返回函数 Boolean() { [native code] }
    [1,2,3,4].constructor              // 返回函数 Array()   { [native code] }
    {name:'John', age:34}.constructor  // 返回函数 Object()  { [native code] }
    new Date().constructor             // 返回函数 Date()    { [native code] }
    function () {}.constructor         // 返回函数 Function(){ [native code] }

3.JavaScript 类型转换
    String  转换为字符串
    toString()  转换为字符串
    Number() 可以将字符串转换为数字
    toExponential()	把对象的值转换为指数计数法。
    toFixed()	把数字转换为字符串，结果的小数点后有指定位数的数字。
    toPrecision()	把数字格式化为指定的长度。
    parseFloat()	解析一个字符串，并返回一个浮点数。
    parseInt()	解析一个字符串，并返回一个整数。

4.自动转换类型
    5 + null    // 返回 5         null 转换为 0
    "5" + null  // 返回"5null"   null 转换为 "null"
    "5" + 1     // 返回 "51"      1 转换为 "1" 
    "5" - 1     // 返回 4         "5" 转换为 5
    