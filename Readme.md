
# Cliparoo

  Sorry for the stupid name. Copies strings to the clipboard, for CLIs.

## Installation

```
$ npm install cliparoo
```

## Example

```js
var clip = require('cliparoo');

clip('Hello "World"', function(err){
  if (err) throw err;
  console.log('copied!');
});
```