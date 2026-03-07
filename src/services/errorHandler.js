export const handleError = (error) => {
  console.error('Error:', error);
  
  if (error.response) {
    // Server responded with error
    const { status, data } = error.response;
    
    switch (status) {
      case 400:
        return data.message || 'طلب غير صحيح';
      case 401:
        return 'غير مصرح لك بالوصول';
      case 403:
        return 'ليس لديك صلاحية لهذا الإجراء';
      case 404:
        return 'العنصر المطلوب غير موجود';
      case 422:
        return data.message || 'بيانات غير صحيحة';
      case 500:
        return 'خطأ في الخادم، يرجى المحاولة لاحقاً';
      default:
        return data.message || 'حدث خطأ غير متوقع';
    }
  } else if (error.request) {
    // Request was made but no response
    return 'لا يمكن الاتصال بالخادم';
  } else {
    // Something else happened
    return error.message || 'حدث خطأ غير متوقع';
  }
};

export const getErrorMessage = (error, defaultMessage = 'حدث خطأ') => {
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  if (error?.error) return error.error;
  return defaultMessage;
};

export const extractValidationErrors = (error) => {
  if (error?.response?.data?.errors) {
    return error.response.data.errors;
  }
  return {};
};
