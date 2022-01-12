[参考文档]('https://zhuanlan.zhihu.com/p/182553920')

## msg格式：
```
<type>(<scope>): <subject>
```

### type:

- feat：新功能（feature）。
- fix/to：修复bug，可以是QA发现的BUG，也可以是研发自己发现的BUG。
- fix：产生diff并自动修复此问题。适合于一次提交直接修复问题
- to：只产生diff不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix
- docs：文档（documentation）。
- style：格式（不影响代码运行的变动）。
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）。
- perf：优化相关，比如提升性能、体验。
- test：增加测试。
- chore：构建过程或辅助工具的变动。
- revert：回滚到上一个版本。
- merge：代码合并。
- sync：同步主线或分支的Bug。

### scope(可选)

scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

例如在Angular，可以是location，browser，compile，compile，rootScope， ngHref，ngClick，ngView等。如果你的修改影响了不止一个scope，你可以使用*代替。

### subject(必须)

subject是commit目的的简短描述，不超过50个字符。

建议使用中文（感觉中国人用中文描述问题能更清楚一些）。

结尾不加句号或其他标点符号。
根据以上规范git commit message将是如下的格式：

```
fix(DAO):用户查询缺少username属性
feat(Controller):用户查询接口开发
```

### 规范git commit到底有哪些好处呢？

- 对提交历史进行追溯，了解发生了什么情况。
- 一旦约束了commit message，意味着我们将慎重的进行每一次提交，不能再一股脑的把各种各样的改动都放在一个git commit里面，这样一来整个代码改动的历史也将更加清晰。
- 格式化的commit message才可以用于自动化输出Change log。

### git hooks
分为客户端hook和服务端hook。

- 客户端hook又分为pre-commit、prepare-commit-msg、commit-msg、post-commit等，主要用于控制客户端git的提交工作流。用户可以在项目根目录的.git目录下面配置使用，也可以配置全局git template用于个人pc上的所有git项目使用。
- 服务端hook又分为pre-receive、post-receive、update，主要在服务端接受提交对象时进行调用。


### git commit 提交规范之ESlint规范校验

prettier 用来优化代码格式，比如缩进、空格、分号等等
husky可以用于实现各种 Git Hook。这里主要用到 pre-commit这个 hook，在执行 commit 之前，运行一些自定义操作
lint-staged 用于对 Git 暂存区中的文件执行代码检测

-> git add 添加到暂存区
-> 执行 git commit
-> husky注册在git pre-commit的钩子调起 lint-staged
-> lint-staged 取得所有被提交的文件依次执行写好的任务（ESLint 和 Prettier）
-> 如果有错误（没通过ESlint检查）则停止任务，等待下次commit，同时打印错误信息
-> 成功提交

husky 主用功能是为 git 添加 git 钩子，它允许我们在使用 git 中在一些重要动作发生时触发自定义脚本(npm script), 比如我们可以在 git push 之前执行特定的自定义脚本对代码进行单元测试、又或者在 git commit 之前执行 eslint 校验，当然本文主要介绍如何借用 husky 为 git 添加 commit-msg 钩子并对 commit 进行校验。

commitlint 用于检查您的提交消息是否符合规定提交格式，一般和 husky 包一起使用，用于对 git commit 信息的格式进行校验，当 commit 信息不符合规定格式的情况下将会抛出错误。