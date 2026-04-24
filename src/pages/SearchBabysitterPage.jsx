import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SearchBabysitterPage = () => {
  const navigate = useNavigate();
  const [flightNumber, setFlightNumber] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [arrivalCity, setArrivalCity] = useState('');

  const handleFlightNumberSearch = () => {
    if (flightNumber.trim()) {
      sessionStorage.setItem('searchType', 'flight');
      sessionStorage.setItem('flightNumber', flightNumber);
      sessionStorage.setItem('userType', 'babysitter');
      navigate('/register');
    } else {
      alert('Veuillez entrer un numéro de vol');
    }
  };

  const handleFlexibleSearch = () => {
    if (departureCity.trim()) {
      sessionStorage.setItem('searchType', 'flexible');
      sessionStorage.setItem('departureCity', departureCity);
      if (arrivalCity.trim()) {
        sessionStorage.setItem('arrivalCity', arrivalCity);
      }
      sessionStorage.setItem('userType', 'babysitter');
      navigate('/register');
    } else {
      alert('Veuillez entrer une ville de départ');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Contenu */}
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl text-gray-900 text-center mb-10 font-normal">
            Sur quel vol êtes-vous disponible ?
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

            {/* Option 2 : Chercher un vol */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 hover:border-primary hover:shadow-sm transition">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <MapPin className="text-gray-700" size={20} />
                </div>
                <h2 className="text-base font-normal text-gray-900">Je cherche un vol</h2>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">
                    Depuis
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Paris, Londres..."
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">
                    Vers <span className="text-gray-400">(optionnel)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: New York, Tokyo..."
                    value={arrivalCity}
                    onChange={(e) => setArrivalCity(e.target.value)}
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

export default SearchBabysitterPage;