import ToggleSwitch from '../../../components/common/ToggleSwitch';
import NumberInput from '../../../components/common/NumberInput';
import Button from '../../../components/common/Button';

const SecuritySettings = () => {
  return (
    <form className="space-y-4 bg-white rounded-lg shadow p-6">
      <ToggleSwitch label="تفعيل المصادقة الثنائية" />
      <NumberInput label="مدة الجلسة (دقيقة)" />
      <ToggleSwitch label="تفعيل تقييد IP" />
      <Button type="submit">حفظ</Button>
    </form>
  );
};

export default SecuritySettings;
