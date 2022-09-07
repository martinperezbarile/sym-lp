const dataForm = document.getElementById('dataForm');

dataForm.addEventListener('submit', (e) => {
  e.preventDefault();

  fetch('https://sheet.best/api/sheets/2fb982d7-fbd1-4f9c-a605-00ba9d21450a', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "Network element": dataForm.network.value,
      "Email": dataForm.email.value
    })
  });
});
