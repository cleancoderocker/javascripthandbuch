'use strict';
function init() {
  let form = document.getElementById('register');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', 'register', true);
    request.send(formData);
  });
}

document.addEventListener('DOMContentLoaded', init);

/*
function init() {
  let formData = new FormData();
  formData.append('username', 'max.mustermann');
  formData.append('email', 'max.mustermann@javascripthandbuch.de');
  formData.append('url', 'javascripthandbuch.de');
  formData.append('age', 44);
  let request = new XMLHttpRequest();
  request.open('POST', 'register', true);
  request.send(formData);
}
*/