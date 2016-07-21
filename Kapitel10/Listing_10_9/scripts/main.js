'use strict';
function init() {
  $('li').wrapInner(
    function() {
      return '<a href="' + this.textContent + '"></a>'
    }
  );
}
$(document).ready(init);