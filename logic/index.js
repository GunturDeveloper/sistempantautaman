import { Metana } from './metana.js';
let countdownTime = 2;

/* Halaman pertama */
function activityMain() {
    return `
    <p target="_blank" class="brand" target="">SMK-SMTI YOGYAKARTA</p>
  <p>Dibangun dengan MetanaJs</p>
    `;
}

const timer = setInterval(() => {
  countdownTime--;
  if (countdownTime <= 0) {
    clearInterval(timer);
    window.location.href = 'second.html';
  }
}, 2500);

/* Fungsi memuat halaman pertama */
Metana.activityRenderOnLoad(() => {
    Metana.activityLayout("app", activityMain);
});

