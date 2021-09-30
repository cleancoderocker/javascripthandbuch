function init() {
  const checkbox = document.getElementById('remember');
  checkbox.addEventListener('change', (e) => {
    console.log(checkbox.value);    // "on"
    console.log(checkbox.checked);  // true oder false
    console.log(this.value);        // undefined
    console.log(this.checked);      // undefined
  });
  checkbox.addEventListener('change', function(e) {
    console.log(checkbox.value);    // "on"
    console.log(checkbox.checked);  // true oder false
    console.log(this.value);        // "on"
    console.log(this.checked);      // true oder false
  });
};

document.addEventListener('DOMContentLoaded', init);
