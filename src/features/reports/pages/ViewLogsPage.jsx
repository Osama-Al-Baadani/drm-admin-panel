import PageHeader from '../../../components/layout/PageHeader';
import DataTable from '../../../components/tables/DataTable';
import ReportFilters from '../components/ReportFilters';

const ViewLogsPage = () => {
  const columns = [
    { key: 'user', label: 'المستخدم' },
    { key: 'document', label: 'الملف' },
    { key: 'action', label: 'الإجراء' },
    { key: 'timestamp', label: 'التوقيت' }
  ];

  return (
    <div>
      <PageHeader title="سجلات المشاهدة" />
      <ReportFilters />
      <DataTable columns={columns} data={[]} loading={false} />
    </div>
  );
};

export default ViewLogsPage;
