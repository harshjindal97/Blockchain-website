import React from 'react'
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './Navbar.css'

const Navbar = () => {

  const [toggleMenu , setToggleMenu] = useState(false);

  return (
    <div className='crypt_navbar'>
      <div className='crypt_navbar-logo'>
        <img src={logo} alt="logo image" />
        <h1>Crypt</h1>
      </div>
      <div className='crypt_navbar-container'>
        <p><a href="#Market">Market</a></p>
        <p><a href="#Exchange">Exchange</a></p>
        <p><a href="#Tutorials">Tutorials</a></p>
        <p><a href="#Wallet">Wallet</a></p>
        <div className='crypt_navbar-container_button'><button>Login</button></div>
      </div>
      <div className='crypt_navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="crypt_navbar-menu_container">
          <div><p><a href="#Market">Market</a></p></div>
          <div><p><a href="#Exchange">Exchange</a></p></div>
          <div><p><a href="#Tutorials">Tutorials</a></p></div>
          <div><p><a href="#Wallet">Wallet</a></p></div>
          <div className='crypt_navbar-container_button'><button>Login</button></div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
