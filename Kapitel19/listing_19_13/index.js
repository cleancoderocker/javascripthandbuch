import * as tf from 'https://esm.sh/@tensorflow/tfjs@4.22.0';
import * as use from 'https://esm.sh/@tensorflow-models/universal-sentence-encoder@1.3.3';

const status = document.getElementById('status');
const btn = document.getElementById('analyzeBtn');
const input = document.getElementById('input');
const output = document.getElementById('output');

const ENTITIES = ['Hamburg', 'München', 'Paris', 'New York'];
const THRESHOLD = 0.75;

const tokenize = (txt) =>
  txt.match(/(\s+|[A-Za-zÀ-ÖØ-öø-ÿ0-9\-']+|[^\sA-Za-zÀ-ÖØ-öø-ÿ0-9\-'])/g) || [];

const normalize = (t) => tf.div(t, tf.norm(t, 'euclidean', 1, true));

async function prepareEntities(model) {
  const embeddings = await model.embed(ENTITIES);
  return embeddings;
}

async function analyze(text, model, entityEmbeddings) {
  const tokens = tokenize(text);
  const words = tokens.filter((t) => !/^\s+$/.test(t));
  if (!words.length) return (output.textContent = '');

  const wordEmbeddings = normalize(await model.embed(words));
  const similarities = await wordEmbeddings
    .matMul(entityEmbeddings.transpose())
    .array();

  let i = 0;
  output.innerHTML = tokens
    .map((tok) => {
      if (/^\s+$/.test(tok)) return tok;
      const row = similarities[i++];
      const idx = row.indexOf(Math.max(...row));
      return row[idx] > THRESHOLD ? `<span class="entity">${tok}</span>` : tok;
    })
    .join('');

  wordEmbeddings.dispose();
}

const model = await use.load();
const embeddings = await prepareEntities(model);
status.textContent = 'Modell geladen.';

btn.addEventListener('click', () => analyze(input.value, model, embeddings));
