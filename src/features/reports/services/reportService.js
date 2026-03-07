import api from '../../../services/api';

const reportService = {
  getViewLogs: async (filters = {}) => {
    return await api.get('/reports/view-logs', { params: filters });
  },

  getPrintLogs: async (filters = {}) => {
    return await api.get('/reports/print-logs', { params: filters });
  },

  getAdminLogs: async (filters = {}) => {
    return await api.get('/reports/admin-logs', { params: filters });
  },

  getTopDocuments: async () => {
    return await api.get('/reports/top-documents');
  },

  getSystemStats: async () => {
    return await api.get('/reports/stats');
  },

  exportLogsCSV: async (filters = {}) => {
    return await api.get('/reports/export', { params: filters, responseType: 'blob' });
  }
};

export default reportService;
