import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Baby, Shield, Clock, Star, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

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
      <div className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('mission.title')}</h2>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div 
                className="text-lg md:text-xl leading-relaxed text-gray-800 mb-8 whitespace-pre-line text-left"
                style={{ fontFamily: "'Dancing Script', cursive", lineHeight: '1.9' }}
              >
                {t('mission.text')}
              </div>
              
              <div className="border-t-2 border-gray-200 pt-6 text-right">
                <p 
                  className="text-3xl md:text-4xl text-primary mb-2"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  {t('mission.signature')}
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  {t('mission.role')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comment ça marche */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('howItWorks.title')}</h2>
            <p className="text-xl text-gray-600">{t('howItWorks.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step, index) => (
              <motion.div
                key={step}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t(`howItWorks.step${step}Title`)}</h3>
                <p className="text-gray-600">{t(`howItWorks.step${step}Desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       {/* Nos Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600">{t('services.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, color: 'blue', key: 'family', link: '/search/babysitter' },
              { icon: Baby, color: 'pink', key: 'babysitter', link: '/search/family' },
              { icon: Shield, color: 'green', key: 'security', link: '/about' }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.key}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ y: -10 }}
                >
                  <div className={`w-14 h-14 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className={`text-${service.color === 'blue' ? 'primary' : service.color === 'pink' ? 'secondary' : 'green-600'}`} size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{t(`services.${service.key}Title`)}</h3>
                  <p className="text-gray-600 mb-4">
                    {t(`services.${service.key}Desc`)}
                  </p>
                  <button 
                    onClick={() => navigate(service.link)}
                    className={`text-${service.color === 'blue' ? 'primary' : service.color === 'pink' ? 'secondary' : 'green-600'} font-semibold hover:underline flex items-center gap-2`}
                  >
                    {t('services.learnMore')} <ArrowRight size={18} />
                  </button>
                </motion.div>
              );
            })}
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

      {/* Témoignages */}
      <Testimonials />

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