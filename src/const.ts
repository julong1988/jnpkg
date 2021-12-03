import { resolve } from 'path';

export const CLIENT_SRC_PATH = `${resolve('./')}/src`;
export const BUILD_FILE_PATH = `${resolve(__dirname, './build.js')}`;

export const ROOT_TSCONFIG_PATH = resolve(__dirname, '../tsconfig.json');
export const SUB_TSCONFIG_PATH = resolve('./tsconfig.json');

export const TS_CONFIG_TEMP = resolve('./tsconfig.tmp.json');
export const BABEL_CONFIG = resolve(__dirname, './babel.config.js');

const LIB_PATH = './lib/index.js';
const ES_PATH = './es/index.js';

export const PACKAGE_EX = {
  main: LIB_PATH,
  module: ES_PATH,
  exports: {
    import: LIB_PATH,
    require: ES_PATH,
  },
  dependencies: {
    '@semantic-release/changelog': '6.0.1',
    '@semantic-release/git': '10.0.1',
    'semantic-release': '18.0.0',
  },
  scripts: {
    watch: 'jnpkg watch',
    build: 'jnpkg build',
  },
};

export const QUESTIONS = [
  {
    type: 'input',
    name: 'name',
    message: 'input your package name',
    required: true,
  },
  {
    type: 'input',
    name: 'author',
    message: 'input your author',
    required: true,
  },
  {
    type: 'select',
    name: 'type',
    message: 'input your package type',
    choices: ['commonjs', 'module'],
    required: true,
  },
];
