import axios from 'axios';

// URL de l'API backend
const API_URL = import.meta.env.VITE_API_URL || 'https://api.sky-nanny.com';

// Instance axios configurée
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Intercepteur pour ajouter le token JWT automatiquement
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ========================================
// BABYSITTERS
// ========================================

export const getBabysitters = async (filters = {}) => {
  const params = new URLSearchParams();
  if (filters.city) params.append('city', filters.city);
  if (filters.minRate) params.append('min_rate', filters.minRate);
  if (filters.maxRate) params.append('max_rate', filters.maxRate);
  if (filters.experience) params.append('min_experience', filters.experience);
  
  const response = await api.get(`/api/babysitters?${params}`);
  return response.data;
};

export const getBabysitterById = async (id) => {
  const response = await api.get(`/api/babysitters/${id}`);
  return response.data;
};

// ========================================
// AUTHENTIFICATION
// ========================================

export const register = async (userData) => {
  const response = await api.post('/api/register', userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await api.post('/api/login', credentials);
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// ========================================
// RÉSERVATIONS
// ========================================

export const createBooking = async (bookingData) => {
  const response = await api.post('/api/bookings', bookingData);
  return response.data;
};

export const createCheckoutSession = async (bookingId) => {
  const response = await api.post('/api/bookings/create-checkout-session', {
    booking_id: bookingId,
  });
  return response.data;
};

export const getPaymentStatus = async (sessionId) => {
  const response = await api.get(`/api/bookings/payment-status/${sessionId}`);
  return response.data;
};

export const getFamilyBookings = async () => {
  const response = await api.get('/api/bookings/family');
  return response.data;
};

export default api;