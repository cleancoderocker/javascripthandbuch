function init() {
  window.history.length;     // number of entries
  window.history.back();     // back in history
  window.history.forward();  // forward in history
  window.history.go(-2);     // two entries back
  window.history.go(2);      // two entries forward
  window.history.go(0);      // reload current web page  
}

document.addEventListener('DOMContentLoaded', init);