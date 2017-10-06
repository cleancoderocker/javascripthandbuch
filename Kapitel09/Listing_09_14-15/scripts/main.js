'use strict';
function init() {
  let login = document.getElementById('login');
  let register = document.getElementById('register');
  login.addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('login');
  });
  register.addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('register');
  });
}

function loadContent(name) {
  let request = new XMLHttpRequest();
  request.onload = () => {
    let htmlSnippet = request.responseText;
    document.getElementById('main-content').innerHTML = htmlSnippet;
  };
  request.open('GET', name + '.html', true);
  request.send();
}
document.addEventListener('DOMContentLoaded', init);
