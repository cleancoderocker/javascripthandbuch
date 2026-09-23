'use strict';
// No best practice: Boolean conditions within a switch statement
const age = prompt('For what age are you looking for film tips?');
switch(true) {
  case (age >= 18):
    console.log('Show films with a rating of G, PG, PG-13, R, and NC-17.');
    break;
  case (age >= 17):
    console.log('Show films with a rating of G, PG, PG-13, and R.');
    break;
  case (age >= 13):
    console.log('Show films with a rating of G, PG, and PG-13.');
    break;
  case (age >= 6):
    console.log('Show films with a rating of G and PG.');
    break;
}
