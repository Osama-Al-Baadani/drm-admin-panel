import api from '../../../services/api';

const subAdminService = {
  getAll: async () => {
    return await api.get('/admins');
  },

  create: async (data) => {
    return await api.post('/admins', data);
  },

  update: async (id, data) => {
    return await api.put(`/admins/${id}`, data);
  },

  delete: async (id) => {
    return await api.delete(`/admins/${id}`);
  },

  assignPermissions: async (adminId, permissions) => {
    return await api.post(`/admins/${adminId}/permissions`, { permissions });
  }
};

export default subAdminService;
