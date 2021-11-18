const path = require('path');
const fs = require('fs');

const rootPath = (filePath) => path.resolve(__dirname, filePath);
const subPath = (filePath) => path.resolve(filePath);
const binPath = path.resolve(__dirname, '../../node_modules/.bin');

const createTmpTsconfig = (outDir) => {
  // 메인 타입스크립트 가져오기
  let tsconfig = require(rootPath('../../tsconfig.json'));
  // 서브 타입스크립트 체크 및 가져오기
  let subTsconfig = {};
  try {
    subTsconfig = require(subPath('./tsconfig.json'));
  } catch (error) {
    console.log('tsconfig.json parsing error');
  }
  tsconfig = {
    ...tsconfig,
    ...subTsconfig,
    compilerOptions: {
      ...tsconfig.compilerOptions,
      ...(subTsconfig.compilerOptions || {}),
    },
    exclude: [...(subTsconfig.exclude || [])],
    include: [...(subTsconfig.include || []), subPath('./src')],
  };

  // 옵션 설정.
  tsconfig.compilerOptions.outDir = subPath(outDir);

  if (outDir === 'es') {
    tsconfig.compilerOptions.module = 'ESNEXT';
  }
  if (outDir === 'lib') {
    tsconfig.compilerOptions.module = 'CommonJS';
  }

  fs.writeFileSync(
    subPath('./tsconfig.tmp.json'),
    new Uint8Array(Buffer.from(JSON.stringify(tsconfig))),
  );
};

module.exports = {
  rootPath,
  subPath,
  binPath,
  createTmpTsconfig,
};
