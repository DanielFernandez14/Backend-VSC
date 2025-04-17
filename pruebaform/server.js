const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('public')) // Servir HTML, CSS, JS
app.use(express.urlencoded({ extended: true })) // Para formularios
app.use(express.json()) // Para JSON

app.post('/formulario', (req, res) => {
  console.log('Datos recibidos del formulario:')
  console.log(req.body)

  res.send('¡Formulario recibido!')
})

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000')
})

