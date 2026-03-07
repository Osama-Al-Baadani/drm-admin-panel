import api from '../../../services/api';

const userService = {
  getAll: async (params = {}) => {
    return await api.get('/users', { params });
  },

  getById: async (id) => {
    return await api.get(`/users/${id}`);
  },

  create: async (data) => {
    return await api.post('/users', data);
  },

  update: async (id, data) => {
    return await api.put(`/users/${id}`, data);
  },

  delete: async (id) => {
    return await api.delete(`/users/${id}`);
  },

  suspend: async (id) => {
    return await api.post(`/users/${id}/suspend`);
  },

  activate: async (id) => {
    return await api.post(`/users/${id}/activate`);
  },

  bulkAction: async (action, ids) => {
    return await api.post('/users/bulk', { action, ids });
  },

  importCSV: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return await api.post('/users/import', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },

  exportCSV: async (filters = {}) => {
    return await api.get('/users/export', { params: filters, responseType: 'blob' });
  },

  resendLicense: async (userId) => {
    return await api.post(`/users/${userId}/resend-license`);
  },

  resendLicenseBulk: async (userIds) => {
    return await api.post('/users/resend-license-bulk', { user_ids: userIds });
  },

  getUserDevices: async (userId) => {
    return await api.get(`/users/${userId}/devices`);
  },

  revokeDevice: async (userId, deviceId) => {
    return await api.delete(`/users/${userId}/devices/${deviceId}`);
  }
};

export default userService;
