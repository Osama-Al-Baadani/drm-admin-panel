const appConfig = {
  name:        import.meta.env.VITE_APP_NAME    || 'DRM Admin Panel',
  version:     import.meta.env.VITE_APP_VERSION || '1.0.0',
  apiBaseUrl:  import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  tokenKey:    import.meta.env.VITE_TOKEN_KEY    || 'drm_admin_token',
  refreshKey:  import.meta.env.VITE_REFRESH_TOKEN_KEY || 'drm_admin_refresh_token',
  defaultLang: 'ar',
  dateFormat:  'yyyy-MM-dd',
  dateTimeFormat: 'yyyy-MM-dd HH:mm',
  pagination: {
    defaultPageSize: 15,
    pageSizeOptions: [10, 15, 25, 50, 100],
  },
  watermarkVariables: ['[UserName]', '[Email]', '[Date]', '[Time]', '[Company]', '[IP]'],
};

export default appConfig;
