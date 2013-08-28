
var clip = require('./');

clip('Hello "World"', function(err){
  if (err) throw err;
  console.log('copied!');
});