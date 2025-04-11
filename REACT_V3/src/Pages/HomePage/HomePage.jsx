
import React, {useEffect,useState} from 'react'
import CustomCard from '../../Components/CustomCard/CustomCard'

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
          <CustomCard key={user.id} user={user} />
        ))
      }
    </main>
  )
}

export default HomePage
