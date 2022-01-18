## 参考文章
- [事件模型](https://wangdoc.com/javascript/events/index.html)
- [EventTarget 接口](https://wangdoc.com/javascript/events/eventtarget.html)
- [事件模型](https://wangdoc.com/javascript/events/model.html)

## 基础知识

### EventTarget 接口
- DOM 节点的事件操作（监听和触发），都定义在EventTarget接口。所有节点对象都部署了这个接口，其他一些需要事件通信的浏览器内置对象（比如，XMLHttpRequest、AudioNode、AudioContext）也部署了这个接口。
- 该接口主要提供三个实例方法:
    1. addEventListener()：绑定事件的监听函数
    2. removeEventListener()：移除事件的监听函数
    3. dispatchEvent()：触发事件
### 事件模型
- 浏览器的事件模型，就是通过监听函数（listener）对事件做出反应。事件发生后，浏览器监听到了这个事件，就会执行对应的监听函数。这是事件驱动编程模式（event-driven）的主要编程方式。
- 监听函数:
    - HTML 的 on- 属性
    - 元素节点的事件属性
    - EventTarget.addEventListener()
- 监听函数内部的this指向触发事件的那个元素节点。
- 一个事件发生后，会在子元素和父元素之间传播（propagation）。这种传播分成三个阶段。
    - 第一阶段：从window对象传导到目标节点（上层传到底层），称为“捕获阶段”（capture phase）。
    - 第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。
    - 第三阶段：从目标节点传导回window对象（从底层传回上层），称为“冒泡阶段”（bubbling phase）。
- 注意，浏览器总是假定click事件的目标节点，就是点击位置嵌套最深的那个节点
- 由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation