
console.log('I am c.js...')
import b from './b.js';
console.log('c.js b.foo:', b.foo);
b.foo = b.foo - 1;
export default {};