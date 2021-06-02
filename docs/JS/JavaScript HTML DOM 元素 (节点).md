1.创建新的 HTML 元素 (节点) - appendChild()
    要创建新的 HTML 元素 (节点)需要先创建一个元素，然后在已存在的元素中添加它。
    1)以下代码是用于创建 <p> 元素:
        var para = document.createElement("p");
    2)为 <p> 元素创建一个新的文本节点：
        var node = document.createTextNode("这是一个新的段落。");
    3)将文本节点添加到 <p> 元素中：
        para.appendChild(node);
    4)最后，在一个已存在的元素中添加 p 元素。
        查找已存在的元素：
        var element = document.getElementById("div1");
    5)添加到已存在的元素中:
        element.appendChild(para);


2.创建新的 HTML 元素 (节点) - insertBefore()
    以上的实例我们使用了 appendChild() 方法，它用于添加新元素到尾部。
    如果我们需要将新元素添加到开始位置，可以使用 insertBefore() 方法:
        <div id="div1">
        <p id="p1">这是一个段落。</p>
        <p id="p2">这是另外一个段落。</p>
        </div>
        
        <script>
        var para = document.createElement("p");
        var node = document.createTextNode("这是一个新的段落。");
        para.appendChild(node);
        
        var element = document.getElementById("div1");
        var child = document.getElementById("p1");
        element.insertBefore(para, child);
        </script>

3.移除已存在的元素
    要移除一个元素，你需要知道该元素的父元素。
        <div id="div1">
        <p id="p1">这是一个段落。</p>
        <p id="p2">这是另外一个段落。</p>
        </div>
        
        <script>
        var parent = document.getElementById("div1");
        var child = document.getElementById("p1");
        parent.removeChild(child);
        </script>
    注意：早期的 Internet Explorer 浏览器不支持 node.remove() 方法。

4.替换 HTML 元素 - replaceChild()
    我们可以使用 replaceChild() 方法来替换 HTML DOM 中的元素。
    <div id="div1">
    <p id="p1">这是一个段落。</p>
    <p id="p2">这是另外一个段落。</p>
    </div>
    
    <script>
    var para = document.createElement("p");
    var node = document.createTextNode("这是一个新的段落。");
    para.appendChild(node);
    
    var parent = document.getElementById("div1");
    var child = document.getElementById("p1");
    parent.replaceChild(para, child);
    </script>

5.JavaScript HTML DOM 集合(Collection)
    1)HTMLCollection 对象
        HTMLCollection 对象类似包含 HTML 元素的一个数组。
        以下代码获取文档所有的 <p> 元素：
            var x = document.getElementsByTagName("p");
        集合中的元素可以通过索引(以 0 为起始位置)来访问。
        访问第二个 <p> 元素可以是以下代码:
            y = x[1];
    2)HTMLCollection 对象 length 属性
        HTMLCollection 对象的 length 属性定义了集合中元素的数量。
            var myCollection = document.getElementsByTagName("p");
            document.getElementById("demo").innerHTML = myCollection.length;

        注意:
            HTMLCollection 不是一个数组！
            HTMLCollection 看起来可能是一个数组，但其实不是。
            你可以像数组一样，使用索引来获取元素。
            HTMLCollection 无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。

6.JavaScript HTML DOM 节点列表
    NodeList 对象是一个从文档中获取的节点列表 (集合) 。
    一些旧版本浏览器中的方法（如：getElementsByClassName()）返回的是 NodeList 对象，而不是 HTMLCollection 对象。
    所有浏览器的 childNodes 属性返回的是 NodeList 对象。
    大部分浏览器的 querySelectorAll() 返回 NodeList 对象。
    以下代码选取了文档中所有的 <p> 节点：   
        var myNodeList = document.querySelectorAll("p");
    1)NodeList 对象 length 属性
        NodeList 对象 length 属性定义了节点列表中元素的数量。
            var myNodelist = document.querySelectorAll("p");
            document.getElementById("demo").innerHTML = myNodelist.length;
    2)HTMLCollection 与 NodeList 的区别
        HTMLCollection 是 HTML 元素的集合。
        NodeList 是一个文档节点的集合。
        NodeList 与 HTMLCollection 有很多类似的地方。
        NodeList 与 HTMLCollection 都与数组对象有点类似，可以使用索引 (0, 1, 2, 3, 4, ...) 来获取元素。
        NodeList 与 HTMLCollection 都有 length 属性。
        HTMLCollection 元素可以通过 name，id 或索引来获取。
        NodeList 只能通过索引来获取。
        只有 NodeList 对象有包含属性节点和文本节点。
        注意：
            节点列表不是一个数组！
            节点列表看起来可能是一个数组，但其实不是。
            你可以像数组一样，使用索引来获取元素。
            节点列表无法使用数组的方法： valueOf(), pop(), push(), 或 join() 。

