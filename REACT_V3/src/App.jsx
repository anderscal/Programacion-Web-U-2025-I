import React from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage/HomePage'

const App = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <HomePage/>
      <Footer />
    </div>
  )
}

export default App
