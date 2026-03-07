export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  PUBLISHER: 'publisher',
  SUB_ADMIN: 'sub_admin'
};

export const ROLE_LABELS = {
  [ROLES.SUPER_ADMIN]: 'مدير النظام',
  [ROLES.PUBLISHER]: 'ناشر',
  [ROLES.SUB_ADMIN]: 'مشرف فرعي'
};

export const ROLE_HIERARCHY = {
  [ROLES.SUPER_ADMIN]: 3,
  [ROLES.PUBLISHER]: 2,
  [ROLES.SUB_ADMIN]: 1
};
