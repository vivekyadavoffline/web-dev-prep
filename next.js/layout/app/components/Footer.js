import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold text-white">Facebook</h2>
            <p className="text-sm mt-2">
              Connecting people and building communities.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-10">
            <ul className="space-y-2">
              <li className="font-semibold text-white">Company</li>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>

            <ul className="space-y-2">
              <li className="font-semibold text-white">Legal</li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} Facebook Clone. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;