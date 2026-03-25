import React from 'react'
 import {NavLink} from 'react-router-dom'
const Navbar = () => {


  return (
    <div>
      <nav className='flex justify-between list-none p-2 bg-black text-white'>
        <li><NavLink className={(e)=>{ return e.isActive ? 'text-blue-500' : ""}} to="/">Home</NavLink></li>    
        <li><NavLink className={(e)=>{ return e.isActive ? 'text-blue-500' : ""}} to="/about">About</NavLink></li>    
        <li><NavLink className={(e)=>{ return e.isActive ? 'text-blue-500' : ""}} to="/login">Login</NavLink></li>    
      </nav>
    </div>
  )
}

export default Navbar
