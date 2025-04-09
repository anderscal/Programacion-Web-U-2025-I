
import './App.css'
import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import CardUser from './Components/CardUser/CardUser'

const App = () => {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    fetch('https://api.github.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error))
  })
  return (
    <>
      <Header />
      <CardUser />
    </>
  )
}

export default App
