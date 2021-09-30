function init() {

  const albums = [
    {
      title: 'Push the Sky Away',
      artist: 'Nick Cave',
      year: 2013
    },
    {
      title: 'No more shall we part',
      artist: 'Nick Cave',
      year: 2001
    },
    {
      title: 'Live from Mars',
      artist: 'Ben Harper',
      year: 2003
    },
    {
      title: 'The Will to Live',
      artist: 'Ben Harper',
      year: 1997
    }
  ];


  (function() {
    const before2000 = [];
    for(let i=0, l=albums.length; i<l; i++) {   // Für alle Alben:
      if(albums[i].year < 2000) {               // Prüfe, ob vor 2000 veröffentlicht.
        before2000.push(albums[i]);             // Falls ja, in Ergebnis übernehmen.
      }
    }
    console.log(before2000);
  })();

  (function() {
    const before2000 = albums.filter(  // Die filter()-Methode erwartet ...
      function(                      // ... eine Callback-Funktion.  
        album,                       // (1) Das jeweilige Element.
        index,                       // (2) Der Index des Elements im Array.
        albums)                      // (3) Das Array.
      {                              // Die Methode liefert nur die Alben, ...
        return album.year < 2000;    // ... die vor 2000 veröffentlicht wurden.
      }
    );
    console.log(before2000);
  })();
}