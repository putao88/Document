## 参考文章
[grid布局](https://juejin.cn/post/6854573220306255880)

## grid布局基础使用

### grid布局和flex布局
- flex 布局是一维布局，Grid 布局是二维布局。flex 布局一次只能处理一个维度上的元素布局，一行或者一列。Grid 布局是将容器划分成了“行”和“列”，产生了一个个的网格，我们可以将网格元素放在与这些行和列相关的位置上，从而达到我们布局的目的。
- Grid 布局远比 flex 布局强大

### Grid 的一些基础概念
- 容器和项目：我们通过在元素上声明 display：grid 或 display：inline-grid 来创建一个网格容器。一旦我们这样做，这个元素的所有直系子元素将成为网格项目
- 网格单元：一个网格单元是在一个网格元素中最小的单位， 从概念上来讲其实它和表格的一个单元格很像
- 网格线：划分网格的线，称为"网格线"。应该注意的是，当我们定义网格时，我们定义的是网格轨道，而不是网格线。Grid 会为我们创建编号的网格线来让我们来定位每一个网格元素。
### 容器属性
- display属性: display：grid 或 display：inline-grid 来创建一个网格容器。声明 display：grid 则该容器是一个块级元素，设置成 display: inline-grid 则容器元素为行内元素
- grid-template-columns:  设置列宽
- grid-template-rows: 设置行高
- repeat() 函数：可以简化重复的值,该函数接受两个参数，第一个参数是重复的次数，第二个参数是所要重复的值。
- auto-fill 关键字：表示自动填充，让一行（或者一列）中尽可能的容纳更多的单元格。grid-template-columns: repeat(auto-fill, 200px) 表示列宽是 200 px，但列的数量是不固定的，只要浏览器能够容纳得下，就可以放置元素
- fr 关键字: Grid 布局还引入了一个另外的长度单位来帮助我们创建灵活的网格轨道。fr 单位代表网格容器中可用空间的一等份。grid-template-columns: 200px 1fr 2fr 表示第一个列宽设置为 200px，后面剩余的宽度分为两部分，宽度分别为剩余宽度的 1/3 和 2/3。
- minmax() 函数：我们有时候想给网格元素一个最小和最大的尺寸，minmax() 函数产生一个长度范围，表示长度就在这个范围之中都可以应用到网格项目中。它接受两个参数，分别为最小值和最大值。
- auto 关键字：由浏览器决定长度。通过 auto 关键字，我们可以轻易实现三列或者两列布局。grid-template-columns: 100px auto 100px 表示第一第三列为 100px，中间由浏览器决定长度
- grid-row-gap : 设置行间距
- grid-column-gap: 设置列间距
- grid-gap: grid-row-gap和grid-column-gap的简写形式。
- grid-template-areas 属性用于定义区域，一个区域由一个或者多个单元格组成.一般是和grid-areas联合使用
- grid-auto-flow: 控制着自动布局算法怎样运作，精确指定在网格中被自动布局的元素怎样排列。默认的放置顺序是"先行后列"，即先填满第一行，再开始放入第二行.grid-auto-flow: row dense，表示尽可能填满表格
- justify-items 属性设置单元格内容的水平位置（左中右），align-items 属性设置单元格的垂直位置（上中下）
- justify-content 属性是整个内容区域在容器里面的水平位置（左中右），align-content 属性是整个内容区域的垂直位置（上中下)
- 隐式和显式网格：显式网格包含了你在 grid-template-columns 和 grid-template-rows 属性中定义的行和列。如果你在网格定义之外又放了一些东西，或者因为内容的数量而需要的更多网格轨道的时候，网格将会在隐式网格中创建行和列
- 假如有多余的网格（也就是上面提到的隐式网格），那么它的行高和列宽可以根据 grid-auto-columns 属性和 grid-auto-rows 属性设置。它们的写法和grid-template-columns 和 grid-template-rows 完全相同。如果不指定这两个属性，浏览器完全根据单元格内容的大小，决定新增网格的列宽和行高
- grid-column-start 属性、grid-column-end 属性、grid-row-start 属性以及grid-row-end 属性,可以指定网格项目所在的四个边框，分别定位在哪根网格线，从而指定项目的位置
    - grid-column-start 属性：左边框所在的垂直网格线
    - grid-column-end 属性：右边框所在的垂直网格线
    - grid-row-start 属性：上边框所在的水平网格线
    - grid-row-end 属性：下边框所在的水平网格线
- justify-self 属性设置单元格内容的水平位置（左中右），跟 justify-items 属性的用法完全一致，但只作用于单个项目
- align-self 属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目
### Grid 布局兼容性
![Grid布局兼容性](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/26/17389592fa541366~tplv-t2oaga2asx-watermark.awebp)
