import execa from 'execa';
import { subPath, rootPath, binPath, createTmpTsconfig } from './utils';

const buildLib = [
  {
    title: 'remove lib folder',
    task: () => execa('rm', ['-rf', subPath('./lib')]),
  },
  {
    title: 'create tmp tsconfig',
    task: () => createTmpTsconfig('lib'),
  },
  {
    title: 'create lib version',
    task: () => execa(`${binPath}/tsc`, ['-build', subPath('./tsconfig.tmp.json')]),
  },
  {
    title: 'remove tmp tsconfig',
    task: () => execa('rm', ['-rf', subPath('./tsconfig.tmp.json')]),
  },
  {
    title: 'minify lib',
    task: () =>
      execa(`${binPath}/babel`, [
        subPath('./lib'),
        '--config-file',
        rootPath('../scripts/config/babel.config.js'),
        '--out-dir',
        subPath('./lib'),
      ]),
  },
];

const buildEs = [
  {
    title: 'remove es folder',
    task: () => execa('rm', ['-rf', subPath('./es')]),
  },
  {
    title: 'create tmp tsconfig',
    task: () => createTmpTsconfig('es'),
  },
  {
    title: 'create es version',
    task: () => execa(`${binPath}/tsc`, ['-build', subPath('./tsconfig.tmp.json')]),
  },
  {
    title: 'remove tmp tsconfig',
    task: () => execa('rm', ['-rf', subPath('./tsconfig.tmp.json')]),
  },
  {
    title: 'minify es',
    task: () =>
      execa(`${binPath}/babel`, [
        subPath('./es'),
        '--config-file',
        rootPath('../scripts/config/babel.config.js'),
        '--out-dir',
        subPath('./es'),
      ]),
  },
];

const buildAllTasks = [...buildLib, ...buildEs];

export default buildAllTasks;
