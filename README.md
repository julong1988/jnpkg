
<div align="right">
  Language:
  <a title="English" href="./README.md">🇺🇸</a>
  <a title="Chinese" href="./README.zh-CN.md">🇨🇳</a>
  <a title="Korean" href="./README.ko-KR.md">🇰🇷</a>
</div>

<h1 aligin="center">JNPKG</h1>

[![semantic-release](https://img.shields.io/badge/semantic-release-e10079.svg?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![Package Quality](https://packagequality.com/shield/jnpkg.svg)](https://packagequality.com/#?package=jnpkg)
![license](https://img.shields.io/npm/l/jnpkg)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/jl917/jnpkg)
![npmsio final](https://img.shields.io/npms-io/final-score/jnpkg)
![GitHub Release Date](https://img.shields.io/github/release-date/jl917/jnpkg)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/jl917/jnpkg/Release)
![Coveralls](https://img.shields.io/coveralls/github/jl917/jnpkg)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jl917_jnpkg&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=jl917_jnpkg)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jl917_jnpkg&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=jl917_jnpkg)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=jl917_jnpkg&metric=coverage)](https://sonarcloud.io/summary/new_code?id=jl917_jnpkg)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/jnpkg)

This is a node module packaging tool, which supports Typescript and Standard Javascript languages.



## Table of Contents

- [Background](#background)
- [Installation](#installation)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Thanks](#thanks)
- [Contributing](#contributing)
- [License](#license)



## Background

To publish multiple modules to NPM, it is best to have a common packaging tool that automatically exports CJS version and standard ESM version, as well as type support.



## Installation

```sh
npm install -g jnpkg
```



## Usage

Add items to the scripts of the package.json file.

Set main and module to distinguish between CJS and ESM, which is conducive to the optimization of users when packaging.

The watch mode will be automatically packaged to the target according to the modification of the source file.

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

We put the source files into the src folder of the root directory. (E.g. ./src/index.ts).

Then running npm run build will generate cjs (lib directory) and esm (es directory) in the root directory.

Finally, we can publish to npm normally through the npm publish command.



## Maintainers

JuLong - [jl917](https://github.com/jl917)



## Contributing

Anyone is welcome to participate in the maintenance and development of this project, and can also submit Issues and PR's



## License

[MIT](https://github.com/jl917/jnpkg/blob/master/LICENSE)
