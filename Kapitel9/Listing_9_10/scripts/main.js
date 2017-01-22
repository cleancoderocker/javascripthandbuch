function init() {
  var createFunctions = [
    function () {return new XMLHttpRequest()},
    function () {return new ActiveXObject("Msxml2.XMLHTTP")},
    function () {return new ActiveXObject("Msxml3.XMLHTTP")},
    function () {return new ActiveXObject("Microsoft.XMLHTTP")}
  ];
  function createXMLHttpObject() {
    var xmlhttp = null;
    for (var i=0; i<createFunctions.length; i++) {
      try {
        xmlhttp = createFunctions[i]();
      }
      catch (e) {
        continue;
      }
      break;
    }
    return xmlhttp;
  }
}

document.addEventListener('DOMContentLoaded', init);
