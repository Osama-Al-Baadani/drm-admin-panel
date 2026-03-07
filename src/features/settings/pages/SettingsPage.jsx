import PageHeader from '../../../components/layout/PageHeader';
import Tabs from '../../../components/common/Tabs';
import GeneralSettings from '../components/GeneralSettings';
import SMTPSettings from '../components/SMTPSettings';
import SecuritySettings from '../components/SecuritySettings';

const SettingsPage = () => {
  const tabs = [
    { id: 'general', label: 'عام', content: <GeneralSettings /> },
    { id: 'smtp', label: 'البريد', content: <SMTPSettings /> },
    { id: 'security', label: 'الأمان', content: <SecuritySettings /> }
  ];

  return (
    <div>
      <PageHeader title="إعدادات النظام" />
      <Tabs tabs={tabs} />
    </div>
  );
};

export default SettingsPage;
