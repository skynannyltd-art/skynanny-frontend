import { useEffect, useState } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Plane, DollarSign, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

const StatsPage = () => {
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('month'); // month, quarter, year

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [timeRange]);

  // Mock data - Revenus mensuels
  const revenueData = [
    { month: 'Jan', revenue: 450, bookings: 12 },
    { month: 'Fev', revenue: 680, bookings: 18 },
    { month: 'Mar', revenue: 520, bookings: 15 },
    { month: 'Avr', revenue: 890, bookings: 24 },
    { month: 'Mai', revenue: 1200, bookings: 32 },
    { month: 'Juin', revenue: 1450, bookings: 38 },
  ];

  // Mock data - Répartition réservations par statut
  const bookingStatusData = [
    { name: 'Confirmées', value: 45, color: '#3B82F6' },
    { name: 'En attente', value: 12, color: '#F59E0B' },
    { name: 'Terminées', value: 28, color: '#10B981' },
    { name: 'Annulées', value: 5, color: '#EF4444' },
  ];

  // Mock data - Top babysitters
  const topBabysitters = [
    { name: 'Marie Dupont', bookings: 24, revenue: 580 },
    { name: 'Sophie Martin', bookings: 18, revenue: 420 },
    { name: 'Julie Bernard', bookings: 15, revenue: 380 },
    { name: 'Emma Rousseau', bookings: 12, revenue: 290 },
    { name: 'Claire Leroy', bookings: 10, revenue: 245 },
  ];

  // Mock data - Destinations populaires
  const topDestinations = [
    { city: 'New York', count: 45 },
    { city: 'Londres', count: 32 },
    { city: 'Tokyo', count: 28 },
    { city: 'Barcelone', count: 24 },
    { city: 'Rome', count: 18 },
  ];

  // Stats globales
  const globalStats = {
    totalRevenue: 5190,
    revenueGrowth: 23.5,
    totalBookings: 139,
    bookingsGrowth: 18.2,
    avgBookingValue: 37.34,
    avgGrowth: 4.3,
    conversionRate: 68.5,
    conversionGrowth: -2.1,
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
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Statistiques</h1>
          <p className="text-gray-600">Analyse des performances de la plateforme</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setTimeRange('month')}
            className={'px-4 py-2 rounded-lg font-medium transition ' + (timeRange === 'month' ? 'bg-primary text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50')}
          >
            30 jours
          </button>
          <button
            onClick={() => setTimeRange('quarter')}
            className={'px-4 py-2 rounded-lg font-medium transition ' + (timeRange === 'quarter' ? 'bg-primary text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50')}
          >
            3 mois
          </button>
          <button
            onClick={() => setTimeRange('year')}
            className={'px-4 py-2 rounded-lg font-medium transition ' + (timeRange === 'year' ? 'bg-primary text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50')}
          >
            12 mois
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="text-green-600" size={24} />
            </div>
            <div className={'flex items-center gap-1 text-sm font-medium ' + (globalStats.revenueGrowth >= 0 ? 'text-green-600' : 'text-red-600')}>
              {globalStats.revenueGrowth >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              {Math.abs(globalStats.revenueGrowth)}%
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{globalStats.totalRevenue.toFixed(2)} €</p>
          <p className="text-sm text-gray-600">Revenus totaux</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar className="text-blue-600" size={24} />
            </div>
            <div className={'flex items-center gap-1 text-sm font-medium ' + (globalStats.bookingsGrowth >= 0 ? 'text-green-600' : 'text-red-600')}>
              {globalStats.bookingsGrowth >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              {Math.abs(globalStats.bookingsGrowth)}%
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{globalStats.totalBookings}</p>
          <p className="text-sm text-gray-600">Reservations totales</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-purple-600" size={24} />
            </div>
            <div className={'flex items-center gap-1 text-sm font-medium ' + (globalStats.avgGrowth >= 0 ? 'text-green-600' : 'text-red-600')}>
              {globalStats.avgGrowth >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              {Math.abs(globalStats.avgGrowth)}%
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{globalStats.avgBookingValue.toFixed(2)} €</p>
          <p className="text-sm text-gray-600">Panier moyen</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Users className="text-orange-600" size={24} />
            </div>
            <div className={'flex items-center gap-1 text-sm font-medium ' + (globalStats.conversionGrowth >= 0 ? 'text-green-600' : 'text-red-600')}>
              {globalStats.conversionGrowth >= 0 ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
              {Math.abs(globalStats.conversionGrowth)}%
            </div>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-1">{globalStats.conversionRate}%</p>
          <p className="text-sm text-gray-600">Taux de conversion</p>
        </div>
      </div>

      {/* Graphiques */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenus mensuels */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Evolution des revenus</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px' }}
                formatter={(value) => `${value} €`}
              />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} name="Revenus (€)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Répartition statuts */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Repartition des reservations</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={bookingStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {bookingStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Nombre de réservations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Nombre de reservations mensuelles</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="month" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px' }}
            />
            <Legend />
            <Bar dataKey="bookings" fill="#10B981" name="Reservations" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tableaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top babysitters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Babysitters</h3>
          <div className="space-y-4">
            {topBabysitters.map((babysitter, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={'w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ' + (index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-600' : 'bg-gray-300')}>
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{babysitter.name}</p>
                    <p className="text-sm text-gray-500">{babysitter.bookings} reservations</p>
                  </div>
                </div>
                <p className="font-semibold text-green-600">{babysitter.revenue} €</p>
              </div>
            ))}
          </div>
        </div>

        {/* Destinations populaires */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Destinations populaires</h3>
          <div className="space-y-4">
            {topDestinations.map((dest, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Plane className="text-blue-600" size={20} />
                  <p className="font-medium text-gray-900">{dest.city}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(dest.count / 45) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-sm font-medium text-gray-700 w-8 text-right">{dest.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;