import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomCard from '../../Components/CustomCard/CustomCard'

const DetailsPage = () => {
    const [character, setCharacter] = useState({})
    let { id } = useParams()

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/` + id)
            .then(response => response.json())
            .then(data => setCharacter(data))
    }, []);


    return (
        <>
            <main>

                <CustomCard user={character} />

            </main>

        </>

    )
}

export default DetailsPage
