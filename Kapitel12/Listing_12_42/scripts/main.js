'use strict';
function init() {
  if (window.File && window.FileReader && window.FileList && window.Blob) {
    const progress = document.querySelector('.percent');
    const reader = new FileReader();
    function updateProgress(event) {
      if (event.lengthComputable) {
        const percentLoaded = Math.round((event.loaded / event.total) * 100);
        if (percentLoaded < 100) {
          progress.style.width = percentLoaded + '%';
          progress.textContent = percentLoaded + '%';
        }
      }
    }
    function handleError(event) {
      switch (event.target.error.code) {
        case event.target.error.NOT_FOUND_ERR:
          console.error('Datei wurde nicht gefunden');
          break;
        case event.target.error.NOT_READABLE_ERR:
          console.error('Datei konnte nicht gelesen werden');
          break;
        case event.target.error.ABORT_ERR:
          break;
        default:
          console.error('Unbekannter Fehler');
      }
      ;
    }
    function handleFileSelected(event) {
      progress.style.width = '0%';
      progress.textContent = '0%';
      reader = new FileReader();
      reader.onprogress = updateProgress;
      reader.onerror = handleError;
      reader.onabort = (event) => {
        console.log('Lesen der Datei abgebrochen');
      };
      reader.onloadstart = (event) => {
        document.getElementById('progress-bar').className = 'loading';
      };
      reader.onload = (event) => {
        progress.style.width = '100%';
        progress.textContent = '100%';
        setTimeout(() => {
          document.getElementById('progress-bar').className = '';
        }, 2000);
      };
      reader.readAsBinaryString(event.target.files[0]);
    }
    document.getElementById('files').addEventListener('change', handleFileSelected, false);
    function abortRead() {
      reader.abort();
    }
    document.getElementById('abort-file-reading').addEventListener('click', abortRead, false);
  } else {
    alert('File API nicht vollständig durch den Browser unterstützt');
  }
}
document.addEventListener('DOMContentLoaded', init);