'use strict';
function init() {
  const login = document.getElementById('login');
  const register = document.getElementById('register');
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
  const request = new XMLHttpRequest();
  request.onload = () => {
    const htmlSnippet = request.responseText;
    document.getElementById('main-content').innerHTML = htmlSnippet;
  };
  request.open('GET', name + '.html', true);
  request.send();
}
document.addEventListener('DOMContentLoaded', init);
