/*
 * gitblame
 * https://github.com/xjamundx/gitblame
 *
 * Copyright (c) 2012 Jamund Ferguson
 * Licensed under the MIT license.
 */

var exec = require('child_process').exec;
var path = require('path');

module.exports = function(file, cb) {
  var dirname = path.dirname(file);
  var filename = path.basename(file); 
  exec('git blame ' + filename, {cwd: dirname}, function (error, stdout, stderr) {
      if (error !== null) {
        console.log('exec error: ' + error);
        return cb(new Error(error));
      }
      var lines = stdout.split("\n");
      lines.unshift(""); // make the line numbers match
      cb(null, lines);
  });
};