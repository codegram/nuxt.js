/*!
 * @nuxt/cli v2.14.12 (c) 2016-2021

 * - All the amazing contributors
 * Released under the MIT License.
 * Website: https://nuxtjs.org
*/
'use strict';

const consola = require('consola');
const generate = require('./cli-generate.js');
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
require('upath');
require('fs-extra');
require('crc/lib/crc32');
require('globby');
require('destr');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const consola__default = /*#__PURE__*/_interopDefaultLegacy(consola);

const _export = {
  ...generate['default'],
  run (...args) {
    consola__default['default'].warn('`nuxt export` has been deprecated! Please use `nuxt generate`.');
    return generate['default'].run.call(this, ...args)
  }
};

exports.default = _export;
