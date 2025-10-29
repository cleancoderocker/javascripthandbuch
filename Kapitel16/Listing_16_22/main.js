'use strict';
class UserRepository {

  #users;

  constructor() {
    this.#users = new Map();
  }

  async save(user) {
    this.#users.set(user.id, user);
    return Promise.resolve(user);
  }

  async find(id) {
    const user = this.#users.get(id);
    return Promise.resolve(user);
  }
}

const repository = new UserRepository();

// Verwenden von await
async function saveAndFindMoritz() {
  const moritz = {
    id: 4712,
    firstName: 'Moritz',
    lastName: 'Mustermann'
  };
  try {
    const result = await repository.save(moritz);
    const user = await repository.find(result.id);
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}
await saveAndFindMoritz();

// Verwenden von Promises
function saveAndFindMax() {
  const max = {
    id: 4711,
    firstName: 'Max',
    lastName: 'Mustermann'
  };
  repository.save(max)
    .then(result => repository.find(result.id))
    .then(user => console.log(user))
    .catch(error => console.error(error));
}

await saveAndFindMax();
