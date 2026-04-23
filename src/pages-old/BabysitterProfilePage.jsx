import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBabysitterById } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { MapPin, Star, Calendar, Clock, Languages, Award } from 'lucide-react';

const BabysitterProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [babysitter, setBabysitter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBabysitter();
  }, [id]);

  const loadBabysitter = async () => {
    try {
      setLoading(true);
      const data = await getBabysitterById(id);
      setBabysitter(data.babysitter);
    } catch (error) {
      console.error('Erreur chargement babysitter:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleBooking = () => {
    if (!isAuthenticated) {
      alert('Vous devez être connecté pour réserver');
      navigate('/login');
      return;
    }
    navigate(`/booking/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!babysitter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Babysitter non trouvée</h2>
          <button
            onClick={() => navigate('/babysitters')}
            className="text-primary hover:underline"
          >
            Retour à la recherche
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/babysitters')}
            className="text-primary hover:underline"
          >
            ← Retour à la recherche
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sidebar - Infos principales */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-4">
              {/* Photo */}
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                {babysitter.first_name?.[0]}{babysitter.last_name?.[0]}
              </div>

              {/* Nom */}
              <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
                {babysitter.first_name} {babysitter.last_name}
              </h1>

              {/* Note */}
              {babysitter.average_rating && (
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Star className="fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-semibold">
                    {babysitter.average_rating.toFixed(1)}
                  </span>
                  <span className="text-gray-600">
                    ({babysitter.total_reviews} avis)
                  </span>
                </div>
              )}

              {/* Prix */}
              <div className="text-center py-4 bg-primary/10 rounded-lg mb-6">
                <div className="text-3xl font-bold text-primary">
                  {babysitter.hourly_rate}€
                </div>
                <div className="text-gray-600">par heure</div>
              </div>

              {/* Bouton réservation */}
              <button
                onClick={handleBooking}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Réserver maintenant
              </button>

              {/* Infos rapides */}
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin size={18} className="text-primary" />
                  {babysitter.city}
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Award size={18} className="text-primary" />
                  {babysitter.experience_years} an{babysitter.experience_years > 1 ? 's' : ''} d'expérience
                </div>
                {babysitter.languages && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Languages size={18} className="text-primary" />
                    {babysitter.languages.join(', ')}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="md:col-span-2 space-y-6">
            {/* À propos */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">À propos</h2>
              <p className="text-gray-700 leading-relaxed">
                {babysitter.bio || 'Cette babysitter n\'a pas encore ajouté de description.'}
              </p>
            </div>

            {/* Compétences */}
            {babysitter.certifications && babysitter.certifications.length > 0 && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Certifications</h2>
                <div className="flex flex-wrap gap-2">
                  {babysitter.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Avis (à venir) */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Avis</h2>
              <p className="text-gray-600">
                Les avis seront bientôt disponibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BabysitterProfilePage;