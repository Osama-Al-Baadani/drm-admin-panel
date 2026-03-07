import api from '../../../services/api';

const emailService = {
  resendLicense: async (userId) => {
    return await api.post(`/users/${userId}/resend-license`);
  },

  resendLicenseBulk: async (userIds) => {
    return await api.post('/emails/resend-bulk', { user_ids: userIds });
  },

  resendToUnregistered: async () => {
    return await api.post('/emails/resend-unregistered');
  },

  getDeliveryStatus: async (userId) => {
    return await api.get(`/emails/${userId}/status`);
  },

  getUndeliveredEmails: async () => {
    return await api.get('/emails/undelivered');
  }
};

export default emailService;
