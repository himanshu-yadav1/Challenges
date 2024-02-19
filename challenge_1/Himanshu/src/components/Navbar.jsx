import React, { useState } from 'react'
import './navbar.css'

function Navbar() {
    const [menuIcon, setMenuIcon] = useState('hamburger')
    const [isVisible, setIsVisible] = useState('false')

    const menuToggle = () => {
        if(menuIcon === 'hamburger'){
            setMenuIcon('close')
            setIsVisible('true')
        }
        else{
            setMenuIcon('hamburger')
            setIsVisible('false')
        }
    }

  return (
    <div className='container'>
        <header className='header'>
            <a className='logo' href="/">Brand</a>

            <button onClick={menuToggle} className='menu-button'>
                <img className='menu-icon' src={`/${menuIcon}.png`} alt="" />
            </button>

            <nav visibility={isVisible}  className='nav-items'>
                <a className='link' href="/home">Home</a>
                <a className='link' href="/about">About</a>
                <a className='link' href="/blog">Blog</a>
                <a className='link' href="/contact">Contact</a>
            </nav>

        </header>
      
    </div>
  )
}

export default Navbar
