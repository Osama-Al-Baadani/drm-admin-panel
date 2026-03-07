import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../../components/layout/PageHeader';
import DataTable from '../../../components/tables/DataTable';
import UserFilters from '../components/UserFilters';
import BulkActions from '../../../components/tables/BulkActions';
import TableActions from '../../../components/tables/TableActions';
import Badge from '../../../components/common/Badge';
import { ROUTES } from '../../../constants/routes';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store/usersSlice';

const UsersListPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { list, loading, pagination } = useSelector(state => state.users);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'الاسم', sortable: true },
    { key: 'email', label: 'البريد', sortable: true },
    {
      key: 'status',
      label: 'الحالة',
      render: (value) => <Badge status={value} />
    },
    { key: 'devices_count', label: 'الأجهزة' },
    {
      key: 'actions',
      label: 'الإجراءات',
      render: (_, row) => (
        <TableActions
          actions={[
            { label: 'عرض', onClick: (data) => navigate(`/users/${data.id}`) },
            { label: 'تعديل', onClick: (data) => navigate(`/users/${data.id}/edit`), variant: 'outline' }
          ]}
          data={row}
        />
      )
    }
  ];

  const bulkActions = [
    { label: 'تعليق', icon: '🚫', onClick: (ids) => console.log('Suspend', ids), variant: 'outline' },
    { label: 'حذف', icon: '🗑️', onClick: (ids) => console.log('Delete', ids), variant: 'danger' }
  ];

  return (
    <div>
      <PageHeader
        title="إدارة المستخدمين"
        action={{
          label: 'إضافة مستخدم',
          icon: '➕',
          onClick: () => navigate(ROUTES.USER_CREATE)
        }}
      />

      <UserFilters />
      <BulkActions
        selectedItems={selectedUsers}
        actions={bulkActions}
        onClearSelection={() => setSelectedUsers([])}
      />

      <DataTable
        columns={columns}
        data={list}
        loading={loading}
        pagination={pagination}
      />
    </div>
  );
};

export default UsersListPage;
