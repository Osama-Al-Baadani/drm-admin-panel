export const required = (value) =>
  value !== undefined && value !== null && value !== '' ? null : 'This field is required';

export const email = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? null : 'Invalid email address';

export const minLength = (min) => (value) =>
  value && value.length >= min ? null : `Minimum ${min} characters`;

export const maxLength = (max) => (value) =>
  !value || value.length <= max ? null : `Maximum ${max} characters`;

export const numeric = (value) =>
  !isNaN(Number(value)) ? null : 'Must be a number';

export const positiveNumber = (value) =>
  Number(value) > 0 ? null : 'Must be greater than 0';

export const validateFields = (rules, data) => {
  const errors = {};
  Object.entries(rules).forEach(([field, validators]) => {
    const validators_ = Array.isArray(validators) ? validators : [validators];
    for (const validator of validators_) {
      const error = validator(data[field]);
      if (error) { errors[field] = error; break; }
    }
  });
  return errors;
};

export default validateFields;
