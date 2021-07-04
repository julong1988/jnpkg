const fs = require('fs');
const execa = require('execa');
const { subPath, rootPath, binPath, createTmpTsconfig } = require('./utils');

const buildLib = [
  {
    title: 'remove lib folder',
    task: () => execa('rm', ['-rf', subPath('./lib')])
  },
  {
    title: 'create tmp tsconfig',
    task: () => createTmpTsconfig('lib'),
  },
  {
    title: 'create lib version',
    task: () => execa(`${binPath}/tsc`, ['-build', subPath('./tsconfig.tmp.json')])
  },
  {
    title: 'remove tmp tsconfig',
    task: () => execa('rm', ['-rf', subPath('./tsconfig.tmp.json')])
  },
  {
    title: 'minify lib',
    task: () => execa(`${binPath}/babel`, [subPath('./lib'), '--config-file', rootPath('../scripts/config/babel.config.js'), '--out-dir', subPath('./lib')])
  },
]

const buildEs = [
  {
    title: 'remove es folder',
    task: () => execa('rm', ['-rf', subPath('./es')])
  },
  {
    title: 'create tmp tsconfig',
    task: () => createTmpTsconfig('es'),
  },
  {
    title: 'create es version',
    task: () => execa(`${binPath}/tsc`, ['-build', subPath('./tsconfig.tmp.json')])
  },
  {
    title: 'remove tmp tsconfig',
    task: () => execa('rm', ['-rf', subPath('./tsconfig.tmp.json')])
  },
  {
    title: 'minify es',
    task: () => execa(`${binPath}/babel`, [subPath('./es'), '--config-file', rootPath('../scripts/config/babel.config.js'), '--out-dir', subPath('./es')])
  },
]

const buildAllTasks = [
  ...buildLib,
  ...buildEs
];

let versionUpdateTasks = [];

try {
  const package = require(subPath('./package.json'));
  versionUpdateTasks = [
    {
      title: 'package version update',
      task: () => {
        package.version = package.version.split('.').map((e, i) => i === 2 ? `${parseInt(e, 10) + 1}` : e).join('.');
        fs.writeFileSync(
          subPath('./package.json'),
          new Uint8Array(Buffer.from(JSON.stringify(package, null, 2)))
        );
      },
    },
    {
      title: '[Git] add package.json',
      task: () => execa('git', ['add', 'package.json'])
    },
    {
      title: '[Git] Commits next package version',
      task: () => execa('git', ['commit', '-m', `Commits next package version: ${package.version}`])
    },
    {
      title: '[Git] Push',
      task: () => execa('git', ['push'])
    },
  ]
} catch {
  console.log('package error')
}

module.exports = {
  buildAllTasks,
  versionUpdateTasks,
}