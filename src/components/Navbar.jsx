import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-primary-nav text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-red-500 animate-pulse" />
          <span className="text-2xl font-bold tracking-wider">CRCCF</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-primary-light transition-colors">Home</Link>
          <Link to="/it-services" className="hover:text-primary-light transition-colors">IT Services</Link>
          <Link to="/reviews" className="hover:text-primary-light transition-colors">Reviews</Link>
          <Link to="/" className="hover:text-primary-light transition-colors">Contact</Link>
          <a href="#" className="bg-primary hover:bg-primary-hover text-white px-4 py-2 sm:px-5 sm:py-2 rounded-md font-semibold transition-colors shadow-xs animate-pulse-glow">
            Official Website
          </a>
        </nav>
        
        <div className="md:hidden flex items-center">
          <button className="text-white hover:text-primary-light">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
