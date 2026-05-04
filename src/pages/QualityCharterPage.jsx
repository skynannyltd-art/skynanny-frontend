import { useTranslation } from 'react-i18next';
import { Shield, Heart, Star, Users, CheckCircle, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const QualityCharterPage = () => {
  const { i18n } = useTranslation();

  const content = {
    fr: {
      title: "Charte Qualité",
      subtitle: "Notre engagement pour votre sérénité",
      intro: "Chez SkyNanny, la qualité et la sécurité sont au cœur de nos préoccupations. Cette charte définit nos engagements envers vous.",
      commitments: [
        {
          icon: Shield,
          title: "Vérification rigoureuse",
          text: "Tous nos babysitters sont vérifiés : casier judiciaire vierge, diplôme PSC1 valide, vérification d'identité, et références contrôlées. Nous ne faisons aucun compromis sur la sécurité."
        },
        {
          icon: Heart,
          title: "Bienveillance et professionnalisme",
          text: "Nous sélectionnons des babysitters passionnés, expérimentés et bienveillants. Chaque profil est évalué pour garantir un service de qualité et une attention particulière à vos enfants."
        },
        {
          icon: Star,
          title: "Évaluation continue",
          text: "Après chaque mission, nous collectons les avis des familles. Les babysitters sont notés et seuls ceux maintenant d'excellents retours restent sur la plateforme."
        },
        {
          icon: Users,
          title: "Support 24/7",
          text: "Notre équipe est disponible à tout moment pour répondre à vos questions, résoudre les problèmes et assurer le bon déroulement de votre expérience."
        },
        {
          icon: CheckCircle,
          title: "Transparence totale",
          text: "Tous les profils affichent clairement les qualifications, l'expérience, les avis et les tarifs. Pas de frais cachés, pas de surprises."
        },
        {
          icon: Award,
          title: "Formation continue",
          text: "Nous encourageons nos babysitters à se former régulièrement et proposons des ressources pour maintenir leurs compétences à jour."
        }
      ]
    },
    en: {
      title: "Quality Charter",
      subtitle: "Our commitment to your peace of mind",
      intro: "At SkyNanny, quality and safety are at the heart of our concerns. This charter defines our commitments to you.",
      commitments: [
        {
          icon: Shield,
          title: "Rigorous Verification",
          text: "All our babysitters are verified: clean background check, valid first aid certificate, identity verification, and controlled references. We make no compromises on safety."
        },
        {
          icon: Heart,
          title: "Care and Professionalism",
          text: "We select passionate, experienced, and caring babysitters. Each profile is evaluated to guarantee quality service and special attention to your children."
        },
        {
          icon: Star,
          title: "Continuous Evaluation",
          text: "After each mission, we collect family reviews. Babysitters are rated and only those maintaining excellent feedback remain on the platform."
        },
        {
          icon: Users,
          title: "24/7 Support",
          text: "Our team is available at any time to answer your questions, resolve issues, and ensure your experience runs smoothly."
        },
        {
          icon: CheckCircle,
          title: "Total Transparency",
          text: "All profiles clearly display qualifications, experience, reviews, and rates. No hidden fees, no surprises."
        },
        {
          icon: Award,
          title: "Ongoing Training",
          text: "We encourage our babysitters to train regularly and provide resources to keep their skills up to date."
        }
      ]
    },
    es: {
      title: "Carta de Calidad",
      subtitle: "Nuestro compromiso con su tranquilidad",
      intro: "En SkyNanny, la calidad y la seguridad están en el centro de nuestras preocupaciones. Esta carta define nuestros compromisos con usted.",
      commitments: [
        {
          icon: Shield,
          title: "Verificación rigurosa",
          text: "Todas nuestras niñeras están verificadas: antecedentes penales limpios, certificado de primeros auxilios válido, verificación de identidad y referencias controladas. No hacemos compromisos con la seguridad."
        },
        {
          icon: Heart,
          title: "Cuidado y profesionalismo",
          text: "Seleccionamos niñeras apasionadas, experimentadas y atentas. Cada perfil se evalúa para garantizar un servicio de calidad y atención especial a sus hijos."
        },
        {
          icon: Star,
          title: "Evaluación continua",
          text: "Después de cada misión, recopilamos reseñas de familias. Las niñeras son calificadas y solo aquellas que mantienen excelentes comentarios permanecen en la plataforma."
        },
        {
          icon: Users,
          title: "Soporte 24/7",
          text: "Nuestro equipo está disponible en cualquier momento para responder sus preguntas, resolver problemas y garantizar que su experiencia transcurra sin problemas."
        },
        {
          icon: CheckCircle,
          title: "Transparencia total",
          text: "Todos los perfiles muestran claramente calificaciones, experiencia, reseñas y tarifas. Sin cargos ocultos, sin sorpresas."
        },
        {
          icon: Award,
          title: "Formación continua",
          text: "Alentamos a nuestras niñeras a formarse regularmente y proporcionamos recursos para mantener sus habilidades actualizadas."
        }
      ]
    }
  };

  const currentContent = content[i18n.language] || content.fr;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">{currentContent.title}</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto">
            {currentContent.intro}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.commitments.map((commitment, index) => {
              const Icon = commitment.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{commitment.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{commitment.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityCharterPage;