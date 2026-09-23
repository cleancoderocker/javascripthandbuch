'use strict';
function init() {
  const linkReload = document.getElementById('link-reload');
  linkReload.addEventListener('click', (e) => {
    window.location.reload(true);
  });
}
document.addEventListener('DOMContentLoaded', init)
