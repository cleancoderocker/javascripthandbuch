var reader;
var progress = document.querySelector('.percent');

function abortRead() {
  reader.abort();
}

function errorHandler(event) {
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

function updateProgress(event) { // Hier kommt ein ProgressEvent an
  if (event.lengthComputable) {
    var percentLoaded = Math.round((event.loaded / event.total) * 100);
    // Increase the progress bar length.
    if (percentLoaded < 100) {
      progress.style.width = percentLoaded + '%';
      progress.textContent = percentLoaded + '%';
    }
  }
}

function handleFileSelect(event) {
  progress.style.width = '0%';
  progress.textContent = '0%';
  reader = new FileReader();
  reader.onerror = errorHandler;
  reader.onprogress = updateProgress;
  reader.onabort = function (event) {
    console.log('Lesen der Datei abgebrochen');
  };
  reader.onloadstart = function (event) {
    document.getElementById('progress-bar').className = 'loading';
  };
  reader.onload = function (event) {
    progress.style.width = '100%';
    progress.textContent = '100%';
    setTimeout("document.getElementById('progress_bar').className='';", 2000);
  };
  reader.readAsBinaryString(event.target.files[0]);
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
document.getElementById('abort-file-reading').addEventListener('click', abortRead, false);