const DATA_EVENTO = new Date('2026-03-15T16:00:00');
// ⚠️ ajuste data e horário aqui

function atualizarContador() {
  const agora = new Date();
  const diff = DATA_EVENTO - agora;

  if (diff <= 0) {
    document.querySelector('.contador').innerHTML =
        '<strong>🎉 Chegou o grande dia!</strong>';
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById('dias').innerText = dias;
  document.getElementById('horas').innerText = horas;
  document.getElementById('minutos').innerText = minutos;
  document.getElementById('segundos').innerText = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();
