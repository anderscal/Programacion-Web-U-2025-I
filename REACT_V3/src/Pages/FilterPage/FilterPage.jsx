
import React, { useEffect, useState } from 'react'
import CustomCard from '../../Components/CustomCard/CustomCard'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const FilterPage = () => {
  const { especie } = useParams()
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      await fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => setCharacters(data.results))
      setCharacters((characters) => {
        return characters.filter((character) => character.species === especie);
      })
    }
    fetchCharacters();
  }, [especie]);

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

export default FilterPage
