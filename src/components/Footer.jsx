const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      {/* Navigation Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 mb-6">
          <a href="/about" className="hover:text-gray-900 transition">À propos</a>
          <a href="/contact" className="hover:text-gray-900 transition">Contact</a>
          <a href="/security" className="hover:text-gray-900 transition">Centre de Sécurité</a>
          <a href="/magazine" className="hover:text-gray-900 transition">Magazine</a>
          <a href="/faqs" className="hover:text-gray-900 transition">FAQs</a>
        </div>

        {/* Liens légaux */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500 mb-6">
          <a href="/legal/cgv-fr.html" className="hover:text-gray-700 transition">Conditions de vente</a>
          <a href="/legal/cgv-fr.html" className="hover:text-gray-700 transition">Conditions d'utilisation</a>
          <a href="/mentions-legales" className="hover:text-gray-700 transition">Mentions légales</a>
          <a href="/legal/confidentialite.html" className="hover:text-gray-700 transition">Protection des données</a>
          <a href="/plan-du-site" className="hover:text-gray-700 transition">Plan du site</a>
          <a href="/cookies" className="hover:text-gray-700 transition">Modifier les paramètres des cookies</a>
        </div>

        {/* Sélecteur de pays */}
        <div className="flex justify-center mb-6">
          <select className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 focus:outline-none focus:border-primary">
            <option value="fr">France</option>
            <option value="be">Belgique</option>
            <option value="ch">Suisse</option>
            <option value="ca">Canada</option>
          </select>
        </div>

        {/* Texte légal */}
        <div className="max-w-4xl mx-auto text-xs text-gray-500 leading-relaxed text-center mb-4">
          <p className="mb-3">
            SkyNanny est une plateforme en ligne permettant de connecter les familles et les babysitters pour des vols en avion. 
            Les familles à la recherche de babysitters peuvent être contactées par les babysitters et consulter des profils sans frais. 
            Contacter les babysitters requiert cependant une mise en relation payante (commission 10%). Nous ne mettons pas directement en contact les familles 
            et les babysitters, ni ne sélectionnons d'annonces pour les babysitters ou de profils de babysitters à destination des familles.
          </p>
          <p>
            SkyNanny ne vérifie pas l'identité ou la véracité des informations communiquées par les familles ou les babysitters. 
            Pour plus d'informations sur la vérification de l'identité et des informations postées par les autres membres, 
            nous vous invitons à visiter notre <a href="/security" className="underline hover:text-gray-700">Centre de Sécurité</a>.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-400">
          <p>SkyNanny est une marque déposée de SkyNanny Inc. © 2025-2026 SkyNanny Europe GmbH.</p>
          <p className="mt-1">Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;