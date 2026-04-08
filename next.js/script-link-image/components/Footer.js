'use client'

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-around bg-slate-800 text-white p-4">
      
      <div className="text-center">
        &copy; 2026 Facebook. All rights reserved
      </div>

      <ul className="flex gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

    </footer>
  )
}

export default Footer