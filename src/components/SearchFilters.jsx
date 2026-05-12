import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, Users, Baby, Clock, ArrowUpDown } from 'lucide-react';

const SearchFilters = ({ onFilterChange, onSortChange, resultsCount }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    childrenCount: '',
    childrenAge: '',
    flightDuration: '',
    sortBy: 'relevance'
  });

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (value) => {
    setFilters({ ...filters, sortBy: value });
    onSortChange(value);
  };

  const resetFilters = () => {
    const emptyFilters = {
      childrenCount: '',
      childrenAge: '',
      flightDuration: '',
      sortBy: 'relevance'
    };
    setFilters(emptyFilters);
    onFilterChange(emptyFilters);
    onSortChange('relevance');
  };

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.childrenCount) count++;
    if (filters.childrenAge) count++;
    if (filters.flightDuration) count++;
    return count;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter size={20} className="text-primary" />
          <h3 className="font-semibold text-gray-900">{t('filters.title')}</h3>
          {getActiveFiltersCount() > 0 && (
            <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
              {getActiveFiltersCount()}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {getActiveFiltersCount() > 0 && (
            <button
              onClick={resetFilters}
              className="text-sm text-gray-600 hover:text-primary transition"
            >
              {t('filters.reset')}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary"
          >
            {isOpen ? <X size={20} /> : <Filter size={20} />}
          </button>
        </div>
      </div>

      {/* Résultats Count */}
      <p className="text-sm text-gray-600 mb-4">
        {resultsCount} {resultsCount > 1 ? t('filters.results') : t('filters.result')}
      </p>

      {/* Filtres Grid */}
      <AnimatePresence>
        {(isOpen || window.innerWidth >= 1024) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {/* Filtre Nombre d'Enfants */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users size={16} className="inline mr-1" />
                {t('filters.childrenCount')}
              </label>
              <select
                value={filters.childrenCount}
                onChange={(e) => handleFilterChange('childrenCount', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="">{t('filters.any')}</option>
                <option value="1">1 {t('filters.child')}</option>
                <option value="2">2 {t('filters.children')}</option>
                <option value="3">3 {t('filters.children')}</option>
                <option value="4+">4+ {t('filters.children')}</option>
              </select>
            </div>

            {/* Filtre Âge des Enfants */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Baby size={16} className="inline mr-1" />
                {t('filters.childrenAge')}
              </label>
              <select
                value={filters.childrenAge}
                onChange={(e) => handleFilterChange('childrenAge', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="">{t('filters.any')}</option>
                <option value="0-2">0-2 {t('filters.years')}</option>
                <option value="3-5">3-5 {t('filters.years')}</option>
                <option value="6-10">6-10 {t('filters.years')}</option>
                <option value="11+">11+ {t('filters.years')}</option>
              </select>
            </div>

            {/* Filtre Durée de Vol */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock size={16} className="inline mr-1" />
                {t('filters.duration')}
              </label>
              <select
                value={filters.flightDuration}
                onChange={(e) => handleFilterChange('flightDuration', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="">{t('filters.any')}</option>
                <option value="short">{t('filters.short')} (&lt; 3h)</option>
                <option value="medium">{t('filters.medium')} (3-6h)</option>
                <option value="long">{t('filters.long')} (6-10h)</option>
                <option value="verylong">{t('filters.veryLong')} (&gt; 10h)</option>
              </select>
            </div>

            {/* Tri */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <ArrowUpDown size={16} className="inline mr-1" />
                {t('filters.sortBy')}
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="relevance">{t('filters.relevance')}</option>
                <option value="date-asc">{t('filters.dateAsc')}</option>
                <option value="date-desc">{t('filters.dateDesc')}</option>
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchFilters;