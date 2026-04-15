import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between">
      
      {/* Logo */}
      <div className="text-blue-600 text-2xl font-bold">
        Facebook
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li>
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
        </li>
        <li>
          <Link href="/comments" className="hover:text-blue-600 transition">
            Comments
          </Link>
        </li>
      </ul>

      {/* Profile / Actions */}
      <div className="flex items-center gap-4">
        <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;