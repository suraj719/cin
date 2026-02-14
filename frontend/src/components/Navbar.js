import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/#events" },
    { name: "Sponsors", path: "/#sponsors" },
    { name: "Team", path: "/#team" },
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    if (path.includes("#")) {
      const [route, hash] = path.split("#");
      if (location.pathname !== route && route) {
        window.location.href = path;
      } else {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-effect py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col items-center group">
            <img
              src="/logo.png?v=2"
              alt="CIENCIA 2K26"
              className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => {
                  if (link.path.includes("#")) {
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
                handleNavClick("/#events");
              }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect border-t border-white/10 p-6 shadow-xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => {
                    if (link.path.includes("#")) {
                      e.preventDefault();
                      handleNavClick(link.path);
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
                  handleNavClick("/#events");
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
