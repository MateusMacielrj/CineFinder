import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './Componentes/Header/header'
import Hero from './Componentes/Hero/section'
import Lista from './Componentes/Lista/lista'
import Favoritos from './Componentes/Favoritos/Favoritos'

import './App.css'
import './Componentes/Header/header.css'
import './Componentes/Hero/section.css'
import './Componentes/Lista/lista.css'
import './Componentes/Favoritos/favorito.css'

function App() {
  const [filmes, setFilmes] = useState([])
  const [favoritos, setFavoritos] = useState([])

  
  useEffect(() => {
    async function buscarFilmes() {
      const resposta = await fetch(
        'https://api.themoviedb.org/3/movie/popular?api_key=a3c62dcf26b52fda319fa95fd5db8197&language=pt-BR'
      )
      const dados = await resposta.json()
      setFilmes(dados.results)
    }
    buscarFilmes()
  }, [])


  useEffect(() => {
    const favoritosSalvos = localStorage.getItem("favoritos")
    if (favoritosSalvos) {
      setFavoritos(JSON.parse(favoritosSalvos))
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos))
  }, [favoritos])

  function toggleFavorito(id) {
    if (favoritos.includes(id)) {
      setFavoritos(favoritos.filter((filmeId) => filmeId !== id))
    } else {
      setFavoritos([...favoritos, id])
    }
  }

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Hero />
              <Lista 
                filmes={filmes}
                favoritos={favoritos}
                toggleFavorito={toggleFavorito}
              />
            </>
          }
        />

        <Route 
          path="/favoritos" 
          element={
            <Favoritos 
              filmes={filmes}
              favoritos={favoritos}
              toggleFavorito={toggleFavorito}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App


