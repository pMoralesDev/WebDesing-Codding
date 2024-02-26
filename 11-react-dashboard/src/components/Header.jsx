import React from 'react'
import './header.css'
import Logo from './Logo'

function Header() {
  return (
    <header id="header" className='header fixed-top d-flex align-items-center'>
        {/* {logo} */}
        <Logo />
        {/* {search bar} */}
        {/* {nav} */}
    </header>
  )
}

export default Header