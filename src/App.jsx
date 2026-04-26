import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Pages
import BabysitterDetailPage from './pages/admin/BabysitterDetailPage';
import BabysittersPage from './pages/admin/BabysittersPage';
import AdminLayout from './components/AdminLayout';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import SearchFamilyPage from './pages/SearchFamilyPage';
import SearchBabysitterPage from './pages/SearchBabysitterPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import LoginPage from './pages/LoginPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* HomePage */}
            <Route path="/" element={<HomePage />} />
            
            {/* Welcome page */}
            <Route path="/welcome" element={<WelcomePage />} />
            
            {/* Recherche */}
            <Route path="/search/family" element={<SearchFamilyPage />} />
            <Route path="/search/babysitter" element={<SearchBabysitterPage />} />
            
            {/* Auth */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Pages institutionnelles */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />

            {/* Routes Admin */}
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="babysitters" element={<BabysittersPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="babysitters" element={<BabysittersPage />} />
              <Route path="babysitters/:id" element={<BabysitterDetailPage />} />
            </Route>
            </Route>

            {/* Route 404 - Doit etre en dernier */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;