import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

// Pages
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';
import SearchFamilyPage from './pages/SearchFamilyPage';
import SearchBabysitterPage from './pages/SearchBabysitterPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages-old/LoginPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* HomePage nouvelle */}
            <Route path="/" element={<HomePage />} />
            
            {/* Welcome page (choix type utilisateur) */}
            <Route path="/welcome" element={<WelcomePage />} />
            
            {/* Recherche */}
            <Route path="/search/family" element={<SearchFamilyPage />} />
            <Route path="/search/babysitter" element={<SearchBabysitterPage />} />
            
            {/* Auth */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;