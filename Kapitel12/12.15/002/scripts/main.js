(function () {
  if (navigator.getBattery) {
    function applyCSS(battery) {
      if (battery.charging) {
        document.getElementById('battery-status').classList.remove('battery-no-charge');
        document.getElementById('battery-status').classList.add('battery-charge');
      } else {
        document.getElementById('battery-status').classList.remove('battery-charge');
        document.getElementById('battery-status').classList.add('battery-no-charge');
      }
    }

    function chargingChangeHandler(event) {
      applyCSS(event.target);
    }

    navigator.getBattery().then(function (battery) {
      applyCSS(battery);
      battery.addEventListener('chargingchange', chargingChangeHandler);
    });
  }
})();