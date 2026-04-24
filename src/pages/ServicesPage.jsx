import { useNavigate } from 'react-router-dom';
import { Users, Baby, Shield, DollarSign, Clock, CheckCircle, Star, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Des solutions adaptees pour les familles et les babysitters qui voyagent
          </p>
        </div>
      </section>

      {/* Service Familles */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Pour les Familles
            </h2>
          </div>

          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Voyagez en toute serenite avec vos enfants grace a nos babysitters qualifies qui partagent votre vol.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Babysitters Verifies
              </h3>
              <p className="text-gray-600 text-sm">
                Casier judiciaire vierge, certification PSC1, et piece identite verifiee par notre equipe.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Profils Detailles
              </h3>
              <p className="text-gray-600 text-sm">
                Consultez experiences, certifications, avis autres familles et photos avant de choisir.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Messagerie Securisee
              </h3>
              <p className="text-gray-600 text-sm">
                Echangez avec le babysitter avant le vol pour vous assurer que est le bon match.
              </p>
            </div>
          </div>

          {/* Tarification Familles */}
          <div className="bg-white border-2 border-primary/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="text-primary" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Tarification Transparente
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-900 font-medium">30% du prix du billet de la babysitter</p>
                  <p className="text-gray-600 text-sm">Vous remboursez 30% du cout du billet avion de votre babysitter</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-900 font-medium">+ 5% de commission de service</p>
                  <p className="text-gray-600 text-sm">Frais plateforme pour verification, messagerie et paiement securise</p>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Exemple concret :</p>
                <p className="text-sm text-gray-600">
                  Billet babysitter : 300 euros<br/>
                  Vous payez : 90 euros (30%) + 4,50 euros (5%) = <strong className="text-gray-900">94,50 euros</strong>
                </p>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600 text-sm">
                  Annulation gratuite jusque 72h avant le vol
                </p>
              </div>
            </div>
          </div>

          {/* CTA Familles */}
          <div className="mt-8 text-center">
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
      <div className="border-t border-gray-200"></div>

      {/* Service Babysitters */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 bg-secondary/40 rounded-full flex items-center justify-center">
              <Baby className="text-primary" size={32} />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900">
              Pour les Babysitters
            </h2>
          </div>

          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Voyagez a moindre cout tout en rendant service aux familles. Gagnez un revenu complementaire pendant vos vols.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/40 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Revenus Garantis
              </h3>
              <p className="text-gray-600 text-sm">
                Recevez 30% du prix de votre billet apres chaque vol. Paiement sous 7 jours.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/40 rounded-lg flex items-center justify-center mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Flexibilite Totale
              </h3>
              <p className="text-gray-600 text-sm">
                Choisissez vos vols, acceptez ou refusez les demandes selon votre convenance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-secondary/40 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Profil Mis en Avant
              </h3>
              <p className="text-gray-600 text-sm">
                Vos certifications et experiences sont mises en valeur pour rassurer les familles.
              </p>
            </div>
          </div>

          {/* Tarification Babysitters */}
          <div className="bg-white border-2 border-primary/20 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="text-primary" size={28} />
              <h3 className="text-2xl font-semibold text-gray-900">
                Vos Revenus
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-900 font-medium">30% du prix de votre billet</p>
                  <p className="text-gray-600 text-sm">La famille vous rembourse 30% du cout de votre billet avion</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="text-gray-900 font-medium">- 5% de commission SkyNanny</p>
                  <p className="text-gray-600 text-sm">Frais plateforme pour verification, visibilite et paiement securise</p>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-4 mt-4">
                <p className="text-sm font-medium text-gray-900 mb-2">Exemple concret :</p>
                <p className="text-sm text-gray-600">
                  Votre billet : 300 euros<br/>
                  Vous recevez : 90 euros (30%) - 4,50 euros (5%) = <strong className="text-gray-900">85,50 euros</strong><br/>
                  Paiement : 7 jours apres le vol
                </p>
              </div>

              <div className="flex items-start gap-3 mt-4">
                <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
                <p className="text-gray-600 text-sm">
                  Aucun frais pour vous inscrire ou creer votre profil
                </p>
              </div>
            </div>
          </div>

          {/* Documents Requis */}
          <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Documents Requis pour Devenir Babysitter
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-gray-900">Casier Judiciaire Vierge</p>
                  <p className="text-sm text-gray-600">Bulletin numero 3, moins de 3 mois</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-gray-900">Certification PSC1</p>
                  <p className="text-sm text-gray-600">Premiers secours, valide</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-gray-900">Piece Identite</p>
                  <p className="text-sm text-gray-600">En cours de validite</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-medium text-gray-900">Preuve Achat Billet</p>
                  <p className="text-sm text-gray-600">Pour chaque vol propose</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Babysitters */}
          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/search/babysitter')}
              className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition text-lg"
            >
              Devenir babysitter
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Questions Frequentes sur nos Services
          </h2>

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Le tarif est-il le meme quel que soit le nombre enfants ?
              </h3>
              <p className="text-gray-600 text-sm">
                Oui, le tarif reste identique que vous ayez 1, 2 ou 3 enfants. La plupart de nos babysitters peuvent occuper de plusieurs enfants simultanement.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Puis-je proposer mes services sur vols internationaux uniquement ?
              </h3>
              <p className="text-gray-600 text-sm">
                Oui, vous etes libre de choisir les vols sur lesquels vous souhaitez proposer vos services, courts ou longs courriers.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                Comment SkyNanny garantit-il la securite ?
              </h3>
              <p className="text-gray-600 text-sm">
                Verification manuelle de tous les documents par notre equipe, messagerie securisee, systeme avis, et possibilite de signalement a tout moment.
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

export default ServicesPage;