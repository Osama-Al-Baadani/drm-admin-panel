import PageHeader from '../../../components/layout/PageHeader';
import DataTable from '../../../components/tables/DataTable';
import Badge from '../../../components/common/Badge';

const EmailManagementPage = () => {
  const columns = [
    { key: 'user', label: 'المستخدم' },
    { key: 'email', label: 'البريد' },
    {
      key: 'status',
      label: 'الحالة',
      render: (value) => <Badge status={value} />
    },
    { key: 'sent_at', label: 'تاريخ الإرسال' }
  ];

  return (
    <div>
      <PageHeader title="إدارة البريد الإلكتروني" />
      <DataTable columns={columns} data={[]} loading={false} />
    </div>
  );
};

export default EmailManagementPage;
