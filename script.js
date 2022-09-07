const scriptURL = 'https://script.google.com/macros/s/AKfycbyY6ey92XhEOdyQjIYnv0oUQUgD4HUnswSOfH3-OcOlbfezG3I/exec'
const form = document.forms['suscrip']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})