const babelHashbangPlugin = require('../../src/utils/babelHashbangPlugin');
const config = require('./babel.config');

config.plugins.push([
  babelHashbangPlugin, 
  { hashbang: '/usr/bin/env node' },
]);

module.exports = config;