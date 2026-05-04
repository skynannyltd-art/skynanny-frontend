import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsPage = () => {
  const { t, i18n } = useTranslation();

  const content = {
    fr: {
      title: "Conditions Générales d'Utilisation",
      lastUpdate: "Dernière mise à jour : 1er janvier 2025",
      sections: [
        {
          title: "1. Acceptation des conditions",
          text: "En accédant et en utilisant la plateforme SkyNanny, vous acceptez d'être lié par ces conditions générales d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services."
        },
        {
          title: "2. Description du service",
          text: "SkyNanny est une plateforme qui met en relation des familles avec des babysitters qualifiés voyageant sur le même vol. Nous facilitons la connexion mais ne sommes pas responsables des services de garde fournis."
        },
        {
          title: "3. Inscription et compte utilisateur",
          text: "Pour utiliser nos services, vous devez créer un compte avec des informations exactes et à jour. Vous êtes responsable de la confidentialité de votre mot de passe et de toute activité sur votre compte."
        },
        {
          title: "4. Vérification des babysitters",
          text: "Tous les babysitters sont vérifiés (casier judiciaire, diplômes PSC1, références). Cependant, les familles restent responsables de leurs propres décisions de sélection."
        },
        {
          title: "5. Paiements et remboursements",
          text: "Les paiements sont sécurisés et traités via notre plateforme. Les politiques de remboursement s'appliquent en cas d'annulation conformément à nos conditions spécifiques."
        },
        {
          title: "6. Responsabilités",
          text: "SkyNanny agit comme intermédiaire. Nous ne sommes pas responsables des dommages directs ou indirects résultant de l'utilisation de nos services ou des interactions entre utilisateurs."
        },
        {
          title: "7. Modification des conditions",
          text: "Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications seront effectives dès leur publication sur la plateforme."
        },
        {
          title: "8. Loi applicable",
          text: "Ces conditions sont régies par le droit français. Tout litige sera soumis à la compétence exclusive des tribunaux de Paris, France."
        }
      ]
    },
    en: {
      title: "Terms and Conditions",
      lastUpdate: "Last updated: January 1, 2025",
      sections: [
        {
          title: "1. Acceptance of Terms",
          text: "By accessing and using the SkyNanny platform, you agree to be bound by these terms and conditions. If you do not accept these terms, please do not use our services."
        },
        {
          title: "2. Service Description",
          text: "SkyNanny is a platform that connects families with qualified babysitters traveling on the same flight. We facilitate the connection but are not responsible for the childcare services provided."
        },
        {
          title: "3. Registration and User Account",
          text: "To use our services, you must create an account with accurate and up-to-date information. You are responsible for maintaining the confidentiality of your password and all activity on your account."
        },
        {
          title: "4. Babysitter Verification",
          text: "All babysitters are verified (background check, first aid certificates, references). However, families remain responsible for their own selection decisions."
        },
        {
          title: "5. Payments and Refunds",
          text: "Payments are secure and processed through our platform. Refund policies apply in case of cancellation according to our specific terms."
        },
        {
          title: "6. Responsibilities",
          text: "SkyNanny acts as an intermediary. We are not responsible for direct or indirect damages resulting from the use of our services or interactions between users."
        },
        {
          title: "7. Modification of Terms",
          text: "We reserve the right to modify these terms at any time. Modifications will be effective upon publication on the platform."
        },
        {
          title: "8. Applicable Law",
          text: "These terms are governed by French law. Any dispute will be submitted to the exclusive jurisdiction of the courts of Paris, France."
        }
      ]
    },
    es: {
      title: "Términos y Condiciones",
      lastUpdate: "Última actualización: 1 de enero de 2025",
      sections: [
        {
          title: "1. Aceptación de los términos",
          text: "Al acceder y utilizar la plataforma SkyNanny, acepta estar sujeto a estos términos y condiciones. Si no acepta estos términos, no utilice nuestros servicios."
        },
        {
          title: "2. Descripción del servicio",
          text: "SkyNanny es una plataforma que conecta familias con niñeras calificadas que viajan en el mismo vuelo. Facilitamos la conexión pero no somos responsables de los servicios de cuidado infantil proporcionados."
        },
        {
          title: "3. Registro y cuenta de usuario",
          text: "Para usar nuestros servicios, debe crear una cuenta con información precisa y actualizada. Es responsable de mantener la confidencialidad de su contraseña y toda la actividad en su cuenta."
        },
        {
          title: "4. Verificación de niñeras",
          text: "Todas las niñeras están verificadas (antecedentes penales, certificados de primeros auxilios, referencias). Sin embargo, las familias siguen siendo responsables de sus propias decisiones de selección."
        },
        {
          title: "5. Pagos y reembolsos",
          text: "Los pagos son seguros y se procesan a través de nuestra plataforma. Las políticas de reembolso se aplican en caso de cancelación según nuestros términos específicos."
        },
        {
          title: "6. Responsabilidades",
          text: "SkyNanny actúa como intermediario. No somos responsables de los daños directos o indirectos resultantes del uso de nuestros servicios o interacciones entre usuarios."
        },
        {
          title: "7. Modificación de los términos",
          text: "Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones serán efectivas tras su publicación en la plataforma."
        },
        {
          title: "8. Ley aplicable",
          text: "Estos términos se rigen por la ley francesa. Cualquier disputa se someterá a la jurisdicción exclusiva de los tribunales de París, Francia."
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

export default TermsPage;