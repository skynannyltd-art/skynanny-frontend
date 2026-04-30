import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Search, Mail, Phone, Calendar, Shield } from 'lucide-react';

const UsersPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TEMPORAIRE : Mock data
    setTimeout(() => {
      setUsers([
        {
          id: 1,
          email: 'admin@sky-nanny.com',
          first_name: 'Admin',
          last_name: 'SkyNanny',
          user_type: 'admin',
          phone: '+33612345678',
          created_at: '2024-01-15T10:00:00Z',
          email_verified: true,
          total_bookings: 0
        },
        {
          id: 5,
          email: 'dubois@test.com',
          first_name: 'Jean',
          last_name: 'Dubois',
          user_type: 'family',
          phone: '+33612345678',
          created_at: '2024-03-20T14:30:00Z',
          email_verified: true,
          total_bookings: 3
        },
        {
          id: 6,
          email: 'martin@test.com',
          first_name: 'Pierre',
          last_name: 'Martin',
          user_type: 'family',
          phone: '+33698765432',
          created_at: '2024-04-10T09:15:00Z',
          email_verified: true,
          total_bookings: 1
        },
        {
          id: 7,
          email: 'rousseau@test.com',
          first_name: 'Alice',
          last_name: 'Rousseau',
          user_type: 'family',
          phone: '+33687654321',
          created_at: '2024-04-18T11:45:00Z',
          email_verified: false,
          total_bookings: 0
        },
        {
          id: 9,
          email: 'marie.dupont@test.com',
          first_name: 'Marie',
          last_name: 'Dupont',
          user_type: 'babysitter',
          phone: '+33612345678',
          created_at: '2024-02-15T08:00:00Z',
          email_verified: true,
          total_bookings: 24,
          verification_status: 'approved'
        },
        {
          id: 10,
          email: 'sophie.martin@test.com',
          first_name: 'Sophie',
          last_name: 'Martin',
          user_type: 'babysitter',
          phone: '+33687654321',
          created_at: '2024-03-10T16:20:00Z',
          email_verified: true,
          total_bookings: 18,
          verification_status: 'approved'
        },
        {
          id: 11,
          email: 'julie.bernard@test.com',
          first_name: 'Julie',
          last_name: 'Bernard',
          user_type: 'babysitter',
          phone: '+33698765432',
          created_at: '2024-04-05T12:30:00Z',
          email_verified: true,
          total_bookings: 15,
          verification_status: 'pending'
        }
      ]);
      setLoading(false);
    }, 500);
  }, [filter]);

  const getUserTypeBadge = (type) => {
    const badges = {
      admin: { bg: 'bg-purple-100', text: 'text-purple-700', label: 'Admin', icon: Shield },
      family: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'Famille', icon: Users },
      babysitter: { bg: 'bg-green-100', text: 'text-green-700', label: 'Babysitter', icon: Users },
    };
    
    const badge = badges[type] || badges.family;
    const Icon = badge.icon;
    
    return (
      <span className={'inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ' + badge.bg + ' ' + badge.text}>
        <Icon size={14} />
        {badge.label}
      </span>
    );
  };

  const filteredUsers = users.filter(user =>
    (filter === 'all' || user.user_type === filter) &&
    (user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const stats = {
    total: users.length,
    admins: users.filter(u => u.user_type === 'admin').length,
    families: users.filter(u => u.user_type === 'family').length,
    babysitters: users.filter(u => u.user_type === 'babysitter').length,
  };

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion Utilisateurs</h1>
        <p className="text-gray-600">Tous les utilisateurs de la plateforme</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Total utilisateurs</p>
            <Users className="text-gray-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Administrateurs</p>
            <Shield className="text-purple-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-purple-600">{stats.admins}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Familles</p>
            <Users className="text-blue-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-blue-600">{stats.families}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-600">Babysitters</p>
            <Users className="text-green-600" size={20} />
          </div>
          <p className="text-3xl font-bold text-green-600">{stats.babysitters}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher par nom ou email..."
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
              Tous ({users.length})
            </button>
            <button
              onClick={() => setFilter('admin')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'admin' ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              Admins
            </button>
            <button
              onClick={() => setFilter('family')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'family' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              Familles
            </button>
            <button
              onClick={() => setFilter('babysitter')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'babysitter' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              Babysitters
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Utilisateur</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reservations</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inscription</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="7" className="px-6 py-8 text-center text-gray-500">
                  Aucun utilisateur trouve
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <p className="font-medium text-gray-900">#{user.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="font-semibold text-gray-700">
                          {user.first_name?.charAt(0)}{user.last_name?.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.first_name} {user.last_name}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail size={14} className="text-gray-400" />
                        <span className="text-gray-900">{user.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone size={14} className="text-gray-400" />
                        <span className="text-gray-600">{user.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {getUserTypeBadge(user.user_type)}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-gray-900">{user.total_bookings || 0}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Calendar size={14} />
                      {new Date(user.created_at).toLocaleDateString('fr-FR')}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {user.email_verified ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Verifie
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                        Non verifie
                      </span>
                    )}
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

export default UsersPage;