import { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { Home, Users, Plane, ShoppingCart, BarChart3, LogOut, Menu, X, UserCheck, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: Home },
    { name: 'Babysitters', path: '/admin/babysitters', icon: UserCheck },
    { name: 'Vols', path: '/admin/flights', icon: Plane },
    { name: 'Reservations', path: '/admin/bookings', icon: ShoppingCart },
    { name: 'Utilisateurs', path: '/admin/users', icon: Users },
    { name: 'Documents', path: '/admin/documents', icon: FileText },
    { name: 'Statistiques', path: '/admin/stats', icon: BarChart3 },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-gray-100">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside className={'fixed top-0 left-0 z-50 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 ' + (sidebarOpen ? 'translate-x-0' : '-translate-x-full')}>
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <UserCheck size={24} />
            </div>
            <span className="font-semibold text-lg">Admin Panel</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => { navigate(item.path); setSidebarOpen(false); }}
                className={'w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ' + (isActive(item.path) ? 'bg-primary text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white')}
              >
                <Icon size={20} />
                <span className="font-medium">{item.name}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">{user?.first_name?.charAt(0) || 'A'}</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">{user?.first_name || 'Admin'}</p>
              <p className="text-xs text-gray-400">{user?.email}</p>
            </div>
          </div>
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition text-sm font-medium">
            <LogOut size={16} />
            Deconnexion
          </button>
        </div>
      </aside>

      <div className="lg:ml-64 min-h-screen flex flex-col">
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-600 hover:text-gray-900">
              <Menu size={24} />
            </button>

            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-gray-900 hidden sm:block">Administration SkyNanny</h1>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                En ligne
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
