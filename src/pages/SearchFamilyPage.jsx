import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, MapPin, ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

const SearchFamilyPage = () => {
  const navigate = useNavigate();
  const [flightNumber, setFlightNumber] = useState('');
  const [departureCity, setDepartureCity] = useState('');

  const handleFlightNumberSearch = () => {
    if (flightNumber.trim()) {
      sessionStorage.setItem('searchType', 'flight');
      sessionStorage.setItem('flightNumber', flightNumber);
      sessionStorage.setItem('userType', 'family');
      navigate('/register');
    } else {
      alert('Veuillez entrer un numéro de vol');
    }
  };

  const handleFlexibleSearch = () => {
    if (departureCity.trim()) {
      sessionStorage.setItem('searchType', 'flexible');
      sessionStorage.setItem('departureCity', departureCity);
      sessionStorage.setItem('userType', 'family');
      navigate('/register');
    } else {
      alert('Veuillez entrer une ville de départ');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition"
          >
            <ArrowLeft size={20} />
            <span className="text-sm">Retour</span>
          </button>
        </div>
      </div>

      {/* Contenu */}
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl text-gray-900 text-center mb-10 font-normal">
            Comment souhaitez-vous chercher ?
          </h1>

          <div className="space-y-4">
            {/* Option 1 : Numéro de vol */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 hover:border-primary hover:shadow-sm transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <Plane className="text-gray-700" size={20} />
                </div>
                <h2 className="text-base font-normal text-gray-900">J'ai un numéro de vol</h2>
              </div>
              
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Ex: AF007, BA105..."
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm"
                />
                
                <button
                  onClick={handleFlightNumberSearch}
                  className="w-full bg-primary text-white py-2.5 rounded-md font-normal hover:bg-primary/90 transition text-sm"
                >
                  Continuer
                </button>
              </div>
            </div>

            {/* Séparateur */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-xs">OU</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Option 2 : Flexible */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 hover:border-primary hover:shadow-sm transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-gray-700" size={20} />
                </div>
                <h2 className="text-base font-normal text-gray-900">Je suis flexible</h2>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">
                    Ma ville de départ
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Paris, Londres..."
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm"
                  />
                </div>
                
                <button
                  onClick={handleFlexibleSearch}
                  className="w-full bg-primary text-white py-2.5 rounded-md font-normal hover:bg-primary/90 transition text-sm"
                >
                  Continuer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SearchFamilyPage;