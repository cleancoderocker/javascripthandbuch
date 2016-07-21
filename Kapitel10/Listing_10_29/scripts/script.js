'use strict';
$(document).ready(() => {
  let login = $('#login');
  let register = $('#register');
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
    console.log('HTML geladen');
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