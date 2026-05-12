import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, MapPin, Calendar, Plane, Users, Baby, ArrowRight, 
  Sparkles, SlidersHorizontal, X, ChevronDown 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SearchFamilyPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [searchMode, setSearchMode] = useState('flightNumber');
  const [flightNumber, setFlightNumber] = useState('');
  const [departureCity, setDepartureCity] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // États des filtres
  const [filters, setFilters] = useState({
    priceMin: 0,
    priceMax: 300,
    childrenCount: 'all', // 'all', '1', '2', '3+'
    childAge: 'all', // 'all', '0-2', '3-5', '6-10', '10+'
    flightDuration: 'all', // 'all', 'short', 'medium', 'long'
    sortBy: 'relevance' // 'relevance', 'priceAsc', 'priceDesc', 'date'
  });

  // Mock data étendu
  const allResults = [
    {
      destination: 'New York',
      familyCount: 3,
      families: [
        { id: 1, name: 'Famille Martin', children: 2, ages: '3 et 5 ans', childAges: [3, 5], flight: 'AF1234', price: 135, time: '10:30 - 14:45', duration: 8.25 },
        { id: 2, name: 'Famille Dubois', children: 1, ages: '4 ans', childAges: [4], flight: 'AF1236', price: 120, time: '15:20 - 19:35', duration: 8.25 },
        { id: 3, name: 'Famille Bernard', children: 3, ages: '2, 4 et 7 ans', childAges: [2, 4, 7], flight: 'AF1238', price: 150, time: '18:00 - 22:15', duration: 8.25 }
      ]
    },
    {
      destination: 'Tokyo',
      familyCount: 2,
      families: [
        { id: 4, name: 'Famille Petit', children: 1, ages: '5 ans', childAges: [5], flight: 'AF1240', price: 180, time: '22:30 - 16:45+1', duration: 12.25 },
        { id: 5, name: 'Famille Rousseau', children: 2, ages: '3 et 6 ans', childAges: [3, 6], flight: 'AF1242', price: 195, time: '11:15 - 05:30+1', duration: 12.25 }
      ]
    },
    {
      destination: 'Londres',
      familyCount: 4,
      families: [
        { id: 6, name: 'Famille Leroy', children: 2, ages: '4 et 6 ans', childAges: [4, 6], flight: 'BA308', price: 90, time: '07:00 - 07:25', duration: 1.42 },
        { id: 7, name: 'Famille Moreau', children: 1, ages: '3 ans', childAges: [3], flight: 'BA310', price: 85, time: '12:45 - 13:10', duration: 1.42 },
        { id: 8, name: 'Famille Simon', children: 3, ages: '2, 5 et 8 ans', childAges: [2, 5, 8], flight: 'BA312', price: 110, time: '16:30 - 16:55', duration: 1.42 },
        { id: 9, name: 'Famille Laurent', children: 1, ages: '6 ans', childAges: [6], flight: 'BA314', price: 95, time: '19:15 - 19:40', duration: 1.42 }
      ]
    },
    {
      destination: 'Barcelone',
      familyCount: 2,
      families: [
        { id: 10, name: 'Famille Garcia', children: 2, ages: '1 et 3 ans', childAges: [1, 3], flight: 'VY8001', price: 75, time: '09:00 - 11:15', duration: 2.25 },
        { id: 11, name: 'Famille Rodriguez', children: 1, ages: '11 ans', childAges: [11], flight: 'VY8003', price: 70, time: '14:30 - 16:45', duration: 2.25 }
      ]
    }
  ];

  // Fonction de filtrage
  const getFilteredResults = () => {
    let filtered = JSON.parse(JSON.stringify(allResults)); // Deep copy

    // Appliquer les filtres sur chaque destination
    filtered = filtered.map(destination => ({
      ...destination,
      families: destination.families.filter(family => {
        // Filtre prix
        if (family.price < filters.priceMin || family.price > filters.priceMax) return false;

        // Filtre nombre d'enfants
        if (filters.childrenCount !== 'all') {
          if (filters.childrenCount === '3+' && family.children < 3) return false;
          if (filters.childrenCount !== '3+' && family.children !== parseInt(filters.childrenCount)) return false;
        }

        // Filtre âge des enfants
        if (filters.childAge !== 'all') {
          const hasMatchingAge = family.childAges.some(age => {
            if (filters.childAge === '0-2') return age <= 2;
            if (filters.childAge === '3-5') return age >= 3 && age <= 5;
            if (filters.childAge === '6-10') return age >= 6 && age <= 10;
            if (filters.childAge === '10+') return age > 10;
            return true;
          });
          if (!hasMatchingAge) return false;
        }

        // Filtre durée de vol
        if (filters.flightDuration !== 'all') {
          if (filters.flightDuration === 'short' && family.duration >= 3) return false;
          if (filters.flightDuration === 'medium' && (family.duration < 3 || family.duration >= 8)) return false;
          if (filters.flightDuration === 'long' && family.duration < 8) return false;
        }

        return true;
      })
    })).filter(destination => destination.families.length > 0);

    // Tri
    filtered.forEach(destination => {
      if (filters.sortBy === 'priceAsc') {
        destination.families.sort((a, b) => a.price - b.price);
      } else if (filters.sortBy === 'priceDesc') {
        destination.families.sort((a, b) => b.price - a.price);
      }
    });

    // Recalculer le nombre de familles
    filtered.forEach(destination => {
      destination.familyCount = destination.families.length;
    });

    return filtered;
  };

  const filteredResults = showResults ? getFilteredResults() : [];
  const totalFamilies = filteredResults.reduce((sum, dest) => sum + dest.familyCount, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleFlexibleToggle = () => {
    setSearchMode(searchMode === 'flightNumber' ? 'flexible' : 'flightNumber');
    setShowResults(false);
  };

  const resetFilters = () => {
    setFilters({
      priceMin: 0,
      priceMax: 300,
      childrenCount: 'all',
      childAge: 'all',
      flightDuration: 'all',
      sortBy: 'relevance'
    });
  };

  const activeFiltersCount = 
    (filters.priceMin !== 0 || filters.priceMax !== 300 ? 1 : 0) +
    (filters.childrenCount !== 'all' ? 1 : 0) +
    (filters.childAge !== 'all' ? 1 : 0) +
    (filters.flightDuration !== 'all' ? 1 : 0) +
    (filters.sortBy !== 'relevance' ? 1 : 0);

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

      {/* Résultats avec Filtres */}
      {showResults && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header avec Bouton Filtres */}
            <div className="flex items-center justify-between mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h2 className="text-3xl font-bold text-gray-900">
                  📍 {totalFamilies} {t('search.familiesFound')}
                </h2>
                {searchMode === 'flexible' && (
                  <p className="text-lg text-gray-600 mt-2">
                    {t('search.fromCity')} <span className="font-semibold text-pink-600">{departureCity || 'Paris'}</span> {t('search.onDate')} <span className="font-semibold">{departureDate || '15/06/2026'}</span>
                  </p>
                )}
              </motion.div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-pink-600 text-pink-600 rounded-lg hover:bg-pink-50 transition font-semibold relative"
              >
                <SlidersHorizontal size={20} />
                {t('filters.title')}
                {activeFiltersCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-pink-600 text-white rounded-full text-xs flex items-center justify-center font-bold">
                    {activeFiltersCount}
                  </span>
                )}
              </button>
            </div>

            {/* Panel Filtres */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-white rounded-2xl shadow-lg p-6 mb-8 overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{t('filters.title')}</h3>
                    <div className="flex gap-2">
                      <button
                        onClick={resetFilters}
                        className="text-sm text-gray-600 hover:text-pink-600 transition"
                      >
                        {t('filters.reset')}
                      </button>
                      <button
                        onClick={() => setShowFilters(false)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    
                    {/* Filtre Prix */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        {t('filters.price')} : {filters.priceMin}€ - {filters.priceMax}€
                      </label>
                      <div className="space-y-3">
                        <input
                          type="range"
                          min="0"
                          max="300"
                          value={filters.priceMin}
                          onChange={(e) => setFilters({ ...filters, priceMin: parseInt(e.target.value) })}
                          className="w-full"
                        />
                        <input
                          type="range"
                          min="0"
                          max="300"
                          value={filters.priceMax}
                          onChange={(e) => setFilters({ ...filters, priceMax: parseInt(e.target.value) })}
                          className="w-full"
                        />
                      </div>
                    </div>

                    {/* Filtre Nombre d'Enfants */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        {t('filters.childrenCount')}
                      </label>
                      <select
                        value={filters.childrenCount}
                        onChange={(e) => setFilters({ ...filters, childrenCount: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        <option value="all">{t('filters.all')}</option>
                        <option value="1">1 {t('search.child')}</option>
                        <option value="2">2 {t('search.children')}</option>
                        <option value="3+">3+ {t('search.children')}</option>
                      </select>
                    </div>

                    {/* Filtre Âge des Enfants */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        {t('filters.childAge')}
                      </label>
                      <select
                        value={filters.childAge}
                        onChange={(e) => setFilters({ ...filters, childAge: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        <option value="all">{t('filters.all')}</option>
                        <option value="0-2">0-2 {t('familyDetail.years')}</option>
                        <option value="3-5">3-5 {t('familyDetail.years')}</option>
                        <option value="6-10">6-10 {t('familyDetail.years')}</option>
                        <option value="10+">10+ {t('familyDetail.years')}</option>
                      </select>
                    </div>

                    {/* Filtre Durée de Vol */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        {t('filters.flightDuration')}
                      </label>
                      <select
                        value={filters.flightDuration}
                        onChange={(e) => setFilters({ ...filters, flightDuration: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        <option value="all">{t('filters.all')}</option>
                        <option value="short">{t('filters.short')} (&lt;3h)</option>
                        <option value="medium">{t('filters.medium')} (3-8h)</option>
                        <option value="long">{t('filters.long')} (8h+)</option>
                      </select>
                    </div>

                    {/* Tri */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        {t('filters.sortBy')}
                      </label>
                      <select
                        value={filters.sortBy}
                        onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                      >
                        <option value="relevance">{t('filters.relevance')}</option>
                        <option value="priceAsc">{t('filters.priceAsc')}</option>
                        <option value="priceDesc">{t('filters.priceDesc')}</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Résultats Filtrés */}
            {filteredResults.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">{t('filters.noResults')}</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 text-pink-600 hover:underline font-semibold"
                >
                  {t('filters.resetFilters')}
                </button>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredResults.map((destination, index) => (
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
                              <button 
                                onClick={() => navigate(`/family/${family.id}`)}
                                className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition flex items-center gap-2"
                              >
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
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default SearchFamilyPage;