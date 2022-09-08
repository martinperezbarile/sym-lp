function sym() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyY6ey92XhEOdyQjIYnv0oUQUgD4HUnswSOfH3-OcOlbfezG3I/exec';
  const form = document.forms['formulario'];

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        form.reset();
      })
      .catch(error => console.error('error', error.message))
  })
}