
import React, { useEffect, useState } from 'react'
import CustomCard from '../../Components/CustomCard/CustomCard'
import { Link } from 'react-router-dom'

const HomePage = () => {

  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, [])

  return (
    <main>
      {
        characters.map((user) => (
          <Link to={`/details/${user.id}`} key={user.id}>
            <CustomCard key={user.id} user={user} />
          </Link>
        ))
      }
    </main>
  )
}

export default HomePage
