import { useNavigate } from 'react-router-dom';
import PageHeader from '../../../components/layout/PageHeader';
import UserForm from '../components/UserForm';
import { useDispatch } from 'react-redux';
import { createUser } from '../store/usersSlice';
import { useToast } from '../../../hooks/useToast';

const CreateUserPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showToast } = useToast();

  const handleSubmit = async (data) => {
    try {
      await dispatch(createUser(data)).unwrap();
      showToast('تم إضافة المستخدم بنجاح', 'success');
      navigate('/users');
    } catch (error) {
      showToast('حدث خطأ أثناء إضافة المستخدم', 'error');
    }
  };

  return (
    <div>
      <PageHeader
        title="إضافة مستخدم جديد"
        breadcrumbs={[
          { label: 'المستخدمون', path: '/users' },
          { label: 'إضافة جديد' }
        ]}
      />

      <div className="bg-white rounded-lg shadow p-6">
        <UserForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default CreateUserPage;
