'use strict';

const { resolve } = require('path');

const ROOT = resolve(__dirname);
const SRC = resolve(ROOT, 'src');

exports.PATHS = {
  SRC,
  COMPONENTS: resolve(SRC, 'components'),
  PAGES: resolve(SRC, 'pages'),
  ATOMS: resolve(SRC, 'atoms'),
  SELECTORS: resolve(SRC, 'selectors'),
  HOOKS: resolve(SRC, 'hooks'),
};
