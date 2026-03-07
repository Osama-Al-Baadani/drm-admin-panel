import { Link } from 'react-router-dom';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import { useToast } from '../../../hooks/useToast';
import { useState } from 'react';
import authService from '../services/authService';

const ForgotPasswordPage = () => {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      await authService.forgotPassword(data.email);
      showToast('تم إرسال رابط إعادة التعيين إلى بريدك', 'success');
    } catch (error) {
      showToast('حدث خطأ، برجاء المحاولة لاحقاً', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ForgotPasswordForm onSubmit={handleSubmit} loading={loading} />
      <div className="mt-4 text-center">
        <Link to="/login" className="text-sm text-blue-600 hover:text-blue-800">
          العودة لتسجيل الدخول
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
