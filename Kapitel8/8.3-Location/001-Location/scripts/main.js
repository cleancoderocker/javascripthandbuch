function init() {
  console.log(window.location.href);
  console.log(window.location.protocol);
  console.log(window.location.host);
  console.log(window.location.hostname);
  console.log(window.location.port);
  console.log(window.location.pathname);
  console.log(window.location.search);
  console.log(window.location.hash);
  console.log(window.location.username);
  console.log(window.location.password);
  console.log(window.location.origin);
}

document.addEventListener('DOMContentLoaded', init);