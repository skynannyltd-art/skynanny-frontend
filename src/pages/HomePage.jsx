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

{/* Section Comment ça marche - Résumé */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Comment ca marche ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple en 3 etapes pour voyager en toute serenite
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Étape 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Recherchez votre vol
              </h3>
              <p className="text-gray-600">
                Entrez votre numero de vol ou ville de depart. 
                Trouvez les babysitters disponibles sur votre vol.
              </p>
            </div>

            {/* Étape 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Choisissez et echangez
              </h3>
              <p className="text-gray-600">
                Consultez les profils verifies, lisez les avis, 
                et contactez le babysitter qui vous convient.
              </p>
            </div>

            {/* Étape 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Voyagez serein
              </h3>
              <p className="text-gray-600">
                Reservez en toute securite et profitez de votre vol 
                pendant que votre babysitter occupe de vos enfants.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate('/how-it-works')}
              className="px-8 py-4 bg-white border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition text-lg"
            >
              Voir le processus complet
            </button>
          </div>
        </div>
      </section>

      {/* Section Pourquoi SkyNanny */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Pourquoi choisir SkyNanny ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La solution de confiance pour des vols en famille reussis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Avantage 1 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Securite maximale
              </h3>
              <p className="text-gray-600">
                Tous nos babysitters sont verifies : casier judiciaire vierge, 
                certification PSC1, et identite confirmee par notre equipe.
              </p>
            </div>

            {/* Avantage 2 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Tarifs transparents
              </h3>
              <p className="text-gray-600">
                30% du billet babysitter + 5% de commission. 
                Aucun frais cache. Annulation gratuite jusque 72h avant le vol.
              </p>
            </div>

            {/* Avantage 3 */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Communaute de confiance
              </h3>
              <p className="text-gray-600">
                Plus de 2,500 familles satisfaites et 1,200 babysitters qualifies. 
                Consultez les avis reels avant de reserver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Ils ont voyage avec SkyNanny
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decouvrez les experiences de nos familles et babysitters
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Témoignage 1 - Famille */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                Un service exceptionnel ! Notre babysitter etait adorable avec nos 2 enfants pendant 
                tout le vol Paris-New York. On a pu se reposer et profiter du voyage. Merci SkyNanny !
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-lg">
                  MC
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Marie C.</p>
                  <p className="text-sm text-gray-500">Famille, Paris</p>
                </div>
              </div>
            </div>

            {/* Témoignage 2 - Babysitter */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                Genial pour financer mes voyages ! Je voyage regulierement et SkyNanny me permet de 
                recuperer une partie du cout de mes billets tout en aidant des familles. Win-win !
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/60 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  SL
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Sophie L.</p>
                  <p className="text-sm text-gray-500">Babysitter, Lyon</p>
                </div>
              </div>
            </div>

            {/* Témoignage 3 - Famille */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                La verification des babysitters est tres rassurante. On a echange avant le vol et 
                on etait confiant le jour J. Notre fille de 3 ans a adore sa babysitter !
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold text-lg">
                  TB
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Thomas B.</p>
                  <p className="text-sm text-gray-500">Famille, Marseille</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Rejoignez plus de 2,500 familles satisfaites
            </p>
            <button
              onClick={() => navigate('/search/family')}
              className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-lg"
            >
              Trouver une babysitter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;