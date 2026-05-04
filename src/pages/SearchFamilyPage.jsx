import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Calendar, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SearchFamilyPage = () => {
  const { t } = useTranslation();
  const [searchData, setSearchData] = useState({
    destination: '',
    date: '',
    children: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t('search.comingSoon'));
  };

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-pink-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('search.babysitterTitle')}</h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            {t('search.babysitterSubtitle')}
          </p>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <MapPin size={18} className="text-secondary" />
                  {t('search.destinationLabel')}
                </label>
                <input
                  type="text"
                  name="destination"
                  value={searchData.destination}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  placeholder={t('search.destinationPlaceholder')}
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Calendar size={18} className="text-secondary" />
                  {t('search.dateLabel')}
                </label>
                <input
                  type="date"
                  name="date"
                  value={searchData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Search size={18} className="text-secondary" />
                  {t('search.childrenLabel')}
                </label>
                <select
                  name="children"
                  value={searchData.children}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="">{t('search.childrenPlaceholder')}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white px-8 py-4 rounded-lg hover:bg-pink-600 transition font-semibold text-lg flex items-center justify-center gap-2"
              >
                <Search size={20} />
                {t('search.searchButton')}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SearchFamilyPage;