import DataTable from '../../../components/tables/DataTable';

const SubAdminTable = ({ data, loading }) => {
  const columns = [
    { key: 'name', label: 'الاسم' },
    { key: 'email', label: 'البريد' },
    { key: 'role', label: 'الدور' }
  ];

  return <DataTable columns={columns} data={data} loading={loading} />;
};

export default SubAdminTable;
