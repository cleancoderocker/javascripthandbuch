'use strict';
class UserRepository {

  constructor() {
    this._users = new Map();
  }

  async save(user) {
    this._users.set(user.id, user);
    return Promise.resolve(user);
  }

  async find(id) {
    const user = this._users.get(id);
    return Promise.resolve(user);
  }
}

const repository = new UserRepository();

// Using await
async function saveAndFindJames() {
  const james= {
    id: 4712,
    firstName: 'James',
    lastName: 'Doe'
  };
  try {
    const result = await repository.save(james);
    const user = await repository.find(result.id);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
saveAndFindJames();

// Using promises
function saveAndFindJohn() {
  const john = {
    id: 4711,
    firstName: 'John',
    lastName: 'Doe'
  };
  repository.save(john)
    .then(result => repository.find(result.id))
    .then(user => console.log(user))
    .catch(error => console.error(error));
}

saveAndFindJohn();
