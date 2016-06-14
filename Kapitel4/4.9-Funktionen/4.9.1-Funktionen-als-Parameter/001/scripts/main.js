(function() {
  function function1(f) {
    console.log('Funktion 1 Start');
    f();                            // Aufruf der übergebenen Funktion
    console.log('Funktion 1 Ende');
  }
  function1(function() {
    console.log('Anonyme Funktion Start');
    console.log('Anonyme Funktion Ende');
  });
  function function2() {
    console.log('Funktion 2 Start');
    console.log('Funktion 2 Ende');
  }
  function1(function2);
  // function1(function2());        // Das funktioniert nicht
})();