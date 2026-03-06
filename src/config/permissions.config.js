import { ROLES } from './roles.config';

export const PERMISSIONS = {
  // Users
  VIEW_USERS:    'view_users',
  CREATE_USER:   'create_user',
  EDIT_USER:     'edit_user',
  DELETE_USER:   'delete_user',
  IMPORT_USERS:  'import_users',
  EXPORT_USERS:  'export_users',
  // Documents
  VIEW_DOCS:     'view_documents',
  CREATE_DOC:    'create_document',
  EDIT_DOC:      'edit_document',
  DELETE_DOC:    'delete_document',
  // Publications
  VIEW_PUBS:     'view_publications',
  CREATE_PUB:    'create_publication',
  EDIT_PUB:      'edit_publication',
  DELETE_PUB:    'delete_publication',
  // Access
  MANAGE_ACCESS: 'manage_access',
  // Reports
  VIEW_REPORTS:  'view_reports',
  EXPORT_REPORTS:'export_reports',
  // Settings
  VIEW_SETTINGS: 'view_settings',
  EDIT_SETTINGS: 'edit_settings',
  // Sub Admins
  MANAGE_ADMINS: 'manage_admins',
};

export const ROLE_PERMISSIONS = {
  [ROLES.SUPER_ADMIN]: Object.values(PERMISSIONS),
  [ROLES.PUBLISHER]: [
    PERMISSIONS.VIEW_USERS, PERMISSIONS.CREATE_USER, PERMISSIONS.EDIT_USER,
    PERMISSIONS.VIEW_DOCS, PERMISSIONS.CREATE_DOC, PERMISSIONS.EDIT_DOC,
    PERMISSIONS.VIEW_PUBS, PERMISSIONS.CREATE_PUB, PERMISSIONS.EDIT_PUB,
    PERMISSIONS.MANAGE_ACCESS, PERMISSIONS.VIEW_REPORTS,
  ],
  [ROLES.SUB_ADMIN]: [
    PERMISSIONS.VIEW_USERS, PERMISSIONS.VIEW_DOCS, PERMISSIONS.VIEW_PUBS,
    PERMISSIONS.MANAGE_ACCESS, PERMISSIONS.VIEW_REPORTS,
  ],
};

export default PERMISSIONS;
