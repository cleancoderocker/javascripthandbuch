'use strict';
function init() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    function handleFileSelected(event) {
      const files = event.target.files;               // all selected files
      let output = '';                                // variable for result
      for (let i = 0; i < files.length; i++) {        // Iterate via all files ...
        const file = files[i];                        // ... View each file ...
        output += '<li>' +                            // ... and assemble ...
          // result HTML, 
          // consisting of:
          '<strong>' + file.name + '</strong>' +      // file name
          ' (' + (file.type || "n/a") + ') - ' +      // file type
          file.size + 'Bytes,' +                      // file size
          ' changed on: ' +                           // modification date
          file.lastModifiedDate.toLocaleDateString() +
          '</li>';
      }
      document.getElementById('list').innerHTML = '<ul>' + output + '</ul>';
    }
    document.getElementById('files').addEventListener(
      'change',
      handleFileSelected,
      false
    );
  } else {
    alert('File API not supported by this browser');
  }
}
document.addEventListener('DOMContentLoaded', init);