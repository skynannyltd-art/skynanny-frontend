import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Users, Baby } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WelcomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
              <img src="/logo.svg" alt="SkyNanny" className="w-16 h-16" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('welcome.title')}
            </h1>
            <p className="text-xl text-gray-600">
              {t('welcome.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => navigate('/search/babysitter')}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-transparent hover:border-primary"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Users className="w-10 h-10 text-primary group-hover:text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {t('welcome.family')}
                </h2>
                <p className="text-gray-600 mb-4">
                  {t('welcome.familyDesc')}
                </p>
                <span className="inline-flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                  {t('welcome.start')}
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </button>

            <button
              onClick={() => navigate('/search/family')}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 border-transparent hover:border-secondary"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <Baby className="w-10 h-10 text-secondary group-hover:text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  {t('welcome.babysitter')}
                </h2>
                <p className="text-gray-600 mb-4">
                  {t('welcome.babysitterDesc')}
                </p>
                <span className="inline-flex items-center text-secondary font-semibold group-hover:gap-2 transition-all">
                  {t('welcome.start')}
                  <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              {t('welcome.alreadyMember')}{' '}
              <button
                onClick={() => navigate('/login')}
                className="text-primary font-semibold hover:underline"
              >
                {t('welcome.loginLink')}
              </button>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WelcomePage;