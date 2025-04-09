import React from 'react'
import './Header.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
    return (
        <>
            <header>
                <GitHubIcon className="icono-git"/>
                <h1>User</h1>
                <h2>GitHub</h2>
            </header>
        </>



    )
}

export default Header
