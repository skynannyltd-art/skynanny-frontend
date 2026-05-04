import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SN</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SkyNanny</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-gray-700 hover:text-primary transition">
              {t('nav.services')}
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-primary transition">
              {t('nav.howItWorks')}
            </Link>
            
            {/* Resources Dropdown (Optional) */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary transition flex items-center gap-1">
                {t('nav.resources')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-t-lg">
                  {t('nav.about')}
                </Link>
                <Link to="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  {t('nav.faq')}
                </Link>
                <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-b-lg">
                  {t('nav.contact')}
                </Link>
              </div>
            </div>

            {/* Language Switcher */}
            <LanguageSwitcher />

            <Link to="/login" className="text-gray-700 hover:text-primary transition">
              {t('nav.login')}
            </Link>
            <button
              onClick={() => navigate('/register')}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition"
            >
              {t('nav.register')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary transition p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleNavigation('/services')}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => handleNavigation('/how-it-works')}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                {t('nav.howItWorks')}
              </button>
              <button
                onClick={() => handleNavigation('/about')}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => handleNavigation('/faq')}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                {t('nav.faq')}
              </button>
              <button
                onClick={() => handleNavigation('/contact')}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                {t('nav.contact')}
              </button>
              <button
                onClick={() => handleNavigation('/login')}
                className="block w-full text-left px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                {t('nav.login')}
              </button>
              <button
                onClick={() => handleNavigation('/register')}
                className="block w-full text-left px-3 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
              >
                {t('nav.register')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;