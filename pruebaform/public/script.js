const form = document.getElementById('miFormulario')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries())

  const response = await fetch('/formulario', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

  const respuesta = await response.text()
  alert(respuesta)
})
