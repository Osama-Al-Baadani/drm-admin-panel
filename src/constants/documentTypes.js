export const DOC_TYPES = {
  VIDEO: 'video',
  PDF:   'pdf',
  AUDIO: 'audio',
  IMAGE: 'image',
};

export const DOC_TYPE_LABELS = {
  [DOC_TYPES.VIDEO]: 'Video',
  [DOC_TYPES.PDF]:   'PDF',
  [DOC_TYPES.AUDIO]: 'Audio',
  [DOC_TYPES.IMAGE]: 'Image',
};

export const DOC_TYPE_COLORS = {
  [DOC_TYPES.VIDEO]: 'bg-blue-100 text-blue-800',
  [DOC_TYPES.PDF]:   'bg-red-100 text-red-800',
  [DOC_TYPES.AUDIO]: 'bg-green-100 text-green-800',
  [DOC_TYPES.IMAGE]: 'bg-purple-100 text-purple-800',
};

export const EXPIRY_TYPES = {
  NEVER:      'never',
  DATE:       'date',
  DAYS:       'days',
  VIEWS:      'views',
};
