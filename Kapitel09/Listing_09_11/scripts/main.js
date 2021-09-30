function init() {
  // Skript für ältere Browser, daher auch das var-Schlüsselwort
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200) {
      var data = request.responseXML;
      var entries = data.getElementsByTagName('entry');
      for (var i = 0; i < entries.length; i++) {
        /* XML einbauen */
      }
    }
  };
  request.open('GET', 'content/data.xml', true);
  request.send(null);
}

document.addEventListener('DOMContentLoaded', init);
