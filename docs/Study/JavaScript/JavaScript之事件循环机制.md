## 参考文章
- [Javascript事件循环机制](https://juejin.cn/post/6844903512845860872)
- [事件循环机制](https://zhuanlan.zhihu.com/p/33058983)

## Javascript单线程
- javascript是一门单线程的非阻塞的脚本语言
- **单线程**意味着，javascript代码在执行的任何时候，都只有一个主线程来处理所有的任务。
- **非阻塞**则是当代码需要进行一项异步任务（无法立刻返回结果，需要花一定时间才能返回的任务，如I/O事件）的时候，主线程会挂起（pending）这个任务，然后在异步任务返回结果的时候再根据一定规则去执行相应的回调
- web worker技术术让javascript成为一门多线程语言,只能为主线程分担一些诸如计算等任务,因此这项技术并非改变了javascript语言的单线程本质
- Event Loop是javascript的执行机制
## Javascript事件循环
- 任务分为以下2类:
    1. 同步任务
    2. 异步任务
- 事件循环过程:
    1. 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入Event Table并注册函数。
    2. 当指定的事情完成时，Event Table会将这个函数移入Event Queue。
    3. 主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。
    4. 上述过程会不断重复，也就是常说的Event Loop(事件循环)
![事件循环](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/21/15fdd88994142347~tplv-t2oaga2asx-watermark.awebp)
- 异步任务分为2类,不同类型的任务会进入对应的Event Queue
    1. macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
    2. micro-task(微任务)：Promise，process.nextTick
![事件循环,微任务,宏任务关系图](https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2017/11/21/15fdcea13361a1ec~tplv-t2oaga2asx-watermark.awebp)

