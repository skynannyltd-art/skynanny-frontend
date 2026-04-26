import { useEffect, useState } from 'react';
import { Users, UserCheck, Plane, ShoppingCart, TrendingUp, Clock } from 'lucide-react';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalBabysitters: 0,
    pendingBabysitters: 0,
    totalFamilies: 0,
    totalBookings: 0,
    totalFlights: 0,
    pendingFlights: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://api.sky-nanny.com/api/admin/stats', {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error('Erreur chargement stats:', error);
    } finally {
      setLoading(false);
    }
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Vue d ensemble de la plateforme SkyNanny</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
              <UserCheck className="text-blue-600" size={24} />
            </div>
            <span className="text-3xl font-bold text-blue-600">{stats.totalBabysitters}</span>
          </div>
          <h3 className="text-gray-600 font-medium">Babysitters Total</h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
              <Clock className="text-orange-600" size={24} />
            </div>
            <span className="text-3xl font-bold text-orange-600">{stats.pendingBabysitters}</span>
          </div>
          <h3 className="text-gray-600 font-medium">En attente validation</h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
              <Users className="text-green-600" size={24} />
            </div>
            <span className="text-3xl font-bold text-green-600">{stats.totalFamilies}</span>
          </div>
          <h3 className="text-gray-600 font-medium">Familles Total</h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center">
              <Plane className="text-purple-600" size={24} />
            </div>
            <span className="text-3xl font-bold text-purple-600">{stats.totalFlights}</span>
          </div>
          <h3 className="text-gray-600 font-medium">Vols Proposes</h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center">
              <ShoppingCart className="text-pink-600" size={24} />
            </div>
            <span className="text-3xl font-bold text-pink-600">{stats.totalBookings}</span>
          </div>
          <h3 className="text-gray-600 font-medium">Reservations</h3>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-yellow-600" size={24} />
            </div>
            <span className="text-3xl font-bold text-yellow-600">{stats.pendingFlights}</span>
          </div>
          <h3 className="text-gray-600 font-medium">Vols a verifier</h3>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a href="/admin/babysitters?status=pending" className="flex items-center gap-3 p-4 border-2 border-orange-200 rounded-lg hover:bg-orange-50 transition">
            <Clock className="text-orange-600" size={24} />
            <div>
              <p className="font-semibold text-gray-900">Valider babysitters</p>
              <p className="text-sm text-gray-600">{stats.pendingBabysitters} en attente</p>
            </div>
          </a>

          <a href="/admin/flights?status=pending" className="flex items-center gap-3 p-4 border-2 border-yellow-200 rounded-lg hover:bg-yellow-50 transition">
            <Plane className="text-yellow-600" size={24} />
            <div>
              <p className="font-semibold text-gray-900">Verifier vols</p>
              <p className="text-sm text-gray-600">{stats.pendingFlights} a verifier</p>
            </div>
          </a>

          <a href="/admin/bookings" className="flex items-center gap-3 p-4 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition">
            <ShoppingCart className="text-blue-600" size={24} />
            <div>
              <p className="font-semibold text-gray-900">Reservations</p>
              <p className="text-sm text-gray-600">Voir toutes</p>
            </div>
          </a>

          <a href="/admin/stats" className="flex items-center gap-3 p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition">
            <TrendingUp className="text-purple-600" size={24} />
            <div>
              <p className="font-semibold text-gray-900">Statistiques</p>
              <p className="text-sm text-gray-600">Voir details</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
