import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import SearchFamilyPage from './pages/SearchFamilyPage';
import SearchBabysitterPage from './pages/SearchBabysitterPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import NotFoundPage from './pages/NotFoundPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import LegalPage from './pages/LegalPage';
import QualityCharterPage from './pages/QualityCharterPage';

import AdminLayout from './components/AdminLayout';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import DashboardPage from './pages/admin/DashboardPage';
import BabysittersPage from './pages/admin/BabysittersPage';
import BabysitterDetailPage from './pages/admin/BabysitterDetailPage';
import FlightsPage from './pages/admin/FlightsPage';
import FlightDetailPage from './pages/admin/FlightDetailPage';
import BookingsPage from './pages/admin/BookingsPage';
import BookingDetailPage from './pages/admin/BookingDetailPage';
import StatsPage from './pages/admin/StatsPage';
import UsersPage from './pages/admin/UsersPage';
import DocumentsPage from './pages/admin/DocumentsPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/search/family" element={<SearchFamilyPage />} />
            <Route path="/search/babysitter" element={<SearchBabysitterPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/quality-charter" element={<QualityCharterPage />} />

            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="babysitters" element={<BabysittersPage />} />
              <Route path="babysitters/:id" element={<BabysitterDetailPage />} />
              <Route path="flights" element={<FlightsPage />} />
              <Route path="flights/:id" element={<FlightDetailPage />} />
              <Route path="bookings" element={<BookingsPage />} />
              <Route path="bookings/:id" element={<BookingDetailPage />} />
              <Route path="stats" element={<StatsPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="documents" element={<DocumentsPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;