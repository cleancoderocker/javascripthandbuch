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
    function after2000(album) {
      return album.year > 2000;
    }
    function hasAlbumAfter2000(artist) {
      return artist.albums.filter(after2000).length > 0;
    };
    function getArtistName(artist) {
      return artist.name;
    };
    function printName(name) {
      console.log(name);
    }
    artists
      .filter(hasAlbumAfter2000)
      .map(getArtistName)
      .forEach(printName);
  })();

}