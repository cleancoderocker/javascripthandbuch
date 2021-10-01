function init() {

  const artists = [
    {
      name: 'Kyuss',
      albums: [
        {
          title: 'Wretch',
          year: 1991
        },
        {
          title: 'Blues for the Red Sun',
          year: 1992
        },
        {
          title: 'Welcome to Sky Valley',
          year: 1994
        },
        {
          title: '...And the Circus Leaves Town',
          year: 1995
        }
      ]
    },
    {
      name: 'Ben Harper',
      albums: [
        {
          title: 'The Will to Live',
          year: 1997
        },
        {
          title: 'Burn to Shine',
          year: 1999
        },
        {
          title: 'Live from Mars',
          year: 2001
        },
        {
          title: 'Diamonds on the Inside',
          year: 2003
        }
      ]
    }
  ];


  (function() {
    let totalAlbumCount = 0;                        // Anzahl aller Alben
    for(let i=0; i<artists.length; i++) {           // Für alle Künstler:
      const albumCount = artists[i].albums.length;  // Ermittle die Anzahl ...
                                                    // ... der Alben, ...
      totalAlbumCount += albumCount;                // ... und erhöhe die ...
                                                    // ... Gesamtanzahl.
    }
    console.log(totalAlbumCount);
  })();

  (function() {
    const totalAlbumCount = artists.reduce(         // Die reduce()-Methode ...
      function(                                   // ... erwartet eine Callback-Funktion
        result,                                   // (1) Aktuelles Zwischenergebnis.
        artist,                                   // (2) Das jeweilige Element.
        index,                                    // (3) Der Index des Elements im Array.
        artists                                   // (4) Das Array.
      ) {
        const albumCount = artist.albums.length;    // Anzahl Alben des Künstlers.
        return result + albumCount;               // Gesamtanzahl erhöhen.
      },
      0                                           // Anzahl aller Alben.
    );
    console.log(totalAlbumCount);
  })();
}