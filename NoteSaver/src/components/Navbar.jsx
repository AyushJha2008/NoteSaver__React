import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav-cont'>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/notes">
        Notes
      </NavLink>
    </div>
  )
}

export default Navbar