function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var context = canvas.getContext('2d');
    context.font = '48px serif';               // Schrifteigenschaften
    context.fillText('Hallo Welt', 10, 50);    // Zeichen des Textes
    context.font = '48px serif';               // Schrifteigenschaften
    context.strokeText('Hallo Welt', 10, 100); // Zeichen des Textes
  }
}