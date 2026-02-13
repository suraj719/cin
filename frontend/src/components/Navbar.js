import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/#events' },
    { name: 'Sponsors', path: '/#sponsors' },
    { name: 'Team', path: '/#team' }
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (location.pathname !== route && route) {
        window.location.href = path;
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-heading text-2xl md:text-3xl font-bold">
            <span className="gradient-text">CIENCIA</span>
            <span className="text-white ml-2">2K26</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  if (link.path.includes('#')) {
                    e.preventDefault();
                    handleNavClick(link.path);
                  }
                }}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#events"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/#events');
              }}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 neon-border-primary"
              data-testid="register-now-btn"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 glass-effect rounded-lg p-6 animate-in slide-in-from-top">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    if (link.path.includes('#')) {
                      e.preventDefault();
                      handleNavClick(link.path);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="text-slate-300 hover:text-white transition-colors duration-300 font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/#events"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('/#events');
                }}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all duration-300 text-center"
                data-testid="mobile-register-btn"
              >
                Register Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
