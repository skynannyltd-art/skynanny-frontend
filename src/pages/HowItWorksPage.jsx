import { useTranslation } from 'react-i18next';
import { UserPlus, Search, CreditCard, Plane } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HowItWorksPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{t('howItWorks.title')}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserPlus className="text-primary" size={48} />
              </div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t('howItWorks.step1Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step1Desc')}</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="text-primary" size={48} />
              </div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t('howItWorks.step2Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step2Desc')}</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="text-primary" size={48} />
              </div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t('howItWorks.step3Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step3Desc')}</p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Plane className="text-primary" size={48} />
              </div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{t('howItWorks.step4Title')}</h3>
              <p className="text-gray-600">{t('howItWorks.step4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;