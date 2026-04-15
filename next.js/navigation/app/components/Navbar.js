'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  
  
  
    const pathname = usePathname()

  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-6 py-4 shadow-md">

      {/* Logo */}
      <div className="text-xl font-bold">
        MyApp
      </div>
       <p>Current pathname: {pathname}</p>
      {/* Menu */}
      <ul className="flex gap-6 text-lg">
        
        <li
          className={`cursor-pointer transition ${
            pathname === '/' ? 'text-yellow-400 font-semibold' : 'hover:text-gray-400'
          }`}
        >
          Home
        </li>

        <li
          className={`cursor-pointer transition ${
            pathname === '/about' ? 'text-yellow-400 font-semibold' : 'hover:text-gray-400'
          }`}
        >
          About
        </li>

        <li
          className={`cursor-pointer transition ${
            pathname === '/login' ? 'text-yellow-400 font-semibold' : 'hover:text-gray-400'
          }`}
        >
          Login
        </li>

      </ul>
    </nav>
  )
}

export default Navbar