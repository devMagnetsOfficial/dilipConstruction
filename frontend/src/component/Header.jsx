import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Rate', path: '/rate' },
  ];

  // CTA button (can be reused for mobile)
  const ctaButton = { name: 'Get a Quote', path: '/contact' };

  return (
    <header className="bg-dark text-light shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-accent-gold">
            Premium Construction Co.
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center text-neutral-light">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors hover:text-accent-gold ${
                  isActive ? 'text-accent-gold' : ''
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* CTA Button */}
          <NavLink
            to={ctaButton.path}
            className="ml-4 bg-accent-gold text-dark font-semibold px-4 py-2 rounded hover:bg-primary-blue transition-colors"
          >
            {ctaButton.name}
          </NavLink>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? <span className="text-2xl">&times;</span> : <span className="text-2xl">&#9776;</span>}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark text-light px-6 pb-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-neutral-light hover:text-accent-gold transition-colors text-center"
            >
              {link.name}
            </NavLink>
          ))}

          {/* CTA Button */}
          <NavLink
            to={ctaButton.path}
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-accent-gold text-dark font-semibold px-4 py-2 rounded text-center hover:bg-primary-blue transition-colors"
          >
            {ctaButton.name}
          </NavLink>
        </div>
      )}
    </header>
  );
}
