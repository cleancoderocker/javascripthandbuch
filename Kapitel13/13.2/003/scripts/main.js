function init() {
  var fahrzeug = {                        // Dieses Objekt ...
    fahren: function() {                  // ... dient als ...
      console.log('Fahrzeug fahren');     // ... Prototyp.
    }
  }
  var fahrrad = Object.create(fahrzeug);  // Dieses Objekt ...
                                          // ... leitet von ...
                                          // ... fahrzeug ab.
  fahrrad.fahren();
  var kfz = Object.create(fahrzeug);
  kfz.tanken = function() {
    console.log('Fahrzeug tanken');
  }
  kfz.tanken();
  kfz.fahren();
  var motorrad = Object.create(kfz);      // Diese Objekte ...
  var pkw = Object.create(kfz);           // ... wiederum von ...
  var lkw = Object.create(kfz);           // ... dem Objekt kfz.
  motorrad.tanken();
  motorrad.fahren();
  pkw.tanken();
  pkw.fahren();
  lkw.tanken();
  lkw.fahren();
}