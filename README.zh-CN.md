
<div align="right">
  Language:
  <a title="English" href="./README.md">🇺🇸</a>
  <a title="Chinese" href="./README.zh-CN.md">🇨🇳</a>
  <a title="Korean" href="./README.ko-KR.md">🇰🇷</a>
</div>

<p aligin="center">
  <img src="https://raw.githubusercontent.com/jl917/jnpkg/master/JNPKG.png" alt="jnpkg" width="450"/>
</p>

[![semantic-release](https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Package Quality](https://packagequality.com/shield/jnpkg.svg)](https://packagequality.com/#?package=jnpkg)
![license](https://img.shields.io/npm/l/jnpkg)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/jl917/jnpkg)
![npmsio final](https://img.shields.io/npms-io/final-score/jnpkg)
![GitHub Release Date](https://img.shields.io/github/release-date/jl917/jnpkg)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jl917_jnpkg&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=jl917_jnpkg)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jl917_jnpkg&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=jl917_jnpkg)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=jl917_jnpkg&metric=coverage)](https://sonarcloud.io/summary/new_code?id=jl917_jnpkg)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/jnpkg)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/jl917/jnpkg/Release?label=GitHub%20Action%20build)
![CircleCI](https://img.shields.io/circleci/build/gh/jl917/jnpkg?label=Circleci%20build)

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
# local
npm install --save-dev jnpkg
# global
npm install -g jnpkg
```



## 使用

使用 `jnpkg init` 命令生成 `package.json` 文件。

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

或者可以设置 `semantic-release` 自动发布到npm。

`jnpkg init` 命令自动生成 `semantic-release` 相关文件。

NPM Token 和 GITHUB Token 可以参考以下网址

[https://github.com/settings/tokens](https://github.com/settings/tokens)

[https://www.npmjs.com/settings/{username}/tokens](https://www.npmjs.com/settings/{username}/tokens)



## 设置
```js
// .jnpkgrc
{
  "lib": true, 
  "es": true,
  "browser": true,
  "pkgName": "pkg",
  "entry": "./src/index.ts",
}
```



## 维护者

JuLong - [jl917](https://github.com/jl917)



## 贡献

欢迎任何人来参与本项目的维护以及开发，也可以提交Issue以及PR's



## 许可证

[MIT](https://github.com/jl917/jnpkg/blob/master/LICENSE)
