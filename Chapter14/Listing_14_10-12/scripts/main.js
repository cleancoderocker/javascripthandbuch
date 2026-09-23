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


  (function () {
    let totalAlbumCount = 0;                        // Number of all albums
    for (let i = 0; i<artists.length; i++) {        // For all artists:
      const albumCount = artists[i].albums.length;  // Get the number of ...
      // ... of albums ...
      totalAlbumCount += albumCount;                // ... and increase the ...
      // ... total number.
    }
    console.log(totalAlbumCount);                   // 8    
  })();

  (function () {
    const totalAlbumCount = artists.reduce(       // The reduce()-method ...
      function (                                  // ... expects a callback function.
        result,                                   // (1) current intermediate result
        artist,                                   // (2) the respective element
        index,                                    // (3) the index of the element in the array
        artists                                   // (4) the array
      ) {
        const albumCount = artist.albums.length;  // number of albums of the artist
        return result + albumCount;               // Increase total count
      },
      0                                           // Number of all albums
    );
    console.log(totalAlbumCount);                 // 8
  })();
}