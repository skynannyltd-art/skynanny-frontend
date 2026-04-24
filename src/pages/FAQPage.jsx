import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Pour les Familles",
      items: [
        { q: "Comment fonctionne SkyNanny ?", a: "SkyNanny met en relation des familles avec des babysitters qualifies qui voyagent sur le meme vol. Vous recherchez votre vol, trouvez un babysitter disponible, echangez via notre messagerie securisee, puis confirmez la reservation." },
        { q: "Combien coute le service pour les familles ?", a: "Les familles paient 30% du prix du billet de avion de la babysitter, plus une commission de service de 5%. Par exemple, si le billet de la babysitter coute 300 euros, vous paierez 90 euros + 4,50 euros de commission, soit 94,50 euros au total." },
        { q: "Comment sont verifies les babysitters ?", a: "Chaque babysitter doit fournir un casier judiciaire vierge (bulletin numero 3), une certification PSC1 (premiers secours), et une piece de identite valide. Notre equipe verifie manuellement tous ces documents avant approbation du profil." },
        { q: "Puis-je annuler ma reservation ?", a: "Oui. Les annulations sont gratuites jusque 72h avant le vol (remboursement integral). Entre 72h et 24h avant le vol, des frais de 50% sont appliques. Moins de 24h avant le vol, aucun remboursement sauf cas de force majeure." },
        { q: "Que se passe-t-il si le babysitter annule ?", a: "Si un babysitter annule, nous vous proposons immediatement autres babysitters disponibles sur votre vol. Si aucun remplacement est trouve, vous etes rembourse integralement dans les 48h." },
        { q: "Le babysitter peut-il occuper de plusieurs enfants ?", a: "Oui, la plupart de nos babysitters peuvent occuper de 2 a 3 enfants simultanement. Le nombre exact est indique sur chaque profil. Le tarif reste le meme quel que soit le nombre enfants." },
        { q: "Puis-je rencontrer le babysitter avant le vol ?", a: "Oui, nous encourageons cette pratique. Vous pouvez organiser un appel video ou une rencontre dans un lieu public (cafe pres de aeroport par exemple) avant le vol pour faire connaissance." }
      ]
    },
    {
      category: "Pour les Babysitters",
      items: [
        { q: "Comment devenir babysitter sur SkyNanny ?", a: "Creez un compte babysitter, completez votre profil avec vos experiences, puis uploadez les documents requis : casier judiciaire, certification PSC1, et piece identite. Notre equipe verifie vos documents sous 48h." },
        { q: "Combien puis-je gagner en tant que babysitter ?", a: "Vous recevez 30% du prix de votre billet de avion, moins 5% de commission SkyNanny. Par exemple, si votre billet coute 300 euros, vous recevrez 90 euros moins 4,50 euros, soit 85,50 euros. Le paiement est effectue 7 jours apres le vol." },
        { q: "Dois-je payer mon billet de avion ?", a: "Oui, vous achetez abord votre billet normalement. Ensuite, vous uploadez la preuve achat sur SkyNanny, et nous validons votre disponibilite sur ce vol. Une fois une famille vous engage, vous etes remunere." },
        { q: "Quels documents sont obligatoires ?", a: "Vous devez fournir : 1) Un casier judiciaire vierge (bulletin numero 3, moins de 3 mois), 2) Une certification PSC1 ou equivalent valide, 3) Une piece identite en cours de validite, 4) La preuve achat de votre billet pour chaque vol propose." },
        { q: "Puis-je refuser une demande de famille ?", a: "Oui, absolument. Vous etes libre accepter ou refuser toute demande. Nous vous recommandons echanger abord avec la famille via notre messagerie pour vous assurer que est un bon match." },
        { q: "Suis-je assure pendant la prestation ?", a: "Vous devez avoir votre propre assurance responsabilite civile professionnelle. Nous recommandons egalement une assurance accidents corporels. SkyNanny ne fournit pas assurance car vous exercez en tant que independant." },
        { q: "Combien de fois puis-je proposer mes services ?", a: "Il ny a pas de limite. Vous pouvez proposer vos services sur autant de vols que vous souhaitez, tant que vous uploadez la preuve de votre billet pour chaque vol." }
      ]
    },
    {
      category: "Reservation et Paiement",
      items: [
        { q: "Comment effectuer une reservation ?", a: "1) Recherchez votre vol par numero ou ville, 2) Consultez les profils des babysitters disponibles, 3) Contactez celui qui vous convient via la messagerie, 4) Une fois accord, cliquez sur Reserver, 5) Effectuez le paiement securise via Stripe." },
        { q: "Quels moyens de paiement acceptez-vous ?", a: "Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express) via notre partenaire Stripe. Les paiements sont 100% securises et cryptes. Nous ne stockons jamais vos coordonnees bancaires." },
        { q: "Quand le babysitter est-il paye ?", a: "Le babysitter recoit son paiement 7 jours apres le vol, une fois que la prestation est confirmee. Cela permet de gerer eventuels litiges. Le paiement est effectue par virement bancaire direct." },
        { q: "Puis-je payer en especes au babysitter ?", a: "Non, tous les paiements doivent obligatoirement passer par la plateforme SkyNanny. Cela garantit la securite des deux parties, permet le suivi des transactions, et assure que les verifications ont bien ete effectuees." },
        { q: "Y a-t-il des frais caches ?", a: "Non, tous les frais sont transparents et affiches avant validation. Les familles paient 30% du billet de la babysitter plus 5% de commission. Les babysitters recoivent 30% du billet moins 5% de commission. Aucun autre frais est applique." }
      ]
    },
    {
      category: "Securite et Confiance",
      items: [
        { q: "Comment puis-je etre sur que le babysitter est fiable ?", a: "Tous nos babysitters sont verifies : casier judiciaire vierge, certification PSC1, identite confirmee. Vous pouvez consulter les avis autres familles, voir leur experience detaillee, et echanger directement avant de reserver." },
        { q: "Que faire en cas de probleme pendant le vol ?", a: "Contactez immediatement notre support via email contact@sky-nanny.com. Nous sommes disponibles pour les urgences. Si le probleme est grave, signalez-le egalement au personnel de bord. Apres le vol, vous pouvez deposer un signalement sur la plateforme." },
        { q: "Les conversations sont-elles privees ?", a: "Oui, notre messagerie est securisee et cryptee. Cependant, SkyNanny se reserve le droit de consulter les conversations en cas de signalement ou de litige, pour garantir la securite de tous." },
        { q: "Que se passe-t-il si le babysitter ne se presente pas ?", a: "Si un babysitter ne se presente pas sans justification valable, vous etes immediatement rembourse integralement, et le babysitter est sanctionne (suspension ou bannissement). Nous vous proposerons egalement un avoir pour votre prochain vol." }
      ]
    },
    {
      category: "Technique et Compte",
      items: [
        { q: "Comment creer un compte ?", a: "Cliquez sur Inscrire en haut de la page, choisissez votre type de compte (famille ou babysitter), remplissez vos informations, et validez votre email. Pour les babysitters, il faudra ensuite completer le profil et uploader les documents requis." },
        { q: "Jai oublie mon mot de passe, que faire ?", a: "Cliquez sur Se connecter, puis sur Mot de passe oublie. Entrez votre email, et vous recevrez un lien pour reinitialiser votre mot de passe. Le lien est valide 1 heure." },
        { q: "Puis-je modifier mon profil apres inscription ?", a: "Oui, vous pouvez modifier votre profil a tout moment depuis votre espace personnel. Cependant, si vous modifiez des informations sensibles (nom, documents), notre equipe devra re-verifier votre compte." },
        { q: "Comment supprimer mon compte ?", a: "Allez dans Parametres puis Compte puis Supprimer mon compte. Attention, cette action est irreversible. Vos donnees seront supprimees sous 30 jours, sauf obligation legale de conservation (historique de paiement par exemple)." },
        { q: "Application mobile est-elle disponible ?", a: "Pas encore, mais elle est en developpement. Pour instant, le site est 100% responsive et fonctionne parfaitement sur mobile via votre navigateur. App iOS et Android sera disponible courant 2026." }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">Questions Frequentes</h1>
          <p className="text-xl text-gray-600">Toutes les reponses a vos questions sur SkyNanny</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          {faqs.map((section, sIdx) => (
            <div key={sIdx}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">{section.category}</h2>
              <div className="space-y-3">
                {section.items.map((item, iIdx) => {
                  const idx = sIdx * 100 + iIdx;
                  const isOpen = openIndex === idx;
                  return (
                    <div key={iIdx} className="bg-white border border-gray-200 rounded-lg">
                      <button onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 text-left">
                        <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                        <ChevronDown size={20} className={'flex-shrink-0 text-gray-500 transition-transform ' + (isOpen ? 'rotate-180' : '')} />
                      </button>
                      {isOpen && <div className="px-6 pb-4 pt-2"><p className="text-gray-600 leading-relaxed">{item.a}</p></div>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vous ne trouvez pas votre reponse ?</h2>
          <p className="text-gray-600 mb-8">Notre equipe est la pour vous aider. Contactez-nous et nous vous repondrons dans les 24h.</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition">Nous contacter</a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;