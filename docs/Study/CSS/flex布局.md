## 参考资料
[flex 布局的基本概念](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

## flex布局基础使用
### flexbox 的两根轴线
- 主轴由 flex-direction 定义,一般默认是inline
- 交叉轴垂直于主轴
- flexbox 的特性是沿着主轴或者交叉轴对齐之中的元素。
### Flex 容器
- 文档中采用了 flexbox 的区域就叫做 flex 容器。为了创建 flex 容器， 我们把一个容器的 display 属性值改为 flex 或者 inline-flex。 完成这一步之后，容器中的直系子元素就会变为 flex 元素
- flex 容器中的所有 flex 元素都会有下列行为:
    - 元素排列为一行 (flex-direction 属性的初始值是 row)。
    - 元素从主轴的起始线开始。
    - 元素不会在主维度方向拉伸，但是可以缩小。
    - 元素被拉伸来填充交叉轴大小。
    - flex-basis 属性为 auto。
    - flex-wrap 属性为 nowrap。
- 基本属性
    - flex-direction:设置flex 元素的排列方向
    - flex-wrap: 属性值wrap实现多行
    - flex-flow: 简写属性,flex-direction 和 flex-wrap 组合
- flex 元素上的属性
    - flex-grow: 若被赋值为一个正整数， flex 元素会以 flex-basis 为基础，沿主轴方向增长尺寸。这会使该元素延展，并占据此方向轴上的可用空间
    - flex-shrink: 如果我们的容器中没有足够排列flex元素的空间，那么可以把flex元素flex-shrink属性设置为正整数来缩小它所占空间到flex-basis以下
    - flex-basis: 定义了该元素的空间大小（the size of that item in terms of the space），flex容器里除了元素所占的空间以外的富余空间就是可用空间
    - Flex属性的简写flex: Flex 简写形式允许你把三个数值按这个顺序书写 — flex-grow，flex-shrink，flex-basis。
- 元素间的对齐和空间分配
    - align-items: 可以使元素在交叉轴方向对齐。这个属性的初始值为stretch
        - stretch
        - flex-start
        - flex-end
        - center
    - justify-content属性用来使元素在主轴方向上对齐
        - stretch
        - flex-start
        - flex-end
        - center
        - space-around
        - space-between


### 扩展思考
- flex: 1
    flex: 1 === flex: 1 1 0%;表示,flex元素的三个复合值为1,1,0%,如果元素均为flex:1,那么在页面上他们会等分