const scriptURL = 'https://script.google.com/macros/s/AKfycbx3tCjiG3XAPaxOwJQPSQYH7ZQi-SiHmL8mGldPYjBUyfGmAX6ZUJxL3lD7COInNmfu/exec'
const form = document.forms['suscripciones']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})