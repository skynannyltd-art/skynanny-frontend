import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Lock, User, Phone, Users, Baby } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'family',
    acceptTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert(t('auth.passwordMismatch'));
      return;
    }

    if (!formData.acceptTerms) {
      alert(t('auth.mustAcceptTerms'));
      return;
    }

    console.log('Register:', formData);
    alert(t('search.comingSoon'));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('auth.registerTitle')}</h1>
              <p className="text-gray-600">{t('auth.registerSubtitle')}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* User Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  {t('auth.userTypeLabel')}
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: 'family' })}
                    className={`p-4 rounded-lg border-2 transition flex items-center justify-center gap-2 ${
                      formData.userType === 'family'
                        ? 'border-primary bg-blue-50 text-primary'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Users size={20} />
                    {t('auth.userTypeFamily')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, userType: 'babysitter' })}
                    className={`p-4 rounded-lg border-2 transition flex items-center justify-center gap-2 ${
                      formData.userType === 'babysitter'
                        ? 'border-secondary bg-pink-50 text-secondary'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <Baby size={20} />
                    {t('auth.userTypeBabysitter')}
                  </button>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User size={18} className="text-gray-400" />
                    {t('auth.firstNameLabel')}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <User size={18} className="text-gray-400" />
                    {t('auth.lastNameLabel')}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Mail size={18} className="text-gray-400" />
                  {t('auth.emailLabel')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={t('auth.emailPlaceholder')}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  <Phone size={18} className="text-gray-400" />
                  {t('auth.phoneLabel')}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Password Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Lock size={18} className="text-gray-400" />
                    {t('auth.passwordLabel')}
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('auth.passwordPlaceholder')}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                    <Lock size={18} className="text-gray-400" />
                    {t('auth.confirmPasswordLabel')}
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder={t('auth.passwordPlaceholder')}
                  />
                </div>
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                  />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {t('auth.acceptTermsPart1')}{' '}
                    <a 
                      href="/terms" 
                      target="_blank"
                      className="text-primary font-semibold hover:underline"
                    >
                      {t('auth.termsLink')}
                    </a>
                    {' '}{t('auth.acceptTermsPart2')}
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition font-semibold"
              >
                {t('auth.registerButton')}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {t('auth.hasAccount')}{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="text-primary font-semibold hover:underline"
                >
                  {t('auth.loginLink')}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegisterPage;