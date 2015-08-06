(function() {
  function launchIntoFullscreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }

  function exitFullscreen() {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if(document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if(document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }

  document.getElementById('button-start-fullscreen').addEventListener('click', function() {
    launchIntoFullscreen(document.documentElement);
  });
  document.getElementById('button-start-fullscreen-for-element').addEventListener('click', function() {
    launchIntoFullscreen(document.getElementById('content'));
  });
  document.getElementById('button-exit-fullscreen').addEventListener('click', function() {
    exitFullscreen();
  });

})();