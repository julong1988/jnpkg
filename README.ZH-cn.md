<div align="right">
  Language:
  <a title="English" href="./README.md">English</a>
  <a title="Chinese" href="./README.zh-CN.md">中文</a>
  <a title="Korean" href="./README.ko-KR.md">한국어</a>
</div>
这是一个 node 模块打包工具，支持 Typescript 和 Standard Javascript 语言。



## 目录

- [背景](#背景)
- [安装](#安装)
- [使用](#使用)
- [维护者](#维护者)
- [贡献](#贡献)
- [许可证](#许可证)



## 背景

要将多个模块发布到 NPM，最好有一个通用的打包工具，可以自动导出 CJS 版本和标准 ESM 版本，以及类型支持。



## 安装

```sh
npm install -g jnpkg
```



## 使用

将项目添加到 package.json 文件的scripts中。

设置main和module，区分CJS和ESM，有利于用户打包时的优化。

watch 模式会根据源文件的修改自动打包到目标。

```json
{
  "main": "lib/index.js",
  "module": "es/index.js",
  "scripts": {
    "watch": "jnpkg watch",
    "build": "jnpkg build"
  }
}
```

我们将源文件放入到根目录的src文件夹。(比如 ./src/index.ts)。

然后运行 npm run build 就会在根目录生成cjs(lib目录)和esm(es目录)。

最后我们通过 npm publish 命令就可以正常发布到npm。



## 维护者

JuLong - [jl917](https://github.com/jl917)



## 贡献

欢迎任何人来参与本项目的维护以及开发，也可以提交Issue以及PR's



## 许可证

[MIT](https://github.com/jl917/jnpkg/blob/master/LICENSE)
