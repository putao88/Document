## 参考资料
[uglify原理](https://www.h5w3.com/19480.html)

## 基础概念
### AST
- AST是源代码根据其语法结构,省略一些细节(比如:括号没有生成节点),抽象成树形表达.
### 代码压缩原理
- 将code转换成AST
- 将AST进行优化,生成一个更小的AST
- 将新生成的AST再转换成code
- babel,eslint,v8逻辑均与此类似
![压缩原理](https://www.h5w3.com/wp-content/uploads/2020/06/bVbDNYp.jpg)
- uglifys根据相应规则将代码进行压缩