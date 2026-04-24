import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchInfo, setSearchInfo] = useState({});

  useEffect(() => {
    const userType = sessionStorage.getItem('userType');
    const searchType = sessionStorage.getItem('searchType');
    const flightNumber = sessionStorage.getItem('flightNumber');
    const departureCity = sessionStorage.getItem('departureCity');
    const arrivalCity = sessionStorage.getItem('arrivalCity');

    setSearchInfo({
      userType,
      searchType,
      flightNumber,
      departureCity,
      arrivalCity,
    });

    if (!userType) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    if (formData.password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères');
      return;
    }

    try {
      setLoading(true);
      
      const response = await fetch('https://api.sky-nanny.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone: formData.phone,
          user_type: searchInfo.userType,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Erreur lors de la création du compte');
      }

      alert('Compte créé avec succès ! Connectez-vous maintenant.');
      navigate('/login');
    } catch (err) {
      console.error('Erreur inscription:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <img 
              src="/images/skynanny-logo.png" 
              alt="SkyNanny" 
              className="w-20 h-20 mx-auto object-contain mb-4"
            />
            <h1 className="text-2xl text-gray-900 mb-2 font-normal">
              Créer un compte
            </h1>
            <p className="text-sm text-gray-600">
              Étape 1 sur 4
            </p>
          </div>

          {/* Info Recherche */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
            <p className="text-xs text-gray-500 mb-1">Votre recherche :</p>
            {searchInfo.searchType === 'flight' ? (
              <p className="text-sm font-normal text-gray-900">
                Vol {searchInfo.flightNumber}
              </p>
            ) : (
              <p className="text-sm font-normal text-gray-900">
                Depuis {searchInfo.departureCity}
                {searchInfo.arrivalCity && ` → ${searchInfo.arrivalCity}`}
              </p>
            )}
            <p className="text-xs text-gray-500 mt-1">
              Type : {searchInfo.userType === 'family' ? 'Famille' : 'Babysitter'}
            </p>
          </div>

          {/* Formulaire */}
          <div className="bg-white">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Prénom & Nom */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-700 mb-1.5">
                    Prénom
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Marie"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-700 mb-1.5">
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dupont"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs text-gray-700 mb-1.5">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  required
                  placeholder="vous@exemple.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm"
                />
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-xs text-gray-700 mb-1.5">
                  Numéro de téléphone
                </label>
                <input
                  type="tel"
                  required
                  placeholder="06 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm"
                />
              </div>

              {/* Mot de passe */}
              <div>
                <label className="block text-xs text-gray-700 mb-1.5">
                  Mot de passe
                </label>
                <input
                  type="password"
                  required
                  placeholder="Minimum 6 caractères"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm"
                />
              </div>

              {/* Confirmer mot de passe */}
              <div>
                <label className="block text-xs text-gray-700 mb-1.5">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  required
                  placeholder="Retapez votre mot de passe"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:border-primary text-sm"
                />
              </div>

              {/* Bouton */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 rounded-md font-normal hover:bg-primary/90 transition disabled:opacity-50 mt-6 text-sm"
              >
                {loading ? 'Création en cours...' : 'Continuer'}
              </button>
            </form>

            {/* Lien connexion */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Vous avez déjà un compte ?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="text-gray-900 underline hover:text-primary transition"
                >
                  Connectez-vous
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;