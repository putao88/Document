## 参考资料
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

### Event 对象
- 事件发生以后，会产生一个事件对象，作为参数传给监听函数。浏览器原生提供一个Event对象，所有的事件都是这个对象的实例，或者说继承了Event.prototype对象。Event对象本身就是一个构造函数，可以用来生成新的实例。
- 实例属性
    - Event.bubbles，Event.eventPhase
    - Event.cancelable，Event.cancelBubble，event.defaultPrevented
    - Event.currentTarget，Event.target
    - Event.type
    - Event.timeStamp
    - Event.isTrusted
    - Event.detail
- 实例方法
    - Event.preventDefault()
    - Event.stopPropagation()
    - Event.stopImmediatePropagation()
    - Event.composedPath()

### 鼠标事件
- 鼠标事件主要有下面这些，所有事件都继承了MouseEvent接口
- MouseEvent接口代表了鼠标相关的事件，单击（click）、双击（dblclick）、松开鼠标键（mouseup）、按下鼠标键（mousedown）等动作，所产生的事件对象都是MouseEvent实例。此外，滚轮事件和拖拉事件也是MouseEvent实例。
- MouseEvent接口继承了Event接口，所以拥有Event的所有属性和方法，并且还提供鼠标独有的属性和方法。

### 键盘事件
- 键盘事件由用户击打键盘触发，主要有keydown、keypress、keyup三个事件，它们都继承了KeyboardEvent接口。
    - keydown：按下键盘时触发。
    - keypress：按下有值的键时触发，即按下 Ctrl、Alt、Shift、Meta 这样无值的键，这个事件不会触发。对于有值的键，按下时先触发keydown事件，再触发这个事件。
    - keyup：松开键盘时触发该事件
### 进度事件
- 进度事件用来描述资源加载的进度，主要由 AJAX 请求、<img>、<audio>、<video>、<style>、<link>等外部资源的加载触发，继承了ProgressEvent接口。
    - abort：外部资源中止加载时（比如用户取消）触发。如果发生错误导致中止，不会触发该事件。
    - error：由于错误导致外部资源无法加载时触发。
    - load：外部资源加载成功时触发。
    - loadstart：外部资源开始加载时触发。
    - loadend：外部资源停止加载时触发，发生顺序排在error、abort、load等事件的后面。
    - progress：外部资源加载过程中不断触发。
    - timeout：加载超时时触发。
### 表单事件
### 触摸事件
### 托拉事件
- 拖拉（drag）指的是，用户在某个对象上按下鼠标键不放，拖动它到另一个位置，然后释放鼠标键，将该对象放在那里。
- 拖拉的对象有好几种，包括元素节点、图片、链接、选中的文字等等。在网页中，除了元素节点默认不可以拖拉，其他（图片、链接、选中的文字）都可以直接拖拉。为了让元素节点可拖拉，可以将该节点的draggable属性设为true。
### GlobalEventHandlers 接口
- HTMLElement、Document和Window都继承了这个接口，也就是说，各种 HTML 元素、document对象、window对象上面都可以使用GlobalEventHandlers接口提供的属性。
- 事件:
    GlobalEventHandlers.onabort
    GlobalEventHandlers.onerror
    GlobalEventHandlers.onload、GlobalEventHandlers.onloadstart
    GlobalEventHandlers.onfocus，GlobalEventHandlers.onblur
    GlobalEventHandlers.onscroll
    GlobalEventHandlers.oncontextmenu，GlobalEventHandlers.onshow
