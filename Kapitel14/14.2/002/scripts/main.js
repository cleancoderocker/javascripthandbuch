function init() {
  (function() {
    var interpreten = [
      {
        name: 'Nick Cave'
      },
      {
        name: 'Ben Harper'
      }
    ];
    var namen = [];
    for(var i=0; i<interpreten.length; i++) {
      namen.push(interpreten[i].name);
    }
    console.log(namen);
  })();

  (function() {
    var interpreten = [
      {
        name: "Nick Cave"
      },
      {
        name: "Ben Harper"
      }
    ];
    var namen = interpreten.map(
      function(interpret, index, interpreten) {
        return interpret.name;
      }
    );
    console.log(namen);
  })();
}