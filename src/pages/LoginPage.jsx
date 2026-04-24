import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    try {
      setLoading(true);

      const response = await fetch('https://api.sky-nanny.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur de connexion');
      }

      // Sauvegarder le token et les infos utilisateur
      login(data.token, data.user);

      // Redirection selon le type utilisateur
      if (data.user.user_type === 'family') {
        navigate('/dashboard/family');
      } else if (data.user.user_type === 'babysitter') {
        navigate('/dashboard/babysitter');
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error('Erreur login:', err);
      setError(err.message || 'Email ou mot de passe incorrect');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-12 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="max-w-md w-full">
          {/* Logo et Titre */}
          <div className="text-center mb-8">
            <img 
              src="/images/skynanny-logo.png" 
              alt="SkyNanny" 
              className="w-20 h-20 mx-auto object-contain mb-4"
            />
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Bon retour !
            </h1>
            <p className="text-gray-600">
              Connectez-vous pour acceder a votre compte
            </p>
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vous@exemple.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Mot de passe */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mot de passe
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Votre mot de passe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              {/* Mot de passe oublie */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => navigate('/forgot-password')}
                  className="text-sm text-primary hover:underline"
                >
                  Mot de passe oublie ?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Connexion en cours...' : 'Se connecter'}
              </button>
            </form>

            {/* Divider */}
            <div className="mt-6 mb-6 flex items-center">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-500">ou</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Lien inscription */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Vous navez pas encore de compte ?{' '}
                <button
                  onClick={() => navigate('/welcome')}
                  className="text-primary font-medium hover:underline"
                >
                  Creer un compte
                </button>
              </p>
            </div>
          </div>

          {/* Aide */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              Besoin aide ?{' '}
              <a href="/contact" className="text-primary hover:underline">
                Contactez-nous
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;