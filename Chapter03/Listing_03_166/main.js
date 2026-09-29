console.log(checkAge(22)); // true

try {
  console.log(checkAge('Max Mustermann'));
} catch (error) {
  console.error(error.cause);
  // {
  //   code: 'INVALID_TYPE',
  //   received: 'Max Mustermann',
  //   expected: 'number',
  //   field: 'age',
  //   timestamp: '2025-07-18T09:13:20.745Z'
  // }
}

function checkAge(age) {
  if (isNaN(parseFloat(age))) {
    throw new TypeError('Alter muss eine Zahl sein.', {
      cause: {
        code: 'INVALID_TYPE',
        received: age,
        expected: 'number',
        field: 'age',
        timestamp: new Date().toISOString()
      }
    });
  } else if (age < 0) {
    throw new RangeError('Alter darf nicht negativ sein.', {
      cause: {
        code: 'NEGATIVE_VALUE',
        value: age
      }
    });
  }
  return true;
}
