function asyncFunction(callbackFunction) {
  // More code here
  console.log('Prior to callback');
  callbackFunction();
  console.log('After callback');
  // More code here
}
function callbackFunction() {
  console.log('Calling callback');
}
asyncFunction(callbackFunction);
// Output:
// "Prior to callback"
// "Calling callback"
// "After callback"
