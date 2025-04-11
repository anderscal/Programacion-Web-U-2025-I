import React, { useEffect, useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import CustomCard from './Components/CustomCard/CustomCard'
import NavBar from './Components/NavBar/NavBar'
const App = () => {

  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])
  console.log(characters)

  return (
    <div>
      <Header/>
      <NavBar/>
      <main>
        {
          characters.map((user) => (
            <CustomCard key={user.id} user={user} />
          ))
        }
      </main>
      <Footer />
    </div>
  )
}

export default App
