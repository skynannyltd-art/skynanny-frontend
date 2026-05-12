import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, MapPin, Calendar, Plane, Clock, Users, Baby, 
  Star, Shield, Heart, MessageCircle, CheckCircle, AlertCircle 
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FamilyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [ticketPrice, setTicketPrice] = useState('');
  const [calculatedCompensation, setCalculatedCompensation] = useState(null);

  // Mock data - À remplacer par API call
  const family = {
    id: id,
    name: 'Famille Martin',
    destination: 'New York',
    departureCity: 'Paris',
    departureDate: '2026-06-15',
    flightNumber: 'AF1234',
    departureTime: '10:30',
    arrivalTime: '14:45',
    duration: '8h15',
    airline: 'Air France',
    children: [
      { id: 1, name: 'Emma', age: 3, gender: 'Fille', needs: 'Allergies aux arachides' },
      { id: 2, name: 'Lucas', age: 5, gender: 'Garçon', needs: 'Aime les dinosaures' }
    ],
    description: "Famille sympathique cherchant une babysitter bienveillante pour accompagner nos deux enfants pendant notre vol vers New York. Nous voyageons pour des vacances en famille. Emma et Lucas sont des enfants calmes et bien élevés.",
    requirements: [
      'Expérience avec enfants en bas âge',
      'Certificat de premiers secours',
      'Patience et douceur',
      'Parle français et anglais (souhaité)'
    ],
    activities: [
      'Jeux calmes',
      'Lecture d\'histoires',
      'Aide aux repas',
      'Accompagnement aux toilettes'
    ],
    parentInfo: {
      motherName: 'Sophie Martin',
      fatherName: 'Pierre Martin',
      phone: '+33 6 12 34 56 78',
      email: 'sophie.martin@email.com',
      verified: true,
      memberSince: '2025',
      rating: 4.8,
      reviewsCount: 12
    },
    images: ['👨‍👩‍👧‍👦', '✈️', '🧸'], // À remplacer par vraies images
    reviews: [
      {
        id: 1,
        babysitterName: 'Marie Dubois',
        rating: 5,
        date: '2026-03-15',
        comment: 'Famille adorable ! Les enfants étaient bien préparés et les parents très organisés. Belle expérience !'
      },
      {
        id: 2,
        babysitterName: 'Julie Petit',
        rating: 5,
        date: '2026-01-10',
        comment: 'Excellente communication avec les parents. Emma et Lucas sont des enfants merveilleux. Je recommande !'
      }
    ]
  };

  const handleApply = () => {
    alert(t('familyDetail.applicationSent'));
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const calculateCompensation = () => {
  if (!ticketPrice || ticketPrice <= 0) {
    alert(t('familyDetail.enterTicketPrice'));
    return;
  }
  
  const ticket = parseFloat(ticketPrice);
  const commission = ticket * 0.30; // 30% commission
  const platformFee = commission * 0.05; // 5% frais plateforme
  const babysitterNet = commission - platformFee;
  const familyCost = commission + platformFee;
  
  setCalculatedCompensation({
    ticketPrice: ticket,
    commission: commission,
    platformFee: platformFee,
    babysitterReceives: babysitterNet,
    familyPays: familyCost,
    skynannyFee: platformFee * 2 // 5% famille + 5% babysitter
  });
};
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header avec retour */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-primary transition"
          >
            <ArrowLeft size={20} />
            {t('common.back')}
          </button>
        </div>
      </section>

      {/* Contenu Principal */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Colonne Principale - Gauche */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Card Info Vol */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{family.name}</h1>
                    <div className="flex items-center gap-2 text-lg text-gray-600">
                      <MapPin size={20} className="text-primary" />
                      {family.departureCity} → {family.destination}
                    </div>
                  </div>
                  <button
                    onClick={toggleFavorite}
                    className={`p-3 rounded-full transition ${
                      isFavorite ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-400 hover:text-red-600'
                    }`}
                  >
                    <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Détails Vol */}
                <div className="grid md:grid-cols-2 gap-4 mb-6 p-4 bg-blue-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Plane className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t('familyDetail.flightNumber')}</p>
                      <p className="font-semibold text-gray-900">{family.flightNumber} - {family.airline}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Calendar className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t('familyDetail.date')}</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(family.departureDate).toLocaleDateString('fr-FR', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t('familyDetail.schedule')}</p>
                      <p className="font-semibold text-gray-900">{family.departureTime} - {family.arrivalTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{t('familyDetail.duration')}</p>
                      <p className="font-semibold text-gray-900">{family.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('familyDetail.description')}</h3>
                  <p className="text-gray-700 leading-relaxed">{family.description}</p>
                </div>

                {/* Enfants */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Baby size={24} className="text-pink-600" />
                    {t('familyDetail.children')} ({family.children.length})
                  </h3>
                  <div className="space-y-3">
                    {family.children.map((child) => (
                      <div key={child.id} className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl">
                        <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-2xl">
                          {child.gender === 'Fille' ? '👧' : '👦'}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">{child.name}</h4>
                            <span className="text-sm text-gray-600">• {child.age} {t('familyDetail.years')}</span>
                          </div>
                          {child.needs && (
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                              <AlertCircle size={16} className="text-orange-500" />
                              {child.needs}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exigences */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('familyDetail.requirements')}</h3>
                  <ul className="space-y-2">
                    {family.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Activités */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('familyDetail.activities')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {family.activities.map((activity, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Avis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <Star size={24} className="text-yellow-500" fill="currentColor" />
                  {t('familyDetail.reviews')} ({family.reviews.length})
                </h3>
                <div className="space-y-4">
                  {family.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-semibold text-gray-900">{review.babysitterName}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(review.date).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={16} className="text-yellow-500" fill="currentColor" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

           {/* Colonne Droite - Card Calculateur */}
<div className="lg:col-span-1">
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
  >
    {/* Calculateur de Compensation */}
    <div className="mb-6 pb-6 border-b">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        {t('familyDetail.calculator')}
      </h3>
      
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t('familyDetail.yourTicketPrice')}
      </label>
      <div className="relative mb-4">
        <input
          type="number"
          value={ticketPrice}
          onChange={(e) => setTicketPrice(e.target.value)}
          placeholder="450"
          className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-lg"
        />
        <span className="absolute right-3 top-3 text-gray-500">€</span>
      </div>

      <button
        onClick={calculateCompensation}
        className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
      >
        {t('familyDetail.calculate')}
      </button>

      {calculatedCompensation && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-50 rounded-lg"
        >
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">{t('familyDetail.commission')}</span>
              <span className="font-semibold">{calculatedCompensation.commission.toFixed(2)}€</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">{t('familyDetail.platformFee')}</span>
              <span className="text-red-600">-{calculatedCompensation.platformFee.toFixed(2)}€</span>
            </div>
            <div className="border-t pt-2 flex justify-between">
              <span className="font-semibold text-green-700">{t('familyDetail.youReceive')}</span>
              <span className="font-bold text-green-700 text-lg">
                {calculatedCompensation.babysitterReceives.toFixed(2)}€
              </span>
            </div>
          </div>
        </motion.div>
      )}

      <p className="text-xs text-gray-500 mt-3">
        {t('familyDetail.calculatorNote')}
      </p>
    </div>

    {/* Info Parents */}
    <div className="mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-3xl">
          👨‍👩‍👧‍👦
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-gray-900">{family.parentInfo.motherName}</h4>
            {family.parentInfo.verified && (
              <Shield size={16} className="text-green-500" />
            )}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Star size={14} className="text-yellow-500" fill="currentColor" />
            {family.parentInfo.rating} • {family.parentInfo.reviewsCount} {t('familyDetail.reviews')}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        {t('familyDetail.memberSince')} {family.parentInfo.memberSince}
      </p>
    </div>

    {/* Boutons Actions */}
    <div className="space-y-3">
      <button
        onClick={handleApply}
        className="w-full bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition font-semibold text-lg flex items-center justify-center gap-2"
      >
        <CheckCircle size={20} />
        {t('familyDetail.applyButton')}
      </button>

      <button className="w-full border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition font-semibold flex items-center justify-center gap-2">
        <MessageCircle size={20} />
        {t('familyDetail.contactButton')}
      </button>
    </div>

    {/* Info Sécurité */}
    <div className="mt-6 p-4 bg-green-50 rounded-lg">
      <div className="flex items-start gap-2">
        <Shield size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-green-900 mb-1">
            {t('familyDetail.securityTitle')}
          </p>
          <p className="text-xs text-green-700">
            {t('familyDetail.securityDesc')}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FamilyDetailPage;