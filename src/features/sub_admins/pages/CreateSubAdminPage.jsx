import PageHeader from '../../../components/layout/PageHeader';
import SubAdminForm from '../components/SubAdminForm';

const CreateSubAdminPage = () => {
  return (
    <div>
      <PageHeader title="إضافة مشرف جديد" />
      <div className="bg-white rounded-lg shadow p-6">
        <SubAdminForm />
      </div>
    </div>
  );
};

export default CreateSubAdminPage;
