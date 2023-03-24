## 使用执行的配置文件，同时修复，以及 lint 文件的范围

"lint":"eslint --fix -c .eslintrc.js src/\*_/_.tsx",

## format
格式化src目录下的所有文件
> prettier --write src

src/App.css 21ms
src/App.tsx 188ms
src/index.css 3ms
src/index.tsx 11ms

## tailwindcss
1. cra创建的脚手架，webpack中已经添加了postcss配置，会检测本地是否有tailwind.config.js用来决定是否开启tailwind
2. tailwind.config.js的content需要添加检查范围 src/**/\*.tsx 