'use strict';
function init() {
  const formData = new FormData();
  formData.append('username', 'max.mustermann');
  formData.append('email', 'max.mustermann@javascripthandbuch.de');
  formData.append('url', 'javascripthandbuch.de');
  formData.append('age', 44);
  const request = new XMLHttpRequest();
  request.open('POST', 'register', true);
  request.send(formData);
}
document.addEventListener('DOMContentLoaded', init);
