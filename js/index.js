import copyToClipeboard from './copyToClipeboard.js';
import showImc from './showimc.js';
import themeSwitcher from './themeSwitcher.js';

document
  .getElementById('themeSwitcher')
  .addEventListener('click', themeSwitcher);

document.getElementById('calculate').addEventListener('click', function (ev) {
  ev.preventDefault();
  showImc();
});
document
  .getElementById('copyToClipboard')
  .addEventListener('click', copyToClipeboard);
