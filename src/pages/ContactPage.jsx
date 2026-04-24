import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Send, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Veuillez remplir tous les champs obligatoires');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Veuillez entrer une adresse email valide');
      setLoading(false);
      return;
    }

    try {
      // Simulation d'envoi (à remplacer par vraie API plus tard)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // TODO: Remplacer par appel API réel
      // const response = await fetch('https://api.sky-nanny.com/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      // Masquer le message de succès après 5 secondes
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Erreur envoi:', err);
      setError('Une erreur est survenue. Veuillez réessayer.');
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
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une question ? Une suggestion ? Notre équipe est là pour vous aider.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Envoyez-nous un message
              </h2>

              {/* Success Message */}
              {success && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                  <CheckCircle className="text-green-600" size={24} />
                  <div>
                    <p className="text-green-800 font-medium">Message envoyé avec succès !</p>
                    <p className="text-green-600 text-sm">Nous vous répondrons dans les 24h.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nom */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
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

                {/* Téléphone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone <span className="text-gray-400">(optionnel)</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Sujet */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="question-generale">Question générale</option>
                    <option value="inscription">Inscription / Compte</option>
                    <option value="reservation">Réservation</option>
                    <option value="paiement">Paiement</option>
                    <option value="verification">Vérification babysitter</option>
                    <option value="securite">Sécurité</option>
                    <option value="partenariat">Partenariat</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Décrivez votre demande..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-4 rounded-lg font-medium hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Informations Contact */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contact@sky-nanny.com</p>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Rapide */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
            Questions fréquentes
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Peut-être que votre question a déjà une réponse
          </p>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-2">
                Comment puis-je devenir babysitter sur SkyNanny ?
              </h3>
              <p className="text-gray-600 text-sm">
                Créez un compte babysitter, complétez votre profil, et fournissez les documents requis 
                (casier judiciaire, PSC1, pièce d'identité). Notre équipe vérifiera vos documents sous 48h.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-2">
                Quel est le délai de réponse du support ?
              </h3>
              <p className="text-gray-600 text-sm">
                Nous répondons à tous les messages dans les 24h ouvrées. Pour les urgences, 
                contactez-nous via le formulaire en précisant "URGENT" dans le sujet.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="font-medium text-gray-900 mb-2">
                Comment puis-je modifier ma réservation ?
              </h3>
              <p className="text-gray-600 text-sm">
                Connectez-vous à votre compte, accédez à "Mes réservations", et cliquez sur "Modifier". 
                Les modifications sont gratuites jusqu'à 72h avant le vol.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button 
              onClick={() => navigate('/faq')}
              className="text-primary font-medium hover:underline"
            >
              Voir toutes les questions →
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;