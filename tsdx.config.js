const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: !!options.writeMeta,
      })
    );
    return config;
  },
};
