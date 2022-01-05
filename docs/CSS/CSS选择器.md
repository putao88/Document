## 参考文章
[CSS选择器](https://juejin.cn/post/6844904147414712334)
## 基础用法
### CSS选择器分类
- 通配符选择器
- 元素（标签）选择器
- 类选择器
- ID选择器
- 属性选取器
    1. [attribute]:选择所有带 attribute 属性的元素
    2. [attribute=value]:选择 attribute=value 的所有元素。
    3. [attribute~=value]:选择 attribute 属性包含单词 value 的所有元素。
    4. [attribute^=value]:选择其 attribute 属性值以 value 开头的所有元素。类似正则的 ^,以什么开始
    5. [attribute$=value]:选择其 attribute 属性值以 value 结束的所有元素。类似正则的 $,以什么结束
    6. [attribute*=value]:选择其 attribute 属性中包含 value 子串的每个元素。
    7. [attribute|=value]:选择 attribute 属性值以 value 开头的所有元素。
- 文档结构选择器
    1. 后代选择器 element element
    2. 子选择器 element>element
    3. 相邻兄弟选择器 element+element
    4. 一般兄弟选择器 element1~element2
- 伪类选择器
    1. :root 文档根元素伪类
    2. :nth-child(n) 孩子选择器
    3. :nth-of-type(n) 同类型的第n个元素
    4. element:first-child
    5. element:last-child
    6. element:first-of-type:同类型的第一个子元素
    7. element:last-of-type:同类型的最后一个子元素
    8. element:only-child:选择了父元素 element 唯一的子元素
    9. :empty 没有子元素
    10. :nth-last-child(n) 倒数第n个子元素
    11. element:nth-last-of-type(n):同类型的倒数第n个子元素,2n+1(odd):奇数、2n(even)：偶数
    12. element:last-of-type:同类型的倒数第一个子元素
    13. element:first-of-type:同类型的第一个子元素
    14. element:only-of-type:父元素里唯一同类型子元素
    15. a:link:没有访问过的状态
    16. a:active在:链接正在被点击
    17. a:hover:选择鼠标指针位于其上的链接。
    18. a:visited:选择所有已被访问的链接。
    19. :focus:   :focus 选择器用于选取获得焦点的元素。提示：接收键盘事件或其他用户输入的元素都允许 :focus 选择器。
    20. :enabled / :disabled : 选择每个启用的 input 元素 / 选择每个禁用的 input 元素
    21. :checked: 选择每个被选中的 input 元素。自定义开关可以用这个实现
    22. :not(selector):选择非 selector 元素的每个元素。（反向选择）
- 伪元素选择器
    1. element::first-line:元素的第一行
    2. element::first-letter:元素第一个字符
    3. element::before: 在每个 element 元素的内容之前插入内容。我们更多的可能是当作一个div来用
    4. element::after: 在每个element元素的内容之后插入内容。我们可能更多的是用来清除浮动或验证表单提示等其它
    5. ::selection: 选择被用户选取的元素部分。







- 
### 选择器优先级
!important>行内样式>ID选择器>类、伪类、属性>元素、伪元素>继承>通配符

### 选择器渲染顺序
**css选择器的匹配是从右向左进行的，这一策略导致来不同种类的选择器之间的性能也存在差异。相比于 #markdown-content-h3,显然使用 #markdown.content h3时，浏览器生成渲染树所要花费的时间更多。因为后者需要先找到DOM中的所有h3元素，再过滤掉祖先元素不是.content的，最后过滤掉.content不是#markdown的。试想，页面中的元素更多，那么匹配所要花费的时间代价自然更高。**

### 影响浏览器性能的css属性
在浏览器绘制屏幕时，所有需要浏览器进行操作或计算的属性相对而言都需要花费更大的代价，而页面发生重绘时，它们会降低浏览器的渲染性能。所以在编写css时，应该尽量减少使用昂贵属性，如:
box-shadow, border-radius, filter, 透明度, :nth-child等
