import { useTranslation } from 'react-i18next';
import { Shield, Heart, Globe, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('nav.about')} SkyNanny</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('footer.tagline')}
          </p>
        </div>
      </section>

      {/* Notre Mission */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('mission.title')}</h2>
            
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="font-semibold text-xl text-primary">
                {t('mission.subtitle')}
              </p>
              
              <div className="bg-blue-50 rounded-xl p-6 text-left">
                <p className="font-semibold text-gray-900 mb-2">
                  {t('mission.familyTitle')}
                </p>
                <p>
                  {t('mission.familyText')}
                </p>
              </div>
              
              <div className="bg-pink-50 rounded-xl p-6 text-left">
                <p className="font-semibold text-gray-900 mb-2">
                  {t('mission.babysitterTitle')}
                </p>
                <p>
                  {t('mission.babysitterText')}
                </p>
              </div>
              
              <p className="text-xl font-semibold text-gray-900 pt-4">
                {t('mission.conclusion')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Nos Valeurs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-xl text-gray-600">Les principes qui guident notre action au quotidien</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sécurité</h3>
              <p className="text-gray-600">
                La sécurité de vos enfants est notre priorité absolue. Vérifications rigoureuses de tous nos babysitters.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Bienveillance</h3>
              <p className="text-gray-600">
                Une communauté basée sur la confiance, le respect et l'attention portée à chacun.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                Une solution moderne et innovante pour répondre aux nouveaux besoins des familles.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Communauté</h3>
              <p className="text-gray-600">
                Créer des liens durables entre familles et babysitters au-delà des frontières.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Histoire</h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              SkyNanny est née d'une observation simple : voyager avec des enfants en bas âge peut être 
              stressant pour les parents, et de nombreux babysitters souhaitent voyager mais trouvent 
              les coûts prohibitifs.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Nous avons créé une plateforme qui répond à ces deux besoins de manière innovante. En 
              connectant les familles avec des babysitters qualifiés qui voyagent sur le même vol, nous 
              offrons une solution unique qui bénéficie à tous.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Aujourd'hui, SkyNanny est devenue la référence pour des milliers de familles et de babysitters 
              à travers le monde, créant des expériences de voyage mémorables et sécurisées.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Qualité */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Engagement Qualité</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-gray-600">Babysitters vérifiés</p>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Casier judiciaire, diplômes PSC1 et références systématiquement contrôlés
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-gray-600">Support disponible</p>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Une équipe dédiée pour répondre à vos questions à tout moment
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-primary mb-2">⭐ 4.8</div>
                <p className="text-gray-600">Note moyenne</p>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Des milliers de familles satisfaites nous font confiance
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;