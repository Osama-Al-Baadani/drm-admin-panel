import PageHeader from '../../../components/layout/PageHeader';
import StatsCard from '../../../components/charts/StatsCard';

const ReportsPage = () => {
  return (
    <div>
      <PageHeader title="التقارير والإحصائيات" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="إجمالي المشاهدات" value="12,345" icon="👁️" color="blue" />
        <StatsCard title="إجمالي التحميلات" value="3,456" icon="⬇️" color="green" />
        <StatsCard title="إجمالي الطباعة" value="789" icon="🖨️" color="purple" />
      </div>
    </div>
  );
};

export default ReportsPage;
