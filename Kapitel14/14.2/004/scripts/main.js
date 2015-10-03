function init() {

  var artists = [
    {
      name: "Nick Cave",
      albums: [
        {
          title: "Push the Sky Away"
        },
        {
          title: "No more shall we part"
        }
      ]
    },
    {
      name: "Ben Harper",
      albums: [
        {
          title: "Live from Mars"
        },
        {
          title: "The Will to Live"
        }
      ]
    }
  ];



  (function() {
    var totalAlbumCount = 0;                      // Anzahl aller Alben
    for(var i=0, l=artists.length; i<l; i++) {    // Für alle Künstler:
      var albumCount = artists[i].albums.length;  // Ermittle die Anzahl ...
                                                  // der Alben, ...
      totalAlbumCount += albumCount;              // ... und erhöhe die ...
                                                  // ... Gesamtanzahl.
    }
    console.log(totalAlbumCount);
  })();

  (function() {
    var totalAlbumCount = artists.reduce(         // Die reduce()-Methode ...
      function(                                   // ... erwartet eine Callback-Funktion
        result,                                   // (1) Aktuelles Zwischenergebnis.
        artist,                                   // (2) Das jeweilige Element.
        index,                                    // (3) Der Index des Elements im Array.
        artists                                   // (4) Das Array.
      ) {
        var albumCount = artist.albums.length;    // Anzahl Alben des Künstlers.
        return result + albumCount;               // Gesamtanzahl erhöhen.
      },
      0                                           // Anzahl aller Alben.
    );
    console.log(totalAlbumCount);
  })();
}