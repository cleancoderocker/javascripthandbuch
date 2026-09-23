'use strict';
const coordinates = [
  [50.69, 8.94],
  [54.29, 11.97],
  [55.38, 12.88],
  [60.78, 9.94],
  [62.29, 7.69],
  [70.34, 8.24],
  [72.59, 11.29],
  [80.69, 8.56]
];
for(let i=0; i<coordinates.length; i++) {
  const coordinate = coordinates[i];
  for(let j=0; j<coordinate.length; j++) {
    console.log(coordinate[j]);
  }
}