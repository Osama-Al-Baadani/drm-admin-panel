import DatePicker from '../../../components/common/DatePicker';
import Select from '../../../components/common/Select';
import Button from '../../../components/common/Button';

const ReportFilters = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <DatePicker label="من تاريخ" />
        <DatePicker label="إلى تاريخ" />
        <Select label="المستخدم" options={[]} />
        <Button>بحث</Button>
      </div>
    </div>
  );
};

export default ReportFilters;
