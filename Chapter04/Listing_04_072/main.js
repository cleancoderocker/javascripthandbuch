'use strict';
[4, 5, 6].includes(4);                   // true
[2, 7, 8].includes(4);                   // false
['John', 'James'].includes('Peter');     // false
['John', 'James'].includes('James');     // true
[4, 5, 6, 4711, 50, 87].includes(6, 2);  // true
[4, 5, 6, 4711, 50, 87].includes(6, 4);  // false
