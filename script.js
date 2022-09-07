const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('https://sheet.best/api/sheets/2fb982d7-fbd1-4f9c-a605-00ba9d21450a', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Network": "Ejemplo network",
      "Email": "Ejemplo email"
    })
  });
});
