const scriptURL = 'https://script.google.com/a/intraway.com/macros/s/AKfycbzeqgT4jZp9Xa0BxZIUQnA4JHQa1dZ-3XsX_waS/exec'
const form = document.forms['suscripciones']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      console.log('Success!', response);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})