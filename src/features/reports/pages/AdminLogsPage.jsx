import PageHeader from '../../../components/layout/PageHeader';
import DataTable from '../../../components/tables/DataTable';

const AdminLogsPage = () => {
  const columns = [
    { key: 'admin', label: 'المشرف' },
    { key: 'action', label: 'الإجراء' },
    { key: 'details', label: 'التفاصيل' },
    { key: 'timestamp', label: 'التوقيت' }
  ];

  return (
    <div>
      <PageHeader title="سجلات المشرفين" />
      <DataTable columns={columns} data={[]} loading={false} />
    </div>
  );
};

export default AdminLogsPage;
