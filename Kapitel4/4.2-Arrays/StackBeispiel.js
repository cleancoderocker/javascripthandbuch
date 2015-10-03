var routeTracker = {
  directions: [],
  mapping: {
    right: 'left',
    left: 'right',
    forward: 'back',
    back: 'forward'
  },
  goRight: function () {
    this.directions.push('right');
  },
  goLeft: function () {
    this.directions.push('left');
  },
  goForward: function () {
    this.directions.push('forward');
  },
  goAllWayBack: function () {
    var direction;
    while (direction = this.directions.pop()) {
      console.log('Going ' + this.mapping[direction]);
    }
  }
}
