import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { get_encoding, get_encoding_name_for_model } from 'tiktoken';

const enc = get_encoding(get_encoding_name_for_model('gpt-4o'));

const decoder = new TextDecoder();

const rl = readline.createInterface({ input, output });

const inputText = await rl.question('Bitte geben Sie einen Text ein: ');
const tokens = enc.encode(inputText);

const decodedParts = [];

for (const token of tokens) {
  const decodedBytes = enc.decode([token]);
  const decodedString = decoder.decode(decodedBytes);
  decodedParts.push(decodedString);
}
console.log(`Anzahl der Tokens: ${tokens.length}`);
console.log(decodedParts.join(' | '));

rl.close();
enc.free();
