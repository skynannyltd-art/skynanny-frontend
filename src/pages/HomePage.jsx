import { useNavigate } from 'react-router-dom';
import { Shield, Search, MessageCircle, Check, Star, Plane, Users, Baby } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                Voyagez sereinement en famille
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Des babysitters qualifiés pour vous accompagner pendant vos vols. 
                Profitez de votre voyage l'esprit tranquille.
              </p>

              {/* Barre de recherche */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Numéro de vol
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Ex: AF007, BA105..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-base"
                  />
                  <button 
                    onClick={() => navigate('/search/family')}
                    className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition flex items-center gap-2"
                  >
                    <Search size={20} />
                    Rechercher
                  </button>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex gap-6 mt-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-green-500" />
                  <span>Vérification complète</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} className="text-green-500" />
                  <span>Paiement sécurisé</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white shadow-2xl">
                <div className="flex items-center justify-center h-96">
                  <div className="text-center">
                    <Plane size={120} className="mx-auto mb-6 opacity-20" />
                    <p className="text-2xl font-light">
                      Illustration de voyage<br />familial serein
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              SkyNanny met en relation familles et babysitters pour des vols sereins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card Famille */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Pour les familles
              </h3>
              <p className="text-gray-600 mb-6">
                Trouvez une babysitter qualifiée sur votre vol. Profitez de votre voyage en toute tranquillité.
              </p>
              <button 
                onClick={() => navigate('/search/family')}
                className="text-primary font-medium hover:underline flex items-center gap-2"
              >
                Trouver une babysitter
                <span>→</span>
              </button>
            </div>

            {/* Card Babysitter */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-secondary/40 rounded-full flex items-center justify-center mb-6">
                <Baby size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Pour les babysitters
              </h3>
              <p className="text-gray-600 mb-6">
                Proposez vos services pendant vos vols. Gagnez un revenu complémentaire en voyageant.
              </p>
              <button 
                onClick={() => navigate('/search/babysitter')}
                className="text-primary font-medium hover:underline flex items-center gap-2"
              >
                Devenir SkyNanny
                <span>→</span>
              </button>
            </div>

            {/* Card Sécurité */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Shield size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">
                Sécurité & Confiance
              </h3>
              <p className="text-gray-600 mb-6">
                Vérification complète des babysitters : casier judiciaire, certifications, identité.
              </p>
              <button 
                onClick={() => navigate('/security')}
                className="text-primary font-medium hover:underline flex items-center gap-2"
              >
                En savoir plus
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              3 étapes simples
            </h2>
            <p className="text-lg text-gray-600">
              De la recherche au vol, tout est simplifié
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Recherchez
              </h3>
              <p className="text-gray-600">
                Entrez votre numéro de vol ou votre ville de départ
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Connectez
              </h3>
              <p className="text-gray-600">
                Échangez via notre messagerie sécurisée et trouvez le match parfait
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Voyagez serein
              </h3>
              <p className="text-gray-600">
                Profitez de votre vol en toute tranquillité avec votre SkyNanny
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-lg text-gray-600">
              Des milliers de familles et babysitters satisfaits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Un vol Paris-New York avec mes deux enfants qui s'est transformé en moment agréable grâce à Marie. Je recommande !"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-medium">SC</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Sophie C.</p>
                  <p className="text-sm text-gray-500">Paris • Janvier 2026</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "En tant que babysitter, SkyNanny m'a permis de voyager tout en gagnant un revenu. Concept génial !"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-medium">ML</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Marie L.</p>
                  <p className="text-sm text-gray-500">Lyon • Février 2026</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Service impeccable ! La vérification des profils nous a vraiment rassuré. Merci SkyNanny."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-medium">JM</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Jean M.</p>
                  <p className="text-sm text-gray-500">Marseille • Mars 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold mb-2">2,500+</p>
              <p className="text-primary-light">Familles</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">1,200+</p>
              <p className="text-primary-light">Babysitters</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">5,000+</p>
              <p className="text-primary-light">Vols réalisés</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-2">4.8/5</p>
              <p className="text-primary-light">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Prêt à partir en toute sérénité ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Rejoignez des milliers de familles et babysitters qui voyagent avec SkyNanny
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/search/family')}
              className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-lg"
            >
              Trouver une babysitter
            </button>
            <button 
              onClick={() => navigate('/search/babysitter')}
              className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-medium hover:bg-gray-50 transition text-lg"
            >
              Devenir babysitter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;