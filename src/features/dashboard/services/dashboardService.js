import api from '../../../services/api';

const dashboardService = {
  getStats: async () => {
    return await api.get('/dashboard/stats');
  },

  getRecentActivity: async () => {
    return await api.get('/dashboard/activity');
  }
};

export default dashboardService;
