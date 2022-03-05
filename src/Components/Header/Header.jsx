import React from 'react'
import Logo from '../../Assets/logo.png'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className="logo-container">
            <img src={Logo} alt="Logo" className="logo"/>
            </div>
            <h1>Generador de descripciones</h1>
        </header>
    )
}

export default Header