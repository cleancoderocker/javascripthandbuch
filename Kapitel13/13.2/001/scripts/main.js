function init() {
  var fahrzeug = {                        // Dieses Objekt ...
    fahren: function() {                  // ... dient als ...
      console.log('Fahrzeug fahren');     // ... Prototyp.
    }
  }
  var fahrrad = Object.create(fahrzeug);  // Objekte erben Methoden ...
  fahrrad.fahren();                       // ... vom Prototypen.
  var kfz = Object.create(fahrzeug);      // 
  kfz.fahren();                           // 
}