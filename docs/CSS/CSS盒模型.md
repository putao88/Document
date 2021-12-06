## 参考文章
- [CSS盒模型详解](https://juejin.cn/post/6844903505983963143)
- [CSS盒模型完整介绍](https://segmentfault.com/a/1190000013069516)

## CSS盒模型基础使用
### 基本概念：标准模型+IE模型
- 盒模型又称框模型（Box Model）,包含了元素内容（content）、内边距（padding）、边框（border）、外边距（margin）几个要素
- 由于IE盒模型的怪异模式，IE模型和标准模型的内容计算方式不同
### 标准模型和IE模型的区别
- IE模型元素宽度width=content+padding+border，高度计算相同
- 标准模型元素宽度width=content，高度计算相同
### css如何设置获取这两种模型的宽和高
- 通过css3新增的属性 box-sizing: content-box | border-box分别设置盒模型为标准模型（content-box）和IE模型（border-box）
### javascript如何设置获取盒模型对应的宽和高
    1. dom.style.width/height 只能取到行内样式的宽和高，style标签中和link外链的样式取不到。
    2. dom.currentStyle.width/height 取到的是最终渲染后的宽和高，只有IE支持此属性。
    3. window.getComputedStyle(dom).width/height 同（2）但是多浏览器支持，IE9以上支持。
    4. dom.getBoundingClientRect().width/height 也是得到渲染后的宽和高，大多浏览器支持。IE9以上支持，除此外还可以取到相对于视窗的上下左右的距离
### 外边距重叠
- 当两个垂直外边距相遇时，他们将形成一个外边距，合并后的外边距高度等于两个发生合并的外边距的高度中的较大者。
- 注意：只有普通文档流中块框的垂直外边距才会发生外边距合并，行内框、浮动框或绝对定位之间的外边距不会合并。