(function() {
  var idbFactory = window.indexedDB;
  var DATABASE_NAME = 'TestDatabase2g';
  var request1 = idbFactory.open(DATABASE_NAME);     // Alte Version: 0, Neue Version: 1
  var request2 = idbFactory.open(DATABASE_NAME, 2);  // Alte Version: 1, Neue Version: 2
  var request3 = idbFactory.open(DATABASE_NAME, 3);  // Alte Version: 2, Neue Version: 3
  var request4 = idbFactory.open(DATABASE_NAME, 4);  // Alte Version: 3, Neue Version: 4
  var request5 = idbFactory.open(DATABASE_NAME, 5);  // Alte Version: 4, Neue Version: 5
  function log(event) {
    console.log('Alte Version: ' + event.oldVersion + ', '
    + 'Neue Version: ' + event.newVersion);
  };
  function error(event) {
    console.error(event.target.error.message);
  };
  request1.onupgradeneeded = log;
  request2.onupgradeneeded = log;
  request3.onupgradeneeded = log;
  request4.onupgradeneeded = log;
  request5.onupgradeneeded = log;
  request1.onerror = error;
  request2.onerror = error;
  request3.onerror = error;
  request4.onerror = error;
  request5.onerror = error;
})();

