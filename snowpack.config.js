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
  /**
   * install options
   */
  installOptions: {
    // 소스맵
    sourceMap: true,
    // 트리쉐이킹 여부
    treeshake: true,
  },
  /**
   * development options
   */
  devOptions: {
    // devserver 포트
    port: 4000,
    // open option
    open: 'default',
    // dev console내 output 옵션
    output: 'dashboard',
    // hostname
    hostname: 'localhost',
    // hot module replacement
    hmr: true,
    // js error 발생시 overlay 출력 여부
    hmrErrorOverlay: true,
    // secure option
    // secure: true,
  },
  /**
   * 빌드 옵션
   */
  buildOptions: {
    // 빌드시 output folder 이름
    out: 'build',
    // 모든 instance에 대한 url 설정
    baseUrl: '/',
    // 빌드할 폴더 삭제
    clean: true,
    // snowpack의 meta data 폴더
    metDir: '__snowpack__',
    // sourcemap
    sourceMaps: false,
    // node_module등의 web module
    webModulesUrl: 'web_modules',
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
    '@recoil': PATHS.RECOIL,
    '@hooks': PATHS.HOOKS,
  },
  /**
   * test options
   */
  testOptions: {
    files: ['src/**/*.@(spec|test).*'],
  },
};
