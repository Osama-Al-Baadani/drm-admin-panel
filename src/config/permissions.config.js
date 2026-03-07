export const PERMISSIONS = {
  // Users
  USERS_VIEW: 'users.view',
  USERS_CREATE: 'users.create',
  USERS_EDIT: 'users.edit',
  USERS_DELETE: 'users.delete',
  USERS_SUSPEND: 'users.suspend',
  
  // Documents
  DOCUMENTS_VIEW: 'documents.view',
  DOCUMENTS_CREATE: 'documents.create',
  DOCUMENTS_EDIT: 'documents.edit',
  DOCUMENTS_DELETE: 'documents.delete',
  
  // Publications
  PUBLICATIONS_VIEW: 'publications.view',
  PUBLICATIONS_CREATE: 'publications.create',
  PUBLICATIONS_EDIT: 'publications.edit',
  PUBLICATIONS_DELETE: 'publications.delete',
  
  // Access Control
  ACCESS_MANAGE: 'access.manage',
  
  // Devices
  DEVICES_VIEW: 'devices.view',
  DEVICES_REVOKE: 'devices.revoke',
  
  // Emails
  EMAILS_VIEW: 'emails.view',
  EMAILS_SEND: 'emails.send',
  
  // Reports
  REPORTS_VIEW: 'reports.view',
  REPORTS_EXPORT: 'reports.export',
  
  // Sub Admins
  ADMINS_VIEW: 'admins.view',
  ADMINS_CREATE: 'admins.create',
  ADMINS_EDIT: 'admins.edit',
  ADMINS_DELETE: 'admins.delete',
  
  // Settings
  SETTINGS_VIEW: 'settings.view',
  SETTINGS_EDIT: 'settings.edit'
};

export const ROLE_PERMISSIONS = {
  super_admin: Object.values(PERMISSIONS),
  publisher: [
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.USERS_CREATE,
    PERMISSIONS.USERS_EDIT,
    PERMISSIONS.DOCUMENTS_VIEW,
    PERMISSIONS.DOCUMENTS_CREATE,
    PERMISSIONS.DOCUMENTS_EDIT,
    PERMISSIONS.PUBLICATIONS_VIEW,
    PERMISSIONS.PUBLICATIONS_CREATE,
    PERMISSIONS.ACCESS_MANAGE,
    PERMISSIONS.DEVICES_VIEW,
    PERMISSIONS.EMAILS_VIEW,
    PERMISSIONS.REPORTS_VIEW
  ],
  sub_admin: [
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.DOCUMENTS_VIEW,
    PERMISSIONS.PUBLICATIONS_VIEW,
    PERMISSIONS.REPORTS_VIEW
  ]
};
