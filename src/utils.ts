import { resolve } from 'path';
import fs from 'fs-extra';
import { execaCommandSync } from 'execa';
import { ROOT_TSCONFIG_PATH, SUB_TSCONFIG_PATH, CLIENT_SRC_PATH } from './const';

export const getPackage = () => {
  execaCommandSync('npm init -y');
  return require(resolve('./package.json'));
};

export const getBinPath = () => {
  const globalPath = resolve(__dirname, '../node_modules/.bin');
  const localPath = resolve(__dirname, '../../.bin');
  return fs.lstatSync(globalPath).isDirectory() ? globalPath : localPath;
};

export const baseOptions = (commonds: string[]) => ({
  type: 'select',
  name: 'type',
  message: 'Select a command',
  choices: commonds,
});

export const createTmpTsconfig = (outDir) => {
  // get root tsconfig
  let tsconfig = require(ROOT_TSCONFIG_PATH);
  // get sub tsconfig
  let subTsconfig: any = {};
  try {
    subTsconfig = require(SUB_TSCONFIG_PATH);
  } catch (error) {
    console.log('⚠️ Warning: No sub tsconfig file found.');
  }
  tsconfig = {
    ...tsconfig,
    ...subTsconfig,
    compilerOptions: {
      ...tsconfig.compilerOptions,
      ...(subTsconfig.compilerOptions || {}),
    },
    exclude: [...(subTsconfig.exclude || [])],
    include: [...(subTsconfig.include || []), CLIENT_SRC_PATH],
  };

  tsconfig.compilerOptions.outDir = resolve(outDir);
  tsconfig.compilerOptions.module = outDir === 'es' ? 'ESNEXT' : 'CommonJS';

  fs.writeFileSync(
    resolve('./tsconfig.tmp.json'),
    new Uint8Array(Buffer.from(JSON.stringify(tsconfig))),
  );
};
