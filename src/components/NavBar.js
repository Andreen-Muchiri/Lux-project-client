import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>Lux-Hotels</Link>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/room'>Room</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>SignUp</Link></li>
      </ul>

    </nav>
  )
}

export default NavBar
