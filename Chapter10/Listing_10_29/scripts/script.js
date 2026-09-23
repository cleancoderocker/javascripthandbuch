'use strict';
$(document).ready(() => {
  const login = $('#login');
  const register = $('#register');
  login.click((e) => {
    e.preventDefault();
    loadContent('login');
  });
  register.click((e) => {
    e.preventDefault();
    loadContent('register');
  });
});

function loadContent(name) {
  $('#main-content').load(
    name + '.html',
    (
      responseText,
      textStatus,
      jqXHRObject
    ) => {
      console.log('HTML loaded');
    }
  );
}


/*
function loadContent(name) {
  $('#main-content').load(
    name + '.html',
    () => {console.log('HTML geladen')}
  );
}
*/