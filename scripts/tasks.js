const fs = require('fs');
const path = require('path');
const execa = require('execa');
const package = require('../package.json');

const buildBins = [
  {
    title: 'remove bin folder',
    task: () => execa('rm', ['-rf', './dist/bin'])
  },
  {
  	title: 'bin generator',
  	task: () => execa('npx', ['tsc', '-build', './scripts/config/tsconfig.bin.json'])
  },
  {
  	title: 'add bin Hashbang, minify',
  	task: () => execa('npx', ['babel', 'dist/bin', '--config-file', './scripts/config/babel.config.bin.js', '--out-dir', './dist/bin'])
  },
]

const buildScripts = [
  {
    title: 'remove scripts folder',
    task: () => execa('rm', ['-rf', './dist/scripts'])
  },
  {
  	title: 'scripts generator',
  	task: () => execa('npx', ['tsc', '-build', './scripts/config/tsconfig.node.json'])
  },
  {
  	title: 'minify scripts',
  	task: () => execa('npx', ['babel', 'dist/scripts', '--config-file', './scripts/config/babel.config.js', '--out-dir', './dist/scripts'])
  },
]

const buildAllTasks = [
  ...buildBins,
  ...buildScripts,
];

const versionUpdateTasks = [
  {
    title: 'package version update',
    task: () => {
      package.version = package.version.split('.').map((e, i) => i === 2 ? `${parseInt(e, 10) + 1}` : e).join('.');
      fs.writeFileSync(
        path.resolve(__dirname, '../package.json'),
        new Uint8Array(Buffer.from(JSON.stringify(package, null, 2)))
      );
    },
  },
  {
    title: '[Git] add package.json',
    task: () => execa('git', ['add', './'])
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

module.exports = {
  buildBins,
  buildScripts,
  buildAllTasks,
  versionUpdateTasks,
}