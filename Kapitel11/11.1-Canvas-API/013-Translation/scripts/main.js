function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var canvas = document.getElementById('canvas').getContext('2d');
    for (var i=0;i<5;i++) {
      for (var j=0;j<5;j++) {
        canvas.save();
        canvas.fillStyle = 'rgb(255,'+(255-51*i)+',' + 51*i + ')';
        canvas.translate(10+j*50,10+i*50);
        canvas.fillRect(0,0,40,40);
        canvas.restore();
      }
    }
  }
}