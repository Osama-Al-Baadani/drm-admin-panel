const ROUTES = {
  // Auth
  LOGIN:           '/login',
  FORGOT_PASSWORD: '/forgot-password',
  // Main
  DASHBOARD:       '/',
  // Users
  USERS:           '/users',
  USERS_CREATE:    '/users/create',
  USER_DETAIL:     '/users/:id',
  // Documents
  DOCUMENTS:       '/documents',
  DOCUMENT_DETAIL: '/documents/:id',
  // Publications
  PUBLICATIONS:       '/publications',
  PUBLICATIONS_CREATE:'/publications/create',
  PUBLICATION_EDIT:   '/publications/:id/edit',
  // Access
  ACCESS_CONTROL: '/access-control',
  // Devices
  DEVICES:        '/devices',
  // Emails
  EMAILS:         '/emails',
  // Sub Admins
  SUB_ADMINS:        '/sub-admins',
  SUB_ADMINS_CREATE: '/sub-admins/create',
  // Reports
  REPORTS:      '/reports',
  VIEW_LOGS:    '/reports/view-logs',
  ADMIN_LOGS:   '/reports/admin-logs',
  // Settings
  SETTINGS:     '/settings',
};

export default ROUTES;
