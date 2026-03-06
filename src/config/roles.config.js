export const ROLES = {
  SUPER_ADMIN: 'super_admin',
  PUBLISHER:   'publisher',
  SUB_ADMIN:   'sub_admin',
};

export const ROLE_LABELS = {
  [ROLES.SUPER_ADMIN]: 'Super Admin',
  [ROLES.PUBLISHER]:   'Publisher',
  [ROLES.SUB_ADMIN]:   'Sub Admin',
};

export const ROLE_COLORS = {
  [ROLES.SUPER_ADMIN]: 'bg-purple-100 text-purple-800',
  [ROLES.PUBLISHER]:   'bg-blue-100 text-blue-800',
  [ROLES.SUB_ADMIN]:   'bg-slate-100 text-slate-800',
};

export default ROLES;
