const babelBannerPlugin = () => ({
  visitor: {
    Program: function Program(path, { opts }) {
      const { banner } = opts;
      path.addComment('leading', typeof banner !== 'string' ? '' : banner);
    },
  },
});

module.exports = babelBannerPlugin;
