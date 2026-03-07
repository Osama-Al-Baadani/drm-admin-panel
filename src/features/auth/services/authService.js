import api from '../../../services/api';

const authService = {
  login: async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    if (response.token) {
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    return response;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getMe: async () => {
    return await api.get('/auth/me');
  },

  refreshToken: async () => {
    return await api.post('/auth/refresh');
  },

  forgotPassword: async (email) => {
    return await api.post('/auth/forgot-password', { email });
  },

  resetPassword: async (token, password) => {
    return await api.post('/auth/reset-password', { token, password });
  }
};

export default authService;
