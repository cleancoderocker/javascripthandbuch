const MathFunctions = {
  compare(number1, number2) {
    if(
      typeof number1 !== 'number' ||
      typeof number2 !== 'number'
    ) {
      throw new TypeError('Nur Zahlen erlaubt.');
    } else {
      if(number1 > number2) {
        return 1;
      } else if(number2 > number1) {
        return -1;
      } else {
        return 0;
      }
    }
  }
}
module.exports = MathFunctions;