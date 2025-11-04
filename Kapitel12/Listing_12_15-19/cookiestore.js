// Cookie setzen
await cookieStore.set({
  name: 'username',
  value: 'Max Mustermann',
  expires: new Date('2025-12-31T23:59:59Z'),
  path: '/'
});

// Cookie lesen
const cookie = await cookieStore.get('username');
console.log(cookie.value); // Ausgabe: Max Mustermann

// Cookie löschen
await cookieStore.delete('username');
