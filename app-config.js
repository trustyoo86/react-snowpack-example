'use strict';

const { resolve } = require('path');

const ROOT = resolve(__dirname);
const SRC = resolve(ROOT, 'src');

exports.PATHS = {
  SRC,
  ATOMS: resolve(SRC, 'atoms'),
  COMPONENTS: resolve(SRC, 'components'),
  PAGES: resolve(SRC, 'pages'),
  RECOIL: resolve(SRC, 'recoil'),
  SELECTORS: resolve(SRC, 'selectors'),
  HOOKS: resolve(SRC, 'hooks'),
  HOC: resolve(SRC, 'hoc'),
};
