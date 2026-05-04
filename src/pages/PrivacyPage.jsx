import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  const { i18n } = useTranslation();

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      lastUpdate: "Dernière mise à jour : 1er janvier 2025",
      sections: [
        {
          title: "1. Collecte des données",
          text: "Nous collectons les informations que vous nous fournissez lors de votre inscription : nom, prénom, email, téléphone, et informations de profil. Pour les babysitters, nous collectons également les documents de vérification."
        },
        {
          title: "2. Utilisation des données",
          text: "Vos données sont utilisées pour : faciliter la mise en relation entre familles et babysitters, vérifier l'identité et les qualifications, traiter les paiements, améliorer nos services, et communiquer avec vous."
        },
        {
          title: "3. Partage des données",
          text: "Nous ne vendons jamais vos données personnelles. Vos informations sont partagées uniquement avec les utilisateurs avec qui vous choisissez d'interagir sur la plateforme."
        },
        {
          title: "4. Sécurité des données",
          text: "Nous utilisons des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, modification, divulgation ou destruction."
        },
        {
          title: "5. Cookies",
          text: "Nous utilisons des cookies pour améliorer votre expérience utilisateur, analyser le trafic et personnaliser le contenu. Vous pouvez gérer vos préférences de cookies dans les paramètres de votre navigateur."
        },
        {
          title: "6. Vos droits",
          text: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression, de limitation du traitement, de portabilité et d'opposition concernant vos données personnelles."
        },
        {
          title: "7. Conservation des données",
          text: "Nous conservons vos données personnelles aussi longtemps que votre compte est actif ou selon les besoins pour vous fournir nos services, et conformément aux obligations légales."
        },
        {
          title: "8. Contact",
          text: "Pour toute question concernant cette politique de confidentialité, contactez-nous à : privacy@sky-nanny.com"
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdate: "Last updated: January 1, 2025",
      sections: [
        {
          title: "1. Data Collection",
          text: "We collect information you provide during registration: name, email, phone, and profile information. For babysitters, we also collect verification documents."
        },
        {
          title: "2. Data Usage",
          text: "Your data is used to: facilitate connections between families and babysitters, verify identity and qualifications, process payments, improve our services, and communicate with you."
        },
        {
          title: "3. Data Sharing",
          text: "We never sell your personal data. Your information is shared only with users you choose to interact with on the platform."
        },
        {
          title: "4. Data Security",
          text: "We use appropriate technical and organizational security measures to protect your data against unauthorized access, modification, disclosure, or destruction."
        },
        {
          title: "5. Cookies",
          text: "We use cookies to improve your user experience, analyze traffic, and personalize content. You can manage your cookie preferences in your browser settings."
        },
        {
          title: "6. Your Rights",
          text: "Under GDPR, you have rights of access, rectification, deletion, limitation of processing, portability, and opposition regarding your personal data."
        },
        {
          title: "7. Data Retention",
          text: "We retain your personal data as long as your account is active or as needed to provide our services, and in accordance with legal obligations."
        },
        {
          title: "8. Contact",
          text: "For any questions regarding this privacy policy, contact us at: privacy@sky-nanny.com"
        }
      ]
    },
    es: {
      title: "Política de Privacidad",
      lastUpdate: "Última actualización: 1 de enero de 2025",
      sections: [
        {
          title: "1. Recopilación de datos",
          text: "Recopilamos la información que proporciona durante el registro: nombre, correo electrónico, teléfono e información de perfil. Para las niñeras, también recopilamos documentos de verificación."
        },
        {
          title: "2. Uso de datos",
          text: "Sus datos se utilizan para: facilitar conexiones entre familias y niñeras, verificar identidad y calificaciones, procesar pagos, mejorar nuestros servicios y comunicarnos con usted."
        },
        {
          title: "3. Compartir datos",
          text: "Nunca vendemos sus datos personales. Su información se comparte solo con usuarios con los que elige interactuar en la plataforma."
        },
        {
          title: "4. Seguridad de datos",
          text: "Utilizamos medidas de seguridad técnicas y organizativas apropiadas para proteger sus datos contra acceso no autorizado, modificación, divulgación o destrucción."
        },
        {
          title: "5. Cookies",
          text: "Utilizamos cookies para mejorar su experiencia de usuario, analizar el tráfico y personalizar el contenido. Puede gestionar sus preferencias de cookies en la configuración de su navegador."
        },
        {
          title: "6. Sus derechos",
          text: "Según el RGPD, tiene derechos de acceso, rectificación, eliminación, limitación del procesamiento, portabilidad y oposición con respecto a sus datos personales."
        },
        {
          title: "7. Conservación de datos",
          text: "Conservamos sus datos personales mientras su cuenta esté activa o según sea necesario para proporcionar nuestros servicios, y de acuerdo con las obligaciones legales."
        },
        {
          title: "8. Contacto",
          text: "Para cualquier pregunta sobre esta política de privacidad, contáctenos en: privacy@sky-nanny.com"
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

export default PrivacyPage;