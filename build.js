const esbuild = require('esbuild');
const fs = require('fs-extra');
const path = require('path');

// remove file
// fs.removeSync('./dist');

// build
esbuild.buildSync({
  entryPoints: ['src/index.ts'],
  bundle: true,
  write: true,
  platform: 'node',
  target: ['node12'],
  outfile: 'dist/index.js',
  minify: true,
  banner: { js: '#!/usr/bin/env node' },
});

esbuild.buildSync({
  entryPoints: ['src/babel.config.js'],
  bundle: true,
  write: true,
  platform: 'node',
  target: ['node12'],
  outfile: 'dist/babel.config.js',
  minify: true,
});

esbuild.buildSync({
  entryPoints: ['src/build.ts'],
  bundle: true,
  write: true,
  platform: 'node',
  target: ['node12'],
  outfile: 'dist/build.js',
  minify: true,
  external: ['esbuild']
});

// babel config build

// copy template
fs.copySync(path.resolve(__dirname, './src/template'), './dist/template');

console.log("%c✅ Success!", "color:green");
