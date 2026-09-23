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

for (let {firstName:f, lastName:l, contact:{email:e, phone:p}} of persons) {
  console.log(`${f} ${l}`);
  console.log(`Email: ${e}`);
  console.log(`Phone: ${p}`);
}
