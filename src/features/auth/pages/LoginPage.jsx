import { useNavigate, Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useToast } from '../../../hooks/useToast';
import { useState } from 'react';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (data) => {
    try {
      setLoading(true);
      await dispatch(login(data)).unwrap();
      showToast('تم تسجيل الدخول بنجاح', 'success');
      navigate('/');
    } catch (error) {
      showToast('فشل تسجيل الدخول، تحقق من بياناتك', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleLogin} loading={loading} />
      <div className="mt-4 text-center">
        <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
          نسيت كلمة المرور؟
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
