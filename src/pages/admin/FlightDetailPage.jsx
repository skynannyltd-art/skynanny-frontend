import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Plane, User, Calendar, MapPin, DollarSign, CheckCircle, XCircle, FileText, Download, ExternalLink } from 'lucide-react';

const FlightDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [flight, setFlight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    // TEMPORAIRE : Mock data
    setTimeout(() => {
      const mockFlights = {
        '1': {
          id: 1,
          babysitter_id: 9,
          babysitter_name: 'Marie Dupont',
          babysitter_email: 'marie.dupont@test.com',
          babysitter_phone: '+33612345678',
          flight_number: 'AF1234',
          airline: 'Air France',
          departure_airport: 'CDG',
          departure_city: 'Paris',
          departure_country: 'France',
          arrival_airport: 'JFK',
          arrival_city: 'New York',
          arrival_country: 'USA',
          departure_date: '2024-06-15',
          departure_time: '10:30',
          arrival_date: '2024-06-15',
          arrival_time: '13:45',
          duration: '8h15',
          ticket_price: 450.00,
          commission: 135.00,
          verification_status: 'pending',
          ticket_file: 'https://example.com/ticket1.pdf',
          booking_reference: 'AF1234XYZ',
          seat_number: '12A',
          created_at: '2024-04-26T10:00:00Z'
        },
        '2': {
          id: 2,
          babysitter_id: 10,
          babysitter_name: 'Sophie Martin',
          babysitter_email: 'sophie.martin@test.com',
          babysitter_phone: '+33687654321',
          flight_number: 'LH5678',
          airline: 'Lufthansa',
          departure_airport: 'ORY',
          departure_city: 'Paris',
          departure_country: 'France',
          arrival_airport: 'FRA',
          arrival_city: 'Francfort',
          arrival_country: 'Allemagne',
          departure_date: '2024-06-20',
          departure_time: '14:15',
          arrival_date: '2024-06-20',
          arrival_time: '15:30',
          duration: '1h15',
          ticket_price: 180.00,
          commission: 54.00,
          verification_status: 'approved',
          ticket_file: 'https://example.com/ticket2.pdf',
          booking_reference: 'LH5678ABC',
          seat_number: '8C',
          created_at: '2024-04-25T11:30:00Z'
        },
        '3': {
          id: 3,
          babysitter_id: 11,
          babysitter_name: 'Julie Bernard',
          babysitter_email: 'julie.bernard@test.com',
          babysitter_phone: '+33698765432',
          flight_number: 'BA9012',
          airline: 'British Airways',
          departure_airport: 'CDG',
          departure_city: 'Paris',
          departure_country: 'France',
          arrival_airport: 'LHR',
          arrival_city: 'Londres',
          arrival_country: 'Royaume-Uni',
          departure_date: '2024-06-25',
          departure_time: '08:00',
          arrival_date: '2024-06-25',
          arrival_time: '08:15',
          duration: '1h15',
          ticket_price: 120.00,
          commission: 36.00,
          verification_status: 'rejected',
          ticket_file: null,
          booking_reference: null,
          seat_number: null,
          created_at: '2024-04-24T15:20:00Z'
        }
      };

      const flightData = mockFlights[id];
      if (flightData) {
        setFlight(flightData);
      }
      setLoading(false);
    }, 500);
  }, [id]);

  const handleApprove = async () => {
    if (!confirm('Approuver ce vol ?')) return;

    setActionLoading(true);
    setTimeout(() => {
      setFlight({...flight, verification_status: 'approved'});
      alert('Vol approuve avec succes ! (Mode demo)');
      setActionLoading(false);
    }, 1000);
  };

  const handleReject = async () => {
    const reason = prompt('Raison du rejet (optionnel):');
    if (reason === null) return;

    setActionLoading(true);
    setTimeout(() => {
      setFlight({...flight, verification_status: 'rejected'});
      alert('Vol rejete (Mode demo)');
      setActionLoading(false);
    }, 1000);
  };

  const viewTicket = (ticketUrl) => {
    window.open(ticketUrl, '_blank');
  };

  const downloadTicket = () => {
    alert('Telechargement du billet (Mode demo)');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!flight) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">Vol non trouve</p>
        <button onClick={() => navigate('/admin/flights')} className="mt-4 text-primary hover:underline">
          Retour a la liste
        </button>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate('/admin/flights')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft size={20} />
        Retour a la liste
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <Plane className="text-blue-600" size={40} />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{flight.flight_number}</h1>
              <p className="text-gray-500">{flight.airline}</p>
            </div>
          </div>

          <div>
            {flight.verification_status === 'pending' && (
              <span className="inline-flex items-center gap-1 px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">
                En attente de verification
              </span>
            )}
            {flight.verification_status === 'approved' && (
              <span className="inline-flex items-center gap-1 px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">
                <CheckCircle size={16} />
                Verifie
              </span>
            )}
            {flight.verification_status === 'rejected' && (
              <span className="inline-flex items-center gap-1 px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium">
                <XCircle size={16} />
                Rejete
              </span>
            )}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="text-center flex-1">
              <p className="text-sm text-gray-600 mb-2">Depart</p>
              <p className="text-3xl font-bold text-gray-900">{flight.departure_airport}</p>
              <p className="text-gray-700 font-medium">{flight.departure_city}</p>
              <p className="text-sm text-gray-500">{flight.departure_country}</p>
              <div className="mt-3">
                <p className="text-lg font-semibold text-gray-900">{flight.departure_time}</p>
                <p className="text-sm text-gray-600">{new Date(flight.departure_date).toLocaleDateString('fr-FR')}</p>
              </div>
            </div>

            <div className="flex flex-col items-center px-8">
              <Plane className="text-blue-600 rotate-90 mb-2" size={32} />
              <p className="text-sm text-gray-600">{flight.duration}</p>
            </div>

            <div className="text-center flex-1">
              <p className="text-sm text-gray-600 mb-2">Arrivee</p>
              <p className="text-3xl font-bold text-gray-900">{flight.arrival_airport}</p>
              <p className="text-gray-700 font-medium">{flight.arrival_city}</p>
              <p className="text-sm text-gray-500">{flight.arrival_country}</p>
              <div className="mt-3">
                <p className="text-lg font-semibold text-gray-900">{flight.arrival_time}</p>
                <p className="text-sm text-gray-600">{new Date(flight.arrival_date).toLocaleDateString('fr-FR')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Informations Babysitter</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <User className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Nom</p>
                  <p className="font-medium text-gray-900">{flight.babysitter_name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{flight.babysitter_email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Telephone</p>
                  <p className="font-medium text-gray-900">{flight.babysitter_phone}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Details Reservation</h3>
            <div className="space-y-3">
              {flight.booking_reference && (
                <div className="flex items-center gap-3">
                  <FileText className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Reference</p>
                    <p className="font-medium text-gray-900">{flight.booking_reference}</p>
                  </div>
                </div>
              )}
              {flight.seat_number && (
                <div className="flex items-center gap-3">
                  <FileText className="text-gray-400" size={20} />
                  <div>
                    <p className="text-sm text-gray-500">Siege</p>
                    <p className="font-medium text-gray-900">{flight.seat_number}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3">
                <DollarSign className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Prix billet</p>
                  <p className="font-medium text-gray-900">{flight.ticket_price.toFixed(2)} €</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="text-gray-400" size={20} />
                <div>
                  <p className="text-sm text-gray-500">Commission (30%)</p>
                  <p className="font-medium text-green-600">{flight.commission.toFixed(2)} €</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Billet d avion</h2>

        {flight.ticket_file ? (
          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
            <div className="flex items-center gap-3">
              <FileText className="text-gray-400" size={24} />
              <div>
                <p className="font-medium text-gray-900">Billet de vol {flight.flight_number}</p>
                <p className="text-sm text-green-600">Disponible</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => viewTicket(flight.ticket_file)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition"
              >
                <ExternalLink size={16} />
                Voir le billet
              </button>
              <button
                onClick={downloadTicket}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
              >
                <Download size={16} />
                Telecharger
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <FileText className="mx-auto mb-3 text-gray-300" size={48} />
            <p>Aucun billet telecharge</p>
          </div>
        )}
      </div>

      {flight.verification_status === 'pending' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Actions</h2>

          <div className="flex gap-4">
            <button
              onClick={handleApprove}
              disabled={actionLoading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-medium disabled:opacity-50"
            >
              <CheckCircle size={20} />
              Approuver ce vol
            </button>

            <button
              onClick={handleReject}
              disabled={actionLoading}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium disabled:opacity-50"
            >
              <XCircle size={20} />
              Rejeter ce vol
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightDetailPage;