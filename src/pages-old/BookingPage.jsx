import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBabysitterById, createBooking, createCheckoutSession } from '../services/api';
import { Calendar, Clock, Euro } from 'lucide-react';

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [babysitter, setBabysitter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Formulaire
  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    childrenCount: 1,
    specialRequests: '',
  });

  // Calculs
  const [duration, setDuration] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    loadBabysitter();
  }, [id]);

  useEffect(() => {
    calculatePrice();
  }, [formData.startTime, formData.endTime, babysitter]);

  const loadBabysitter = async () => {
    try {
      setLoading(true);
      const data = await getBabysitterById(id);
      setBabysitter(data.babysitter);
    } catch (error) {
      console.error('Erreur chargement babysitter:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculatePrice = () => {
    if (!formData.startTime || !formData.endTime || !babysitter) {
      setDuration(0);
      setTotalPrice(0);
      return;
    }

    const start = new Date(`2000-01-01T${formData.startTime}`);
    const end = new Date(`2000-01-01T${formData.endTime}`);
    
    if (end <= start) {
      setDuration(0);
      setTotalPrice(0);
      return;
    }

    const hours = (end - start) / (1000 * 60 * 60);
    setDuration(hours);
    
    const basePrice = hours * parseFloat(babysitter.hourly_rate);
    const platformFee = basePrice * 0.05;
    const total = basePrice + platformFee;
    
    setTotalPrice(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.date || !formData.startTime || !formData.endTime) {
      alert('Veuillez remplir tous les champs obligatoires');
      return;
    }

    if (duration <= 0) {
      alert('L\'heure de fin doit être après l\'heure de début');
      return;
    }

    try {
      setSubmitting(true);

      // 1. Créer la réservation
      const bookingData = {
        babysitter_id: parseInt(id),
        booking_date: formData.date,
        start_time: formData.startTime,
        end_time: formData.endTime,
        children_count: parseInt(formData.childrenCount),
        special_requests: formData.specialRequests,
        total_amount: totalPrice,
      };

      const bookingResponse = await createBooking(bookingData);

      // 2. Créer la session Stripe
      const checkoutResponse = await createCheckoutSession(bookingResponse.booking.id);

      // 3. Rediriger vers Stripe
      window.location.href = checkoutResponse.url;

    } catch (error) {
      console.error('Erreur création réservation:', error);
      alert(error.response?.data?.error || 'Erreur lors de la réservation');
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!babysitter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Babysitter non trouvée</h2>
          <button
            onClick={() => navigate('/babysitters')}
            className="text-primary hover:underline"
          >
            Retour à la recherche
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(`/babysitters/${id}`)}
            className="text-primary hover:underline"
          >
            ← Retour au profil
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Réserver {babysitter.first_name}
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Formulaire */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="inline mr-2" size={18} />
                      Date de garde
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Heures */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline mr-2" size={18} />
                        Heure de début
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.startTime}
                        onChange={(e) => setFormData({ ...formData, startTime: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Heure de fin
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.endTime}
                        onChange={(e) => setFormData({ ...formData, endTime: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Nombre d'enfants */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre d'enfants
                    </label>
                    <select
                      value={formData.childrenCount}
                      onChange={(e) => setFormData({ ...formData, childrenCount: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="1">1 enfant</option>
                      <option value="2">2 enfants</option>
                      <option value="3">3 enfants</option>
                      <option value="4">4 enfants ou plus</option>
                    </select>
                  </div>

                  {/* Demandes spéciales */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Demandes spéciales (optionnel)
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Informations importantes sur les enfants, allergies, routines..."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>

                  {/* Bouton */}
                  <button
                    type="submit"
                    disabled={submitting || duration <= 0}
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Redirection vers le paiement...' : 'Continuer vers le paiement'}
                  </button>
                </form>
              </div>
            </div>

            {/* Récapitulatif */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Récapitulatif</h3>

                {/* Babysitter */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {babysitter.first_name?.[0]}{babysitter.last_name?.[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{babysitter.first_name}</div>
                    <div className="text-sm text-gray-600">{babysitter.hourly_rate}€/h</div>
                  </div>
                </div>

                {/* Détails */}
                <div className="space-y-2 text-sm mb-4">
                  {formData.date && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date</span>
                      <span className="font-medium">
                        {new Date(formData.date + 'T00:00').toLocaleDateString('fr-FR')}
                      </span>
                    </div>
                  )}
                  {formData.startTime && formData.endTime && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Horaires</span>
                      <span className="font-medium">
                        {formData.startTime} - {formData.endTime}
                      </span>
                    </div>
                  )}
                  {duration > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Durée</span>
                      <span className="font-medium">{duration}h</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Enfants</span>
                    <span className="font-medium">{formData.childrenCount}</span>
                  </div>
                </div>

                {/* Prix */}
                {totalPrice > 0 && (
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Tarif horaire</span>
                      <span>{babysitter.hourly_rate}€/h</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Durée</span>
                      <span>× {duration}h</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Frais de service (5%)</span>
                      <span>{(totalPrice - (duration * babysitter.hourly_rate)).toFixed(2)}€</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-primary mt-4 pt-4 border-t">
                      <span>Total</span>
                      <span>{totalPrice.toFixed(2)}€</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;