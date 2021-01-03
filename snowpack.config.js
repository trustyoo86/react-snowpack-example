const { PATHS } = require('./app-config');

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    public: '/',
    src: '/dist',
  },
  plugins: [
    /**
     * snowpack plugins
     */
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
    '@atoms': PATHS.ATOMS,
    '@selectors': PATHS.SELECTORS,
  },
};
