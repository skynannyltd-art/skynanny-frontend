import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img 
              src="/images/skynanny-logo.png" 
              alt="SkyNanny" 
              className="h-10 w-10 object-contain"
            />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              SkyNanny
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/services')}
              className="text-gray-700 hover:text-primary transition font-medium"
            >
              Services
            </button>

            <button
              onClick={() => navigate('/how-it-works')}
              className="text-gray-700 hover:text-primary transition font-medium"
            >
              Comment ca marche
            </button>

            {/* Dropdown Ressources */}
            <div className="relative">
              <button
                onMouseEnter={() => setResourcesOpen(true)}
                onMouseLeave={() => setResourcesOpen(false)}
                className="flex items-center gap-1 text-gray-700 hover:text-primary transition font-medium"
              >
                Ressources
                <ChevronDown size={16} className={`transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              {resourcesOpen && (
                <div
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                >
                  <button
                    onClick={() => {
                      navigate('/about');
                      setResourcesOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
                  >
                    A propos
                  </button>
                  <button
                    onClick={() => {
                      navigate('/faq');
                      setResourcesOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
                  >
                    FAQ
                  </button>
                  <button
                    onClick={() => {
                      navigate('/contact');
                      setResourcesOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
                  >
                    Contact
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => navigate('/login')}
              className="text-gray-700 hover:text-primary transition font-medium"
            >
              Connexion
            </button>

            <button
              onClick={() => navigate('/welcome')}
              className="px-5 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium"
            >
              Inscrire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary transition"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
{/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
          <div className="px-4 py-3 space-y-1">
            <button
              onClick={() => {
                navigate('/services');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:bg-gray-50 hover:text-primary transition font-medium py-3 px-4 rounded-lg"
            >
              Services
            </button>

            <button
              onClick={() => {
                navigate('/how-it-works');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:bg-gray-50 hover:text-primary transition font-medium py-3 px-4 rounded-lg"
            >
              Comment ca marche
            </button>

            <button
              onClick={() => {
                navigate('/about');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:bg-gray-50 hover:text-primary transition font-medium py-3 px-4 rounded-lg"
            >
              A propos
            </button>

            <button
              onClick={() => {
                navigate('/faq');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:bg-gray-50 hover:text-primary transition font-medium py-3 px-4 rounded-lg"
            >
              FAQ
            </button>

            <button
              onClick={() => {
                navigate('/contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-gray-700 hover:bg-gray-50 hover:text-primary transition font-medium py-3 px-4 rounded-lg"
            >
              Contact
            </button>

            <div className="border-t border-gray-200 pt-3 mt-3 space-y-1">
              <button
                onClick={() => {
                  navigate('/login');
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-700 hover:bg-gray-50 hover:text-primary transition font-medium py-3 px-4 rounded-lg"
              >
                Connexion
              </button>

              <button
                onClick={() => {
                  navigate('/welcome');
                  setMobileMenuOpen(false);
                }}
                className="block w-full px-5 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition font-medium text-center shadow-lg"
              >
                Inscrire
              </button>
            </div>
          </div>
        </div>
      )}
     </nav>
  );
};

export default Navbar;