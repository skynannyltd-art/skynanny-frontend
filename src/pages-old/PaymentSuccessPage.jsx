import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { getPaymentStatus } from '../services/api';
import { CheckCircle } from 'lucide-react';

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      checkPaymentStatus(sessionId);
    }
  }, [searchParams]);

  const checkPaymentStatus = async (sessionId) => {
    try {
      const data = await getPaymentStatus(sessionId);
      setBooking(data.booking);
    } catch (error) {
      console.error('Erreur vérification paiement:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Réservation confirmée !
        </h1>

        <p className="text-gray-600 mb-8">
          Votre paiement a été effectué avec succès. Vous allez recevoir un email de confirmation.
        </p>

        {booking && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-semibold mb-2">Détails de votre réservation :</h3>
            <div className="space-y-1 text-sm text-gray-700">
              <div>Référence : {booking.booking_reference}</div>
              <div>Date : {new Date(booking.booking_date).toLocaleDateString('fr-FR')}</div>
              <div>Horaires : {booking.start_time} - {booking.end_time}</div>
              <div>Montant payé : {booking.total_amount}€</div>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <button
            onClick={() => navigate('/bookings')}
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Voir mes réservations
          </button>
          <button
            onClick={() => navigate('/')}
            className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;