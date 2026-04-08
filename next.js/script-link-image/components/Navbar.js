'use client'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between  bg-slate-800 text-white p-4">
      
      <div className="logo font-bold text-lg">Facebook</div>

      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar