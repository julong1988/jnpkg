const defaultHashbang = '/usr/bin/env node';

const babelHashbangPlugin = () => ({
  visitor: {
    Program: function Program(node, { opts }) {
      const { hashbang } = opts;
      node.hub.file.shebang = hashbang || defaultHashbang;
    },
  },
});

module.exports = babelHashbangPlugin;
