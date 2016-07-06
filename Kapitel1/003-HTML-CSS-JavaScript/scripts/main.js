angular.module('exampleApp', [])
  .controller('mainController', function($scope) {
    $scope.sortType = 'name';
    $scope.sortReverse = false;
    $scope.searchArtist = '';
    $scope.artists = [
      { name: 'Monster Magnet', album: 'Powertrip', genre: 'Spacerock', releaseDate: 1998 },
      { name: 'Kyuss', album: 'Welcome to Sky Valley', genre: 'Stonerrock', releaseDate: 1994 },
      { name: 'Ben Harper', album: 'The Will to Live', genre: 'Singer/Songwriter', releaseDate: 1997 },
      { name: 'Tool', album: 'Lateralus', genre: 'Progrock', releaseDate: 2001 },
      { name: 'Beastie Boys', album: 'Ill Communication', genre: 'Hip Hop', releaseDate: 1994 },
    ];
  });