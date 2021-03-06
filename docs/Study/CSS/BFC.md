## 参考资料
[BFC 原理](https://zhuanlan.zhihu.com/p/25321647)
## 基础使用
### 常见定位方案
#### 普通流 (normal flow):
    在普通流中，元素按照其在 HTML 中的先后位置至上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非另外指定，否则所有元素默认都是普通流定位，也可以说，普通流中元素的位置由该元素在 HTML 文档中的位置决定
#### 浮动 (float)
    在浮动布局中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。
#### 绝对定位 (absolute positioning)
    在绝对定位布局中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。
### BFC 概念
- BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。
- 具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。
### 触发 BFC
只要元素满足下面任一条件即可触发 BFC 特性：
- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)
### BFC 特性及应用
- 同一个 BFC 下外边距会发生折叠
- BFC 可以包含浮动的元素（清除浮动）
- BFC 可以阻止元素被浮动元素覆盖

