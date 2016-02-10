#!/bin/env node
var fs = require('fs');
var path = require('path');
var data = fs.readFileSync(path.resolve(__dirname, '../build/auditing_types.js')).toString();

var thriftRequire = '{ Thrift: require(\'thrift/lib/nodejs/lib/thrift/thrift\') }';
var modified = data.replace(/require\('thrift'\)/, thriftRequire);

var addition = fs.readFileSync(path.resolve(__dirname, '../nodejs/index.js')).toString();

fs.writeFileSync(path.resolve(__dirname, '../build/rewritten.js'), modified + '\n' + addition, 'utf8');
