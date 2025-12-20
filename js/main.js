import './countdown.js';

import {carregarPresentes} from './render.js';
import {confirmarPresenca} from './rsvp.js';

window.confirmarPresenca = confirmarPresenca;

document.addEventListener('DOMContentLoaded', () => {
  carregarPresentes();
});
