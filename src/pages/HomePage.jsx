import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock, Star, Users, Baby, Plane, Heart, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/search/babysitter')}
                className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-lg flex items-center justify-center gap-2"
              >
                {t('hero.ctaFamily')}
                <ArrowRight size={20} />
              </button>
              
              <button
                onClick={() => navigate('/search/family')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center gap-2 border-2 border-white"
              >
                {t('hero.ctaBabysitter')}
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-dancing text-5xl md:text-6xl text-primary mb-8">
              {t('mission.title')}
            </h2>
            <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-line mb-12">
              {t('mission.text')}
            </div>
            
            <div className="flex flex-col items-center">
              <div className="font-dancing text-3xl text-primary mb-2">
                {t('mission.signature')}
              </div>
              <div className="text-sm text-gray-600 italic">
                {t('mission.role')}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('howItWorks.title')}</h2>
            <p className="text-xl text-gray-600">{t('howItWorks.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('howItWorks.step1Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step1Desc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Plane className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('howItWorks.step2Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step2Desc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <CheckCircle className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('howItWorks.step3Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step3Desc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('howItWorks.step4Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step4Desc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600">{t('services.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('services.familyTitle')}</h3>
              <p className="text-gray-600 mb-6">{t('services.familyDesc')}</p>
              <button 
                onClick={() => navigate('/search/babysitter')}
                className="text-primary font-semibold hover:underline flex items-center gap-2"
              >
                {t('services.learnMore')}
                <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                <Baby className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('services.babysitterTitle')}</h3>
              <p className="text-gray-600 mb-6">{t('services.babysitterDesc')}</p>
              <button 
                onClick={() => navigate('/search/family')}
                className="text-primary font-semibold hover:underline flex items-center gap-2"
              >
                {t('services.learnMore')}
                <ArrowRight size={16} />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t('services.securityTitle')}</h3>
              <p className="text-gray-600 mb-6">{t('services.securityDesc')}</p>
              <button 
                onClick={() => navigate('/about')}
                className="text-primary font-semibold hover:underline flex items-center gap-2"
              >
                {t('services.learnMore')}
                <ArrowRight size={16} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('whyUs.title')}</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 text-green-600 bg-green-100 rounded-full flex items-center justify-center">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('whyUs.secureTitle')}</h3>
              <p className="text-gray-600">{t('whyUs.secureDesc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 text-blue-600 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('whyUs.availableTitle')}</h3>
              <p className="text-gray-600">{t('whyUs.availableDesc')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-16 h-16 mx-auto mb-6 text-yellow-600 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('whyUs.qualityTitle')}</h3>
              <p className="text-gray-600">{t('whyUs.qualityDesc')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
            <p className="text-xl text-gray-600">{t('testimonials.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-2xl mr-4">
                  👩
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('testimonials.client1Name')}</h4>
                  <p className="text-sm text-gray-600">{t('testimonials.client1Role')}</p>
                  <p className="text-xs text-gray-500">{t('testimonials.client1Location')}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{t('testimonials.client1Text')}"</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-2xl mr-4">
                  👩‍🦰
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('testimonials.client2Name')}</h4>
                  <p className="text-sm text-gray-600">{t('testimonials.client2Role')}</p>
                  <p className="text-xs text-gray-500">{t('testimonials.client2Location')}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{t('testimonials.client2Text')}"</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-2xl mr-4">
                  👨
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t('testimonials.client3Name')}</h4>
                  <p className="text-sm text-gray-600">{t('testimonials.client3Role')}</p>
                  <p className="text-xs text-gray-500">{t('testimonials.client3Location')}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic">"{t('testimonials.client3Text')}"</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">{t('cta.title')}</h2>
            <p className="text-xl text-blue-100 mb-8">{t('cta.subtitle')}</p>
            <button
              onClick={() => navigate('/register')}
              className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-50 transition font-semibold text-lg inline-flex items-center gap-2"
            >
              {t('cta.button')}
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;