'use strict';
function init() {
  const linkOpen = document.getElementById('link-open');
  linkOpen.addEventListener('click', (e) => {
    const url = document.getElementById('url').value;
    window.open(
      url,                  // Zu öffnende URL
      'Fenstertitel',       // Titel des Fensters
      'width=500,' +        // Breite des Fensters
      'height=500,' +       // Höhe des Fensters
      'resizable=yes,' +    // Größenänderungen möglich
      'scrollbars=yes,' +   // Scrollbar aktiviert
      'status=1'            // Statusbar aktiviert
    );
  });
}
document.addEventListener('DOMContentLoaded', init)
