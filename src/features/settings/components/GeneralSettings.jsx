import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import Button from '../../../components/common/Button';

const GeneralSettings = () => {
  return (
    <form className="space-y-4 bg-white rounded-lg shadow p-6">
      <Input label="اسم المنصة" />
      <Input label="بريد الدعم" type="email" />
      <Select label="اللغة" options={[]} />
      <Select label="التوقيت الزمني" options={[]} />
      <Button type="submit">حفظ</Button>
    </form>
  );
};

export default GeneralSettings;
