export const USER_STATUS = {
  ACTIVE:    'active',
  INACTIVE:  'inactive',
  SUSPENDED: 'suspended',
  EXPIRED:   'expired',
};

export const USER_STATUS_LABELS = {
  [USER_STATUS.ACTIVE]:    'Active',
  [USER_STATUS.INACTIVE]:  'Inactive',
  [USER_STATUS.SUSPENDED]: 'Suspended',
  [USER_STATUS.EXPIRED]:   'Expired',
};

export const USER_STATUS_COLORS = {
  [USER_STATUS.ACTIVE]:    'badge-active',
  [USER_STATUS.INACTIVE]:  'badge-inactive',
  [USER_STATUS.SUSPENDED]: 'badge-inactive',
  [USER_STATUS.EXPIRED]:   'badge-expired',
};

export const DOC_STATUS = {
  ACTIVE:    'active',
  SUSPENDED: 'suspended',
};

export const EMAIL_STATUS = {
  SENT:      'sent',
  DELIVERED: 'delivered',
  OPENED:    'opened',
  BOUNCED:   'bounced',
  FAILED:    'failed',
};
