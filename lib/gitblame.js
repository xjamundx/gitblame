/*
 * gitblame
 * https://github.com/xjamundx/gitblame
 *
 * Copyright (c) 2012 Jamund Ferguson
 * Licensed under the MIT license.
 */

var util = require('util');
var exec = require('child_process').exec;

module.exports = function(path, cb) {
  exec('git blame ' + path, function (error, stdout, stderr) {
      if (error !== null) {
        console.log('exec error: ' + error);
        return cb(new Error(error));
      }
      var lines = stdout.split("\n");
      lines.unshift(""); // make the line numbers match
      cb(null, lines);
  });
};