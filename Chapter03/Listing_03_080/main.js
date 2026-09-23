'use strict';
const testResultElement = document.getElementById('testResult');
const testResult = 0;        // Test result, would normally be calculated
let icon = null;             // Variable that will contain the image name
switch(testResult) {         // Check the test result.
  case 0:                    // If this has a value of 0 ...
  case 1:                    // ... or a value of 1, ...
    icon = 'pass.png';       // ... the image name "pass.png" is used.
    break;                   // Abort
  case 2:                    // If the test result has a value of 2, ...
  case 3:                    // ... or a value of 3, ...
    icon = 'error.png';      // ... the image name "error.png" is used.
    break;                   // Abort
  default:                   // For all other values ...
    icon = 'unknown.png';    // ... the image name "unknown.png" is used.
}
testResultElement.src = 'img/' + icon;
