import api from '../../../services/api';

const settingsService = {
  getSettings: async () => {
    return await api.get('/settings');
  },

  updateSettings: async (section, data) => {
    return await api.put(`/settings/${section}`, data);
  },

  testSMTP: async () => {
    return await api.post('/settings/smtp/test');
  },

  backupNow: async () => {
    return await api.post('/settings/backup');
  },

  restoreBackup: async (backupId) => {
    return await api.post(`/settings/backup/${backupId}/restore`);
  }
};

export default settingsService;
