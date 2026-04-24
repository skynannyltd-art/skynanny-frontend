import { useNavigate } from 'react-router-dom';
import { Home, Search, Phone, ArrowLeft, Plane } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full text-center">
          {/* Illustration Avion */}
          <div className="mb-8 relative">
            <div className="text-9xl font-bold text-primary/10">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Plane className="text-primary animate-bounce" size={80} />
            </div>
          </div>

          {/* Titre */}
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Oups ! Vol perdu...
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Il semblerait que cette page ait pris un autre vol. 
            Ne vous inquietez pas, on vous aide a retrouver votre chemin !
          </p>

          {/* Suggestions */}
          <div className="bg-gray-50 rounded-xl p-8 mb-8 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Suggestions de navigation :
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Retour accueil */}
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition text-left"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Page accueil</p>
                  <p className="text-sm text-gray-500">Retour au debut</p>
                </div>
              </button>

              {/* Rechercher babysitter */}
              <button
                onClick={() => navigate('/search/family')}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition text-left"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Search className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Trouver babysitter</p>
                  <p className="text-sm text-gray-500">Rechercher un vol</p>
                </div>
              </button>

              {/* Comment ça marche */}
              <button
                onClick={() => navigate('/how-it-works')}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition text-left"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Plane className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Comment ca marche</p>
                  <p className="text-sm text-gray-500">Decouvrir le service</p>
                </div>
              </button>

              {/* Contact */}
              <button
                onClick={() => navigate('/contact')}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition text-left"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Nous contacter</p>
                  <p className="text-sm text-gray-500">Besoin aide</p>
                </div>
              </button>
            </div>
          </div>

          {/* Bouton Retour */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-primary hover:text-primary transition font-medium"
          >
            <ArrowLeft size={20} />
            Retour page precedente
          </button>

          {/* Message additionnel */}
          <p className="mt-8 text-sm text-gray-500">
            Code erreur : 404 - Page introuvable
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;