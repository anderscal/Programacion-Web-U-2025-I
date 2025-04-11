import React from 'react'
import './Header.css'
import LogoDragon from "../../assets/LOGO-DBZ.png"
const Header = () => {
    return (
        <>
            <header>
                <img src={LogoDragon} alt="Logo Dragon Ball Z" className='logo-db' />
                {/* <h1>Dragon Ball Z</h1> */}
            </header>
        </>
    )
}

export default Header
