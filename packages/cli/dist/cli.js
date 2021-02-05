/*!
 * @nuxt/cli v2.14.12 (c) 2016-2021

 * - All the amazing contributors
 * Released under the MIT License.
 * Website: https://nuxtjs.org
*/
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./cli-index.js');
require('@nuxt/utils');
require('@nuxt/config');
require('path');
require('exit');
require('chalk');
require('std-env');
require('wrap-ansi');
require('boxen');
require('consola');
require('minimist');
require('hable');
require('defu');
require('fs');
require('execa');



exports.NuxtCommand = index.NuxtCommand;
exports.commands = index.index;
exports.getWebpackConfig = index.getWebpackConfig;
exports.imports = index.imports;
exports.isNuxtDir = index.isNuxtDir;
exports.loadNuxtConfig = index.loadNuxtConfig;
exports.options = index.index$1;
exports.run = index.run;
exports.setup = index.setup;
