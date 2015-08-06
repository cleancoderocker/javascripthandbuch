(function () {
  function handleFileSelect(event) {
    var files = event.target.files;
    for (var i = 0; i<files.length; i++) {
      var file = files[i];
      if (!file.type.match('image.*')) {
        continue;
      }
      var reader = new FileReader();
      reader.onload = (function (theFile) {
        return function (event) {
          var span = document.createElement('span');
          span.innerHTML = [
            '<img class="thumbnail" src="',
            event.target.result,
            '" title="',
            theFile.name,
            '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(file);
      reader.readAsDataURL(file);
    }
  }
  document.getElementById('files').addEventListener('change', handleFileSelect, false);
})();