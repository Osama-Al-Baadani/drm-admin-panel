import { formatDate, formatDateTime } from './formatDate';

export const buildWatermarkText = (template, user) => {
  const now = new Date();
  return template
    .replace(/\[UserName\]/g,  user?.name  || '')
    .replace(/\[Email\]/g,     user?.email || '')
    .replace(/\[Date\]/g,      formatDate(now))
    .replace(/\[Time\]/g,      formatDateTime(now))
    .replace(/\[Company\]/g,   user?.company || '')
    .replace(/\[IP\]/g,        user?.ip || '');
};

export const WATERMARK_VARIABLES = [
  { label: 'User Name',  value: '[UserName]' },
  { label: 'Email',      value: '[Email]' },
  { label: 'Date',       value: '[Date]' },
  { label: 'Time',       value: '[Time]' },
  { label: 'Company',    value: '[Company]' },
  { label: 'IP Address', value: '[IP]' },
];

export default buildWatermarkText;
