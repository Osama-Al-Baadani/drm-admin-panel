export const DOCUMENT_TYPES = {
  VIDEO: 'video',
  PDF: 'pdf',
  AUDIO: 'audio',
  EBOOK: 'ebook'
};

export const DOCUMENT_TYPE_LABELS = {
  [DOCUMENT_TYPES.VIDEO]: 'فيديو',
  [DOCUMENT_TYPES.PDF]: 'PDF',
  [DOCUMENT_TYPES.AUDIO]: 'صوت',
  [DOCUMENT_TYPES.EBOOK]: 'كتاب إلكتروني'
};

export const DOCUMENT_TYPE_ICONS = {
  [DOCUMENT_TYPES.VIDEO]: '🎥',
  [DOCUMENT_TYPES.PDF]: '📄',
  [DOCUMENT_TYPES.AUDIO]: '🎵',
  [DOCUMENT_TYPES.EBOOK]: '📚'
};

export const DOCUMENT_MIME_TYPES = {
  [DOCUMENT_TYPES.VIDEO]: ['video/mp4', 'video/webm', 'video/ogg'],
  [DOCUMENT_TYPES.PDF]: ['application/pdf'],
  [DOCUMENT_TYPES.AUDIO]: ['audio/mpeg', 'audio/wav', 'audio/ogg'],
  [DOCUMENT_TYPES.EBOOK]: ['application/epub+zip', 'application/x-mobipocket-ebook']
};
