import { format, formatDistanceToNow, isValid, parseISO } from 'date-fns';
import appConfig from '@/config/app.config';

export const formatDate = (date, fmt = appConfig.dateFormat) => {
  if (!date) return '—';
  const d = typeof date === 'string' ? parseISO(date) : date;
  return isValid(d) ? format(d, fmt) : '—';
};

export const formatDateTime = (date) =>
  formatDate(date, appConfig.dateTimeFormat);

export const timeAgo = (date) => {
  if (!date) return '—';
  const d = typeof date === 'string' ? parseISO(date) : date;
  return isValid(d) ? formatDistanceToNow(d, { addSuffix: true }) : '—';
};

export const isExpired = (date) => {
  if (!date) return false;
  const d = typeof date === 'string' ? parseISO(date) : date;
  return isValid(d) && d < new Date();
};

export default formatDate;
