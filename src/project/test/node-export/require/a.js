console.log('I am a.js...');
const b = require('../b');
console.log(b.foo);
b.foo = b.foo - 1;
require('./c');
