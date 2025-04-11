import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to={"/"} className='item'>Home</Link>
        <Link to={"/details"} className='item'>Humanos</Link>
        <Link to={"*"} className='item'>Aliens</Link>
      </ul>
    </nav>
  )
}

export default NavBar
