import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Search, MapPin, Calendar, Plane, Users, Baby, ArrowRight, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SearchFamilyPage = () => {
  const { t } = useTranslation();
  
  const [searchMode, setSearchMode] = useState('flightNumber'); // 'flightNumber' ou 'flexible'
  const [flightNumber, setFlightNumber] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Mock data - À remplacer par API
  const mockResults = [
    {
      destination: 'New York',
      familyCount: 3,
      families: [
        { id: 1, name: 'Famille Martin', children: 2, ages: '3 et 5 ans', flight: 'AF1234', price: 135, time: '10:30 - 14:45' },
        { id: 2, name: 'Famille Dubois', children: 1, ages: '4 ans', flight: 'AF1236', price: 120, time: '15:20 - 19:35' },
        { id: 3, name: 'Famille Bernard', children: 3, ages: '2, 4 et 7 ans', flight: 'AF1238', price: 150, time: '18:00 - 22:15' }
      ]
    },
    {
      destination: 'Tokyo',
      familyCount: 2,
      families: [
        { id: 4, name: 'Famille Petit', children: 1, ages: '5 ans', flight: 'AF1240', price: 180, time: '22:30 - 16:45+1' },
        { id: 5, name: 'Famille Rousseau', children: 2, ages: '3 et 6 ans', flight: 'AF1242', price: 195, time: '11:15 - 05:30+1' }
      ]
    },
    {
      destination: 'Londres',
      familyCount: 4,
      families: [
        { id: 6, name: 'Famille Leroy', children: 2, ages: '4 et 6 ans', flight: 'BA308', price: 90, time: '07:00 - 07:25' },
        { id: 7, name: 'Famille Moreau', children: 1, ages: '3 ans', flight: 'BA310', price: 85, time: '12:45 - 13:10' },
        { id: 8, name: 'Famille Simon', children: 3, ages: '2, 5 et 8 ans', flight: 'BA312', price: 110, time: '16:30 - 16:55' },
        { id: 9, name: 'Famille Laurent', children: 1, ages: '6 ans', flight: 'BA314', price: 95, time: '19:15 - 19:40' }
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-500 to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">{t('search.babysitterTitle')}</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              {t('search.babysitterSubtitle')}
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
                  className="w-5 h-5 text-pink-600 rounded focus:ring-2 focus:ring-pink-500"
                />
                <span className="flex items-center gap-2 text-lg font-medium text-gray-900 group-hover:text-pink-600 transition">
                  <Sparkles size={20} className="text-pink-500" />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="inline mr-2" size={18} />
                      {t('search.departureCityLabel')}
                    </label>
                    <input
                      type="text"
                      value={departureCity}
                      onChange={(e) => setDepartureCity(e.target.value)}
                      placeholder={t('search.departureCityPlaceholder')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      required
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full bg-pink-600 text-white px-6 py-4 rounded-lg hover:bg-pink-700 transition font-semibold text-lg flex items-center justify-center gap-2"
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
                📍 {mockResults.reduce((sum, dest) => sum + dest.familyCount, 0)} {t('search.familiesFound')}
              </h2>
              {searchMode === 'flexible' && (
                <p className="text-xl text-gray-600">
                  {t('search.fromCity')} <span className="font-semibold text-pink-600">{departureCity || 'Paris'}</span> {t('search.onDate')} <span className="font-semibold">{departureDate || '15/06/2026'}</span>
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
                  <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <Plane size={24} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{destination.destination}</h3>
                          <p className="text-pink-100">
                            {destination.familyCount} {destination.familyCount > 1 ? t('search.families') : t('search.family')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Liste des Familles */}
                  <div className="divide-y divide-gray-200">
                    {destination.families.map((family) => (
                      <motion.div
                        key={family.id}
                        className="p-6 hover:bg-gray-50 transition"
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center justify-between gap-4">
                          {/* Info Famille */}
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                <Users className="text-pink-600" size={24} />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 text-lg">{family.name}</h4>
                                <div className="flex items-center gap-4 text-sm text-gray-600">
                                  <span className="flex items-center gap-1">
                                    <Baby size={16} />
                                    {family.children} {family.children > 1 ? t('search.children') : t('search.child')} ({family.ages})
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Plane size={16} />
                                    {family.flight}
                                  </span>
                                  <span>{family.time}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Prix et Action */}
                          <div className="text-right">
                            <div className="text-2xl font-bold text-pink-600 mb-2">
                              {family.price}€
                            </div>
                            <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition flex items-center gap-2">
                              {t('search.viewDetails')}
                              <ArrowRight size={18} />
                            </button>
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

export default SearchFamilyPage;