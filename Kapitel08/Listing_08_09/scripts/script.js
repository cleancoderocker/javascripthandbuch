'use strict';
function init() {
  let linkLoad = document.getElementById('link-load');
  linkLoad.addEventListener('click', (e) => {
    let url = document.getElementById('url').value;
    window.location.replace(url);
  });
}
document.addEventListener('DOMContentLoaded', init)
