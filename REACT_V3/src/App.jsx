import React from 'react'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import NavBar from './Components/NavBar/NavBar'
import HomePage from './Pages/HomePage/HomePage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'

const App = () => {
  return (
    <>
      <Header/>
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
  
      <Footer />
    </>
  )
}

export default App
