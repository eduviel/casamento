fetch('data/presentes.json').then(res => res.json()).then(presentes => {
  const lista = document.getElementById('lista');

  presentes.forEach(p => {
    const card = document.createElement('div');
    card.className = 'presente';

    card.innerHTML = `
        <h2>${p.emoji} ${p.nome}</h2>
        <p>${p.descricao}</p>
        <span>R$ ${p.valor}</span>
        <button onclick="abrirPix('${p}')">Presentear</button>
      `;

    card.querySelector('button').onclick = () => abrirPix(p);
    lista.appendChild(card);
  });
});

function abrirPix(presente) {
  document.getElementById('modal-titulo').innerText =
      `${presente.emoji} ${presente.nome}`;

  document.getElementById('pix-img').src = presente.qrCode;
  document.getElementById('pix-code').innerText = presente.pixCopiaCola;

  document.getElementById('modal').style.display = 'block';
}

function fecharPix() {
  document.getElementById('modal').style.display = 'none';
}
