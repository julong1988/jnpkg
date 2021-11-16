<div align="right">
  Language:
  <a title="English" href="./README.md">English</a>
  <a title="Chinese" href="./README.zh-CN.md">中文</a>
  <a title="Korean" href="./README.ko-KR.md">한국어</a>
</div>
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
