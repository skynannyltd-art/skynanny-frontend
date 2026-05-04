import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Users, Baby, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/search/babysitter')}
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
              >
                {t('hero.ctaFamily')}
              </button>
              <button
                onClick={() => navigate('/search/family')}
                className="bg-secondary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pink-600 transition shadow-lg"
              >
                {t('hero.ctaBabysitter')}
              </button>
            </div>
          </div>
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

      {/* Comment ça marche */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('howItWorks.title')}</h2>
            <p className="text-xl text-gray-600">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('howItWorks.step1Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step1Desc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('howItWorks.step2Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step2Desc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('howItWorks.step3Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step3Desc')}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('howItWorks.step4Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600">{t('services.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t('services.familyTitle')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.familyDesc')}
              </p>
              <button 
                onClick={() => navigate('/search/babysitter')}
                className="text-primary font-semibold hover:underline flex items-center gap-2"
              >
                {t('services.learnMore')} <ArrowRight size={18} />
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Baby className="text-secondary" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t('services.babysitterTitle')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.babysitterDesc')}
              </p>
              <button 
                onClick={() => navigate('/search/family')}
                className="text-secondary font-semibold hover:underline flex items-center gap-2"
              >
                {t('services.learnMore')} <ArrowRight size={18} />
              </button>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-green-600" size={28} />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{t('services.securityTitle')}</h3>
              <p className="text-gray-600 mb-4">
                {t('services.securityDesc')}
              </p>
              <button 
                onClick={() => navigate('/about')}
                className="text-green-600 font-semibold hover:underline flex items-center gap-2"
              >
                {t('services.learnMore')} <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi SkyNanny */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('whyUs.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyUs.secureTitle')}</h3>
              <p className="text-gray-600">
                {t('whyUs.secureDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyUs.availableTitle')}</h3>
              <p className="text-gray-600">
                {t('whyUs.availableDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t('whyUs.qualityTitle')}</h3>
              <p className="text-gray-600">
                {t('whyUs.qualityDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
          <p className="text-xl mb-8 text-blue-100">
            {t('cta.subtitle')}
          </p>
          <button
            onClick={() => navigate('/register')}
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            {t('cta.button')}
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;