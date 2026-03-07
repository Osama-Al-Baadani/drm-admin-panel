import Input from '../../../components/common/Input';
import NumberInput from '../../../components/common/NumberInput';
import Button from '../../../components/common/Button';

const SMTPSettings = () => {
  return (
    <form className="space-y-4 bg-white rounded-lg shadow p-6">
      <Input label="خادم SMTP" />
      <NumberInput label="المنفذ" />
      <Input label="اسم المستخدم" />
      <Input label="كلمة المرور" type="password" />
      <Button type="submit">حفظ</Button>
    </form>
  );
};

export default SMTPSettings;
