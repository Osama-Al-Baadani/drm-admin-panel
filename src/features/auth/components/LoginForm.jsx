import { useState } from 'react';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import { validateEmail, validateRequired } from '../../../utils/validateForm';

const LoginForm = ({ onSubmit, loading }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!validateEmail(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }
    if (!validateRequired(formData.password)) {
      newErrors.password = 'كلمة المرور مطلوبة';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="البريد الإلكتروني"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
        error={errors.email}
        disabled={loading}
      />

      <Input
        label="كلمة المرور"
        type="password"
        value={formData.password}
        onChange={(e) => handleChange('password', e.target.value)}
        error={errors.password}
        disabled={loading}
      />

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
      </Button>
    </form>
  );
};

export default LoginForm;
