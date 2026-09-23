'use strict';
function init() {
  const object = {
    "artists": [
      {
        "name": "Kyuss",
        "albums": [
          {
            "title": "Wretch",
            "year": 1991
          },
          {
            "title": "Blues for the Red Sun",
            "year": 1992
          },
          {
            "title": "Welcome to Sky Valley",
            "year": 1994
          },
          {
            "title": "...And the Circus Leaves Town",
            "year": 1995
          }
        ]
      },
      {
        "name": "Ben Harper",
        "albums": [
          {
            "title": "The Will to Live",
            "year": 1997
          },
          {
            "title": "Burn to Shine",
            "year": 1999
          },
          {
            "title": "Live from Mars",
            "year": 2001
          },
          {
            "title": "Diamonds on the Inside",
            "year": 2003
          }
        ]
      }
    ]
  }
  console.log(object.artists);          // [Object, Object]
  console.log(object.artists.length);   // 2
  console.log(object.artists[0].name);  // "Kyuss"
  console.log(object.artists[1].name);  // "Ben Harper"
  const string = JSON.stringify(
      object,               // JavaScript object
      null,                 // Replacement function
      2                     // Indentation
    );
  console.log(string);
}

document.addEventListener('DOMContentLoaded', init);
