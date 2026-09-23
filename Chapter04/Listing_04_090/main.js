'use strict';
const persons = [
  {
    firstName: 'John', 
    lastName: 'Doe', 
    contact: {
      email: 'john.doe@javascripthandbuch.de', 
      phone: '02345/23456789'
    }
  }, 
  {
    firstName: 'Jane', 
    lastName: 'Smith', 
    contact: {
      email: 'jane.smith@javascripthandbuch.de', 
      phone: '02345/23456789'
    }
  }
];

for (let 
  {
    firstName: firstName, 
    lastName: lastName, 
    contact: { 
      email: email, 
      phone: phone 
    } 
  } of persons) {
  console.log(`${firstName} ${lastName}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
}
