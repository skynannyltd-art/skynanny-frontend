import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, Calendar, Plane, Users, Star, ArrowRight, Sparkles, Award, Languages, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CityAutocomplete from '../components/CityAutocomplete';

const SearchBabysitterPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [searchMode, setSearchMode] = useState('flightNumber');
  const [flightNumber, setFlightNumber] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Mock data babysitters - À remplacer par API
  const mockResults = [
    {
      destination: 'New York',
      babysitterCount: 4,
      babysitters: [
        {
          id: 1,
          name: 'Marie Dubois',
          age: 28,
          photo: '👩',
          rating: 4.9,
          reviewsCount: 24,
          experience: '5 ans',
          languages: ['Français', 'Anglais'],
          certifications: ['PSC1', 'CAP Petite Enfance'],
          flight: 'AF1234',
          ticketPrice: 450,
          time: '10:30 - 14:45',
          bio: 'Expérience avec enfants de tous âges. Douce et patiente.'
        },
        {
          id: 2,
          name: 'Sophie Laurent',
          age: 25,
          photo: '👩‍🦰',
          rating: 4.8,
          reviewsCount: 18,
          experience: '3 ans',
          languages: ['Français', 'Anglais', 'Espagnol'],
          certifications: ['PSC1'],
          flight: 'AF1234',
          ticketPrice: 420,
          time: '10:30 - 14:45',
          bio: 'Spécialisée dans les longs vols. Créative et engageante.'
        },
        {
          id: 3,
          name: 'Julie Martin',
          age: 30,
          photo: '👱‍♀️',
          rating: 5.0,
          reviewsCount: 32,
          experience: '7 ans',
          languages: ['Français', 'Anglais'],
          certifications: ['PSC1', 'CAP Petite Enfance', 'BAFA'],
          flight: 'AF1236',
          ticketPrice: 480,
          time: '15:20 - 19:35',
          bio: 'Professionnelle avec excellentes références. Calme et rassurante.'
        },
        {
          id: 4,
          name: 'Emma Petit',
          age: 26,
          photo: '👩‍🦱',
          rating: 4.7,
          reviewsCount: 15,
          experience: '4 ans',
          languages: ['Français', 'Anglais', 'Allemand'],
          certifications: ['PSC1'],
          flight: 'AF1238',
          ticketPrice: 440,
          time: '18:00 - 22:15',
          bio: 'Énergique et attentionnée. Adore les activités créatives.'
        }
      ]
    },
    {
      destination: 'Tokyo',
      babysitterCount: 2,
      babysitters: [
        {
          id: 5,
          name: 'Laura Rousseau',
          age: 29,
          photo: '👩‍🦳',
          rating: 4.9,
          reviewsCount: 21,
          experience: '6 ans',
          languages: ['Français', 'Anglais', 'Japonais'],
          certifications: ['PSC1', 'CAP Petite Enfance'],
          flight: 'AF1240',
          ticketPrice: 850,
          time: '22:30 - 16:45+1',
          bio: 'Experte en vols long-courriers. Parle japonais.'
        },
        {
          id: 6,
          name: 'Chloé Bernard',
          age: 27,
          photo: '👩‍🎓',
          rating: 4.8,
          reviewsCount: 19,
          experience: '5 ans',
          languages: ['Français', 'Anglais'],
          certifications: ['PSC1', 'BAFA'],
          flight: 'AF1242',
          ticketPrice: 820,
          time: '11:15 - 05:30+1',
          bio: 'Patiente et organisée. Spécialiste des bébés.'
        }
      ]
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleFlexibleToggle = () => {
    setSearchMode(searchMode === 'flightNumber' ? 'flexible' : 'flightNumber');
    setShowResults(false);
  };

  const calculateCompensation = (ticketPrice) => {
    const commission = ticketPrice * 0.30;
    const platformFee = commission * 0.05;
    const familyPays = commission + platformFee;
    return familyPays.toFixed(0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">{t('search.familyTitle')}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('search.familySubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulaire de Recherche */}
      <section className="py-12 -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Toggle Flexible */}
            <div className="mb-6">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={searchMode === 'flexible'}
                  onChange={handleFlexibleToggle}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                />
                <span className="flex items-center gap-2 text-lg font-medium text-gray-900 group-hover:text-blue-600 transition">
                  <Sparkles size={20} className="text-blue-500" />
                  {t('search.flexibleMode')}
                </span>
              </label>
              <p className="text-sm text-gray-600 ml-8 mt-1">
                {t('search.flexibleModeDesc')}
              </p>
            </div>

            <form onSubmit={handleSearch} className="space-y-6">
              {searchMode === 'flightNumber' ? (
                /* Mode: Recherche par Numéro de Vol */
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Plane className="inline mr-2" size={18} />
                    {t('search.flightNumberLabel')}
                  </label>
                  <input
                    type="text"
                    value={flightNumber}
                    onChange={(e) => setFlightNumber(e.target.value.toUpperCase())}
                    placeholder={t('search.flightNumberPlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    {t('search.flightNumberHint')}
                  </p>
                </div>
              ) : (
                /* Mode: Recherche Flexible */
                <>
                  <div>
                    <CityAutocomplete
                      value={departureCity}
                      onChange={setDepartureCity}
                      placeholder={t('search.departureCityPlaceholder')}
                      label={t('search.departureCityLabel')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline mr-2" size={18} />
                      {t('search.departureDateLabel')}
                    </label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Search size={20} />
                {searchMode === 'flexible' ? t('search.showAllDestinations') : t('search.searchButton')}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Résultats */}
      {showResults && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header Résultats */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                👤 {mockResults.reduce((sum, dest) => sum + dest.babysitterCount, 0)} babysitters disponibles
              </h2>
              {searchMode === 'flexible' && (
                <p className="text-xl text-gray-600">
                  {t('search.fromCity')} <span className="font-semibold text-blue-600">{departureCity || 'Paris'}</span> {t('search.onDate')} <span className="font-semibold">{departureDate || '15/06/2026'}</span>
                </p>
              )}
            </motion.div>

            {/* Groupes par Destination */}
            <div className="space-y-8">
              {mockResults.map((destination, index) => (
                <motion.div
                  key={destination.destination}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  {/* Header Destination */}
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Plane size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{destination.destination}</h3>
                          <p className="text-blue-100">
                            {destination.babysitterCount} babysitters disponibles
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Liste des Babysitters */}
                  <div className="divide-y divide-gray-200">
                    {destination.babysitters.map((babysitter) => (
                      <motion.div
                        key={babysitter.id}
                        className="p-6 hover:bg-gray-50 transition"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-start justify-between gap-6">
                          
                          {/* Info Babysitter */}
                          <div className="flex gap-4 flex-1">
                            {/* Photo */}
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-4xl flex-shrink-0">
                              {babysitter.photo}
                            </div>
                            
                            {/* Détails */}
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold text-gray-900 text-lg">{babysitter.name}</h4>
                                <div className="flex items-center gap-1">
                                  <Star size={16} className="text-yellow-500" fill="currentColor" />
                                  <span className="font-semibold text-gray-900">{babysitter.rating}</span>
                                  <span className="text-sm text-gray-500">({babysitter.reviewsCount})</span>
                                </div>
                              </div>

                              <p className="text-sm text-gray-600 mb-3">{babysitter.bio}</p>

                              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                                <span className="flex items-center gap-1">
                                  <Award size={16} className="text-blue-600" />
                                  {babysitter.experience} d'expérience
                                </span>
                                <span className="flex items-center gap-1">
                                  <Languages size={16} className="text-blue-600" />
                                  {babysitter.languages.join(', ')}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Plane size={16} />
                                  {babysitter.flight} • {babysitter.time}
                                </span>
                              </div>

                              {/* Certifications */}
                              <div className="flex flex-wrap gap-2">
                                {babysitter.certifications.map((cert, idx) => (
                                  <span
                                    key={idx}
                                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                                  >
                                    ✓ {cert}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Prix et Action */}
                          <div className="text-right flex-shrink-0">
                            <div className="mb-3">
                              <p className="text-sm text-gray-600 mb-1">Coût estimé</p>
                              <div className="text-3xl font-bold text-blue-600">
                                {calculateCompensation(babysitter.ticketPrice)}€
                              </div>
                              <p className="text-xs text-gray-500">Billet: {babysitter.ticketPrice}€</p>
                            </div>
                            
                            <div className="space-y-2">
                              <button 
                                onClick={() => navigate(`/babysitter/${babysitter.id}`)}
                                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
                              >
                                Voir profil
                                <ArrowRight size={18} />
                              </button>
                              
                              <button className="w-full border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition flex items-center justify-center gap-2">
                                <Heart size={18} />
                                Favoris
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default SearchBabysitterPage;