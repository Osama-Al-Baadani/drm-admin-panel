export const USER_STATUS = {
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  EXPIRED: 'expired',
  PENDING: 'pending'
};

export const USER_STATUS_LABELS = {
  [USER_STATUS.ACTIVE]: 'نشط',
  [USER_STATUS.SUSPENDED]: 'معلق',
  [USER_STATUS.EXPIRED]: 'منتهي',
  [USER_STATUS.PENDING]: 'قيد الانتظار'
};

export const USER_STATUS_COLORS = {
  [USER_STATUS.ACTIVE]: 'green',
  [USER_STATUS.SUSPENDED]: 'red',
  [USER_STATUS.EXPIRED]: 'gray',
  [USER_STATUS.PENDING]: 'yellow'
};

export const DOCUMENT_STATUS = {
  ACTIVE: 'active',
  SUSPENDED: 'suspended',
  ARCHIVED: 'archived'
};

export const DOCUMENT_STATUS_LABELS = {
  [DOCUMENT_STATUS.ACTIVE]: 'نشط',
  [DOCUMENT_STATUS.SUSPENDED]: 'معلق',
  [DOCUMENT_STATUS.ARCHIVED]: 'مؤرشف'
};
