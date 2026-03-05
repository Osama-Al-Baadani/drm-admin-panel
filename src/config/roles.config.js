/**
 * Roles Configuration
 * تعريف الأدوار في النظام
 */

export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  PUBLISHER: 'publisher',
  SUB_ADMIN: 'sub_admin',
  MODERATOR: 'moderator',
};

export const ROLE_LABELS = {
  [ROLES.SUPER_ADMIN]: 'Super Admin',
  [ROLES.PUBLISHER]: 'Publisher',
  [ROLES.SUB_ADMIN]: 'Sub Admin',
  [ROLES.MODERATOR]: 'Moderator',
};

export const ROLE_LABELS_AR = {
  [ROLES.SUPER_ADMIN]: 'مدير النظام',
  [ROLES.PUBLISHER]: 'ناشر',
  [ROLES.SUB_ADMIN]: 'مشرف فرعي',
  [ROLES.MODERATOR]: 'مراقب',
};

export default ROLES;
