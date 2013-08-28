
/**
 * Module dependencies.
 */

var exec = require('child_process').exec;
var escape = require('shell-escape');
var os = require('os');

// platforms

switch (os.platform()) {
  case 'win': return module.exports = windows;
  case 'linux': return module.exports = linux;
  case 'darwin': return module.exports = mac;
  default: return module.exports = unsupported;
}

// unsupported

function unsupported(str, fn) {
  fn(new Error('unsupported platform'));
}

// windows

function windows(str, fn) {
  execute('clip', str, fn);
}

// linux

function linux(str, fn) {
  execute('xclip', str, fn);
}

// mac

function mac(str, fn) {
  execute('pbcopy', str, fn);
}

// exec

function execute(program, str, fn) {
  var cmd = escape(['printf', str]) + ' | ' + program;
  exec(cmd, fn || function(){});
}