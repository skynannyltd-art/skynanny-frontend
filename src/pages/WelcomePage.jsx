import { useNavigate } from 'react-router-dom';
import { Users, Baby } from 'lucide-react';
import Footer from '../components/Footer';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full text-center">
          {/* Logo sans fond */}
         {/* Logo SVG */}
     <div className="mb-6">
       <img 
         src="/images/skynanny-logo.png" 
         alt="SkyNanny" 
         className="w-32 h-32 mx-auto object-contain"
       />
     </div>

          {/* Titre Question */}
          <h1 className="text-3xl text-gray-900 mb-8 font-normal">
            Que pouvons-nous faire pour vous ?
          </h1>

          {/* Deux Boutons Épurés */}
          <div className="space-y-3 max-w-md mx-auto mb-8">
            {/* Bouton Famille */}
            <button
              onClick={() => navigate('/search/family')}
              className="w-full bg-white border border-gray-300 rounded-lg p-5 hover:border-primary hover:shadow-sm transition-all duration-200 flex items-center justify-start gap-4"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Users size={20} className="text-gray-700" />
              </div>
              <span className="text-base text-gray-900 font-normal">Une famille</span>
            </button>

            {/* Bouton Babysitter */}
            <button
              onClick={() => navigate('/search/babysitter')}
              className="w-full bg-white border border-gray-300 rounded-lg p-5 hover:border-primary hover:shadow-sm transition-all duration-200 flex items-center justify-start gap-4"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Baby size={20} className="text-gray-700" />
              </div>
              <span className="text-base text-gray-900 font-normal">Un babysitter</span>
            </button>
          </div>

          {/* Footer Connexion */}
          <div className="text-sm text-gray-600">
            <p>
              Vous êtes déjà membre ?{' '}
              <button 
                onClick={() => navigate('/login')} 
                className="text-gray-900 underline hover:text-primary transition"
              >
                Connectez-vous
              </button>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WelcomePage;