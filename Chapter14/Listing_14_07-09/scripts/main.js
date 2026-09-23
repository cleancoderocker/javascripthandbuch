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
    const albumsBefore2000 = [];
    for(let i=0; i<albums.length; i++) {        // For all albums:
      if(albums[i].year < 2000) {               // Check if published before 2000.
        albumsBefore2000.push(albums[i]);       // If yes, include in result.
      }
    }
    console.log(albumsBefore2000.length);       // 1    
  })();

  (function() {
    const albumsBefore2000 = albums.filter(  // The filter() method expects ...
      (                                      // ... a callback function.  
        album,                               // (1) the respective element
        index,                               // (2) the index of the element in the array
        albums                               // (3) the entire array
      ) => 
      {                                      // The method returns only the albums ...
        return album.year < 2000;            // ... that were released before 2000.
      }
    );
    console.log(albumsBefore2000.length);    // 1
  })();
}