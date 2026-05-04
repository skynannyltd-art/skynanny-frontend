import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LegalPage = () => {
  const { i18n } = useTranslation();

  const content = {
    fr: {
      title: "Mentions Légales",
      lastUpdate: "Dernière mise à jour : 1er janvier 2025",
      sections: [
        {
          title: "1. Éditeur du site",
          text: "SkyNanny SAS - Société par Actions Simplifiée au capital de 50 000€. Siège social : 123 Avenue des Champs-Élysées, 75008 Paris, France. RCS Paris 123 456 789. Numéro de TVA intracommunautaire : FR12345678901."
        },
        {
          title: "2. Directeur de publication",
          text: "Directeur de la publication : [Nom du directeur]. Contact : contact@sky-nanny.com"
        },
        {
          title: "3. Hébergement",
          text: "Le site est hébergé par : [Nom de l'hébergeur], [Adresse], [Code postal] [Ville], [Pays]. Téléphone : [Numéro]. Site web : [URL]."
        },
        {
          title: "4. Propriété intellectuelle",
          text: "L'ensemble du contenu de ce site (textes, images, vidéos, logo) est la propriété exclusive de SkyNanny SAS, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable."
        },
        {
          title: "5. Données personnelles",
          text: "Les données personnelles collectées sont traitées conformément au RGPD. Pour plus d'informations, consultez notre Politique de Confidentialité. Responsable du traitement : SkyNanny SAS."
        },
        {
          title: "6. Cookies",
          text: "Le site utilise des cookies. Pour en savoir plus sur leur utilisation et vos droits, consultez notre Politique de Cookies."
        },
        {
          title: "7. Limitation de responsabilité",
          text: "SkyNanny s'efforce d'assurer l'exactitude des informations diffusées sur le site, mais ne peut garantir l'absence d'erreurs. L'utilisateur est seul responsable de l'utilisation qu'il fait des informations."
        },
        {
          title: "8. Loi applicable",
          text: "Le présent site et les mentions légales sont soumis au droit français. Tout litige sera de la compétence exclusive des tribunaux de Paris."
        }
      ]
    },
    en: {
      title: "Legal Notice",
      lastUpdate: "Last updated: January 1, 2025",
      sections: [
        {
          title: "1. Site Publisher",
          text: "SkyNanny SAS - Simplified Joint Stock Company with capital of €50,000. Registered office: 123 Avenue des Champs-Élysées, 75008 Paris, France. RCS Paris 123 456 789. VAT number: FR12345678901."
        },
        {
          title: "2. Publication Director",
          text: "Publication Director: [Director Name]. Contact: contact@sky-nanny.com"
        },
        {
          title: "3. Hosting",
          text: "The site is hosted by: [Host Name], [Address], [Postal Code] [City], [Country]. Phone: [Number]. Website: [URL]."
        },
        {
          title: "4. Intellectual Property",
          text: "All content on this site (texts, images, videos, logo) is the exclusive property of SkyNanny SAS, unless otherwise stated. Any reproduction, even partial, is prohibited without prior authorization."
        },
        {
          title: "5. Personal Data",
          text: "Personal data collected is processed in accordance with GDPR. For more information, see our Privacy Policy. Data controller: SkyNanny SAS."
        },
        {
          title: "6. Cookies",
          text: "The site uses cookies. To learn more about their use and your rights, see our Cookie Policy."
        },
        {
          title: "7. Liability Limitation",
          text: "SkyNanny strives to ensure the accuracy of information on the site but cannot guarantee the absence of errors. Users are solely responsible for their use of the information."
        },
        {
          title: "8. Applicable Law",
          text: "This site and legal notice are subject to French law. Any dispute will be under the exclusive jurisdiction of Paris courts."
        }
      ]
    },
    es: {
      title: "Aviso Legal",
      lastUpdate: "Última actualización: 1 de enero de 2025",
      sections: [
        {
          title: "1. Editor del sitio",
          text: "SkyNanny SAS - Sociedad Anónima Simplificada con capital de 50.000€. Domicilio social: 123 Avenue des Champs-Élysées, 75008 París, Francia. RCS París 123 456 789. Número de IVA: FR12345678901."
        },
        {
          title: "2. Director de publicación",
          text: "Director de publicación: [Nombre del director]. Contacto: contact@sky-nanny.com"
        },
        {
          title: "3. Alojamiento",
          text: "El sitio está alojado por: [Nombre del host], [Dirección], [Código postal] [Ciudad], [País]. Teléfono: [Número]. Sitio web: [URL]."
        },
        {
          title: "4. Propiedad intelectual",
          text: "Todo el contenido de este sitio (textos, imágenes, videos, logo) es propiedad exclusiva de SkyNanny SAS, salvo mención contraria. Cualquier reproducción, incluso parcial, está prohibida sin autorización previa."
        },
        {
          title: "5. Datos personales",
          text: "Los datos personales recopilados se procesan de acuerdo con el RGPD. Para más información, consulte nuestra Política de Privacidad. Responsable del tratamiento: SkyNanny SAS."
        },
        {
          title: "6. Cookies",
          text: "El sitio utiliza cookies. Para obtener más información sobre su uso y sus derechos, consulte nuestra Política de Cookies."
        },
        {
          title: "7. Limitación de responsabilidad",
          text: "SkyNanny se esfuerza por garantizar la exactitud de la información en el sitio, pero no puede garantizar la ausencia de errores. Los usuarios son los únicos responsables del uso de la información."
        },
        {
          title: "8. Ley aplicable",
          text: "Este sitio y el aviso legal están sujetos a la ley francesa. Cualquier disputa estará bajo la jurisdicción exclusiva de los tribunales de París."
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

export default LegalPage;