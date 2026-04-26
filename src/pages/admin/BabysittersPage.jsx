import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCheck, Clock, CheckCircle, XCircle, Search, Filter } from 'lucide-react';

const BabysittersPage = () => {
  const navigate = useNavigate();
  const [babysitters, setBabysitters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, pending, approved, rejected
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // TEMPORAIRE : Mock data en attendant l'API
    setTimeout(() => {
      setBabysitters([
        {
          id: 9,
          first_name: 'Marie',
          last_name: 'Dupont',
          email: 'marie.dupont@test.com',
          phone: '+33612345678',
          experience_years: 5,
          verification_status: 'pending',
          created_at: '2024-04-26T10:30:00Z'
        },
        {
          id: 10,
          first_name: 'Sophie',
          last_name: 'Martin',
          email: 'sophie.martin@test.com',
          phone: '+33687654321',
          experience_years: 3,
          verification_status: 'approved',
          created_at: '2024-04-25T14:20:00Z'
        },
        {
          id: 11,
          first_name: 'Julie',
          last_name: 'Bernard',
          email: 'julie.bernard@test.com',
          phone: '+33698765432',
          experience_years: 7,
          verification_status: 'rejected',
          created_at: '2024-04-24T09:15:00Z'
        }
      ]);
      setLoading(false);
    }, 500);
  }, [filter]);

  /*
  const fetchBabysitters = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      let url = 'https://api.sky-nanny.com/api/admin/babysitters';
      
      if (filter !== 'all') {
        url += '?status=' + filter;
      }

      const response = await fetch(url, {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBabysitters(data);
      }
    } catch (error) {
      console.error('Erreur chargement babysitters:', error);
    } finally {
      setLoading(false);
    }
  };
  */

  const getStatusBadge = (status) => {
    const badges = {
      pending: { bg: 'bg-orange-100', text: 'text-orange-700', label: 'En attente', icon: Clock },
      approved: { bg: 'bg-green-100', text: 'text-green-700', label: 'Approuve', icon: CheckCircle },
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

  const filteredBabysitters = babysitters.filter(bs =>
    bs.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bs.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bs.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Gestion Babysitters</h1>
        <p className="text-gray-600">Valider et gerer les profils babysitters</p>
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
              Tous ({babysitters.length})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'pending' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              En attente
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={'px-4 py-2 rounded-lg font-medium transition ' + (filter === 'approved' ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200')}
            >
              Approuves
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Babysitter</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date inscription</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredBabysitters.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-gray-500">
                  Aucun babysitter trouve
                </td>
              </tr>
            ) : (
              filteredBabysitters.map((babysitter) => (
                <tr key={babysitter.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <UserCheck className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{babysitter.first_name} {babysitter.last_name}</p>
                        <p className="text-sm text-gray-500">ID: {babysitter.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{babysitter.email}</p>
                    <p className="text-sm text-gray-500">{babysitter.phone}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-900">{babysitter.experience_years || 0} ans</p>
                  </td>
                  <td className="px-6 py-4">
                    {getStatusBadge(babysitter.verification_status || 'pending')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(babysitter.created_at).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => navigate('/admin/babysitters/' + babysitter.id)}
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

export default BabysittersPage;