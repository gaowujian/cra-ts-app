## 使用执行的配置文件，同时修复，以及 lint 文件的范围

"lint":"eslint --fix -c .eslintrc.js src/\*_/_.tsx",

## format

格式化 src 目录下的所有文件

> prettier --write src

```
src/App.css 21ms
src/App.tsx 188ms
src/index.css 3ms
src/index.tsx 11ms
```

## tailwindcss

1. cra 创建的脚手架，webpack 中已经添加了 postcss 配置，会检测本地是否有 tailwind.config.js 用来决定是否开启 tailwind
2. tailwind.config.js 的 content 需要添加检查范围 src/\*\*/\*.tsx

## 不再使用 React.FC 来定义函数组件

https://tech.bytedance.net/course-book/7189560412336029733/section/7189975138824093755

1. children 问题
2. 默认值问题
3. 组件泛型问题

## 我们封装一个组件的顺序

1. 明确这个组件的需求，需要支持哪些数据的展示和行为
2. 制定 ts 类型
3. 开始编码，绘制 ui, 推荐使用 tailwindcss 可以进行样式的快速开发
