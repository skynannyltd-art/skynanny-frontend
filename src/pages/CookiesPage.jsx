import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CookiesPage = () => {
  const { i18n } = useTranslation();

  const content = {
    fr: {
      title: "Politique de Cookies",
      lastUpdate: "Dernière mise à jour : 1er janvier 2025",
      sections: [
        {
          title: "1. Qu'est-ce qu'un cookie ?",
          text: "Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur notre site. Les cookies nous aident à améliorer votre expérience utilisateur et à analyser l'utilisation de notre plateforme."
        },
        {
          title: "2. Types de cookies utilisés",
          text: "Cookies essentiels : nécessaires au fonctionnement du site. Cookies de performance : pour analyser l'utilisation du site. Cookies de fonctionnalité : pour mémoriser vos préférences. Cookies publicitaires : pour personnaliser les publicités (avec votre consentement)."
        },
        {
          title: "3. Cookies essentiels",
          text: "Ces cookies sont nécessaires pour vous permettre de naviguer sur le site et d'utiliser ses fonctionnalités, comme l'accès aux zones sécurisées. Sans ces cookies, certains services ne peuvent pas être fournis."
        },
        {
          title: "4. Cookies analytiques",
          text: "Nous utilisons Google Analytics pour comprendre comment les visiteurs utilisent notre site. Ces informations nous aident à améliorer notre plateforme. Les données collectées sont anonymisées."
        },
        {
          title: "5. Gestion des cookies",
          text: "Vous pouvez gérer ou supprimer les cookies selon vos préférences. La plupart des navigateurs acceptent automatiquement les cookies, mais vous pouvez modifier les paramètres de votre navigateur pour refuser les cookies."
        },
        {
          title: "6. Durée de conservation",
          text: "Les cookies essentiels sont conservés pendant la durée de votre session. Les cookies analytiques sont conservés pendant 13 mois maximum. Vous pouvez les supprimer à tout moment."
        },
        {
          title: "7. Cookies tiers",
          text: "Certains cookies sont placés par des services tiers que nous utilisons (Google Analytics, systèmes de paiement). Ces services ont leurs propres politiques de confidentialité."
        },
        {
          title: "8. Modification de la politique",
          text: "Nous pouvons mettre à jour cette politique de cookies. Les modifications seront publiées sur cette page avec une date de mise à jour révisée."
        }
      ]
    },
    en: {
      title: "Cookie Policy",
      lastUpdate: "Last updated: January 1, 2025",
      sections: [
        {
          title: "1. What is a cookie?",
          text: "A cookie is a small text file stored on your device when you visit our site. Cookies help us improve your user experience and analyze platform usage."
        },
        {
          title: "2. Types of cookies used",
          text: "Essential cookies: necessary for site operation. Performance cookies: to analyze site usage. Functionality cookies: to remember your preferences. Advertising cookies: to personalize ads (with your consent)."
        },
        {
          title: "3. Essential cookies",
          text: "These cookies are necessary to allow you to navigate the site and use its features, such as accessing secure areas. Without these cookies, some services cannot be provided."
        },
        {
          title: "4. Analytical cookies",
          text: "We use Google Analytics to understand how visitors use our site. This information helps us improve our platform. Collected data is anonymized."
        },
        {
          title: "5. Cookie management",
          text: "You can manage or delete cookies according to your preferences. Most browsers automatically accept cookies, but you can modify your browser settings to refuse cookies."
        },
        {
          title: "6. Retention period",
          text: "Essential cookies are kept for the duration of your session. Analytical cookies are kept for a maximum of 13 months. You can delete them at any time."
        },
        {
          title: "7. Third-party cookies",
          text: "Some cookies are placed by third-party services we use (Google Analytics, payment systems). These services have their own privacy policies."
        },
        {
          title: "8. Policy modification",
          text: "We may update this cookie policy. Changes will be posted on this page with a revised update date."
        }
      ]
    },
    es: {
      title: "Política de Cookies",
      lastUpdate: "Última actualización: 1 de enero de 2025",
      sections: [
        {
          title: "1. ¿Qué es una cookie?",
          text: "Una cookie es un pequeño archivo de texto almacenado en su dispositivo cuando visita nuestro sitio. Las cookies nos ayudan a mejorar su experiencia de usuario y analizar el uso de la plataforma."
        },
        {
          title: "2. Tipos de cookies utilizadas",
          text: "Cookies esenciales: necesarias para el funcionamiento del sitio. Cookies de rendimiento: para analizar el uso del sitio. Cookies de funcionalidad: para recordar sus preferencias. Cookies publicitarias: para personalizar anuncios (con su consentimiento)."
        },
        {
          title: "3. Cookies esenciales",
          text: "Estas cookies son necesarias para permitirle navegar por el sitio y utilizar sus funciones, como acceder a áreas seguras. Sin estas cookies, algunos servicios no pueden proporcionarse."
        },
        {
          title: "4. Cookies analíticas",
          text: "Utilizamos Google Analytics para comprender cómo los visitantes usan nuestro sitio. Esta información nos ayuda a mejorar nuestra plataforma. Los datos recopilados son anónimos."
        },
        {
          title: "5. Gestión de cookies",
          text: "Puede gestionar o eliminar cookies según sus preferencias. La mayoría de los navegadores aceptan cookies automáticamente, pero puede modificar la configuración de su navegador para rechazar cookies."
        },
        {
          title: "6. Período de conservación",
          text: "Las cookies esenciales se conservan durante la duración de su sesión. Las cookies analíticas se conservan durante un máximo de 13 meses. Puede eliminarlas en cualquier momento."
        },
        {
          title: "7. Cookies de terceros",
          text: "Algunas cookies son colocadas por servicios de terceros que utilizamos (Google Analytics, sistemas de pago). Estos servicios tienen sus propias políticas de privacidad."
        },
        {
          title: "8. Modificación de la política",
          text: "Podemos actualizar esta política de cookies. Los cambios se publicarán en esta página con una fecha de actualización revisada."
        }
      ]
    }
  };

  const currentContent = content[i18n.language] || content.fr;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentContent.title}</h1>
        <p className="text-gray-600 mb-8">{currentContent.lastUpdate}</p>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 space-y-8">
          {currentContent.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-gray-700 leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CookiesPage;