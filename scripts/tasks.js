const execa = require('execa');

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

module.exports = {
  buildBins,
  buildScripts,
  buildAllTasks,
}