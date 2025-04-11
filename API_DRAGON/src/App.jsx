import './App.css'
import {useEffect, useState} from 'react';
import Header from './Components/Header/Header'
import CardUser from './Components/Card/CardUser'


const App = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://dragonball-api.com/api/characters/')
      .then(response => response.json())
      .then(data => setUsers(data.items) )
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Header />
      { <main>
        {
          users.map((user) => (
            <CardUser image={user.image} />
          ))
        }
      </main> }
    </>
  )
}

export default App
