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
  $.get({
    url: name + '.html',
    dataType: 'html'
  }).done((data) => {
    $('#main-content').html(data);
  });
}

/*
function loadContent(name) {
  $('#main-content').load(
    name + '.html',
    () => {console.log('HTML geladen')}
  );
}
*/