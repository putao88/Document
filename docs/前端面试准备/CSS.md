## 1.什么是BFC
相关连接：https://juejin.cn/post/6844903544726749198#comment

### 1.BFC定义
#### 1、Box:css布局的基本单位
在解释 BFC 是什么之前，需要先介绍 Box、Formatting Context的概念。
##### Box: CSS布局的基本单位
Box 是 CSS 布局的对象和基本单位， 直观点来说，就是一个页面是由很多个 Box 组成的。元素的类型和 display 属性，决定了这个 Box 的类型。 不同类型的 Box， 会参与不同的 Formatting Context（一个决定如何渲染文档的容器），因此Box内的元素会以不同的方式渲染。让我们看看有哪些盒子：
**block-level box**:display 属性为 block, list-item, table 的元素，会生成 block-level box。并且参与 block fomatting context；
**inline-level box**:display 属性为 inline, inline-block, inline-table 的元素，会生成 inline-level box。并且参与 inline formatting context；
run-in box: css3 中才有， 这儿先不讲了。
##### Formatting context
**Formatting context** 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)。
CSS2.1 中只有 BFC 和 IFC, CSS3 中还增加了 GFC 和 FFC。
#### 2、BFC
**BFC**： BFC（Block Formatting Context）直译为“块级格式化范围”。是 W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用
当涉及到可视化布局的时候，Block Formatting Context提供了一个环境，HTML元素在这个环境中按照一定规则进行布局。一个环境中的元素不会影响到其它环境中的布局。比如浮动元素会形成BFC，浮动元素内部子元素的主要受该浮动元素影响，两个浮动元素之间是互不影响的。这里有点类似一个BFC就是一个独立的行政单位的意思。
也可以说BFC就是一个作用范围。可以把它理解成是一个独立的容器，并且这个容器的里box的布局，与这个容器外的毫不相干

### 2.怎样才能形成BFC
    1、float的值不能为none
    2、overflow的值不能为visible
    3、display的值为table-cell, table-caption, inline-block中的任何一个
    4、position的值不为relative和static

### 3.BFC特性
    1、使 BFC 内部浮动元素不会到处乱跑；
    2、和浮动元素产生边界。

### 4.BFC作用（应用场景）
    1、清除元素内部浮动：具备BFC属性元素内有浮动元素时，计算高度也会加上浮动元素高度
    2、不和浮动元素重叠：具备BFC属性元素前有浮动元素时，他们内容不会重叠，常用于2列左右布局
    3、防止垂直 margin 重叠：2个相邻具备BFC属性的元素，上下都设置了margin时，不会重叠



