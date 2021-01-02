const { PATHS } = require('./app-config');

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    public: '/',
    src: '/dist',
  },
  /**
   * snowpack plugins
   */
  plugins: [
    'snowpack-plugin-sass',
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  /**
   * development options
   */
  devOptions: {
    port: 4000,
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  /**
   * module resolve alias
   */
  alias: {
    '@components': PATHS.COMPONENTS,
    '@pages': PATHS.PAGES,
  },
};
