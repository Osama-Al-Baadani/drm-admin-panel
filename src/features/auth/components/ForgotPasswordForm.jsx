import { useState } from 'react';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import { validateEmail } from '../../../utils/validateForm';

const ForgotPasswordForm = ({ onSubmit, loading }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('البريد الإلكتروني غير صحيح');
      return;
    }
    onSubmit({ email });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="البريد الإلكتروني"
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError('');
        }}
        error={error}
        disabled={loading}
      />

      <Button type="submit" fullWidth disabled={loading}>
        {loading ? 'جاري الإرسال...' : 'إرسال رابط إعادة التعيين'}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;
