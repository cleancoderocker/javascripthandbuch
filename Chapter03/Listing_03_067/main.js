'use strict';
const age = prompt('For what age are you looking for film tips?');
if(age >= 18) {
  console.log('Show films with a rating of G, PG, PG-13, R, and NC-17.');
} else if(age >= 17) {
  console.log('Show films with a rating of G, PG, PG-13, and R.');
} else if(age >= 13) {
  console.log('Show films with a rating of G, PG, and PG-13.');
} else if(age >= 6) {
  console.log('Show films with a rating of G and PG.');
}
