/**
 * Application Configuration
 * إعدادات التطبيق العامة
 */

export const APP_CONFIG = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  API_TIMEOUT: 30000, // 30 seconds
  
  // Application Info
  APP_NAME: 'DRM Admin Panel',
  APP_NAME_AR: 'لوحة إدارة حماية المحتوى',
  APP_VERSION: '1.0.0',
  
  // Pagination
  DEFAULT_PAGE_SIZE: 20,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
  
  // File Upload
  MAX_FILE_SIZE: 500 * 1024 * 1024, // 500MB
  ALLOWED_VIDEO_FORMATS: ['.mp4', '.avi', '.mkv', '.mov'],
  ALLOWED_DOCUMENT_FORMATS: ['.pdf', '.doc', '.docx'],
  
  // Session
  SESSION_TIMEOUT: 60 * 60 * 1000, // 1 hour
  REFRESH_TOKEN_BEFORE: 5 * 60 * 1000, // 5 minutes before expiry
  
  // Date/Time
  DATE_FORMAT: 'YYYY-MM-DD',
  TIME_FORMAT: 'HH:mm:ss',
  DATETIME_FORMAT: 'YYYY-MM-DD HH:mm:ss',
  TIMEZONE: 'Asia/Aden', // Yemen timezone
  
  // Features Flags
  FEATURES: {
    OFFLINE_ACCESS: true,
    IP_RESTRICTIONS: true,
    COUNTRY_RESTRICTIONS: true,
    WATERMARK: true,
    EMAIL_TRACKING: true,
    TWO_FACTOR_AUTH: false, // Coming soon
  },
};

export default APP_CONFIG;
