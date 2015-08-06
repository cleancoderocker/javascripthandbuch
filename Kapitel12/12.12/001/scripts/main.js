(function() {
  init();
  var count = 0;

  function init() {
    if (window.DeviceOrientationEvent) {
      document.getElementById("doEvent").innerHTML = "DeviceOrientation";
      window.addEventListener('deviceorientation', function(eventData) {
        var tiltLR = eventData.gamma;
        var tiltFB = eventData.beta;
        var dir = eventData.alpha
        deviceOrientationHandler(tiltLR, tiltFB, dir);
      }, false);
    } else {
      document.getElementById("doEvent").innerHTML = "Not supported on your device or browser.  Sorry."
    }
  }

  function deviceOrientationHandler(tiltLR, tiltFB, dir) {
    document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
    document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
    document.getElementById("doDirection").innerHTML = Math.round(dir);

    // Apply the transform to the image
    var logo = document.getElementById("imgLogo");
    logo.style.webkitTransform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
    logo.style.MozTransform = "rotate("+ tiltLR +"deg)";
    logo.style.transform = "rotate("+ tiltLR +"deg) rotate3d(1,0,0, "+ (tiltFB*-1)+"deg)";
  }
})();