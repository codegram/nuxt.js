/*!
 * @nuxt/cli v2.14.12 (c) 2016-2021

 * - All the amazing contributors
 * Released under the MIT License.
 * Website: https://nuxtjs.org
*/
'use strict';

const consola = require('consola');
const start = require('./cli-start.js');
require('@nuxt/utils');
require('./cli-index.js');
require('@nuxt/config');
require('path');
require('exit');
require('chalk');
require('std-env');
require('wrap-ansi');
require('boxen');
require('minimist');
require('hable');
require('defu');
require('fs');
require('execa');
require('./cli-banner.js');
require('pretty-bytes');
require('connect');
require('serve-static');
require('compression');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const consola__default = /*#__PURE__*/_interopDefaultLegacy(consola);

const serve = {
  ...start['default'],
  run (...args) {
    consola__default['default'].warn('`nuxt serve` has been deprecated! Please use `nuxt start`.');
    return start['default'].run.call(this, ...args)
  }
};

exports.default = serve;
