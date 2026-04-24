import { useNavigate } from 'react-router-dom';
import { Heart, Shield, Users, Globe, Award, Target } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            À propos de SkyNanny
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nous rendons les voyages en famille plus sereins en connectant des parents 
            avec des babysitters qualifiés sur leurs vols.
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="text-primary" size={32} />
            <h2 className="text-3xl font-semibold text-gray-900">Notre Histoire</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              Bonjour, je m'appelle Kristina, et je suis la fondatrice de SkyNanny. 
              Comme beaucoup d'entre vous, je suis maman de deux merveilleux enfants. 
              Expatriée vivant en France, loin de ma famille, je me retrouve régulièrement 
              à devoir prendre l'avion seule avec mes deux petits pour rendre visite à mes proches.
            </p>
            <p className="mb-4">
              Vous connaissez sûrement cette situation : votre conjoint ne peut pas toujours 
              prendre de vacances en même temps que vous, et vous vous retrouvez à naviguer 
              dans les aéroports, gérer les bagages, rassurer les enfants, tout en essayant 
              de garder le sourire. J'ai vécu ces moments de stress, d'épuisement, où l'on 
              se demande comment on va tenir jusqu'à l'arrivée.
            </p>
            <p className="mb-4">
              Alors j'ai cherché. J'ai cherché une solution, un service qui pourrait m'aider. 
              Quelqu'un de confiance qui serait déjà sur mon vol et qui pourrait me donner 
              un coup de main avec les enfants. Mais je n'ai rien trouvé. Aucune plateforme 
              ne proposait ce service pourtant si simple et si nécessaire.
            </p>
            <p className="mb-4">
              C'est là que j'ai eu le déclic : si ce service n'existe pas, pourquoi ne pas 
              le créer ? SkyNanny est né de cette frustration, mais aussi de cette envie 
              profonde d'aider d'autres parents qui, comme moi, veulent simplement pouvoir 
              voyager avec leurs enfants sans que cela devienne un parcours du combattant.
            </p>
            <p className="mb-4">
              Mais SkyNanny, c'est aussi une façon de donner leur chance aux jeunes. 
              Combien de fois ai-je entendu des étudiants ou de jeunes adultes me dire 
              qu'ils adoreraient voyager mais que les billets d'avion coûtent trop cher ? 
              Grâce à notre plateforme, ces jeunes babysitters peuvent voyager à moindre coût 
              tout en rendant service à des familles. C'est gagnant-gagnant, et c'est 
              exactement ce que je voulais créer.
            </p>
            <p>
              Aujourd'hui, plus de 2,500 familles et 1,200 babysitters nous font confiance. 
              Et chaque fois que je reçois un message d'une maman me remerciant d'avoir rendu 
              son vol plus serein, ou d'un jeune me disant qu'il a pu visiter un nouveau pays 
              grâce à SkyNanny, je me dis que ce projet en valait vraiment la peine.
            </p>
            <p className="mt-6 text-base italic text-gray-500">
              Merci de faire partie de cette belle aventure avec nous. ❤️
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="text-primary" size={32} />
                <h2 className="text-3xl font-semibold text-gray-900">Notre Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Transformer chaque vol en famille en une expérience agréable et sereine, 
                en mettant en relation des parents avec des babysitters qualifiés qui 
                partagent le même trajet.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nous croyons que voyager avec des enfants ne devrait pas être une source 
                de stress, mais un moment de découverte et de plaisir partagé.
              </p>
            </div>

            {/* Vision */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="text-primary" size={32} />
                <h2 className="text-3xl font-semibold text-gray-900">Notre Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Devenir la référence mondiale pour les familles qui voyagent avec des enfants, 
                en étant présents sur tous les vols long-courriers d'ici 2028.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nous voulons créer une communauté internationale de babysitters passionnés 
                par le voyage et l'accompagnement d'enfants, tout en garantissant les standards 
                de sécurité les plus élevés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            Nos Valeurs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sécurité */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Sécurité Avant Tout</h3>
              <p className="text-gray-600">
                Vérification systématique du casier judiciaire, de la certification PSC1 
                et de l'identité de chaque babysitter. La sécurité des enfants est notre priorité absolue.
              </p>
            </div>

            {/* Confiance */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Confiance Mutuelle</h3>
              <p className="text-gray-600">
                Nous créons un environnement de confiance entre familles et babysitters 
                grâce à des profils vérifiés, des avis authentiques et une messagerie sécurisée.
              </p>
            </div>

            {/* Communauté */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Esprit Communautaire</h3>
              <p className="text-gray-600">
                SkyNanny est plus qu'une plateforme, c'est une communauté de voyageurs 
                qui s'entraident pour rendre les déplacements en famille plus agréables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-4">
            Notre Équipe
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Une équipe passionnée et internationale, dédiée à rendre vos voyages plus sereins
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Membre 1 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-600">JD</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-1">
                Jean Dupont
              </h3>
              <p className="text-primary text-center text-sm mb-3">Fondateur & CEO</p>
              <p className="text-gray-600 text-sm text-center">
                Ancien consultant en stratégie et père de deux enfants. Passionné par 
                l'innovation dans les services aux familles.
              </p>
            </div>

            {/* Membre 2 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-600">SM</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-1">
                Sophie Martin
              </h3>
              <p className="text-primary text-center text-sm mb-3">Head of Safety</p>
              <p className="text-gray-600 text-sm text-center">
                Ancienne infirmière puéricultrice avec 15 ans d'expérience. Responsable 
                de la vérification et de la formation des babysitters.
              </p>
            </div>

            {/* Membre 3 */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-600">AL</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-1">
                Alexandre Leroy
              </h3>
              <p className="text-primary text-center text-sm mb-3">CTO</p>
              <p className="text-gray-600 text-sm text-center">
                Ingénieur full-stack passionné par l'UX et la sécurité. Construit une 
                plateforme fiable et facile à utiliser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres Clés */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            SkyNanny en Chiffres
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={28} />
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">2,500+</p>
              <p className="text-gray-600">Familles inscrites</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={28} />
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">1,200+</p>
              <p className="text-gray-600">Babysitters vérifiés</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary" size={28} />
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">5,000+</p>
              <p className="text-gray-600">Vols accompagnés</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={28} />
              </div>
              <p className="text-4xl font-bold text-gray-900 mb-2">4.8/5</p>
              <p className="text-gray-600">Note moyenne</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/20 to-primary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Rejoignez l'aventure SkyNanny
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Que vous soyez famille ou babysitter, nous serions ravis de vous compter parmi notre communauté
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/search/family')}
              className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
            >
              Je suis une famille
            </button>
            <button 
              onClick={() => navigate('/search/babysitter')}
              className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Je suis babysitter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;