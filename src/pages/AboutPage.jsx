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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.valuesTitle')}</h2>
            <p className="text-xl text-gray-600">{t('about.valuesSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.securityTitle')}</h3>
              <p className="text-gray-600">
                {t('about.securityDesc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.careTitle')}</h3>
              <p className="text-gray-600">
                {t('about.careDesc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.innovationTitle')}</h3>
              <p className="text-gray-600">
                {t('about.innovationDesc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.communityTitle')}</h3>
              <p className="text-gray-600">
                {t('about.communityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.historyTitle')}</h2>
          </div>

          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              {t('about.historyP1')}
            </p>

            <p className="text-lg leading-relaxed mb-6">
              {t('about.historyP2')}
            </p>

            <p className="text-lg leading-relaxed mb-6">
              {t('about.historyP3')}
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Qualité */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t('about.qualityTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-primary mb-2">{t('about.quality100')}</div>
                <p className="text-gray-600">{t('about.quality100Label')}</p>
              </div>
              <p className="text-sm text-gray-600 text-center">
                {t('about.quality100Desc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-primary mb-2">{t('about.quality247')}</div>
                <p className="text-gray-600">{t('about.quality247Label')}</p>
              </div>
              <p className="text-sm text-gray-600 text-center">
                {t('about.quality247Desc')}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-primary mb-2">{t('about.quality48')}</div>
                <p className="text-gray-600">{t('about.quality48Label')}</p>
              </div>
              <p className="text-sm text-gray-600 text-center">
                {t('about.quality48Desc')}
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