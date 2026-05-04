import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Users, Baby, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('services.familyTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('services.familyDesc')}
              </p>
              <button 
                onClick={() => navigate('/search/babysitter')}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                {t('services.learnMore')}
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center mb-6">
                <Baby className="text-secondary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('services.babysitterTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('services.babysitterDesc')}
              </p>
              <button 
                onClick={() => navigate('/search/family')}
                className="w-full bg-secondary text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition font-semibold"
              >
                {t('services.learnMore')}
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t('services.securityTitle')}</h3>
              <p className="text-gray-600 mb-6">
                {t('services.securityDesc')}
              </p>
              <button 
                onClick={() => navigate('/about')}
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition font-semibold"
              >
                {t('services.learnMore')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;