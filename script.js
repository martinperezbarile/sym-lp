const scriptURL = 'https://script.google.com/macros/s/AKfycbz5sqJ8100AbvVuqLhcePwq2c-9tRPlsV20xw30v08ZQI_2I2xs26iJfhUJCV9zoUWJ/exec'
const form = document.forms['suscripciones']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})