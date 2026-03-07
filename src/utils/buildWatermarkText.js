export const WATERMARK_VARIABLES = {
  USER_NAME: '[UserName]',
  EMAIL: '[Email]',
  DATE: '[Date]',
  TIME: '[Time]',
  COMPANY: '[Company]',
  USER_ID: '[UserID]',
  DEVICE_ID: '[DeviceID]'
};

export const buildWatermarkText = (template, userData) => {
  if (!template) return '';
  
  const now = new Date();
  const date = now.toLocaleDateString('ar-SA');
  const time = now.toLocaleTimeString('ar-SA');
  
  let text = template;
  
  text = text.replace(WATERMARK_VARIABLES.USER_NAME, userData.name || '');
  text = text.replace(WATERMARK_VARIABLES.EMAIL, userData.email || '');
  text = text.replace(WATERMARK_VARIABLES.DATE, date);
  text = text.replace(WATERMARK_VARIABLES.TIME, time);
  text = text.replace(WATERMARK_VARIABLES.COMPANY, userData.company || '');
  text = text.replace(WATERMARK_VARIABLES.USER_ID, userData.id || '');
  text = text.replace(WATERMARK_VARIABLES.DEVICE_ID, userData.deviceId || '');
  
  return text;
};

export const getWatermarkVariables = () => {
  return Object.values(WATERMARK_VARIABLES);
};
