var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

const common = require('./webpack.common');
const merge = require('webpack-merge');
module.exports = merge(common, {});