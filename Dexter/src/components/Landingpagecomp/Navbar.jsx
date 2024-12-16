import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../../assets/Main_Logo.svg';

export const navbarLinks = [
  { title: 'Getting Started', path: '/getting-started' },
  { title: 'Pricing', path: '/pricing' },
  { title: 'FAQ', path: '/faq' },
  { title: 'Blog', path: '/blog' },
  { title: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleHome = () => {
    navigate("/");
  };
 
  const handleTry = () => {
navigate("/signup")
  }

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-4 bg-white">
      <div className="flex justify-between w-full lg:w-auto">
        <div
          className="text-xl font-bold cursor-pointer text-primary"
          onClick={handleHome}
        >
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Hamburger button */}
        <button
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Navigation links */}
      <ul
        className={`lg:flex  lg:space-x-6 text-lg text-gray-600 transition-transform duration-300 ease-in-out ${
          isOpen ? 'block' : 'hidden lg:block'
        }`}
      >
        {navbarLinks.map((link, index) => (
          <li key={index} className="mb-4 lg:mb-0">
            <Link
              to={link.path}
              className={`block px-4 py-2 transition-colors duration-200 ${
                isActive(link.path) ? 'text-primary ' : 'hover:text-primary'
              }`}
              onClick={() => setIsOpen(false)} 
            >
              {link.title}
            </Link>
          </li>
        ))}

        {/* CTA Button (Only visible in mobile dropdown) */}
        <li className="block lg:hidden mb-4">
          <button className="w-full bg-primary text-white px-4 py-2 rounded transition duration-200 hover:bg-opacity-80">
            Try Dexter for free
          </button>
        </li>
      </ul>

      {/* CTA Button (Desktop view) */}
      <button className="hidden lg:block bg-primary text-white px-4 py-2 rounded transition duration-200 hover:bg-opacity-80" onClick={handleTry}>
        Try Dexter for free
      </button>
    </nav>
  );
};

export default Navbar;
