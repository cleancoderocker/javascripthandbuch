'use strict';
function init() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    function handleFileSelected(event) {
      event.stopPropagation();
      event.preventDefault();

      const files = event.dataTransfer.files;          // all selected files
      let output = '';                                 // variable for event
      for (let i = 0; i < files.length; i++) {         // Iterate over all files ...
        const file = files[i];                         // ... view each file ...
        output += '<li>' +                             // ... and assemble ...
          // ... result HTML, 
          // consisting of:
          '<strong>' + file.name + '</strong>' +         // file name
          ' (' + (file.type || "n/a") + ') - ' +         // file type
          file.size + 'Bytes,' +                         // file size
          ' changed on: ' +                              // Modification date
          file.lastModifiedDate.toLocaleDateString() +
          '</li>';
      }
      document.getElementById('list').innerHTML = '<ul>' + output + '</ul>';
    }

    function handleDragOver(event) {
      event.stopPropagation();
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';
    }

    const dropTarget = document.getElementById('target');
    dropTarget.addEventListener('dragover', handleDragOver, false);
    dropTarget.addEventListener('drop', handleFileSelected, false);

  } else {
    alert('File API not supported by this browser');
  }
}
document.addEventListener('DOMContentLoaded', init);