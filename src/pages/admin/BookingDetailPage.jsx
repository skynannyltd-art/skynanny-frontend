import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Plane, Calendar, Users, DollarSign, CheckCircle, XCircle, Clock, Mail, Phone } from 'lucide-react';

const BookingDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TEMPORAIRE : Mock data
    setTimeout(() => {
      const mockBookings = {
        '1': {
          id: 1,
          booking_reference: 'BK-2024-001',
          family_id: 5,
          family_name: 'Famille Dubois',
          family_email: 'dubois@test.com',
          family_phone: '+33612345678',
          babysitter_id: 9,
          babysitter_name: 'Marie Dupont',
          babysitter_email: 'marie.dupont@test.com',
          babysitter_phone: '+33687654321',
          flight_number: 'AF1234',
          airline: 'Air France',
          departure_airport: 'CDG',
          departure_city: 'Paris',
          arrival_airport: 'JFK',
          arrival_city: 'New York',
          departure_date: '2024-06-15',
          departure_time: '10:30',
          arrival_time: '13:45',
          number_of_children: 2,
          children_details: [
            { name: 'Emma Dubois', age: 3, special_needs: 'Allergie aux cacahuètes' },
            { name: 'Lucas Dubois', age: 5, special_needs: 'Aucune' }
          ],
          special_instructions: 'Les enfants aiment les histoires et les jeux calmes. Emma a besoin de sa peluche pour dormir.',
          total_family_payment: 141.75,
          babysitter_receives: 128.25,
          skynanny_commission: 13.50,
          payment_status: 'completed',
          payment_method: 'Carte bancaire',
          payment_date: '2024-04-26T10:30:00Z',
          booking_status: 'confirmed',
          created_at: '2024-04-26T09:00:00Z',
          confirmed_at: '2024-04-26T10:35:00Z'
        },
        '2': {
          id: 2,
          booking_reference: 'BK-2024-002',
          family_id: 6,
          family_name: 'Famille Martin',
          family_email: 'martin@test.com',
          family_phone: '+33698765432',
          babysitter_id: 10,
          babysitter_name: 'Sophie Martin',
          babysitter_email: 'sophie.martin@test.com',
          babysitter_phone: '+33612987654',
          flight_number: 'LH5678',
          airline: 'Lufthansa',
          departure_airport: 'ORY',
          departure_city: 'Paris',
          arrival_airport: 'FRA',
          arrival_city: 'Francfort',
          departure_date: '2024-06-20',
          departure_time: '14:15',
          arrival_time: '15:30',
          number_of_children: 1,
          children_details: [
            { name: 'Chloé Martin', age: 4, special_needs: 'Aucune' }
          ],
          special_instructions: 'Chloé est très timide au début mais s\'ouvre rapidement.',
          total_family_payment: 56.70,
          babysitter_receives: 51.30,
          skynanny_commission: 5.40,
          payment_status: 'pending',
          payment_method: null,
          payment_date: null,
          booking_status: 'pending',
          created_at: '2024-04-25T14:30:00Z',
          confirmed_at: null
        }
      };

      const bookingData = mockBookings[id];
      if (bookingData) {
        setBooking(bookingData);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const getStatusBadge = (status, type = 'booking') => {
    if (type === 'payment') {
      const badges = {
        pending: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'En attente', icon: Clock },
        completed: { bg: 'bg-green-100', text: 'text-green-700', label: 'Paye', icon: CheckCircle },
        failed: { bg: 'bg-red-100', text: 'text-red-700', label: 'Echoue', icon: XCircle },
      };
      const badge = badges[status] || badges.pending;
      const Icon = badge.icon;
      return (
        <span className={'inline-flex items-center gap-1 px-4 py-2 rounded-full font-medium ' + badge.bg + ' ' + badge.text}>
          <Icon size={16} />
          {badge.label}
        </span>
      );
    }

    const badges = {
      pending: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'En attente', icon: Clock },
      confirmed: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Confirmee', icon: CheckCircle },
      completed: { bg: 'bg-green-100', text: 'text-green-700', label: 'Terminee', icon: CheckCircle },
      cancelled: { bg: 'bg-red-100', text: 'text-red-700', label: 'Annulee', icon: XCircle },
    };
    
    const badge = badges[status] || badges.pending;
    const Icon = badge.icon;
    
    return (
      <span className={'inline-flex items-center gap-1 px-4 py-2 rounded-full font-medium ' + badge.bg + ' ' + badge.text}>
        <Icon size={16} />
        {badge.label}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Reservation non trouvee</p>
        <button onClick={() => navigate('/admin/bookings')} className="mt-4 text-primary hover:underline">
          Retour a la liste
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate('/admin/bookings')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} />
        Retour aux reservations
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Reservation #{booking.id}</h1>
                <p className="text-gray-500">Ref: {booking.booking_reference}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Creee le {new Date(booking.created_at).toLocaleDateString('fr-FR')} a {new Date(booking.created_at).toLocaleTimeString('fr-FR')}
                </p>
              </div>
              <div className="text-right">
                {getStatusBadge(booking.booking_status)}
                <div className="mt-2">
                  {getStatusBadge(booking.payment_status, 'payment')}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Plane size={20} />
                Informations Vol
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Numero de vol</p>
                  <p className="font-medium text-gray-900">{booking.flight_number}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Compagnie</p>
                  <p className="font-medium text-gray-900">{booking.airline}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Depart</p>
                  <p className="font-medium text-gray-900">{booking.departure_airport} - {booking.departure_city}</p>
                  <p className="text-sm text-gray-500">{new Date(booking.departure_date).toLocaleDateString('fr-FR')} - {booking.departure_time}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Arrivee</p>
                  <p className="font-medium text-gray-900">{booking.arrival_airport} - {booking.arrival_city}</p>
                  <p className="text-sm text-gray-500">{booking.arrival_time}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <User size={20} />
                  Famille
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Nom</p>
                    <p className="font-medium text-gray-900">{booking.family_name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-gray-400" />
                    <a href={'mailto:' + booking.family_email} className="text-primary hover:underline">{booking.family_email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-400" />
                    <a href={'tel:' + booking.family_phone} className="text-primary hover:underline">{booking.family_phone}</a>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <User size={20} />
                  Babysitter
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Nom</p>
                    <p className="font-medium text-gray-900">{booking.babysitter_name}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} className="text-gray-400" />
                    <a href={'mailto:' + booking.babysitter_email} className="text-primary hover:underline">{booking.babysitter_email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-400" />
                    <a href={'tel:' + booking.babysitter_phone} className="text-primary hover:underline">{booking.babysitter_phone}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users size={20} />
                Enfants ({booking.number_of_children})
              </h3>
              <div className="space-y-4">
                {booking.children_details.map((child, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{child.name}</p>
                        <p className="text-sm text-gray-600">{child.age} ans</p>
                      </div>
                      {child.special_needs !== 'Aucune' && (
                        <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">
                          Besoin special
                        </span>
                      )}
                    </div>
                    {child.special_needs !== 'Aucune' && (
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-medium">Note:</span> {child.special_needs}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {booking.special_instructions && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Instructions speciales</h3>
                <p className="text-gray-700">{booking.special_instructions}</p>
              </div>
            )}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6 sticky top-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <DollarSign size={20} />
              Details Financiers
            </h3>

            <div className="space-y-4">
              <div className="pb-4 border-b">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Famille paie</span>
                  <span className="text-xl font-bold text-gray-900">{booking.total_family_payment.toFixed(2)} €</span>
                </div>
              </div>

              <div className="pb-4 border-b">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Babysitter recoit</span>
                  <span className="text-lg font-semibold text-blue-600">{booking.babysitter_receives.toFixed(2)} €</span>
                </div>
              </div>

              <div className="pb-4 border-b">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Commission SkyNanny</span>
                  <span className="text-lg font-semibold text-green-600">{booking.skynanny_commission.toFixed(2)} €</span>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-600 mb-1">Methode de paiement</p>
                <p className="font-medium text-gray-900">{booking.payment_method || 'Non defini'}</p>
                {booking.payment_date && (
                  <p className="text-xs text-gray-500 mt-1">
                    Paye le {new Date(booking.payment_date).toLocaleDateString('fr-FR')}
                  </p>
                )}
              </div>

              {booking.confirmed_at && (
                <div className="pt-4 border-t">
                  <p className="text-sm text-gray-600 mb-1">Confirmee le</p>
                  <p className="text-sm text-gray-900">
                    {new Date(booking.confirmed_at).toLocaleDateString('fr-FR')} a {new Date(booking.confirmed_at).toLocaleTimeString('fr-FR')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailPage;