## 参考资料
- [react-typescript-cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
  React开发备忘单
- [eslint和prettier的npm包和vscode插件](https://juejin.cn/post/6990929456382607374)
- [优雅的提交你的 Git Commit Message](https://juejin.cn/post/6844903606815064077)
- [使用 husky 进行提交前的代码规范校验和 commit 信息检查](https://blog.csdn.net/huangpb123/article/details/102690412?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-102690412-blog-124365505.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-3-102690412-blog-124365505.pc_relevant_default&utm_relevant_index=6)
- [Eslint + Prettier + Husky + Commitlint+ Lint-staged 规范前端工程代码规范](https://juejin.cn/post/7038143752036155428)
## 官方脚手架搭建(create-react-app)
- 配置代码规范，使用的是(Eslint+prettier+husky+lint-staged+commitlint)
- husky：Git hooks 工具
  - 对git执行的一些命令，通过对应的hooks钩子触发，执行自定义的脚本程序
- lint-staged：检测文件插件
  - 只检测git add . 中暂存区的文件，对过滤出的文件执行脚本
- eslint：插件化JavaScript代码检测工具
  - Js编码规范，检测并提示错误或警告信息
- stylelint: 一个强大的，现代的代码检查工具，
  - 可以帮助你在团队合作中强制执行样式约定。
- prettier：代码格式化工具
  - 代码风格管理，更好的代码风格效果
- editorconfig：文件代码规范
  - 保持多人开发一致编码样式
- commitlint：代码提交检测
  - 检测git commit 内容是否符合定义的规范
- commitizen：代码提交内容标准化
  - 提示定义输入标准的git commit 内容
### 初始化项目
```javascript
npm install -g create-react-app
# Creates an app called my-app
npx create-react-app my-app --typescript
cd my-app
# Adds the type definitions
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
echo "Good to go :tada:"
```

### ESLint
1. 我们创建项目的时候已经自动帮我们下载好了eslint依赖，如果没有下载的话我们使用以下命令安装即可
```javascript
npm install -g eslint // 建议全局安装
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
# eslint：javascript代码检测工具，使用espree解析器
# @typescript-eslint/parser：将 TypeScript 转换为 ESTree，使 eslint 可以识别
# @typescript-eslint/eslint-plugin：只是一个可以打开或关闭的规则列表
```
2. 初始化eslint，使用命令
```javascript
eslint --init
```
- 有三种可选择的方式，检查语法错误，检出语法错误和问题，检查语法错误和强制代码规范，由于我们使用prettier来配置代码规范，所以我们选择第二项，其它的按照我们自己的需求进行配置，配置完后可能会要我们下载相关规则依赖，选择yes安装即可。
![模式选择](https://img-blog.csdnimg.cn/img_convert/ae7cb39280c29211615b5e7bb39c4998.png)
![eslint初始化](https://img-blog.csdnimg.cn/img_convert/445ed18017199a5b853e6b2085ae44be.png)
3. 安装完之后我们项目的根目录下面就会多出一个.eslintrc.js文件，我们配合本地的eslint就可以使用了。
```javascript
eslint yourfile.js
# 命令行会返回出现 problems 的数量和相应行数。
eslint --fix yourfile.js
# 直接修改文件
```
### Prettier
- Prettier 只是一个Formatting rules ，负责 enforce code style！，这也是为什么我们在选择eslint的作用时只选择第二项，因为prettier实在是太好用了。代码格式化的原理是将代码解析为抽象语法树（AST）来处理。
1. 安装prettier
```javascript
npm install -g prettier  # 只安装prettier
npm install prettier eslint-config-prettier eslint-plugin-prettier
# prettier: 格式化规则程序
# eslint-config-prettier: 禁用所有和 Prettier 产生冲突的规则
# eslint-plugin-prettier: 把 Prettier 应用到 Eslint，配合 rules "prettier/prettier": "error" 实现 Eslint 提醒。实际上是把prettier变成插件，然后如果有错误就通过eslint抛出来
```
2. 我们也可以在项目根目录下面创建两个文件，一个配置文件和一个忽视文件。.prettierrc.js配置文件（配置文件的后缀其实也可以是.json等多种更格式，但是.js的优先级最高，具体可以上官网查看）及.prettierignore忽略文件，具体规则我们可以去prettier官网去查找，或者去npm上下载别人已经写好的代码规范，然后导入到我们的项目中去。我们这个项目初始化的过程中使用prettier默认的规则就好，暂时不去自定义相关的规范。
3. 使用
```javascript
prettier yourfile.js
# 返回格式化后的文件内容
prettier --write yourfile.js
# 直接修改文件
```
### husky+lint
- 使用husky的好处，可以在代码提交之前执行触发.git/hooks下面的钩子函数，例如使用precommit，这样就可以在提交之前去执行一遍lint或者lint-staged,lint是会把项目的所有目录都跑一遍看有没有不符合eslint规范的，而lint-stage可以只看这一次改动的git暂存区中的代码是否符合规范。一般项目中的检查过程如下：
```javascript
代码提交 --> 发现问题(远程) --> 修复问题 --> 重新提交 --> 通过检查(远程)
```
1. 下载husky
```javascript
npm install -D husky
```
2. 下载完之后package.json下面会多出husky这个属性，会在pre-commit这个钩子函数之前执行npm run lint这个脚本，由于这个脚本创建项目的时候并没有给我们创建好，我们自己在scripts属性中添加这个命令。
![husky+lint](https://img-blog.csdnimg.cn/img_convert/b75694ee0e32ab339db42f499adb5daf.png)
### husky+lint-staged
- 但是这样每次提交lint都会对文件中的整个目录进行遍历，实在不好，所以我们使用lint-staged只对暂存区中的代码进行检查
1. 下载lint-staged
```javascript
npm install -D lint-staged
```
2. 更改husky配置(这个配置只适用于4.x版本的husky)
```javascript
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"  // pre-commit之前执行lint-staged
    }
  },
  "lint-staged": {
    "eslint --fix --ext .js,.tsx,.jsx,.ts ./src": [
      "eslint",
      "eslint --fix --format=pretty",
      "git add"] // lint-staged会对这些文件一次执行这些操作，如果只需要eslint检查的话也可以写成"eslint"，而不需要以数组形式表现出来
  },
  
  // 不写成数组
  "lint-staged": {
  	"eslint --fix --ext .js,.tsx,.jsx,.ts ./src":"eslint"
  }
```




## react-scripts-ts搭建
- 参考文章: [typescript-react-starter](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
- react-scripts-ts快速搭建项目,在官方脚手架的基础上又集成了eslint,jest等功能
```javascript
npm install -g create-react-app

create-react-app my-app --scripts-version=react-scripts-ts

```
