var idbFactory = window.indexedDB;
var request = idbFactory.open('TestDatabase5', 9);
request.onerror = function (event) {
  var error = event.target.error;
  console.error(error.message);
};
request.onsuccess = function (event) {
  var database = event.target.result;
  var transaction = database.transaction('Books');
  var objectStore = transaction.objectStore('Books');
  var request = objectStore.openCursor();
  request.onerror = function(event) {
    console.error(event.target.error.message);
  };
  request.onsuccess = function(event) {
    var cursor = event.target.result;
    if (cursor) {
      console.log(cursor.key);
      console.log(cursor.value);
      cursor.continue();
    }
  };
};
