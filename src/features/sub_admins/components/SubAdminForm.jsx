import Input from '../../../components/common/Input';
import Select from '../../../components/common/Select';
import Button from '../../../components/common/Button';

const SubAdminForm = ({ onSubmit }) => {
  return (
    <form className="space-y-4">
      <Input label="الاسم" />
      <Input label="البريد الإلكتروني" type="email" />
      <Input label="كلمة المرور" type="password" />
      <Select label="الدور" options={[]} />
      <Button type="submit">حفظ</Button>
    </form>
  );
};

export default SubAdminForm;
