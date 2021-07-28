### Error: Cannot find module 'webpack-cli/bin/config-yargs'

处理：

```
// 卸载之前安装的webpack-cli
npm uninstall webpack-cli

// 安装指定版本3.3.12 的webpack-cli
npm install webpack-cli@3.3.12 --save-dev
```