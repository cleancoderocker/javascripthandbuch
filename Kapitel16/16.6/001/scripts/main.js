function init() {
  var zielObjekt = {};
  var handler = {
    set: function(zielObjekt, eigenschaft, wert) {
      console.log('setze ' + wert + ' für Eigenschaft ' + eigenschaft);
      zielObjekt[eigenschaft] = wert;
    },
    get: function(zielObjekt, eigenschaft) {
      console.log('liefere ' + zielObjekt[eigenschaft] + ' von Eigenschaft ' + eigenschaft);
      return zielObjekt[eigenschaft];
    }
  }
  var proxy = new Proxy(zielObjekt, handler);
  proxy.name = 'Max';               // Aufruf set() von handler
  proxy.nachname = 'Mustermann';    // Aufruf set() von handler
  console.log(proxy.name);          // Aufruf get() von handler
  console.log(proxy.nachname);      // Aufruf get() von handler
}
init();