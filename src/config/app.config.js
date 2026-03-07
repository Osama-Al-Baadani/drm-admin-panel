export const appConfig = {
  appName: 'DRM Admin Panel',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
  baseUrl: import.meta.env.VITE_BASE_URL || 'http://localhost:3000',
  version: '1.0.0',
  defaultLanguage: 'ar',
  timezone: 'Asia/Riyadh',
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [10, 25, 50, 100]
  },
  dateFormat: 'YYYY-MM-DD',
  timeFormat: 'HH:mm:ss'
};
