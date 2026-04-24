import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Comment ça marche', href: '/how-it-works' },
    { name: 'À propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <img 
                src="/images/skynanny-logo.png" 
                alt="SkyNanny" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-semibold text-gray-900">SkyNanny</span>
            </button>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className="text-gray-600 hover:text-primary transition text-sm font-normal"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => navigate('/login')}
              className="px-4 py-2 text-sm font-normal text-gray-700 hover:text-primary transition"
            >
              Se connecter
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-5 py-2 bg-primary text-white rounded-lg text-sm font-normal hover:bg-primary/90 transition shadow-sm"
            >
              S'inscrire
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.href);
                    setMobileMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-primary transition text-sm font-normal text-left px-2 py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 border-t border-gray-100 space-y-2">
                <button
                  onClick={() => {
                    navigate('/login');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left px-2 py-2 text-sm font-normal text-gray-700"
                >
                  Se connecter
                </button>
                <button
                  onClick={() => {
                    navigate('/');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full px-4 py-2 bg-primary text-white rounded-lg text-sm font-normal hover:bg-primary/90 transition"
                >
                  S'inscrire
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;