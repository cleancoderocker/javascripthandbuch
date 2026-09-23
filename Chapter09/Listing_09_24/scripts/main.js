'use strict';
async function init() {
  try {
    const body = {
      firstName: 'John',
      lastName: 'Doe',
    }
    const response = await fetch('register',
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  };
}
 
document.addEventListener('DOMContentLoaded', init);
