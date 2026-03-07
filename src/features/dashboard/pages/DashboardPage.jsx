import PageHeader from '../../../components/layout/PageHeader';
import StatsCard from '../../../components/charts/StatsCard';
import PieChart from '../../../components/charts/PieChart';
import BarChart from '../../../components/charts/BarChart';

const DashboardPage = () => {
  const stats = [
    { title: 'إجمالي المستخدمين', value: '1,234', icon: '👥', color: 'blue', change: 12 },
    { title: 'إجمالي الملفات', value: '567', icon: '📁', color: 'green', change: 8 },
    { title: 'إجمالي المشاهدات', value: '45.2K', icon: '👁️', color: 'purple', change: -3 },
    { title: 'المستخدمون النشطون', value: '892', icon: '✅', color: 'yellow', change: 5 }
  ];

  const statusData = [
    { label: 'نشط', value: 892, color: 'bg-green-500' },
    { label: 'معلق', value: 124, color: 'bg-red-500' },
    { label: 'منتهي', value: 218, color: 'bg-gray-500' }
  ];

  return (
    <div>
      <PageHeader title="لوحة التحكم" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PieChart data={statusData} title="حالة المستخدمين" />
        <BarChart data={statusData} title="إحصائيات المستخدمين" />
      </div>
    </div>
  );
};

export default DashboardPage;
