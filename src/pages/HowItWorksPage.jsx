import { useNavigate } from 'react-router-dom';
import { Search, MessageCircle, CreditCard, Plane, CheckCircle, Upload, UserCheck, Calendar, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HowItWorksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Comment ca marche ?
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Decouvrez comment SkyNanny facilite vos voyages en famille
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            SkyNanny met en relation des familles avec des babysitters qualifies qui voyagent sur le meme vol. 
            Suivez ces etapes simples pour voyager en toute serenite.
          </p>
        </div>
      </section>

      {/* Parcours Familles */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Pour les Familles
            </h2>
            <p className="text-lg text-gray-600">
              5 etapes pour trouver votre babysitter ideale
            </p>
          </div>

          <div className="space-y-12">
            {/* Étape 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Recherchez votre vol
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Entrez votre numero de vol (ex: AF007) ou votre ville de depart. 
                    Notre systeme recherche automatiquement les babysitters disponibles sur votre vol.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Astuce :</strong> Recherchez des maintenant meme si votre vol est dans plusieurs semaines. 
                      Plus vous vous y prenez tot, plus vous aurez de choix.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Consultez les profils
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Parcourez les profils des babysitters disponibles. Consultez leurs experiences, 
                    certifications (PSC1, casier judiciaire), photos, et avis laisses par autres familles.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-sm text-gray-700">Verifiez les certifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-sm text-gray-700">Lisez les avis des autres familles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-sm text-gray-700">Regardez leurs experiences avec enfants</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Echangez par messagerie
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Contactez le babysitter qui vous convient via notre messagerie securisee. 
                    Posez toutes vos questions, partagez les besoins specifiques de vos enfants, 
                    et assurez-vous que est le bon match.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Conseil :</strong> Proposez un appel video ou une rencontre au cafe de aeroport 
                      avant le vol pour faire connaissance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <CreditCard className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Reservez et payez
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Une fois accord, confirmez votre reservation et effectuez le paiement securise 
                    (30% du billet babysitter + 5% commission). Paiement par carte bancaire via Stripe.
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="text-sm text-green-800">
                      <strong>Annulation gratuite</strong> jusque 72h avant le vol. 
                      Entre 72h et 24h : frais de 50%. Moins de 24h : aucun remboursement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 5 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  5
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Plane className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Voyagez serein
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Le jour du vol, retrouvez votre babysitter a aeroport. 
                    Profitez de votre voyage en toute tranquillite pendant que votre SkyNanny 
                    occupe de vos enfants.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-sm text-gray-700">Echangez vos numeros de telephone</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-sm text-gray-700">Prevoyez un point de rencontre a aeroport</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-sm text-gray-700">Laissez un avis apres le vol</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/search/family')}
              className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-lg"
            >
              Trouver une babysitter
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t-4 border-gray-200"></div>

      {/* Parcours Babysitters */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-4">
              Pour les Babysitters
            </h2>
            <p className="text-lg text-gray-600">
              6 etapes pour commencer a gagner un revenu
            </p>
          </div>

          <div className="space-y-12">
            {/* Étape 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-secondary/60 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <UserCheck className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Creez votre profil
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Inscrivez-vous gratuitement et completez votre profil : experiences avec enfants, 
                    formations, disponibilites, photo de profil.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong>100% gratuit</strong> - Aucun frais inscription ou abonnement mensuel.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-secondary/60 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Upload className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Uploadez vos documents
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Fournissez les documents requis pour verification :
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={18} />
                      <span className="text-sm text-gray-700">Casier judiciaire vierge (bulletin numero 3, moins de 3 mois)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={18} />
                      <span className="text-sm text-gray-700">Certification PSC1 ou equivalent valide</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-primary" size={18} />
                      <span className="text-sm text-gray-700">Piece identite en cours de validite</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-secondary/60 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Attendez la validation
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Notre equipe verifie manuellement vos documents sous 48h. 
                    Vous recevrez un email de confirmation une fois votre profil approuve.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      En moyenne, 95% des profils sont approuves en moins de 24h.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-secondary/60 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Ajoutez vos vols
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Uploadez la preuve achat de votre billet pour chaque vol sur lequel 
                    vous souhaitez proposer vos services. Vous pouvez ajouter autant de vols que vous voulez.
                  </p>
                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Astuce :</strong> Ajoutez vos vols des que vous les reservez 
                      pour maximiser vos chances trouver une famille.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 5 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-secondary/60 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  5
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Recevez des demandes
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Les familles cherchant un babysitter sur vos vols peuvent vous contacter. 
                    Vous recevez une notification par email et sur la plateforme.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-sm text-gray-700">Repondez rapidement pour maximiser vos chances</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-sm text-gray-700">Posez des questions sur les enfants</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="text-green-500" size={18} />
                      <span className="text-sm text-gray-700">Vous etes libre accepter ou refuser</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Étape 6 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-secondary/60 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  6
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Plane className="text-primary" size={28} />
                    <h3 className="text-xl font-semibold text-gray-900">
                      Voyagez et soyez paye
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Retrouvez la famille a aeroport, occupez-vous des enfants pendant le vol, 
                    et recevez votre paiement 7 jours apres (30% de votre billet moins 5%).
                  </p>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <p className="text-sm text-green-800">
                      <strong>Exemple :</strong> Billet 300 euros → Vous recevez 85,50 euros par virement bancaire
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigate('/search/babysitter')}
              className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-lg"
            >
              Devenir babysitter
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Des questions ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Consultez notre FAQ ou contactez notre equipe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/faq')}
              className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Voir la FAQ
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Nous contacter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;