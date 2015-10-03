(function() {
  var testResultElement = document.getElementById('testResult');
  var testResult = 0;
  var icon = null;
  if(testResult === 0) {
    icon = 'pass.png';
  } else if(status === 1) {
    icon = 'info.png';
  } else if(status === 2) {
    icon = 'warning.png';
  } else if(status === 3) {
    icon = 'error.png';
  } else {
    icon = 'unknown.png';
  }
  testResultElement.src = 'img/' + icon;
});

(function() {
  var testResult = 0;
  var testResultElement = document.getElementById('testResult');
  var icon = null;
  switch(testResult) {
    case 0:
      icon = 'pass.png';
      break;
    case 1:
      icon = 'info.png';
      break;
    case 2:
      icon = 'warning.png';
      break;
    case 3:
      icon = 'error.png';
      break;
    default:
      icon = 'unknown.png';
      break;
  }
  testResultElement.src = 'img/' + icon;
})();