'use strict';
function printContactInformation(
  {
    contact: {
      email: email, 
      phone: phone
    }
  }
) {
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
}

const person = { 
  firstName: 'John', 
  lastName: 'Doe', 
  contact: {
    email: 'john.doe@javascripthandbuch.de', 
    phone: '02345/23456789'
  }
};

printContactInformation(person);
