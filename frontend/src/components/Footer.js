import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="relative bg-[#0f172a] py-16 overflow-hidden"
      data-testid="footer"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl font-bold mb-4">
              <span className="gradient-text">CIENCIA</span>
              <br />
              <span className="text-white">2K26</span>
            </h3>
            <p className="text-slate-400 mb-6">
              Where Innovation Meets Celebration. Join us for the most
              spectacular college festival of the year.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-effect rounded-lg hover:bg-indigo-600/30 transition-colors"
                data-testid="social-facebook"
              >
                <Facebook size={20} className="text-slate-300" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-effect rounded-lg hover:bg-rose-600/30 transition-colors"
                data-testid="social-instagram"
              >
                <Instagram size={20} className="text-slate-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-effect rounded-lg hover:bg-cyan-600/30 transition-colors"
                data-testid="social-twitter"
              >
                <Twitter size={20} className="text-slate-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 glass-effect rounded-lg hover:bg-indigo-600/30 transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin size={20} className="text-slate-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/#events"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/#sponsors"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Sponsors
                </a>
              </li>
              <li>
                <a
                  href="/#team"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-6">
              Popular Events
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/event/hackathon"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Hackathon
                </Link>
              </li>
              <li>
                <Link
                  to="/event/webathon"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Webathon
                </Link>
              </li>
              <li>
                <Link
                  to="/event/5k-run"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  5K Run
                </Link>
              </li>
              <li>
                <Link
                  to="/event/flashmob"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Flashmob
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-xl font-bold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="text-indigo-400 mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:info@ciencia2k26.in"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  info@ciencia2k26.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; 2025 Ciencia 2k26. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-slate-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
};

export default Footer;
