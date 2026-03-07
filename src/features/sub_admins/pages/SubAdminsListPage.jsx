import { useNavigate } from 'react-router-dom';
import PageHeader from '../../../components/layout/PageHeader';
import DataTable from '../../../components/tables/DataTable';
import Badge from '../../../components/common/Badge';

const SubAdminsListPage = () => {
  const navigate = useNavigate();

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'الاسم' },
    { key: 'email', label: 'البريد' },
    { key: 'role', label: 'الدور' },
    {
      key: 'status',
      label: 'الحالة',
      render: (value) => <Badge status={value} />
    }
  ];

  return (
    <div>
      <PageHeader
        title="إدارة المشرفين"
        action={{
          label: 'إضافة مشرف',
          onClick: () => navigate('/sub-admins/create')
        }}
      />
      <DataTable columns={columns} data={[]} loading={false} />
    </div>
  );
};

export default SubAdminsListPage;
