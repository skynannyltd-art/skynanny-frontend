import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Clock, CheckCircle, XCircle, Search, Calendar } from 'lucide-react';

const FlightsPage = () => {
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TEMPORAIRE : Mock data
    setTimeout(() => {
      setFlights([
        {
          id: 1,
          babysitter_id: 9,
          babysitter_name: 'Marie Dupont',
          flight_number: 'AF1234',
          airline: 'Air France',
          departure_airport: 'CDG',
          departure_city: 'Paris',
          arrival_airport: 'JFK',
          arrival_city: 'New York',
          departure_date: '2024-06-15',
          departure_time: '10:30',
          arrival_date: '2024-06-15',
          arrival_time: '13:45',
          ticket_price: 450.00,
          babysitter_commission: 135.00,
          babysitter_net_amount: 128.25,
          skynanny_fee_babysitter: 6.75,
          family_service_fee: 6.75,
          skynanny_total_commission: 13.50,
          family_total_payment: 141.75,
          verification_status: 'pending',
          ticket_file: 'https://example.com/ticket1.pdf',
          created_at: '2024-04-26T10:00:00Z'
        },
        {
          id: 2,
          babysitter_id: 10,
          babysitter_name: 'Sophie Martin',
          flight_number: 'LH5678',
          airline: 'Lufthansa',
          departure_airport: 'ORY',
          departure_city: 'Paris',
          arrival_airport: 'FRA',
          arrival_city: 'Francfort',
          departure_date: '2024-06-20',
          departure_time: '14:15',
          arrival_date: '2024-06-20',
          arrival_time: '15:30',
          ticket_price: 180.00,
          babysitter_commission: 54.00,
          babysitter_net_amount: 51.30,
          skynanny_fee_babysitter: 2.70,
          family_service_fee: 2.70,
          skynanny_total_commission: 5.40,
          family_total_payment: 56.70,
          verification_status: 'approved',
          ticket_file: 'https://example.com/ticket2.pdf',
          created_at: '2024-04-25T11:30:00Z'
        },
        {
          id: 3,
          babysitter_id: 11,
          babysitter_name: 'Julie Bernard',
          flight_number: 'BA9012',
          airline: 'British Airways',
          departure_airport: 'CDG',
          departure_city: 'Paris',
          arrival_airport: 'LHR',
          arrival_city: 'Londres',
          departure_date: '2024-06-25',
          departure_time: '08:00',
          arrival_date: '2024-06-25',
          arrival_time: '08:15',
          ticket_price: 120.00,
          babysitter_commission: 36.00,
          babysitter_net_amount: 34.20,
          skynanny_fee_babysitter: 1.80,
          family_service_fee: 1.80,
          skynanny_total_commission: 3.60,
          family_total_payment: 37.80,
          verification_status: 'rejected',
          ticket_file: null,
          created_at: '2024-04-24T15:20:00Z'
        }
      ]);
      setLoading(false);
    }, 500);
  }, [filter]);

  const getStatusBadge = (status) => {
    const badges = {
      pending: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'A verifier', icon: Clock },
      approved: { bg: 'bg-green-100', text: 'text-green-700', label: 'Verifie', icon: CheckCircle },
      rejected: { bg: 'bg-red-100', text: 'text-red-700', label: 'Rejete', icon: XCircle },
    };
    
    const badge = badges[status] || badges.pending;
    const Icon = badge.icon;
    
    return (
      <span className={'inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ' + badge.bg + ' ' + badge.text}>
        <Icon size={14} />
        {badge.label}
      </span>
    );
  };

  const filteredFlights = flights.filter(flight =>
    flight.flight_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.babysitter_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.departure_city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.arrival_city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredByStatus = filter === 'all' 
    ? filteredFlights 
    : filteredFlights.filter(f => f.verification_status === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion Vols</h1>
        <p className="text-gray-600">Verifier et valider les billets d avion des babysitters</p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher vol, babysitter, ville..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              Tous ({flights.length})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'pending' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              A verifier
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'approved' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              Verifies
            </button>
            <button
              onClick={() => setFilter('rejected')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'rejected' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              Rejetes
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Babysitter</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trajet</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date depart</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarifs</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredByStatus.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                  Aucun vol trouve
                </td>
              </tr>
            ) : (
              filteredByStatus.map((flight) => (
                <tr key={flight.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Plane className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{flight.flight_number}</p>
                        <p className="text-sm text-gray-500">{flight.airline}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">{flight.babysitter_name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="text-center">
                        <p className="font-medium text-gray-900">{flight.departure_airport}</p>
                        <p className="text-xs text-gray-500">{flight.departure_city}</p>
                      </div>
                      <Plane className="text-gray-400 rotate-90" size={16} />
                      <div className="text-center">
                        <p className="font-medium text-gray-900">{flight.arrival_airport}</p>
                        <p className="text-xs text-gray-500">{flight.arrival_city}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-900">
                      <Calendar size={14} className="text-gray-400" />
                      {new Date(flight.departure_date).toLocaleDateString('fr-FR')}
                    </div>
                    <p className="text-xs text-gray-500">{flight.departure_time}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{flight.ticket_price.toFixed(2)} €</p>
                    <p className="text-xs text-blue-600">Babysitter recoit: {flight.babysitter_net_amount.toFixed(2)} €</p>
                    <p className="text-xs text-green-600">SkyNanny: {flight.skynanny_total_commission.toFixed(2)} €</p>
                  </td>

                  <td className="px-6 py-4">
                    {getStatusBadge(flight.verification_status)}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => navigate('/admin/flights/' + flight.id)}
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition text-sm font-medium"
                    >
                      Voir details
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FlightsPage;