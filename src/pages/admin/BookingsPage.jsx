import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Clock, CheckCircle, XCircle, Search, User, Plane, DollarSign } from 'lucide-react';

const BookingsPage = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TEMPORAIRE : Mock data
    setTimeout(() => {
      setBookings([
        {
          id: 1,
          family_name: 'Famille Dubois',
          family_email: 'dubois@test.com',
          babysitter_name: 'Marie Dupont',
          flight_number: 'AF1234',
          departure_city: 'Paris',
          arrival_city: 'New York',
          departure_date: '2024-06-15',
          number_of_children: 2,
          children_ages: [3, 5],
          total_family_payment: 141.75,
          babysitter_receives: 128.25,
          skynanny_commission: 13.50,
          payment_status: 'completed',
          booking_status: 'confirmed',
          created_at: '2024-04-26T09:00:00Z'
        },
        {
          id: 2,
          family_name: 'Famille Martin',
          family_email: 'martin@test.com',
          babysitter_name: 'Sophie Martin',
          flight_number: 'LH5678',
          departure_city: 'Paris',
          arrival_city: 'Francfort',
          departure_date: '2024-06-20',
          number_of_children: 1,
          children_ages: [4],
          total_family_payment: 56.70,
          babysitter_receives: 51.30,
          skynanny_commission: 5.40,
          payment_status: 'pending',
          booking_status: 'pending',
          created_at: '2024-04-25T14:30:00Z'
        },
        {
          id: 3,
          family_name: 'Famille Bernard',
          family_email: 'bernard@test.com',
          babysitter_name: 'Julie Bernard',
          flight_number: 'BA9012',
          departure_city: 'Paris',
          arrival_city: 'Londres',
          departure_date: '2024-06-25',
          number_of_children: 3,
          children_ages: [2, 4, 7],
          total_family_payment: 37.80,
          babysitter_receives: 34.20,
          skynanny_commission: 3.60,
          payment_status: 'completed',
          booking_status: 'completed',
          created_at: '2024-04-24T11:15:00Z'
        },
        {
          id: 4,
          family_name: 'Famille Rousseau',
          family_email: 'rousseau@test.com',
          babysitter_name: 'Marie Dupont',
          flight_number: 'AF5555',
          departure_city: 'Lyon',
          arrival_city: 'Barcelone',
          departure_date: '2024-07-01',
          number_of_children: 1,
          children_ages: [6],
          total_family_payment: 94.50,
          babysitter_receives: 85.50,
          skynanny_commission: 9.00,
          payment_status: 'failed',
          booking_status: 'cancelled',
          created_at: '2024-04-23T16:45:00Z'
        }
      ]);
      setLoading(false);
    }, 500);
  }, [filter]);

  const getStatusBadge = (status, type = 'booking') => {
    if (type === 'payment') {
      const badges = {
        pending: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'En attente' },
        completed: { bg: 'bg-green-100', text: 'text-green-700', label: 'Paye' },
        failed: { bg: 'bg-red-100', text: 'text-red-700', label: 'Echoue' },
        refunded: { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Rembourse' },
      };
      const badge = badges[status] || badges.pending;
      return (
        <span className={'inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ' + badge.bg + ' ' + badge.text}>
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
      <span className={'inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ' + badge.bg + ' ' + badge.text}>
        <Icon size={14} />
        {badge.label}
      </span>
    );
  };

  const filteredBookings = bookings.filter(booking =>
    booking.family_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.babysitter_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.flight_number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredByStatus = filter === 'all' 
    ? filteredBookings 
    : filteredBookings.filter(b => b.booking_status === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.booking_status === 'pending').length,
    confirmed: bookings.filter(b => b.booking_status === 'confirmed').length,
    completed: bookings.filter(b => b.booking_status === 'completed').length,
    totalRevenue: bookings
      .filter(b => b.payment_status === 'completed')
      .reduce((sum, b) => sum + b.skynanny_commission, 0)
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion Reservations</h1>
        <p className="text-gray-600">Suivre et gerer toutes les reservations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Total reservations</p>
            <ShoppingCart className="text-blue-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">En attente</p>
            <Clock className="text-orange-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-orange-600">{stats.pending}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Confirmees</p>
            <CheckCircle className="text-blue-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-blue-600">{stats.confirmed}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Revenus commissions</p>
            <DollarSign className="text-green-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-green-600">{stats.totalRevenue.toFixed(2)} €</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher famille, babysitter, vol..."
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
              Toutes ({bookings.length})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'pending' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              En attente
            </button>
            <button
              onClick={() => setFilter('confirmed')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'confirmed' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              Confirmees
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'completed' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              Terminees
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Famille</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Babysitter</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Enfants</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Paiement</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredByStatus.length === 0 ? (
              <tr>
                <td colSpan="9" className="px-6 py-8 text-center text-gray-500">
                  Aucune reservation trouvee
                </td>
              </tr>
            ) : (
              filteredByStatus.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">#{booking.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <User className="text-gray-400" size={16} />
                      <div>
                        <p className="font-medium text-gray-900">{booking.family_name}</p>
                        <p className="text-xs text-gray-500">{booking.family_email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">{booking.babysitter_name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Plane className="text-gray-400" size={16} />
                      <div>
                        <p className="font-medium text-gray-900">{booking.flight_number}</p>
                        <p className="text-xs text-gray-500">{booking.departure_city} → {booking.arrival_city}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{booking.number_of_children} enfant{booking.number_of_children > 1 ? 's' : ''}</p>
                    <p className="text-xs text-gray-500">Ages: {booking.children_ages.join(', ')} ans</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">{booking.total_family_payment.toFixed(2)} €</p>
                    <p className="text-xs text-blue-600">Babysitter recoit: {booking.babysitter_receives.toFixed(2)} €</p>
                    <p className="text-xs text-green-600">Commission: {booking.skynanny_commission.toFixed(2)} €</p>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(booking.payment_status, 'payment')}
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(booking.booking_status)}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => navigate('/admin/bookings/' + booking.id)}
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

export default BookingsPage;