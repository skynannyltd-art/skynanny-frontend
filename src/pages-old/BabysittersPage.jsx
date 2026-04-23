import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getBabysitters } from '../services/api';
import { Search, MapPin, Star } from 'lucide-react';

const BabysittersPage = () => {
  const [babysitters, setBabysitters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Filtres
  const [filters, setFilters] = useState({
    city: searchParams.get('city') || '',
    minRate: '',
    maxRate: '',
    experience: '',
  });

  useEffect(() => {
    loadBabysitters();
  }, []);

  const loadBabysitters = async () => {
    try {
      setLoading(true);
      const data = await getBabysitters(filters);
      setBabysitters(data.babysitters || []);
    } catch (error) {
      console.error('Erreur chargement babysitters:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    loadBabysitters();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Trouver une babysitter
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6">
          {/* Filtres Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Filtres</h2>
              
              <form onSubmit={handleSearch} className="space-y-4">
                {/* Ville */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    placeholder="Paris, Lyon..."
                    value={filters.city}
                    onChange={(e) => setFilters({ ...filters, city: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Tarif min */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tarif minimum (€/h)
                  </label>
                  <input
                    type="number"
                    placeholder="10"
                    value={filters.minRate}
                    onChange={(e) => setFilters({ ...filters, minRate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Tarif max */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tarif maximum (€/h)
                  </label>
                  <input
                    type="number"
                    placeholder="30"
                    value={filters.maxRate}
                    onChange={(e) => setFilters({ ...filters, maxRate: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Expérience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expérience minimale (années)
                  </label>
                  <select
                    value={filters.experience}
                    onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Toutes</option>
                    <option value="1">1 an minimum</option>
                    <option value="2">2 ans minimum</option>
                    <option value="3">3 ans minimum</option>
                    <option value="5">5 ans minimum</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition flex items-center justify-center gap-2"
                >
                  <Search size={20} />
                  Rechercher
                </button>
              </form>
            </div>
          </div>

          {/* Liste des babysitters */}
          <div className="md:col-span-3">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-600">Chargement...</p>
              </div>
            ) : babysitters.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <p className="text-gray-600 text-lg">
                  Aucune babysitter trouvée. Essayez de modifier vos filtres.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4 text-gray-600">
                  {babysitters.length} babysitter{babysitters.length > 1 ? 's' : ''} trouvée{babysitters.length > 1 ? 's' : ''}
                </div>

                <div className="space-y-4">
                  {babysitters.map((babysitter) => (
                    <div
                      key={babysitter.id}
                      className="bg-white rounded-lg shadow hover:shadow-md transition p-6 cursor-pointer"
                      onClick={() => navigate(`/babysitters/${babysitter.id}`)}
                    >
                      <div className="flex items-start gap-4">
                        {/* Photo */}
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                          {babysitter.first_name?.[0]}{babysitter.last_name?.[0]}
                        </div>

                        {/* Infos */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {babysitter.first_name} {babysitter.last_name}
                          </h3>

                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <MapPin size={16} />
                              {babysitter.city}
                            </span>
                            <span>
                              {babysitter.experience_years} an{babysitter.experience_years > 1 ? 's' : ''} d'expérience
                            </span>
                            {babysitter.average_rating && (
                              <span className="flex items-center gap-1">
                                <Star size={16} className="fill-yellow-400 text-yellow-400" />
                                {babysitter.average_rating.toFixed(1)}
                              </span>
                            )}
                          </div>

                          {babysitter.languages && babysitter.languages.length > 0 && (
                            <div className="mt-2 text-sm text-gray-600">
                              Langues : {babysitter.languages.join(', ')}
                            </div>
                          )}

                          {babysitter.bio && (
                            <p className="mt-2 text-gray-700 line-clamp-2">
                              {babysitter.bio}
                            </p>
                          )}
                        </div>

                        {/* Prix */}
                        <div className="text-right flex-shrink-0">
                          <div className="text-2xl font-bold text-primary">
                            {babysitter.hourly_rate}€
                          </div>
                          <div className="text-sm text-gray-600">par heure</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabysittersPage;