import { useState } from 'react'
import './App.css'

function App() {
  const [characters, setCharacters] = useState([])

  const fetchingData = async () => {
    const response = await fetch("https://harry-potter-api.onrender.com/personajes")
    const characters = await response.json()
    setCharacters(characters)
  }

  fetchingData()

  return (
    <div className='container'>
      <h1>Hola desde app</h1>
      <h2>Soy un subtitulo</h2>
      <div className='grid'>
    {
      characters.map(character => (
        <div className='card' key={character.id}>
          <img src={character.imagen} alt={`Imagen de ${character.character}`} />
          <h2>{character.personaje}</h2>
          <p><strong>Casa: </strong>()</p>
      </div>
    ))
    }
  </div>

    </div>
  )
}

export default App
