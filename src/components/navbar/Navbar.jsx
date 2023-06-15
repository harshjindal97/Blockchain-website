import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
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
        <button>Login</button>
      </div>
    </div>
  )
}

export default Navbar
