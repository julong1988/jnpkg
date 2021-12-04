import { execa } from 'execa';
import { resolve } from 'path';
import { buildSync } from 'esbuild';
import { createTmpTsconfig, getBinPath } from './utils';

const BIN_PATH = getBinPath();

type Mode = 'es' | 'lib';

const TS_CONFIG_TEMP = resolve('./tsconfig.tmp.json');
const BABEL_CONFIG = resolve(__dirname, './babel.config.js');

export const basicTask = (mode: Mode) => [
  {
    title: `remove ${mode} folder`,
    task: () => execa('rm', ['-rf', resolve(mode)]),
  },
  {
    title: 'create tmp tsconfig',
    task: () => createTmpTsconfig(mode),
  },
  {
    title: `create ${mode} version`,
    task: () => execa(`${BIN_PATH}/tsc`, ['-build', TS_CONFIG_TEMP]),
  },
  {
    title: 'remove tmp tsconfig',
    task: () => execa('rm', ['-rf', TS_CONFIG_TEMP]),
  },
  {
    title: `minify ${mode}`,
    task: () =>
      execa(`${BIN_PATH}/babel`, [
        resolve(mode),
        '--config-file',
        BABEL_CONFIG,
        '--out-dir',
        resolve(mode),
      ]),
  },
];

export const browserTask = ({ pkgName, entry }: Pick<IJConfig, 'pkgName' | 'entry'>) => {
  console.group(resolve(entry));
  return [
  {
    title: 'create browser iife version',
    task: () => {
      buildSync({
        entryPoints: [resolve(entry)],
        bundle: true,
        minify: true,
        sourcemap: true,
        globalName: pkgName,
        format: 'iife',
        platform: 'browser',
        outfile: './dist/index.js',
      });
    },
  },
]};
