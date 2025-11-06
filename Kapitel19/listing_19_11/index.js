import * as tf from 'https://esm.sh/@tensorflow/tfjs@4.22.0';
import * as cocoSsd from 'https://esm.sh/@tensorflow-models/coco-ssd@2.2.3';

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const statusEl = document.getElementById('status');
const btn = document.getElementById('capture');

async function initCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;
}

async function loadModel() {
  const model = await cocoSsd.load();
  statusEl.textContent = 'Modell geladen.';
  return model;
}

async function captureAndDetect(model) {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.drawImage(video, 0, 0);
  const predictions = await model.detect(canvas);

  predictions.forEach((p) => {
    const [x, y, w, h] = p.bbox;
    ctx.strokeStyle = '#60a5fa';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, w, h);
    ctx.fillStyle = '#60a5fa';
    ctx.fillText(
      `${p.class} ${(p.score * 100).toFixed(0)}%`,
      x,
      y > 10 ? y - 5 : y + 15
    );
  });

  statusEl.textContent = `${predictions.length} Objekte erkannt.`;
}

await initCamera();
const model = await loadModel();

btn.addEventListener('click', () => captureAndDetect(model));
