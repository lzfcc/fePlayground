# Front End Playground

## 为什么？
通过 VSCode 的默认配置，可以通过 Node.js 调试 JavaScript 代码。如果想用 Chrome 调试呢？本项目用以解决这个问题。

本项目并非不可替代的。Code Runner app 使用的是 Safari 的 Web Inspector（无法选择？），由于都是主流浏览器，其实对最新 ES 标准的实现都是一致的。

参考：
[Visual Studio Code 前端调试不完全指南
](https://jerryzou.com/posts/vscode-debug-guide/)

## 怎么用？
新建目录（例如：frontend），写前端代码（可以单纯为了调试 JavaScript）。然后

```
$ npm run frontend
```