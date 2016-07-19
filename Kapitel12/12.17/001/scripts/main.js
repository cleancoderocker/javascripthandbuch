(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var video = document.getElementById('video');
    var mediaStreamConstraints = {
      'video': true
    };
    var errorHandler = function (error) {
      console.log('Aufnahmefehler: ', error.code);
    };
    if (navigator.getUserMedia) { // Standard
      navigator.getUserMedia(mediaStreamConstraints, function (stream) {
        video.src = stream;
        video.play();
      }, errorHandler);
    } else if (navigator.webkitGetUserMedia) { // WebKit
      navigator.webkitGetUserMedia(mediaStreamConstraints, function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      }, errorHandler);
    } else if (navigator.mozGetUserMedia) { // Firefox
      navigator.mozGetUserMedia(mediaStreamConstraints, function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      }, errorHandler);
    }
    document.getElementById('snap').addEventListener('click', function () {
      context.drawImage(video, 0, 0, 320, 240);
    });
  }, false);
})();