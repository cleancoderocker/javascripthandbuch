'use strict';
function init() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    function handleFileSelected(event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        if (file.type.match('text.*')) {
          reader.onload = (event) => {
            const span = document.createElement('span');
            span.innerHTML = reader.result;
            document.getElementById('list').insertBefore(span, null);
          };
          reader.readAsText(file);
        } else if(file.type.match('image.*')) {
          reader.onload = (event) => {
            const span = document.createElement('span');
            span.innerHTML = `<img class="thumbnail" src="${reader.result}"/>`;
            document.getElementById('list').insertBefore(span, null);
          };
          reader.readAsDataURL(file);
        }
      }
    }
    document.getElementById('files').addEventListener('change', handleFileSelected, false);
  } else {
    alert('File API not supported by this browser');
  }
}
document.addEventListener('DOMContentLoaded', init);