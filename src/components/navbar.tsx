"use client";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";

import Link from "next/link";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 md:py-[30px] md:px-[54] bg-blue-200 relative z-10 min-h-[90px]">
      {/* Logo */}
      <div className="flex items-center text-2xl font-bold leading-none ml-4 md:ml-40">
        <span className="text-blue-600">My</span>
        <span className="text-white">Blog</span>
      </div>

      {/* Desktop Links */}
      <nav className="hidden md:block">
        <ul className="flex gap-x-5 text-sm text-blue-600">
          <li className="cursor-pointer font-bold">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link href={"/#blogsList"}>Blog</Link>
          </li>
          <li className="cursor-pointer font-bold">
            <Link href={"/contact"}>Contact</Link>
          </li>
          
          
        </ul>
      </nav>

      

      {/* Hamburger Icon for Small Screens */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          <MdOutlineMenu className="text-2xl text-white" />
        </button>
      </div>

      {/* Mobile Menu - Visible only when menu state is open */}
      {isMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-blue-200 text-center text-blue-600 font-semibold z-50">
          <ul>
            <li className="py-3 border-b border-white">
              <Link href="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li className="py-3 border-b border-white">
              <Link href="/#blogsList" onClick={toggleMenu}>
                Blog
              </Link>
            </li>
            <li className="py-3 border-b border-white">
              <Link href="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
            
            
          </ul>
        </div>
      )}
    </header>
  );
}
