function handleFileSelect(event) {
  let files = event.target.files;
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    let reader = new FileReader();
    if (file.type.match('text.*')) {
      reader.onload = (event) => {
        let span = document.createElement('span');
        span.innerHTML = reader.result;
        document.getElementById('list').insertBefore(span, null);
      };
      reader.readAsText(file);
    } else if(file.type.match('image.*')) {
      reader.onload = (event) => {
        let span = document.createElement('span');
        span.innerHTML = '<img class="thumbnail" src="' + reader.result + '"/>';
        document.getElementById('list').insertBefore(span, null);
      };
      reader.readAsDataURL(file);
    }
  }
}
document.getElementById('files').addEventListener('change', handleFileSelect, false);