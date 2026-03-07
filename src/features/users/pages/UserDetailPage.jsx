import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../../components/layout/PageHeader';
import Tabs from '../../../components/common/Tabs';
import UserDevicesList from '../components/UserDevicesList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserById } from '../store/usersSlice';

const UserDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedUser, loading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  if (loading || !selectedUser) return <div>جاري التحميل...</div>;

  const tabs = [
    {
      id: 'info',
      label: 'المعلومات الأساسية',
      content: (
        <div className="bg-white rounded-lg shadow p-6">
          <dl className="grid grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500">الاسم</dt>
              <dd className="mt-1 text-sm text-gray-900">{selectedUser.name}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">البريد</dt>
              <dd className="mt-1 text-sm text-gray-900">{selectedUser.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">الحالة</dt>
              <dd className="mt-1">{selectedUser.status}</dd>
            </div>
          </dl>
        </div>
      )
    },
    {
      id: 'devices',
      label: 'الأجهزة',
      content: <UserDevicesList userId={id} />
    }
  ];

  return (
    <div>
      <PageHeader
        title={`تفاصيل المستخدم: ${selectedUser.name}`}
        breadcrumbs={[
          { label: 'المستخدمون', path: '/users' },
          { label: selectedUser.name }
        ]}
      />

      <Tabs tabs={tabs} />
    </div>
  );
};

export default UserDetailPage;
