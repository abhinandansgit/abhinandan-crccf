/**
 * Navbar.jsx
 * Navigation header component for the application.
 * Contains the brand logo, navigation links, and functional mobile menu.
 */

import { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navbar component provides the primary navigation for the site.
 * Includes responsive layout for desktop and a functional sliding mobile menu.
 * @returns {JSX.Element} The rendered navigation header.
 */
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Reach Us', path: '/' },
    { name: 'IT Services', path: '/it-services' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Recruitment Policies', path: '/recruitment-policies' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-primary-nav text-white sticky top-0 z-50 shadow-lg backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        
        {/* Brand Logo and Name */}
        <Link to="/" className="flex items-center gap-2 group">
          <ShieldCheck className="w-8 h-8 text-red-500 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-2xl font-bold tracking-wider group-hover:text-primary-light transition-colors">CRCCF</span>
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`transition-all duration-300 hover:text-primary-light relative py-1 ${
                isActive(link.path) ? 'text-primary-light after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-light' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* CTA Button */}
          <Link to="/" className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-lg font-bold transition-all shadow-md hover:shadow-primary/20 active:scale-95">
            Get Started
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-primary-light p-2 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-[68px] z-40 md:hidden transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        
        {/* Menu Content */}
        <nav className={`absolute top-0 right-0 w-[280px] h-full bg-slate-900 shadow-2xl p-6 transform transition-transform duration-500 ease-out flex flex-col gap-4 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-semibold p-3 rounded-xl transition-all ${
                isActive(link.path) ? 'bg-primary/20 text-primary-light border-l-4 border-primary' : 'text-gray-300 hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            to="/" 
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 bg-primary text-white py-4 rounded-xl font-bold text-center shadow-lg shadow-primary/20"
          >
            Get Started
          </Link>

          <div className="mt-auto py-8 text-center text-gray-500 text-xs">
            © 2026 CRCCF Organization.<br/>All Rights Reserved.
          </div>
        </nav>
      </div>
    </header>
  );
}
