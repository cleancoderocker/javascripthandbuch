'use strict';
function init() {
  if (navigator.getBattery) {
    function displayBatteryStatus(battery) {
      document.getElementById('charge').innerHTML = (battery.charging ? 'Yes' : 'No');
      document.getElementById('charging-time').innerHTML = battery.chargingTime;
      document.getElementById('discharging-time').innerHTML = battery.dischargingTime;
      document.getElementById('battery-level').innerHTML = battery.level;
    }
    function chargingChangeHandler(event) {
      console.log('chargingchange');
      displayBatteryStatus(event.target);
    }
    function chargingTimeChangeHandler(event) {
      console.log('chargingtimechange');
      displayBatteryStatus(event.target);
    }
    function dischargingTimeChangeHandler(event) {
      console.log('dischargingtimechange');
      displayBatteryStatus(event.target);
    }
    function levelChangeHandler(event) {
      console.log('levelchange');
      displayBatteryStatus(event.target);
    }
    navigator.getBattery().then((battery) => {
      displayBatteryStatus(battery);
      battery.addEventListener('chargingchange', chargingChangeHandler);
      battery.addEventListener('chargingtimechange', chargingTimeChangeHandler);
      battery.addEventListener('dischargingtimechange', dischargingTimeChangeHandler);
      battery.addEventListener('levelchange', levelChangeHandler);
    });
  }
}
document.addEventListener('DOMContentLoaded', init);
