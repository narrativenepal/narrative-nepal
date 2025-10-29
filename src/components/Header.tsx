"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";


const navLinks = [
  { label: "HOME", href: "#" },
  { label: "ABOUT US", href: "#about-us" },
  { label: "DOCUMENTARIES", href: "#documentaries" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-[#FFCC00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 ">
          {/* Logo and Desktop Nav */}
          <div className="flex justify-between items-center space-x-8">
            <div className="flex items-center ">
              <div className="w-10 rounded-lg  border  border-[#FFCC00] h-10 bg-[#FFCC00] flex items-center justify-center font-bold text-black text-xl">
                <img src="https://res.cloudinary.com/dv9s1kiz2/image/upload/v1761496033/416575684_691411486461622_8760184129598159117_n_znftff.jpg" />
              </div>
              <span className="ml-2 text-xl  font-bold tracking-tight leading-tight">
                <h1>NARRATIVE <span className="text-[#FFCC00]">NEPAL</span></h1>

              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm font-medium hover:text-[#FFCC00] transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Overlay behind the menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-gray-800 transform transition-transform duration-300 ease-in-out md:hidden z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
          <h2 className="text-[#FFCC00] text-lg font-bold tracking-wider">MENU</h2>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 hover:bg-gray-900 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 space-y-5 text-sm font-medium">
      {navLinks.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          className="block hover:text-[#FFCC00] transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          {label}
        </a>
      ))}
    </nav>
      </div>
    </header>
  );
}
